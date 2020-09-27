const { toMatchInlineSnapshot } = require("jest-snapshot");

expect.extend({
  toMatchTrimmedInlineSnapshot(received) {
    return toMatchInlineSnapshot.call(this, received.substring(0, 10));
  },
});

it("stores only 10 characters", () => {
  expect("extra long string oh my gerd").toMatchTrimmedInlineSnapshot(
    `"extra long"`
  );
});
