const { toMatchInlineSnapshot } = require("jest-snapshot");
const { toMatchCaseInsensitiveInlineSnapshot } = require("./matchers");

expect.extend({
  toMatchTrimmedInlineSnapshot(received) {
    return toMatchInlineSnapshot.call(this, received.substring(0, 10));
  },
  toMatchCaseInsensitiveInlineSnapshot,
});

test("custom internal toMatchInlineSnapshot", () => {
  expect("extra long string oh my gerd").toMatchTrimmedInlineSnapshot(
    `"extra longe"`
  );
});

test("custom external toMatchInlineSnapshot", () => {
  expect(
    "Some text with uppercase letters."
  ).toMatchCaseInsensitiveInlineSnapshot(`"some text with uppercase letters."`);
});

test("toMatchInlineSnapshot", () => {
  expect("extra long string oh my gerd").toMatchInlineSnapshot(`"extra longe"`);
});
