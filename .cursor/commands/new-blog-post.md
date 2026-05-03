---
name: new-blog-post
description: Add a Markdown blog post, index.json entry, and sitemap URL for this portfolio site.
---

# New blog post

Follow the **`blog-post`** skill in `.cursor/skills/blog-post/SKILL.md` end-to-end.

If the user wants the **draft written for them** first (infra/platform expert voice), run **`draft-blog-post`** (uses **`blog-author`**) until the Markdown looks right, **then** do the checklist below.

**From the user, collect (or propose sensible defaults for):**

- **slug** (filename base, kebab-case)
- **title** (display string)
- **date** (`YYYY-MM-DD`)
- **tags** (short lowercase labels)
- **excerpt** (card blurb)
- Outline or draft body (or draft the body from topic)

Then:

1. Add **`assets/static/blog/posts/<slug>.md`** with `# <title>` on line 1, then narrative Markdown.
2. Insert the metadata object at the **top** of the **`assets/static/blog/posts/index.json`** array (unless the user specifies another ordering).
3. Add the matching **`url`** block to **`assets/static/xml/sitemap.xml`** using `https://www.richolaniyan.com/blog/post.html?slug=<slug>`.

Summarize paths changed and remind that **`slug`** filename and JSON field must stay identical.
