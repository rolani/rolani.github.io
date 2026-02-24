[![Site Deployment Status](https://github.com/rolani/rolani.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/rolani/rolani.github.io/actions/workflows/deploy.yml)

## Overview

This repository powers `www.richolaniyan.com`, a static personal portfolio and blog.

The site includes:

- A modular homepage assembled from HTML partials
- A curated projects section loaded from JSON
- A markdown-managed blog scaffold
- SEO metadata, `robots.txt`, and sitemap support

## Structure

- `index.html` - homepage shell and SEO metadata
- `assets/static/partials/` - reusable homepage sections
- `assets/static/css/style.css` - design system and responsive styles
- `assets/static/json/repos.json` - curated project entries
- `assets/static/js/include.js` - partial loader and theme toggle
- `assets/static/js/repo.js` - project card renderer
- `blog/index.html` - blog listing page
- `blog/post.html` - single blog post page
- `assets/static/js/blog.js` - blog list/post renderer
- `assets/static/blog/posts/index.json` - post metadata index
- `assets/static/blog/posts/*.md` - markdown blog posts
- `assets/static/xml/sitemap.xml` - sitemap
- `robots.txt` - crawler directives

## Managing Projects

Update `assets/static/json/repos.json` and keep each object in this format:

```json
{
  "name": "repo-name",
  "url": "https://github.com/rolani/repo-name",
  "description": "Outcome-focused summary",
  "category": "Infrastructure as Code",
  "tech": "Terraform, AWS, Kubernetes",
  "date": "2025-10-04"
}
```

Guidelines:

- Keep projects sorted by relevance and recency
- Focus descriptions on impact and outcomes
- Use ISO date format (`YYYY-MM-DD`)

## Managing Blog Posts

1. Add a markdown file in `assets/static/blog/posts/`:
   - Example: `my-new-post.md`
2. Add post metadata to `assets/static/blog/posts/index.json`:

```json
{
  "slug": "my-new-post",
  "title": "My New Post",
  "date": "2026-02-24",
  "tags": ["cloud", "platform-engineering"],
  "excerpt": "Short summary shown on blog index."
}
```

3. Commit and merge to `main` to deploy.

Notes:

- The `slug` must match the markdown filename (without `.md`)
- Posts are rendered at `/blog/post.html?slug=<slug>`

## Deployment (CI/CD)

GitHub Actions deploys the site to AWS S3 + CloudFront on each merge to `main`.

Required repository secrets:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

See `.github/workflows/deploy.yml` for deployment details.


[![Site Deployment Status](https://github.com/rolani/rolani.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/rolani/rolani.github.io/actions/workflows/deploy.yml)

## About

My personal portfolio site.

## Deployment (CI/CD)

This site is automatically deployed to AWS S3 and CloudFront using GitHub Actions.

### How it works

- On every merge to the `main` branch, a GitHub Actions workflow runs to:
	1. Sync the site files to the S3 bucket.
	2. Invalidate the CloudFront distribution cache to ensure updates are live.

### AWS Setup

You must add the following repository secrets in GitHub:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

These credentials must have permissions for S3 sync and CloudFront invalidation.

### Workflow file

See `.github/workflows/deploy.yml` for the full workflow configuration.

---
