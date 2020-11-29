const { toMatchInlineSnapshot } = require("jest-snapshot");
const { toMatchCaseInsensitiveInlineSnapshot } = require("./matchers");

function sleep(timeoutMs) {
  return Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeoutMs);
  });
}

expect.extend({
  toMatchTrimmedInlineSnapshot(received, inlineSnapshot) {
    return toMatchInlineSnapshot.call(
      this,
      received.substring(0, 10),
      inlineSnapshot
    );
  },
  toMatchCaseInsensitiveInlineSnapshot,
  async toMatchAsyncInlineSnapshot(received, inlineSnapshot) {
    await sleep(1000);
    return toMatchInlineSnapshot.call(this, received, inlineSnapshot);
  },
});

test("custom internal toMatchInlineSnapshot", () => {
  expect("extra long string oh my gerd").toMatchTrimmedInlineSnapshot(
    `"extra longe"`
  );
});

test("custom external toMatchInlineSnapshot", () => {
  expect(
    "Some text with uppercase letters."
  ).toMatchCaseInsensitiveInlineSnapshot(`"Some text with uppercase letters."`);
});

test("custom async toMatchInlineSnapshot", async () => {
  await expect("text").toMatchCaseInsensitiveInlineSnapshot(`"Text"`);
});

test("toMatchInlineSnapshot", () => {
  expect("extra long string oh my gerd").toMatchInlineSnapshot(`"extra longe"`);
});
