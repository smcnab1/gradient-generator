# Dependency maintenance

Reviewed on November 5, 2026, for the next update.

## Minimatch

The current lockfile contained minimatch 10.2.6 through oclif, ESLint and TypeScript ESLint. [GHSA-g3hv-75wg-m249](https://github.com/advisories/GHSA-g3hv-75wg-m249) affects versions `>=7.0.0 <11.0.1` when a caller processes an untrusted glob with `optimizationLevel >= 2`.

The version-scoped override `minimatch@^10` selects 11.0.4 for those consumers. It leaves filelist's minimatch 5.1.9 dependency unchanged; that version is outside this advisory's affected range. No extension command directly imports minimatch, and no inspected tooling caller enables optimization level 2. This fixes vulnerable dependency presence without claiming a demonstrated exploit in an extension command.

The dependency regression tests exercise the reported pattern-amplification case with a process timeout, check default and explicit expansion limits, and preserve ordinary CLI/lint matching and filelist inclusion/exclusion behavior. Version 10.2.6 timed out on the amplification input before the update. Run `npm run check` and `npm audit` before merging. Development checks use the repository's Node 26.12.1.

Remove the override when the owning packages support a patched minimatch release themselves, then rerun these checks. Do not replace it with an override for every minimatch version.

## Open GitHub alerts

The 25 alerts returned by GitHub refer to older versions already absent from the current main-branch lockfile:

| Package         | Open alert numbers                 | Current lockfile                                    |
| --------------- | ---------------------------------- | --------------------------------------------------- |
| brace-expansion | 19, 26, 28, 31, 32, 35, 36, 37, 38 | 2.1.7 and 5.0.12, above the reported patched floors |
| js-yaml         | 2, 24, 25, 30, 34                  | Absent                                              |
| picomatch       | 17, 18, 21                         | 4.0.7, above the reported patched floors            |
| flatted         | 16                                 | 3.4.4, above the reported patched floor             |
| minimatch       | 6, 7, 9, 10, 11, 12, 14            | 5.1.9 and 11.0.4 after this update                  |

The older minimatch alerts concern versions 3, 5 and 9 and have patched floors below the retained 5.1.9 or replacement 11.0.4. The separate minimatch 10 advisory above was found by the current npm audit, although it was absent from this GitHub alert list.

PR #48 proposes js-yaml 4.1.1, which still falls below the later reported fixes. There is no js-yaml dependency left to update, so this PR should not be applied to the current tree.

These findings describe the branch's dependency tree. No GitHub alert has been dismissed or PR merged or closed. GitHub's open alert state still needs reconciliation; branch-only fixes do not clear default-branch alerts.
