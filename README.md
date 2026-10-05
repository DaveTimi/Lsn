# Levity Ethics Systems (LES)

Production-oriented multi-tenant School Operating System by Dave Timi Tech Systems.

## Included
- Multi-tenant school isolation
- Secure cookie/JWT authentication
- RBAC permission layer
- Students, parents, staff, classes, subjects and assignments
- Sessions/terms, attendance and timetable
- Fees, charges, payments, invoices/receipts architecture and financial ledger
- Exams, question bank, submissions, scores, grades and results
- Announcements, notifications and messaging foundation
- Documents and digital IDs/QR verification foundation
- Subscriptions and payment-provider adapter architecture
- LES Intelligence with controlled tools and confirmation for sensitive actions
- Audit logging
- Dashboard analytics and global school search
- Responsive PWA UI and dark-mode-ready styling
- PostgreSQL + Prisma
- Docker Compose
- GitHub CI
- Health endpoint

## Quick start
1. Copy `.env.example` to `.env` and set a strong `AUTH_SECRET` and PostgreSQL `DATABASE_URL`.
2. `npm install`
3. `npx prisma generate`
4. `npx prisma db push`
5. `npm run db:seed`
6. `npm run dev`

Seed credentials are printed by the seed script. Change them immediately for any real deployment.

## Production requirements
- Use managed PostgreSQL with automated backups.
- Put all secrets in GitHub/Cloudflare secret storage; never commit `.env`.
- Configure a real AI provider, object storage, email/SMS provider and payment provider before enabling those integrations.
- Configure payment webhooks and verify signatures server-side. LES never marks a payment as successful merely because a browser says so.
- Use HTTPS and a production `AUTH_SECRET`.

## Cloudflare Workers
Cloudflare's current full-stack Next.js guidance supports Workers; OpenNext is supported for existing applications, while Cloudflare currently recommends vinext for new Next.js-on-Workers deployments. This repository includes the OpenNext configuration so you can deploy without changing the application architecture first. Review Cloudflare compatibility before production launch.
