# Portfolio & GitHub Review — Recruiter Analysis

> Source: AI recruiter-style review (Big Tech lens)
> Date: 2026-08-20
> Status: Reference document — points to tackle incrementally

---

## Recruiter Scores

| Area | Score |
|------|-------|
| Proyectos reales | 9/10 |
| Impacto demostrado | 9/10 |
| Variedad tecnológica | 9/10 |
| Backend / sistemas | 8.5/10 |
| Frontend | 8/10 |
| Bases de datos | 8.5/10 |
| Ingeniería de software | 8/10 |
| Liderazgo técnico | 8.5/10 |
| Presentación del portafolio | 8/10 |
| Evidencia pública en GitHub | 6.5/10 |
| Preparación para entrevistas Big Tech | 6/10 |
| Potencial para junior/new-grad | 9/10 |

**Veredicto: Sí → Interview pile (Technical Screen)**

---

## Strengths Identified

1. **Impacto real** — systems used by hundreds (800+ employees, 200+ students, 70 farmers, 100+ orders/week)
2. **Resolución con restricciones** — worked with legacy DB (hundreds of tables, 12-year-old architecture)
3. **Liderazgo técnico** — led teams of 20 devs, code review, branch protection, CI/CD
4. **Stack interessant** — Go, PostGIS, Python, PostgreSQL, multiple platforms
5. **Estudiante mientras construye** — graduation May 2027, already shipping production systems

---

## Action Items (Priority Order)

### P0 — High Impact

- [x] **1. Positioning: Backend / Full-Stack Engineer**
  - Core: Go · Python · PostgreSQL · TypeScript · React
  - Secondary: Angular · Java · PHP · SQL Server · React Native · Docker · Linux
  - Remove "Go, PostGIS, React Native" as the only identity — hierarchize

- [x] **2. UMI: Show as "In Development"**
  - Add status badge: `Status: In Development`
  - Current focus: Backend architecture, geospatial DB design, driver matching
  - Planned: React Native passenger and driver apps
  - Present honestly — learning PostGIS through building UMI

- [x] **3. Experience Section**
  - Add explicit "Experience" section (not just projects)
  - SIEst / Universidad Tecnológica de la Costa — 2025–Present
  - Bullet points: Built, Automated, Integrated, Led, Reduced, Deployed

- [x] **4. Project Order by Recruiter Priority**
  1. UMI (system design potential, Go/PostGIS)
  2. SIEst / Attendance Checker (800+ employees, automation story)
  3. Estadías (legacy + production + stakeholder analysis)
  4. Rassa Jala (leadership + CI/CD + database design)
  5. Nakawe (AI + accessibility + PWA)
  6. Comisiones (complementary)
  7. Aprender Fantástico (hackathon proof)

### P1 — GitHub & Evidence

- [x] **5. GitHub READMEs — Professional Standard**
  - Each repo needs: architecture, screenshots, demo, technical decisions, how to run, tests, CI/CD, metrics, known issues
  - Homogenize quality across repos

- [x] **6. Nakawe — Synthetic Data Disclaimer**
  - Add: "Synthetic demo data — no real patient information is stored or processed"

- [ ] **7. Visible Testing**
  - Show test directories, CI badges, test commands
  - Convert "TDD" claim into evidence

- [ ] **8. Engineering Metrics (when available)**
  - API response times, query performance, test coverage, Docker image size, deployment time
  - Don't invent — measure what exists

### P2 — Depth Signals

- [ ] **9. UMI Architecture Section**
  - System design diagram (React Native → Go → PostgreSQL/PostGIS + Redis later)
  - API docs, database schema, concurrency model, state machine
  - "Proof" over "claim"

- [ ] **10. Algorithms & Data Structures**
  - 15–25 well-documented problems (not a LeetCode graveyard)
  - Connect to real problems (e.g., nearest drivers → spatial indexing → O(log n))

- [ ] **11. Reduce Tech Breadth in Hero**
  - Hero should project: "Backend/full-stack engineer who moves across the stack"
  - Not: "I know 15 technologies"

### P3 — Behavioral & Narrative

- [ ] **12. Objective Language**
  - "Winner — Best Internship Project 2025, Universidad Tecnológica de la Costa"
  - "Built a functional MVP tested by elementary-school students during the event"
  - Replace subjective claims with evidence

- [ ] **13. Evolution Narrative**
  - Show progression: "Started building systems → solved real problems → worked with legacy → automated processes → led teams → now building distributed/geospatial systems"

- [ ] **14. Education Framing**
  - Not "I'm studying" but "I'm studying AND already building production systems"

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

### Self-Check Questions (for every AI-generated piece)

1. What problem does it solve?
2. Why did we implement it this way?
3. What alternatives exist?
4. What can go wrong?
5. How would I verify it works?

---

## Key Quotes to Remember

> "Tu experiencia práctica es desproporcionadamente buena para alguien que todavía está estudiando."

> "No vendas que ya sabes PostGIS. Vende que lo estás aprendiendo porque necesitas resolver este problema."

> "Conviértete en alguien capaz de decir: 'No sabía esto. Tuve que aprenderlo. Entendí por qué era necesario, cómo funciona y lo implementé.'"

> "Tu mayor reto ya no es tener proyectos. Es conseguir que un reclutador vea en 30 segundos el nivel que realmente tienes."
