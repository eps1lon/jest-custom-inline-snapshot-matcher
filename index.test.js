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
  toMatchTrimmedInlineSnapshot(received) {
    return toMatchInlineSnapshot.call(this, received.substring(0, 10));
  },
  toMatchCaseInsensitiveInlineSnapshot,
  async toMatchAsyncInlineSnapshot(received) {
    await sleep(1000);
    return toMatchInlineSnapshot.call(this, received);
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
  await expect("text").toMatchCaseInsensitiveInlineSnapshot(`"text"`);
});

test("toMatchInlineSnapshot", () => {
  expect("extra long string oh my gerd").toMatchInlineSnapshot(`"extra longe"`);
});
