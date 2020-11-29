const { toMatchInlineSnapshot } = require("jest-snapshot");

function toMatchCaseInsensitiveInlineSnapshot(received, inlineSnapshot) {
  return toMatchInlineSnapshot.call(this, received.toLowerCase(), inlineSnapshot);
}

module.exports = { toMatchCaseInsensitiveInlineSnapshot };
