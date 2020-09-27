const { toMatchInlineSnapshot } = require("jest-snapshot");

function toMatchCaseInsensitiveInlineSnapshot(received) {
  return toMatchInlineSnapshot.call(this, received.toLowerCase());
}

module.exports = { toMatchCaseInsensitiveInlineSnapshot };
