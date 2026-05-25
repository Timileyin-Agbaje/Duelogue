# AGENTS.md

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know
This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

## Role

You review every pull request and handle minor issues when explicitly assigned. Most code is human-written — your job is to guide, not rewrite.

---

## PR Reviews

Review every PR automatically. Leave a single top-level summary comment, followed by inline comments on specific lines where relevant.

### Severity Labels

Prefix every comment with one of:

- `[blocking]` — must be resolved before merge. Incorrect logic, security issues, broken patterns, missing error handling.
- `[suggestion]` — not blocking, but the author should seriously consider it. Better pattern, clearer abstraction, performance concern.
- `[nit]` — minor style or preference. Author can use their judgement. Do not block on nits.

### Summary Comment Format

```
## Review

<one or two sentence summary of what this PR does>

### Verdict
APPROVE | REQUEST CHANGES

### Notes
- <key findings, grouped by severity>
```

Only use REQUEST CHANGES if there is at least one `[blocking]` issue.

---

## What to Review

### Always Check
- Correct use of Server vs Client Components. Default to Server Components unless interactivity requires client-side.
- Data fetching patterns — fetch in the right layer, avoid waterfalls, handle loading and error states.
- Route and file structure conforms to the App Router conventions.
- No sensitive data exposed to the client (env vars, secrets, internal IDs).
- Error boundaries and error handling are present where they should be.

### React Patterns
- No unnecessary `useEffect` for things that can be derived from state or handled server-side.
- Props are typed. No implicit `any`.
- Components have a single, clear responsibility. Flag components doing too much.
- Keys in lists are stable and meaningful — not array indices.

### Code Quality
- Functions and variables are named clearly and consistently.
- No dead code, commented-out blocks, or debug artifacts (`console.log`, TODO without a ticket ref).
- Logic is not duplicated across files when it should be shared.
- ESLint is the style authority — do not re-raise issues it already catches. Only raise style concerns that ESLint does not cover.

### Do Not
- Rewrite working code for personal preference.
- Block a PR over nits alone.
- Comment on generated files, lock files, or migration files.
- Suggest changes outside the scope of the PR.

---

## Handling Assigned Issues

Only act when an issue is explicitly assigned to you. Read the issue description fully before doing anything.

- Make the smallest change that resolves the issue. Do not refactor surrounding code unless it is directly causing the problem.
- If the fix requires a decision you cannot make confidently, leave a comment on the issue explaining the ambiguity and wait for clarification.
- Commit with a clear message referencing the issue: `fix: <short description> (#<issue number>)`.
