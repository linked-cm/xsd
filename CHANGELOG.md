# @\_linked/xsd

## 1.0.4

### Patch Changes

- [#2](https://github.com/linked-cm/xsd/pull/2) [`7aa0db9`](https://github.com/linked-cm/xsd/commit/7aa0db9df42d79a995a07a2b5bb0aa4a58a28b97) Thanks [@flyon](https://github.com/flyon)! - Switch to explicit per-step build pipeline so silent build failures no longer ship empty tarballs. The previous `yarn linked build` wrapper was failing silently in CI and dropping all compiled `.js` files from the published tarball.

## 1.0.3

### Patch Changes

- [`ad197b0`](https://github.com/linked-cm/xsd/commit/ad197b07d376047e698f01066c20deaab989b71d) - First release under `@_linked/xsd`. Package was previously published as `lincd-xsd`; content is the same, namespace migrated to the `@_linked` scope.
