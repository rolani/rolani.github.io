---
name: portfolio-workflows
description: >-
  Updates the Richard Olaniyan static portfolio (www.richolaniyan.com): homepage
  partials, repos.json projects, blog posts, SEO/meta, asset cache versioning, and
  S3/CloudFront deploy implications. Use when editing index.html, partials under
  assets/static/partials/, CSS/JS under assets/static/, repos.json, blog posts,
  sitemap/robots, or GitHub workflow files under .github/workflows/.
---

# Portfolio workflows

## Content or layout (homepage)

1. Prefer changing **assets/static/partials/** over duplicating markup in **index.html** unless the shell or SEO tags need edits.
2. After changing **style.css** or **repo.js**, bump **`?v=`** on those `<link>` / `<script>` tags in **index.html** (and elsewhere if duplicated).
3. If public-facing wording changes, sync **`<title>`**, **meta description**, **og:** / **twitter:** tags, and **JSON-LD** in **index.html** where relevant.

## Projects list

1. Prefer hand-editing **assets/static/json/repos.json** using the README’s object shape *unless* regenerating via script is explicitly requested.
2. If **`scripts/repo.py`** is used, output path currently writes **`repos.json`** at the cwd — align with **`assets/static/json/repos.json`** before committing if that script path is intentional for your run.

## Blog post

- **Expert draft:** **`blog-author`** skill or **Command `draft-blog-post`** (body + suggested slug/tags/excerpt).
- **Wire into site:** **`blog-post`** skill or **Command `new-blog-post`** (files + **`index.json`** + **`sitemap.xml`**).

## Deploy awareness

Push to **`main`** runs **CD** (S3 sync + CloudFront invalidation). Pull requests targeting **`main`** run **CI** (`.github/workflows/ci.yml`). No local build step — invalidation clears paths, but **`?v=`** bumps reduce stale asset risk for hashed routes.
