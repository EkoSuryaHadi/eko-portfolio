markdown

# PRD — Product Requirements Document
## Eko Suryahadi Professional Portfolio Website

| Field | Value |
|---|---|
| **Document Version** | v1.0 — Initial Release |
| **Author** | Eko Suryahadi |
| **Date** | April 2026 |
| **Status** | Draft — For Review |
| **Classification** | Confidential |

**Contact:** e.suryahadi@gmail.com · linkedin.com/in/ekosuryahadi · github.com/EkoSuryaHadi

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Objectives & Success Metrics](#2-objectives--success-metrics)
3. [Target Audience](#3-target-audience)
4. [Site Architecture & Information Architecture](#4-site-architecture--information-architecture)
5. [Page Specifications](#5-page-specifications)
6. [Design System](#6-design-system)
7. [Technical Stack Recommendation](#7-technical-stack-recommendation)
8. [SEO Strategy](#8-seo-strategy)
9. [Functional Requirements](#9-functional-requirements)
10. [Content Requirements](#10-content-requirements)
11. [Development Phases & Timeline](#11-development-phases--timeline)
12. [Risks & Mitigations](#12-risks--mitigations)
13. [Appendix](#13-appendix)

---

## 1. Executive Summary

This document defines the complete product requirements for Eko Suryahadi's professional portfolio website — a high-performance, visually distinctive web presence designed to attract freelance and consulting clients in the Oil & Gas, EPC, and digital analytics space.

The portfolio website serves as the primary digital touchpoint for client acquisition, showcasing a unique combination of Power BI/data engineering expertise, AI/ML capabilities, and production-ready application development — all grounded in deep O&G domain knowledge.

> **Goal:** Convert qualified visitors into project inquiries within 60 seconds of landing on the site — through clear positioning, concrete project evidence, and frictionless contact.

### 1.1 Product Vision

A portfolio website that positions Eko as the go-to data & AI specialist for Oil & Gas and EPC companies seeking freelance expertise — differentiating through domain depth, proven deliverables, and quantified business impact rather than generic developer credentials.

### 1.2 Key Differentiators vs. Generic Portfolio Sites

| Generic Portfolio | Eko's Portfolio |
|---|---|
| Lists technologies used | Shows quantified business outcomes ($750K–$1.2M ROI, 72-hr early detection) |
| Static project screenshots | Interactive project deep-dives with live demo links |
| Generic "Contact Me" CTA | Industry-specific CTAs (e.g. "Discuss your O&G analytics challenge") |
| One-size-fits-all design | Dark industrial aesthetic tailored to O&G/EPC client expectations |
| Chronological project list | Curated, impact-first presentation with case study framing |

---

## 2. Objectives & Success Metrics

### 2.1 Business Objectives

1. Generate qualified freelance project inquiries from O&G / EPC companies
2. Establish credibility as an AI + data specialist (not just a Power BI developer)
3. Serve as a living portfolio that is easy to update when new projects are completed
4. Support outbound sales — shareable link that speaks for itself before a call
5. Rank organically for relevant searches (Power BI developer Indonesia, O&G data analyst freelance)

### 2.2 Success Metrics

| Metric | Target | Timeframe |
|---|---|---|
| Time-on-page (avg) | > 2 minutes | 3 months post-launch |
| Bounce rate | < 50% | 3 months post-launch |
| Contact form submissions | > 3/month | 6 months post-launch |
| Mobile usability score | > 90 (Lighthouse) | At launch |
| Page load time | < 2 seconds | At launch |
| SEO score | > 85 (Lighthouse) | 3 months post-launch |

---

## 3. Target Audience

### 3.1 Primary Personas

#### Persona A — O&G Asset Manager / Operations Director

| Field | Detail |
|---|---|
| **Role** | Asset Manager, Operations Director, VP Engineering at O&G operator or EPC firm |
| **Pain Points** | Decisions made on gut feel due to lack of real-time data; expensive enterprise tools (Halliburton, AVEVA) that take 12+ months to implement |
| **What They Need** | Proof that a freelancer can deliver enterprise-grade analytics at a fraction of the cost, fast |
| **Decision Trigger** | Sees Production Intelligence Dashboard or ARIA — immediately recognises the domain expertise |

#### Persona B — PMO Director / Project Control Manager (EPC)

| Field | Detail |
|---|---|
| **Role** | PMO Director, Project Control Manager, Planning Manager at EPC or infrastructure company |
| **Pain Points** | Schedule slippage detected too late; fragmented risk registers in Excel; no early warning system |
| **What They Need** | A system that predicts problems before they become delays — with clear ROI justification for management |
| **Decision Trigger** | Reads PMO Intelligence System case study — sees the 90% on-time delivery claim with methodology |

#### Persona C — Digital Transformation Lead / CIO

| Field | Detail |
|---|---|
| **Role** | Head of Digital, CTO, or Chief Innovation Officer at mid-size O&G or EPC company |
| **Pain Points** | Wants AI/data analytics capability but cannot justify full-time hire; needs proof-of-concept first |
| **What They Need** | A credible technical partner who can deliver POC → production pipeline without hand-holding |
| **Decision Trigger** | Reviews tech stack depth (FastAPI, TimescaleDB, Docker, XGBoost) and recognises engineering maturity |

### 3.2 Secondary Audience

- Recruiters seeking senior BI/data talent for contract or permanent roles
- Conference organisers or technical writers seeking O&G analytics thought leadership
- Peers and collaborators in the data engineering / ML community

---

## 4. Site Architecture & Information Architecture

### 4.1 Page Structure

| Route | Page Name | Primary Purpose |
|---|---|---|
| `/` | Home (Hero) | Hook visitors, communicate positioning in < 5 seconds |
| `/about` | About | Build trust: story, background, domain expertise, working style |
| `/projects` | Projects | Portfolio showcase — filterable, impact-first cards |
| `/projects/[slug]` | Project Detail | Deep-dive case study per project (problem → solution → outcome) |
| `/skills` | Skills & Stack | Comprehensive tech capabilities with visual representation |
| `/contact` | Contact | Low-friction inquiry form + availability signal |
| `/blog` | Blog *(Phase 2)* | SEO-driven technical articles on O&G analytics |

### 4.2 Navigation Structure

> **Primary Nav:** Home \| Projects \| About \| Skills \| Contact — fixed sticky header, visible on all pages

- Logo/name (top-left) → links to Home
- Projects (dropdown or full page with category filter)
- About → single page
- Skills → single page or section within About
- Contact → CTA button in nav, always visible
- Mobile: hamburger menu with full-screen overlay

---

## 5. Page Specifications

### 5.1 Home Page (`/`)

#### 5.1.1 Hero Section

| Element | Content / Spec |
|---|---|
| **Headline** | "From Raw Field Data to AI-Powered Decisions" |
| **Sub-headline** | Power BI Developer & Data Scientist \| O&G \| EPC |
| **Body copy** | 1–2 sentences: what I do + who I do it for |
| **Primary CTA** | "Let's Work Together" → scrolls to Contact or `/contact` |
| **Secondary CTA** | "View Projects" → `/projects` |
| **Visual** | Animated data flow diagram (SVG/Lottie) or dark industrial background |
| **Availability** | "Available for freelance projects" badge (green dot) |

#### 5.1.2 Social Proof / Numbers Strip

| Metric | Value | Context |
|---|---|---|
| Projects Delivered | 8+ | Across O&G, EPC, and product development |
| On-Time Delivery | 90% | With PMO Intelligence System |
| Unplanned Downtime | −20% | Target with ARIA platform |
| Early Warning Window | 72 hrs | ARIA anomaly detection lead time |
| ROI Generated | $750K–$1.2M | Annual value per 10-project portfolio (PMO system) |

#### 5.1.3 Services / Value Proposition Section

6-card grid showing service categories. Each card: icon + title + 1-sentence description + link to relevant projects.

- Power BI & Dashboard Development
- Data Engineering & ETL Pipelines
- AI & Predictive Machine Learning
- Project Control Analytics (EVM, P6)
- Full-Stack Application Development
- Asset Reliability & Predictive Maintenance

#### 5.1.4 Featured Projects Strip

Horizontal scroll or 3-column grid of 3 flagship projects: **EPC Delay Predictor**, **PMO Intelligence System**, **Production Intelligence Dashboard**. Each card links to its detail page.

#### 5.1.5 CTA Section (Bottom of Home)

> "Have an O&G or EPC analytics challenge? Let's talk." — with contact form link and direct email/LinkedIn

---

### 5.2 Projects Page (`/projects`)

#### 5.2.1 Filter & Sort

| Filter Category | Values |
|---|---|
| **Type** | All \| AI & ML \| Power BI & BI \| Application \| Data Engineering |
| **Industry** | All \| Oil & Gas \| EPC \| General |
| **Status** | All \| Live \| In Development |
| **Stack** | Power BI \| Python \| React \| Flutter \| Streamlit \| FastAPI \| ... |

#### 5.2.2 Project Cards

Each card contains:

- Project name + type badge (AI App / Dashboard / Mobile App)
- Status badge: **LIVE** (green) / **IN DEVELOPMENT** (amber)
- 1-sentence impact statement (leading with outcome, not technology)
- Tech stack tags (max 4 shown)
- "View Case Study" → `/projects/[slug]`

#### 5.2.3 Full Project List

| # | Project Name | Category | Status |
|---|---|---|---|
| 1 | EPC Delay Predictor | AI & ML | LIVE |
| 2 | PMO Intelligence System | AI & ML + App | LIVE |
| 3 | Production Intelligence Dashboard | BI + ML | LIVE |
| 4 | ARIA — Asset Reliability Intelligence & Analytics | AI & ML + App | LIVE |
| 5 | Risk Analyst Pro | Analytics Dashboard | LIVE |
| 6 | Oil Production Forecasting | ML Model | LIVE |
| 7 | KINANTI Production Dashboard | Power BI | LIVE |
| 8 | SRA App | Web Application | LIVE |
| 9 | AI Contract Agent | AI Automation | In Development |
| 10 | KurvaUp | Mobile App | In Development |

---

### 5.3 Project Detail Page (`/projects/[slug]`)

Each project detail page follows a consistent case study structure:

| Section | Content |
|---|---|
| **Header** | Project name, type badges, status, tech stack tags, live demo / GitHub links |
| **The Challenge** | What problem existed before this solution (written for the client persona, not technical audience) |
| **The Solution** | What was built — features, architecture overview, key technical decisions |
| **Key Features** | Visual feature breakdown (screenshots, diagrams, or animated demos) |
| **Tech Stack** | Categorised stack diagram (Frontend / Backend / AI-ML / Infra) |
| **Business Impact** | Quantified outcomes: ROI, time savings, accuracy improvement, cost reduction |
| **Lessons Learned** | 1–2 honest insights — builds credibility with sophisticated clients |
| **CTA** | "Have a similar challenge? Let's talk." → contact form |

---

### 5.4 About Page (`/about`)

| Section | Content |
|---|---|
| **Hero** | Photo (optional) + 2–3 line professional bio |
| **My Story** | Narrative: O&G background → data engineering → AI/ML → product builder. Written in first person, conversational. |
| **What I Do Best** | 3 core strengths: Domain-embedded AI \| End-to-end ownership \| Fast, documented delivery |
| **Working Style** | Collaboration approach, communication habits, documentation philosophy |
| **Beyond Work** | Optional: personal interests that humanise the profile |
| **CTA** | Download CV button + Contact link |

---

### 5.5 Skills Page (`/skills`)

Presented as a visual, scannable page — not a list of keywords.

| Category | Key Technologies |
|---|---|
| BI & Visualisation | Power BI · DAX · Chart.js · HTML Viewer · Power Query M · Streamlit |
| AI & Machine Learning | XGBoost · Random Forest · Isolation Forest · SHAP · Scikit-learn · Monte Carlo |
| Data Engineering | Python · pandas · PostgreSQL · TimescaleDB · SQL · Star Schema · Parquet |
| Project Control | EVM · Primavera P6 · Delay Prediction · Budget Control |
| Frontend Development | React · Vite · JavaScript · TailwindCSS · Plotly · Recharts |
| Backend Development | FastAPI · Python · REST API · WebSocket · Redis |
| Mobile Development | Flutter · Dart · Riverpod · BLoC · Firebase Auth |
| Infrastructure / DevOps | Docker · Docker Compose · Kafka · Redis · MinIO · NGINX |
| Monitoring & Observability | Prometheus · Grafana |
| Domain Knowledge | Oil & Gas Production · ESP Monitoring · EPC Project Control · DCA · RUL Prediction |

---

### 5.6 Contact Page (`/contact`)

#### 5.6.1 Contact Form Fields

| Field | Type | Required |
|---|---|---|
| Full Name | Text input | Yes |
| Email | Email input | Yes |
| Company / Project | Text input | No |
| Industry | Dropdown: O&G \| EPC \| Construction \| Other | No |
| Project Brief | Textarea (min 50 chars) | Yes |
| Budget Range | Dropdown: < $5K \| $5K–$15K \| $15K–$50K \| > $50K \| Let's discuss | No |
| Timeline | Dropdown: ASAP \| 1–3 months \| 3–6 months \| Flexible | No |

#### 5.6.2 Contact Information

- **Phone:** 081911821355
- **Email:** e.suryahadi@gmail.com
- **LinkedIn:** linkedin.com/in/ekosuryahadi
- **GitHub:** github.com/EkoSuryaHadi
- **Location:** Balikpapan, Indonesia (open to remote worldwide)

#### 5.6.3 Availability Signal

> Display current availability status: **"Currently available for new projects"** (green) or **"Limited availability — contact to discuss"** (amber). Update manually each month.

---

## 6. Design System

### 6.1 Visual Identity

> **Theme: Dark industrial** — premium, technical, and domain-specific. Inspired by O&G control room aesthetics: dark backgrounds, teal/cyan accents, precise typography. Conveys seriousness and technical credibility without looking like a generic developer portfolio.

### 6.2 Color Palette

| Role | Name | Hex | Usage |
|---|---|---|---|
| Primary Background | Deep Navy | `#0D1B2A` | Page backgrounds, hero section |
| Primary Accent | Teal | `#1B8CA6` | CTAs, links, section headers, borders |
| Accent Light | Teal Light | `#2FB8D8` | Hover states, highlights |
| Secondary Accent | Amber | `#F4A014` | App project cards, warnings, badges |
| Success | Green | `#1A9E6E` | LIVE status badges, positive metrics |
| AI/ML Accent | Purple | `#6B4FA0` | AI & ML project cards |
| Card Background | Off-White | `#F7FAFC` | Light mode cards, content areas |
| Text Primary | Dark Grey | `#2E3A47` | Body text on light backgrounds |
| Text Secondary | Mid Grey | `#6B7C8D` | Captions, meta text |

### 6.3 Typography

| Role | Font | Size | Weight |
|---|---|---|---|
| Display / Hero | IBM Plex Sans or Inter | 48–72px | 700 Bold |
| Section Headings (H1) | IBM Plex Sans or Inter | 36–42px | 700 Bold |
| Sub-headings (H2) | IBM Plex Sans or Inter | 24–28px | 600 SemiBold |
| Card Titles (H3) | IBM Plex Sans or Inter | 18–20px | 600 SemiBold |
| Body Text | Inter or IBM Plex Sans | 15–16px | 400 Regular |
| Code / Tech Labels | IBM Plex Mono | 13–14px | 400/500 |
| Captions / Meta | Inter | 12–13px | 400 Regular, `#6B7C8D` |

### 6.4 Component Library

#### 6.4.1 Project Card
- Dark card (navy bg) with coloured left-border accent by category (Teal = BI, Purple = AI, Amber = App)
- Hover: subtle glow effect, slight Y-axis translate up
- Status badge top-right: LIVE (green) / IN DEV (amber)
- Tech stack tags as small pills at bottom

#### 6.4.2 CTA Buttons
- **Primary:** Teal background, white text, rounded-lg, subtle shadow
- **Secondary:** Teal border, teal text, transparent background
- Hover: `scale(1.02)` + brightness increase

#### 6.4.3 Metric/Stats Cards
- Large number (bold, teal or white) + label below
- Used in hero strip and project detail pages

#### 6.4.4 Tech Stack Badge
- Small pill: background = dark navy, text = teal-light
- Used on project cards, skills page, and detail pages

---

## 7. Technical Stack Recommendation

### 7.1 Frontend Framework

| Option | Recommendation | Rationale |
|---|---|---|
| **Next.js 14+ (React)** | ✅ RECOMMENDED | SSR/SSG for SEO, file-based routing, API routes for contact form, Vercel deployment |
| Astro | Alternative | Best performance for mostly-static; good if blog is priority |
| Vite + React (SPA) | Not recommended | Poor SEO; no SSR without extra config |

### 7.2 Full Stack

| Layer | Technology | Purpose |
|---|---|---|
| Framework | Next.js 14 (App Router) | Routing, SSR, API routes |
| Styling | TailwindCSS | Utility-first — fast to build, easy to maintain |
| Animations | Framer Motion | Page transitions, scroll reveals, hover effects |
| Charts | Recharts / D3.js | Interactive skill visualisations |
| 3D / Visual | Three.js or Lottie | Hero section animated background (optional) |
| CMS | MDX or Notion API | Blog posts and project content management |
| Contact Form | Next.js API Route + Resend (or EmailJS) | Form submission with email delivery |
| Analytics | Vercel Analytics or Plausible | Privacy-friendly traffic analytics |
| Hosting | Vercel | Zero-config Next.js deployment, free tier sufficient |
| Domain | Custom `.com` or `.dev` | `ekosuryahadi.com` or `ekodata.dev` |

### 7.3 Performance Requirements

| Metric | Target | Tool |
|---|---|---|
| Lighthouse Performance | >= 90 | Vercel Speed Insights |
| Lighthouse SEO | >= 85 | Lighthouse CI |
| Lighthouse Accessibility | >= 85 | axe-core |
| First Contentful Paint | < 1.5s | Web Vitals |
| Largest Contentful Paint | < 2.5s | Web Vitals |
| Cumulative Layout Shift | < 0.1 | Web Vitals |

---

## 8. SEO Strategy

### 8.1 Target Keywords

| Intent | Keywords | Page |
|---|---|---|
| Primary | Power BI developer Indonesia freelance | Home, About |
| Primary | Oil gas data analytics consultant | Home, Projects |
| Primary | EPC project control analytics AI | Projects: EPC Delay Predictor |
| Secondary | Predictive maintenance oil gas Python | Projects: ARIA |
| Secondary | Streamlit dashboard oil gas | Projects: Production Intelligence |
| Secondary | PMO analytics dashboard EPC project control | Projects: PMO System |
| Long-tail | freelance Power BI developer Balikpapan oil gas | About, Contact |
| Long-tail | XGBoost production forecasting oil gas Python | Blog (Phase 2) |

### 8.2 On-Page SEO Requirements

- Unique meta title and description per page (60 / 160 char limits)
- Structured data: `Person` schema (About), `SoftwareApplication` schema (Projects)
- OpenGraph and Twitter Card tags for social sharing
- Canonical URLs on all pages
- `sitemap.xml` generated automatically (Next.js)
- `robots.txt` configured
- Alt text on all images

---

## 9. Functional Requirements

### 9.1 Must-Have — MVP (Phase 1)

| ID | Feature | Priority |
|---|---|---|
| F01 | Responsive design (mobile-first, tested on iOS/Android/desktop) | P0 |
| F02 | Home page: hero, metrics strip, services, featured projects, CTA | P0 |
| F03 | Projects page with filter by category and status | P0 |
| F04 | Project detail pages for all 10 projects | P0 |
| F05 | About page with bio, skills summary, CTA | P0 |
| F06 | Skills page with visual tech stack | P0 |
| F07 | Contact page with form (name, email, brief, budget, timeline) | P0 |
| F08 | Form validation + submission with email notification | P0 |
| F09 | Dark/light mode toggle (dark default) | P1 |
| F10 | Sticky navigation header with active state | P0 |
| F11 | 404 and error pages | P0 |
| F12 | Favicon, OG image, meta tags | P0 |

### 9.2 Should-Have (Phase 1.5)

| ID | Feature | Priority |
|---|---|---|
| F13 | Animated page transitions (Framer Motion) | P1 |
| F14 | Scroll-triggered section reveals | P1 |
| F15 | Live demo links or embedded screenshots per project | P1 |
| F16 | Availability status indicator (manually updated) | P1 |
| F17 | CV/resume download button (PDF) | P1 |
| F18 | Analytics integration (Vercel or Plausible) | P1 |

### 9.3 Nice-to-Have (Phase 2)

| ID | Feature | Priority |
|---|---|---|
| F19 | Blog / articles section with MDX support | P2 |
| F20 | Interactive skill proficiency chart (radar/bar) | P2 |
| F21 | Project timeline / career journey visualisation | P2 |
| F22 | Multilingual support (EN/ID toggle) | P2 |
| F23 | Case study PDF download per project | P2 |
| F24 | Testimonials / social proof section | P2 |

---

## 10. Content Requirements

### 10.1 Content Ownership

> All content will be authored by Eko. This PRD provides the structure and brief for each content block. Final copy should be: **confident, specific, and client-focused** — not academic or overly technical.

### 10.2 Content Checklist

| Content Item | Status | Owner |
|---|---|---|
| Hero headline + sub-headline | To write | Eko |
| Professional bio (About page, 150–200 words) | To write | Eko |
| Project briefs — The Challenge section (×10) | Draft in PRD | Eko to refine |
| Project briefs — Business Impact section (×10) | Draft in PRD | Eko to refine |
| Skills narrative (1 paragraph per category) | To write | Eko |
| Profile photo (professional or illustrated avatar) | To source | Eko |
| Project screenshots / mockups (×10) | To capture | Eko |
| Architecture diagrams (×3–5) | To create | Eko |
| CV / resume (PDF, updated) | To prepare | Eko |
| Meta descriptions (×7 pages) | To write | Eko |

---

## 11. Development Phases & Timeline

| Phase | Name | Scope | Duration |
|---|---|---|---|
| **Phase 0** | Setup & Design | Domain, hosting setup; design system; wireframes/mockups | 1 week |
| **Phase 1** | Core Pages | Home, Projects list, About, Contact; routing; form; deployed to Vercel | 2–3 weeks |
| **Phase 2** | Project Detail Pages | All 10 case study pages; screenshots; tech stack diagrams; filter working | 1–2 weeks |
| **Phase 3** | Skills & Polish | Skills page; Framer Motion animations; SEO meta tags; performance optimisation | 1 week |
| **Phase 4** | QA & Launch | Cross-browser testing; mobile testing; Lighthouse audit; soft launch | 3–5 days |
| **Phase 5** | Blog *(Optional)* | MDX blog setup; first 2–3 articles for SEO seeding | 2–3 weeks |

> **Total estimated timeline to MVP launch: 5–7 weeks** working part-time.

---

## 12. Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Content writing takes longer than expected | High | Medium | Use PRD bullet points as first draft; refine in second pass |
| Screenshots/demos not available for all projects | Medium | Medium | Use architecture diagrams or animated mockups as substitute |
| Portfolio not discovered (SEO) | Medium | High | Supplement with LinkedIn posts and direct outreach using PDF portfolio as opener |
| Client expects full-time availability | Low | High | Clearly signal "freelance/consulting" on every page; include typical project scope in FAQ |
| Tech debt if built too fast | Low | Low | Use Next.js best practices; keep component structure clean from day 1 |

---

## 13. Appendix

### 13.1 Project URL Slugs

| Project | URL Slug |
|---|---|
| EPC Delay Predictor | `/projects/epc-delay-predictor` |
| PMO Intelligence System | `/projects/pmo-intelligence-system` |
| Production Intelligence Dashboard | `/projects/production-intelligence-dashboard` |
| ARIA — Asset Reliability Intelligence & Analytics | `/projects/aria-asset-reliability` |
| Risk Analyst Pro | `/projects/risk-analyst-pro` |
| Oil Production Forecasting | `/projects/oil-production-forecasting` |
| KINANTI Production Dashboard | `/projects/kinanti-dashboard` |
| SRA App | `/projects/sra-app` |
| AI Contract Agent | `/projects/ai-contract-agent` |
| KurvaUp | `/projects/kurvaup` |

### 13.2 Reference Inspirations

- [brittanychiang.com](https://brittanychiang.com) — Clean dark developer portfolio with project case studies
- [leerob.io](https://leerob.io) — Next.js author portfolio — fast, clean, blog-driven
- [joshwcomeau.com](https://www.joshwcomeau.com) — High interactivity, trust-building through content depth

---

*End of Document — PRD v1.0 | Eko Suryahadi Portfolio Website*  
*e.suryahadi@gmail.com · linkedin.com/in/ekosuryahadi · github.com/EkoSuryaHadi*