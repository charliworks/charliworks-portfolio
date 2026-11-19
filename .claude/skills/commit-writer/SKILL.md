---
name: commit-writer
description: Write git commit messages and PR titles that follow charliworks Conventional Commits rules. Use when committing, squash-merging, or naming a PR.
---

# commit-writer

Write commit messages that follow charliworks rules (source: `charliworks-guides/workflow/commit-messages.md`).

## Steps

1. Look at the staged diff (`git diff --staged`). If nothing is staged, ask what to include.
2. If the diff contains more than one logical change, suggest splitting it into separate commits.
3. Pick the type: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.
4. Pick an optional scope naming the area (`auth`, `ui`, `api`, `db`, `deps`, or a feature name).
5. Write the summary: imperative mood, lowercase, no trailing period, **≤ 72 characters** including the `type(scope):` prefix.
6. Add a body only if the *why* isn't obvious. Wrap at 72 characters.
7. For breaking changes: add `!` after the type/scope and a `BREAKING CHANGE:` footer.
8. Add `Closes #N` if an issue is known.
9. Show the message and wait for approval before committing.

## Examples

```text
feat(reminders): notify 7 days before service is due
fix(auth): keep session after app resume
refactor(api)!: rename /vehicles to /garage

BREAKING CHANGE: clients must call /garage.
Closes #42
```

## Never

- Vague summaries ("update", "fix stuff", "WIP")
- Past tense ("added")
- Secrets or personal data in the message
