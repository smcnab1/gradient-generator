# Development notes

`main` is the standalone source and backup for future extension work. Version 1.2.0 synchronises the accepted extension from [Raycast PR #33066](https://github.com/raycast/extensions/pull/33066), using [`extensions/gradient-generator/` at `1404d70d2c814a8c00a6776521cd0eeab292e2d9`](https://github.com/raycast/extensions/tree/1404d70d2c814a8c00a6776521cd0eeab292e2d9/extensions/gradient-generator).

Use Node 26.12.1 or newer (`.nvmrc` selects 26.12.1), npm, macOS and Raycast:

```bash
npm ci --ignore-scripts
npm run check
npm run dev
```

`npm run check` builds the distribution in `dist/`, generates Raycast TypeScript declarations, checks types, runs regression tests and lints the extension. `npm run test:swiftui` additionally compiles and renders eleven SwiftUI samples offscreen; it requires the macOS Swift command-line tools. Generated declarations and build output are ignored by Git.

The historical `raycast-extension` and `release/v1.2.0` branches are retained. The old unpublished Presets & CSS Import proposal is not the shipped 1.2.0 scope. See the [changelog](../CHANGELOG.md) for shipped behavior, the [roadmap](../ROADMAP.md) for future proposals, and the [release checklist](../RELEASE_CHECKLIST.md) for the release process.

### Dependency advisory

The accepted dependency graph includes the moderate [minimatch advisory GHSA-g3hv-75wg-m249](https://github.com/advisories/GHSA-g3hv-75wg-m249) through Raycast CLI and lint tooling. No forced dependency override is applied here; this source sync keeps the accepted dependency versions. Audit findings and distribution contents are checked during release validation.

[Back to the README](../README.md).
