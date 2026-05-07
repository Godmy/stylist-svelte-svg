# CODEX-006 Public Library Exclusion List

## Date

- 2026-05-07

## Decision

The following `src/lib` domains are excluded from the public npm library surface:

- `src/lib/social`
- `src/lib/server`
- `src/lib/science`
- `src/lib/playground`
- `src/lib/marketing`
- `src/lib/management`
- `src/lib/geo`
- `src/lib/commerce`
- `src/lib/development`
- `src/lib/domain`

## Where This Is Enforced

Primary enforcement is in `package.json` via `files` exclusions for the matching `dist/<domain>/**` folders:

- `dist/social/**`
- `dist/server/**`
- `dist/science/**`
- `dist/playground/**`
- `dist/marketing/**`
- `dist/management/**`
- `dist/geo/**`
- `dist/commerce/**`
- `dist/development/**`
- `dist/domain/**`

## Why This Location

- it changes npm publication without requiring structural edits in `src/lib`
- it does not break the existing indexation rules
- it is explicit and easy to audit during release verification

## Important Scope Note

- this decision excludes these domains from the published npm package
- it does not delete them from the repository
- it does not remove them from local `dist` generation by itself
