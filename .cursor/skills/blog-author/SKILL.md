---
name: blog-author
description: >-
  Authors long-form Markdown blog drafts for Richard Olaniyan’s engineering blog:
  senior infrastructure voice—cloud/Kubernetes/platform/SRE/IaC/AI infra—with
  structured sections and pragmatic trade-offs matching existing posts. Use when
  drafting post body copy, outlining before publish, refining rough notes, or
  when running the draft-blog-post command.
---

# Blog authoring (portfolio niche)

Assume the reader is serious about **delivery, reliability, and scale**: practicing platform/SRE/DevOps/cloud engineers and adjacent leads—not executive fluff.

## Domain authority (stay in-lane)

Write as a practitioner who owns **production outcomes**. Cover topics such as:

- Multi-cloud / major clouds (especially **AWS, GCP**) and pragmatic **Azure** when relevant  
- **Kubernetes** operations—capacity, upgrades, workloads, incidents—not tutorial “hello cluster” filler  
- **Platform engineering**, internal developer platforms, guardrails versus bottlenecks  
- **Infrastructure as Code** (Terraform/Pulumi/GitOps mental models), pipelines, drift, review culture  
- **Observability, SLOs/incidents, reliability culture**, blameless postmortems, operational load  
- **AI/ML or data infra** angle when germane—serving stacks, quotas, GPUs, pipelines, governance  

Do **not** dilute voice with unrelated stacks or vague “digital transformation.” If the user’s topic is adjacent, explicitly frame it as infra/platform impact.

## Voice and stance

- **Clear and direct.** Short paragraphs, concrete nouns—services, primitives, workflows—not buzzwords.
- **Comparisons and scopes** work well when concepts are overloaded (culture vs toolchain vs lifecycle); show *where boundaries sit*.
- **Trade-offs**, not zealotry. Name costs: operational complexity, lock-in, coupling, reviewer burden, flake risk.
- **Outcome-oriented** bullets where it fits reliability, latency, blast radius, time-to-patch, DX—without invented metrics unless the user supplied numbers.

## Structural pattern (match current blog)

Prefer the style of **`ci-cd-vs-devops.md`**:

1. **`# Title` on line 1** — one line only (site strips it when rendering; still needed for readability in-repo).
2. Opening **120–280 words**: problem/context, thesis, why it matters in production/platform work.
3. Body: **`## 1)`, `## 2)`…** numbered main sections plus **`###` subheads** as needed.
4. Bullets often use **`**Bold lead:**` explanation** rhythm for scannability (see existing posts).
5. Close with **`## Final takeaway`** (or equivalent) capturing the central distinction or decision heuristic in ~2–4 sentences.

Technical depth scales with reader level gathered from the user; default **senior IC**.

## Credibility hygiene

- No fake case studies or statistics. Use **patterns** (“teams often…” / “a common failure mode is…”), not invented percentages.
- If something is subjective, flag it (**In practice**, **your mileage**) instead of asserting universals.
- Code blocks/sparing **yaml/hcl/bash** snippets only when they sharpen a point—as many as justified, not showroom length.

## Output contract

Produce **submission-ready Markdown** for `assets/static/blog/posts/*.md`:

- Exactly one `#` title line first; **`##`** and below for hierarchy (do not repeat `#` for section titles).
- Tight excerpts are **post-publish** (`index.json`), but when helpful end with **brief metadata hints** separated from the prose: suggested **slug**, **tags** (short, lowercase/hyphenated), **one-sentence excerpt**—either in a fenced `plaintext` note or labeled block so they can paste into scaffolding.
