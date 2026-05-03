---
name: blog-post
description: >-
  Creates portfolio blog posts: Markdown under assets/static/blog/posts/, a
  matching entry in index.json (slug, title, date, tags, excerpt), and a sitemap
  URL. Uses post.html?slug=. Use when publishing a blog post, adding drafts, or
  when the user runs the new-blog-post command.
---

# Blog post

Site behavior is implemented in **`assets/static/js/blog.js`**: titles from **`index.json`**, body from **`<slug>.md`**. The markdown file’s **first `#` heading line is stripped** when rendered—duplicate the title there so the `.md` file reads well in editors.

## Drafting prose first

Use the **`blog-author`** skill (`.cursor/skills/blog-author/SKILL.md`) or run **Command `draft-blog-post`** to generate expert body copy plus suggested slug/tags/excerpt, then paste into the files below (or rerun this checklist after drafting).

## Checklist

1. **`slug`** — lowercase, hyphenated, alphanumeric; must equal **`<slug>.md`** basename and **`slug`** in JSON.
2. **`assets/static/blog/posts/<slug>.md`** — start with `# Title` (same as **`title`** in JSON), then body (paragraphs, lists, code fences match existing posts).
3. **`assets/static/blog/posts/index.json`** — prepend a new object (newest-first is default unless the repo already uses another rule):

```json
{
  "slug": "example-post",
  "title": "Example Post Title",
  "date": "2026-05-02",
  "tags": ["tag-one", "reliability"],
  "excerpt": "One concise sentence shown on blog/index.html listing."
}
```

- **`date`**: ISO **`YYYY-MM-DD`**.
- **`tags`**: array of lowercase strings (`blog.js` joins with commas).
- **`excerpt`**: plain text only (rendered inner HTML is not parsed from excerpt).

4. **`assets/static/xml/sitemap.xml`** — add a **`url`** entry after the **`/blog/`** entry pattern:

```xml
  <url>
    <loc>https://www.richolaniyan.com/blog/post.html?slug=<slug></loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
```

5. Valid JSON: trailing commas forbidden; commas between array elements required.

## After edits

Listing lives at **`/blog/`**, post URL **`https://www.richolaniyan.com/blog/post.html?slug=<slug>`**. Deploy pushes **`main`** (S3 + CloudFront)—no **`?v=`** bump usually needed solely for `.md`/JSON/XML.
