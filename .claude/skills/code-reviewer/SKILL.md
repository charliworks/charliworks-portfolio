---
name: code-reviewer
description: Review a branch or PR diff against the charliworks Definition of Done and engineering guides. Use for self-review before opening or merging a PR.
---

# code-reviewer

Review changes against charliworks standards (source: `charliworks-guides/00-start-here/definition-of-done.md` and `engineering/`). The findings are input for the human reviewer. Never approve or merge.

## Steps

1. Get the diff: `git diff main...HEAD` (or the PR diff).
2. Read the linked issue or spec if available, so you can check the change does what was asked.
3. Check, in this order:
   1. **Correctness**: logic errors, edge cases, error handling, race conditions
   2. **Security and privacy**: secrets, injection, auth checks, server-side validation, personal data logged or exposed
   3. **Tests**: new behavior and bug fixes covered
   4. **Definition of Done**: docs, `.env.example`, changelog, ADR if a decision was made
   5. **UI** (if touched): states (empty, loading, error), accessibility basics, uses design tokens
   6. **Style and naming**: only what linters miss
4. Report findings grouped by prefix: `blocker:`, `suggestion:`, `nit:`, `question:`. Each one includes the file, line, the problem, and a suggested fix.
5. End with a short summary: what's solid, what must change before merging, and what you could not verify (e.g. "didn't run the tests").

## Never

- Approve, merge, or push
- Claim tests pass without running them
- Pad the review with praise or invented issues
