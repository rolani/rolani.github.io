
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
