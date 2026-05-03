---
name: draft-blog-post
description: Draft expert-level blog Markdown for Richard Olaniyan’s infrastructure/platform niche before publishing files.
---

# Draft blog post (content author)

Follow the **`blog-author`** skill at `.cursor/skills/blog-author/SKILL.md` for voice, niche boundaries, structure, and credibility rules.

## What to ask first (minimal)

If the user did not specify, clarify:

- **Topic or working title**
- **Thesis**: one sentence—“what mistaken belief or friction are we correcting?”
- **Reader level**: junior / mid / **senior IC** (default) / manager
- **Length hint**: ~800–1200 “short insight” vs ~1500–2500 “deeper”—or sections they want numbered
- **Must-include bullets** or links when the user provides them—do not invent URLs or vendor claims

## Produce

1. **Full Markdown** starting with a single **`#`** line—the full post title verbatim—followed by the body per **`blog-author`** (`## 1)`, `###`, bullets, **`## Final takeaway`**).
2. After the prose, append a **Publishing hints** stub (YAML or bullets) supplying:
   - `suggested_slug` (kebab-case)
   - `suggested_tags` (array-like list)
   - `excerpt` (≤ ~220 chars, plain text—fits blog cards)

Do **not** edit `index.json` or `sitemap.xml` in this flow unless the user explicitly asks—that is the **`new-blog-post`** command + **`blog-post`** skill.

## Continuation prompts

Offer to shorten, deepen one section only, adjust tone (“more cynical about vendors,” “more platform-DX”), or run **`new-blog-post`** once slug/title/date are chosen.
