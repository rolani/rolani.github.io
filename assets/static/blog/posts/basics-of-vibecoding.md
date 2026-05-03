# The basics of VibeCoding

“VibeCoding” gets mocked online and adopted quietly in real teams. The caricature is a developer mashing “make it work” into a chat window until something compiles. The reality, for people who care about **blast radius** and **operational load**, is narrower and more useful: **high-velocity iteration with an AI pair that favors local coherence over global design**—which is exactly why platform and SRE folks should have a crisp mental model of what it optimizes for, and what it quietly breaks.

If you own **how changes land in production**, the mistake is treating VibeCoding as either “junior slop” or “10× magic.” It is a **workflow**—fast feedback, broad surface area, weak memory of your org’s constraints unless you supply them. Your job is not to ban it; it is to **shape the runway** so velocity doesn’t convert into pager debt.

## 1) What “VibeCoding” usually means in practice

**Loop-first delivery:** You ship small slices, accept rough edges, and refactor when reality objects—often with the model proposing the next diff. That resembles **spike-and-stabilize** more than “waterfall with a chatbot.”

**Implicit context:** The model guesses from prompts and file state. It does **not** know your **change management**, **on-call assumptions**, or **cost model** unless you encode them in prompts, templates, or automated checks.

**Tooling as steering:** Effective VibeCoding is less about “being good at prompts” and more about **tight local feedback** (tests, linters, plans, policy-as-code) so wrong guesses die cheaply.

**In practice**, teams that say they “VibeCode” often mean: *we accept messy intermediate states in exchange for speed, and we rely on verification to surface what the model missed.*

## 2) Where it actually helps platform and infra work

**Prototypes and one-offs:** Glue scripts, one-time migrations, exploratory Terraform for a sandbox account—work where **correctness is “good enough for learning”** and you will throw most of it away.

**Boilerplate and ceremony:** Module stubs, pipeline YAML skeletons, repetitive CRD wiring—anything **pattern-heavy** where the risk is boredom and inconsistency, not subtle distributed failure.

**Onboarding and docs-as-code:** Turning tribal runbooks into structured Markdown, or generating **checklists** from existing playbooks, with a human still accountable for truth.

**Narrow blast radius:** Changes that are **locally testable** (unit tests, `terraform plan` in a safe workspace, hermetic builds) benefit from fast iteration because the verification boundary is clear.

**Trade-off:** The same workflow **punishes** work where “almost right” is **indistinguishable from right** until 2 a.m.—auth, networking, stateful data paths, quota and IAM edges—or where rollback is expensive.

## 3) Failure modes that infrastructure owners should expect

- **Wide footprint, shallow review:** A model can touch many files in one session. Without a forcing function (small PRs, CODEOWNERS, plan-only stages), reviewers see **motion** instead of **intent**.

- **Happy-path IaC:** Terraform and friends look fine until you hit **dependency edges**: state layout, imports, drift, cross-module coupling. VibeCoding often stops at **“plan is green in dev.”**

- **Security theater as coverage:** “We use secret scanning” does not catch **logical** leaks—overbroad IAM, public-by-default buckets, debug endpoints promoted to “temporary” production paths.

- **Ops assumptions baked into code:** Retry storms, missing timeouts, silent partial failure—these are **system properties** that local tests miss unless you model them deliberately.

- **Knowledge half-written:** Generated runbooks *sound* authoritative. If nobody exercises them, you have **documentation debt** with high confidence formatting and unknown truth value.

None of this is unique to AI—but **velocity multipliers** make each failure mode arrive **sooner** in the quarter.

## 4) Guardrails that preserve speed without fantasy

- **Shrink the verification gap:** Prefer environments and tests where “wrong” shows up in **minutes**, not after deploy: hermetic pipelines, policy checks, contract tests for APIs your platform exposes.

- **Make defaults boring:** Golden paths (scaffolds, modules, approved patterns) are how you VibeCode **inside** guardrails instead of against them. The creativity goes into the product problem, not **reinventing** VPC layout for the forty-first time.

- **Require explicit blast-radius fields:** Even lightweight templates—“data mutation? yes/no,” “rollback?”, “feature flag?”—force the human to **name** risk. The model can fill the checklist; **the owner** still signs it.

- **Treat generated configs like vendor code:** Pin versions, diff plans, separate **bootstrap** from **day-2** changes. If you would not merge a human’s 2k-line Terraform PR without staged review, don’t merge the model’s either.

- **Operational acceptance is a gate:** For anything customer- or data-path-adjacent, tie “done” to **observability** and **runbook drills**, not “tests pass.” Your mileage varies by maturity, but **skipping this** is how VibeCoding becomes VibePaging.

## Final takeaway

VibeCoding is **fast local iteration with an amnesiac expert**: powerful when feedback is tight and blast radius is bounded, expensive when “looks fine” hides **distributed systems truth**. For platform teams, the winning move is not moral panic—it is **narrowing the runway** (golden paths, policy, staged review, operational definition of done) so speed converts into **merged outcomes** you can still operate at two in the morning.
