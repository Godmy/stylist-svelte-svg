# CODEX-005 Publish Surface Cleanup

## Date

- 2026-05-07

## Scope

- release preparation for `stylist-svelte@1.0.1`
- publish artifact cleanup
- release metadata cleanup

## Changes

- updated `package.json` `files` rules to exclude:
  - `dist/commerce/**`
  - `dist/development/**`
  - `dist/domain/**`
  - `dist/geo/**`
  - `dist/management/**`
  - `dist/marketing/**`
  - `dist/playground/**`
  - `dist/science/**`
  - `dist/server/**`
  - `dist/social/**`
  - `dist/**/*.json`
  - `dist/**/*.story.*`
  - `dist/**/story-*.svelte`
  - `dist/**/story-*.svelte.d.ts`
- replaced Windows-hostile `clean` script with a cross-platform Node-based removal command
- rewrote `README.md` into release-facing package documentation
- added `CHANGELOG.md` for `1.0.1`

## Verification

- ran `npm pack --dry-run`
- result before cleanup:
  - about `2.3 MB`
  - `14699` files
- result after cleanup:
  - about `2.0 MB`
  - `13555` files

## Notes

- explicit publish-exclusion domain list is now stored in `package.json`
- story/demo artifacts were present in the tarball before this cleanup
- generated JSON metadata still exists in `dist`, but is now excluded from npm publication
- the tarball is still large, but the most obvious non-runtime package noise has been removed

## Next Candidates

- verify whether the remaining `dist` surface matches the intended public API
- decide whether more runtime assets should be excluded from publication
- prepare final release notes between `1.0.0` and `1.0.1`
