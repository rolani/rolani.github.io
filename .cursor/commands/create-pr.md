---
name: create-pr
description: Open a GitHub pull request to main with a filled body matching the repo PR template.
---

# Create pull request

Open a PR against **`main`** using **GitHub CLI** (`gh`), with a body that follows **`.github/pull_request_template.md`** (same headings: **Summary**, **Changes**, **Testing**, **Notes**).

## Before creating

1. Confirm the user is on the correct branch (not `main` unless they explicitly want a PR from it—usually feature branch).
2. Ensure commits are pushed: `git push -u origin HEAD` (if upstream missing or not pushed).
3. Inspect the diff vs `main`: `git fetch origin main` (if needed), then `git log origin/main..HEAD --oneline` and/or `git diff origin/main...HEAD` so the body matches what is actually in the PR.

## Body content

1. Copy the **structure** from **`.github/pull_request_template.md`**.
2. **Fill every section** with real bullets or short prose from the diff (no empty `-` placeholders).
3. **Remove** HTML `<!-- ... -->` comments from the final body so the description is clean in GitHub.
4. Write the completed markdown to **`.github/pr-body.local.md`** (this path is gitignored).

## Create the PR

Run from the repo root, with a concise imperative **title** derived from the change:

```bash
gh pr create --base main --title "YOUR_TITLE" --body-file .github/pr-body.local.md
```

Use `--draft` if the user wants a draft PR:

```bash
gh pr create --base main --draft --title "YOUR_TITLE" --body-file .github/pr-body.local.md
```

After a successful create, print the PR URL. Optionally delete **`.github/pr-body.local.md`** or leave it for the user to discard (it will not be committed if untouched besides the ignored path).

If `gh` errors (auth, no commits, merge conflicts), explain and do not claim the PR was opened.
