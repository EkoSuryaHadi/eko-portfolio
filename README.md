# Eko Suryahadi Portfolio Website

Professional portfolio website for Eko Suryahadi, targeting Oil & Gas and EPC clients who need Power BI, AI/ML, project-control analytics, production dashboards, and focused data applications.

## Stack

- Next.js 14 App Router
- TypeScript
- TailwindCSS
- Framer Motion-ready dependency
- Recharts-ready dependency
- Lucide icons

## Pages

- `/` - Home page with hero, metrics, services, featured projects, CTA
- `/projects` - Portfolio project listing
- `/projects/[slug]` - Case study detail pages for 10 projects
- `/about` - Bio, current role, strengths
- `/skills` - Visual skill and tech stack grid
- `/contact` - Contact form and contact information

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Contact Form

The contact form posts to `app/api/contact/route.ts` and sends email notifications through Resend.

Required environment variables:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL=e.suryahadi@gmail.com`
- `CONTACT_FROM_EMAIL=Portfolio <onboarding@resend.dev>` for development, or a verified sender on your production domain

For production, add spam protection and rate limiting before launch.

## Main Content Files

- `data/projects.ts` - all portfolio project data and case-study copy
- `data/skills.ts` - services and skill categories
- `app/layout.tsx` - global metadata and shell
- `app/page.tsx` - home page

## Design Direction

Dark industrial aesthetic with deep navy, teal/cyan accents, amber highlights, and green live-status badges.
