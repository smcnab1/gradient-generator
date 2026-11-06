# Gradient Generator engineering instructions

## Workflow

1. Identify this extension, the task and authorised scope; inspect current branch/HEAD, status, code/tests and existing PR/review before editing. Preserve unrelated changes.
2. Read the [shared playbook](../raycast-docs/playbook/README.md), the applicable stage, [best practices](../raycast-docs/playbook/standards/best-practices.md), [quality gates](../raycast-docs/playbook/standards/quality-gates.md) and the [extension guide](../raycast-docs/playbook/extensions/gradient-generator.md). Use the README routing table to load **all** affected standards and linked API guidance before implementation.
3. If repositories are not siblings, use an explicit `RAYCAST_PLAYBOOK_DIR` supplied in the session (the directory containing the playbook README, not the repository root; a navigation hint, not an application setting) or locate `raycast-docs/playbook/README.md` in the workspace. Do not depend on an absolute machine path or assume a hosted URL. If unavailable, retain the safeguards below and locate guidance before a change requiring it.
4. Recheck current official Raycast docs through `https://developers.raycast.com/llms.txt` for submission, new APIs, compatibility changes and unresolved conflicts. Separate mandatory platform/Store rules, official recommendations, project standards and conditional requirements. AI development remains deferred because the owner lacks the required access. Teams/private publishing is deferred. Windows expansion requires separately scoped compatibility and native testing evidence.
5. Implement only the requested scope using existing architecture. Verify the exact dirty candidate, real scripts/locked tools and relevant failure paths. Report results, unavailable native/account/device levels and outstanding gates without claiming unperformed checks.

Stage route: 1 for the baseline; 2 for implementation; 3 for automated checks; 4 for native testing; 5–6 for Store/submission work; 7 for review corrections; 8 for accepted-source reconciliation. Use every affected stage; a read-only investigation does not authorise implementation or delivery.

## Delivery and enduring safeguards

- Do not push, open/modify PRs, merge, publish, tag/release, deploy, grant OAuth or send real device commands without appropriate task authorisation. Prepare concrete local evidence before requesting a delivery decision when needed.
- Submit authorised updates through `smcnab1/extensions`, one upstream PR per extension update; corrections update that PR. Use the [submission-fork preflight](../raycast-docs/playbook/audit/chatgpt-project-export.md#submission-fork-preflight) to explicitly load these instructions when working in the fork. Do not copy these instructions into Store submissions solely to distribute them.
- Never use `agent/` or `codex/` in branch names or commits. Use Conventional Commits and the user's configured Git identity; do not impersonate another identity.
- Keep command/preference/storage identifiers stable pending an authorised migration. Never replace valid saved data with partial/invalid external data, silently reset corrupt storage, or clear a failed form/draft. Cancel obsolete reads and prevent stale completions/writes using the owning implementation.
- Keep credentials/private content out of logs, toasts, screenshots, tests and PR evidence. Use supported preferences/OAuth APIs. No external analytics or direct Keychain access.
- Use native Raycast components/navigation, truthful loading/errors and predictable keyboard actions. Build success is not native distribution, upgrade, live-account or physical-device acceptance. Merge, Store publication and standalone release are distinct.
- Shared playbook prose uses British English; submitted interface/Store copy follows Raycast's US English guidance. Preserve existing standalone document conventions unless the task changes them.

## Gradient safeguards

- Verify actual generated output; keep preview, PNG, CSS, Tailwind, SwiftUI and supported SVG geometry consistent. Conic SVG is unavailable: do not fabricate a fallback or claim all formats support it.
- Preserve `saved-gradients` and existing valid legacy arrays. Corrupt data must block writes with recovery information. Keep selected-entry snapshot/conflict checks and label-collision confirmation; a local queue is not cross-process atomicity.
- Validate hex colours, gradient types/stops, angle, dimensions/DPR/pixel bounds. Test nonsquare geometry/orientation and actual decoded PNG pixels; compile/render generated consumer code as relevant.
- Preserve staged file publication, deliberate replacement confirmation, failure recovery and safe target validation. Failed generation/write/cancel must retain the prior file and user input. Do not claim universal filesystem atomicity.
- Check pending-save versus Random/Add/edit races and stale image results. Current local protections do not establish every cross-command or pending-preview race is solved.
- Existing validation: `npm run check`; separate `npm run test:swiftui` where compatible macOS Swift tooling exists. Inspect scripts and `.nvmrc`/engines first. Current project requires Node >=26.12.1; do not use a lower host and claim support.
- Native distribution, clipboard, actual output fidelity, real upgrade and accessibility remain distinct gates. Preserve published changelog entries exactly; new submission heading is `## [Change title] - {PR_MERGE_DATE}`.
