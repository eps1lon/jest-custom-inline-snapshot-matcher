const { toMatchInlineSnapshot } = require("jest-snapshot");

expect.extend({
  toMatchTrimmedInlineSnapshot(received) {
    return toMatchInlineSnapshot.call(this, received.substring(0, 10));
  },
});

test("custom toMatchInlineSnapshot", () => {
  expect("extra long string oh my gerd").toMatchTrimmedInlineSnapshot(
    `"extra long"`
  );
});

test("toMatchInlineSnapshot", () => {
  expect("extra long string oh my gerd").toMatchInlineSnapshot(`"extra long"`);
});
