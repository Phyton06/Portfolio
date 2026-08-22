# Portfolio & GitHub Review — Recruiter Analysis v2

> Source: Full re-evaluation from scratch (Big Tech pipeline lens)
> Date: 2026-08-21
> Status: Active — tackle before applying

---

## Executive Verdict

> **"This candidate deserves an initial interview."**

Not "hired." But **"I want to talk to him before discarding."**

Profile has evolved from *"student with school projects"* to *"soon-to-graduate engineer with professional experience, production systems, leadership and technically interesting personal projects."*

**Final recruiter verdict: 🟢 PASS → Technical/Recruiter Screen**

---

## Recruiter Scores (v2)

| Area | Score | Notes |
|------|-------|-------|
| Portfolio visual | **9/10** | |
| Professional presentation | **8.8/10** | |
| Real experience | **9/10** | |
| Projects | **9/10** | |
| Backend | **8.5/10** | |
| Frontend | **8.5/10** | |
| Databases | **9/10** | |
| Leadership | **9/10** | |
| Product thinking | **9/10** | |
| AI | **8/10** | |
| Git/GitHub | **7/10** | Profile needs README |
| Testing | **5.5/10** | ⚠️ Main weakness |
| DevOps/Cloud | **6.5/10** | |
| Open source | **3/10** | |
| Algorithms/CS | Not evaluable via portfolio | |
| English | Not directly evaluable | |
| Potential | **9.5/10** | |

---

## Strengths (unchanged)

1. **Real impact** — 800+ employees, 200+ students, 70 farmers, 100+ orders/week
2. **Constraint resolution** — legacy DB (hundreds of tables, 12-year architecture)
3. **Technical leadership** — led 20 devs, code review, branch protection, CI/CD
4. **Interesting stack** — Go, PostGIS, Python, PostgreSQL, multiple platforms
5. **Student while building** — graduation May 2027, already shipping production systems
6. **Trade-off thinking** — can articulate WHY for every technology choice

---

## Project Evaluation (recruiter view)

| Project | Value | What it demonstrates |
|---------|-------|---------------------|
| **UMI** | ⭐⭐⭐⭐⭐ | Backend, architecture, geospatial, product |
| **SIESt** | ⭐⭐⭐⭐⭐ | Production, legacy, real users |
| **Bolsa Laboral** | ⭐⭐⭐⭐⭐ | Leadership, AI, full-stack |
| **Attendance** | ⭐⭐⭐⭐⭐ | Automation, reliability, impact |
| **Rassa Jala** | ⭐⭐⭐⭐½ | Leadership, Git, CI/CD |
| **Nakawe** | ⭐⭐⭐⭐ | AI, UX, accessibility |
| **Per Diem** | ⭐⭐⭐⭐ | Business automation |
| **Aprender es fantástico** | ⭐⭐⭐ | Hackathon, leadership, UX |

**No project needs to be removed.** That's a good signal.

---

## Action Items — Priority Order

### 🔴 P0 — Before Applying (Blockers)

- [x] **1. GitHub Profile README**
  - Create profile README with: name, role, tech stack, highlights (800+ users, 3rd place hackathon, best internship, led 20 devs)
  - Change pinned repo order: UMI → Bolsa → Nakawe → Portfolio

- [x] **2. Fix UMIAdmin repo description**
  - Current: "UMI ride-hailing admin panel — Flutter Web"
  - Change to: "UMI ride-hailing admin panel — React + Vite + Tailwind"
  - 30-second fix, avoids unnecessary questions

- [x] **3. Automated tests in at least UMI or Bolsa Laboral**
  - 5–10 real tests, not 200 artificial ones
  - Example: matchScore(), candidateService, jobService
  - Changes perception from "hackathon project" to "hackathon project where developer cares about maintainability"

- [x] **4. Nakawe — synthetic data disclaimer**
  - Add explicit: "All patient data in this repository is synthetic and fictional. No real patient information is used or stored."
  - Spanish version too

- [x] **5. Nakawe — secrets documentation**
  - Document: key is never committed, repo only has config template, production uses server-side secret manager/env vars

- [x] **6. TDD/SDD evidence**
  - Either add tests that prove TDD claim, or remove TDD from hero headline
  - No keyword without evidence

### 🟡 P1 — High Impact (Same Week)

- [ ] **7. UMI technical README**
  - Architecture, data flow, authentication, API contract, state machine, DB model, real-time strategy, failure handling
  - Trip lifecycle diagram: REQUESTED → SEARCHING → ACCEPTED → DRIVER_ARRIVING → IN_PROGRESS → COMPLETED
  - Excellent interview material

- [ ] **8. Stack hierarchy in hero**
  - Primary: Go · Python · TypeScript · PostgreSQL
  - Secondary: Angular · React · PHP · SQL Server
  - Familiar: React Native · Flutter · Supabase · Docker
  - Makes profile look deeper, less scattered

- [ ] **9. Remove "Designed for Big Tech recruitment" from Portfolio README**
  - Replace with: "Professional software engineering portfolio built with Astro..."
  - Let the product demonstrate quality, don't claim it

- [ ] **10. Clarify AI usage in Bolsa Laboral**
  - Add: "Development: AI-assisted development was used for implementation acceleration; architecture, database design, feature decisions, integration and validation were performed by the team."
  - Protects against "did you write this yourself?" questions

- [ ] **11. Experience section — clarify "led"**
  - Current: "Led agile teams of up to 20 developers"
  - Change to: "Led agile development teams of up to 20 contributors, coordinating task distribution, code review, branch protection and weekly sprint planning"
  - Makes "led" concrete, not ambiguous

### 🟢 P2 — Optional Enhancements

- [ ] **12. Dockerize UMI**
- [ ] **13. Add CI for tests**
- [ ] **14. Add coverage badge**
- [ ] **15. Architecture diagrams**

---

## Interview Strategy (Reference)

| Topic | Use Project |
|-------|-------------|
| Architecture (modern) | UMI |
| Real engineering | SIESt |
| Leadership + AI + Product | Bolsa Laboral |
| Automation + Reliability | Attendance |

**This is a very balanced portfolio.**

---

## Key Quotes to Remember

> "Your problem is no longer 'I lack projects.' Your problems are much more specific."

> "Your biggest improvement opportunity is no longer building. It's demonstrating depth, testing, fundamentals and communication about what you already built."

> "Don't wait to finish PostGIS. Don't wait to finish React Native. Don't wait to graduate. Don't wait for English certification. APPLY."

> "The correct message is not 'I know everything.' It's 'I have already built and operated real systems, I understand the fundamentals, and I'm capable of learning quickly.'"

> "25 years old + student + professional experience + complex projects + leadership + hunger to learn. That's exactly the profile for New Grad / Early Career / Internship-to-FTE."

---

## What NOT to Do

❌ Don't create 15 more projects
❌ Don't learn 10 frameworks
❌ Don't become Kubernetes expert
❌ Don't get 15 certifications
❌ Don't wait for "perfect" to apply

**Your four pinned repos are enough. Make them excellent, not many.**

---

## UMI Learning Path (Reference)

```
Stage 1: PostgreSQL (tables, relations, indexes, constraints, transactions, EXPLAIN)
Stage 2: PostGIS (geometry, geography, SRID, POINT, distance, ST_DWithin, spatial indexes)
Stage 3: Go (handlers, interfaces, structs, errors, goroutines, channels, context, DB connection)
Stage 4: React Native (apps)
Stage 5: Integration (full stack)
Stage 6: Redis (when there's a real reason)
```
