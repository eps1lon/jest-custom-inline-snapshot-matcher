1. `yarn`
2. `yarn test`

`toMatchInlineSnapshot` only fails on a snapshot mismatch when used directly.
If used inside a custom matcher the test will pass and `jest` simply updates the inline snapshots.
