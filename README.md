<h1 align="center">Rafi Adli Pradiansyah</h1>

<p align="center">
  I build internal web applications for the daily operations of a multi-branch motorcycle workshop:<br/>
  service workflows, cashier closing, vehicle inspections, and IT project intake.
</p>

<br/>

## 👋 About

Most of my repositories are internal tools for **FIT MOTOR**, built around problems the team runs into every day:
branch cashiers closing out their day, mechanics inspecting a motorcycle before a service, customer service staff identifying a customer's bike type, divisions requesting work from IT.

I usually start a project with a written PRD, a design, and a task breakdown, then build it with Laravel / PHP or Next.js / TypeScript, package it with Docker, and deploy it to a VPS.
I also maintain an older PHP workshop system and sync data between it and the legacy branch databases.
I use Claude Code as part of my development workflow.

## 🧠 What I Build

- **Business workflow apps.** Multi-step processes with roles, statuses, approvals, and audit trails (project intake → scoring → review → decision).
- **Operational systems for branches.** Service orders, point of sale, purchasing, stock, cashier closing, and bank deposits, all scoped per branch.
- **Mobile-first PWAs** for staff on the workshop floor, with an offline queue for unstable connections.
- **Data sync and integration.** Python scripts that read branch Microsoft Access databases and push changes to web APIs, plus Excel/PDF import and export.
- **Automation.** Scheduled jobs and browser automation (Playwright), and a WhatsApp assistant that answers from its own knowledge base (RAG) through an AI gateway.

## 🛠️ Tech I Work With

<p>
  <img src="https://skillicons.dev/icons?i=php,laravel,ts,nextjs,react,tailwind,mysql,postgres,sqlite,prisma,py,nodejs,docker,nginx,git&perline=15" alt="Tech stack icons" />
</p>

| Area | Technologies |
| --- | --- |
| **Languages** | PHP · TypeScript · JavaScript · Python · SQL · Bash |
| **Backend** | Laravel (API, Blade, Livewire, queues and scheduler) · native PHP with PDO · Next.js route handlers · Express |
| **Frontend** | Next.js (App Router) · React · Tailwind CSS · Alpine.js · Recharts |
| **Data** | MySQL · PostgreSQL · SQLite · Prisma ORM · Microsoft Access (read via pyodbc) |
| **Testing** | PHPUnit · Pest · Vitest · Playwright (E2E and browser automation) |
| **Infra** | Docker / Docker Compose · Nginx · Supervisor · VPS deployment with shell scripts |
| **Integrations** | Auth.js · Laravel Socialite · WhatsApp gateway webhooks · OpenAI-compatible AI gateway · PhpSpreadsheet / Laravel Excel / ExcelJS · FPDF / Dompdf |

## 🚀 Featured Projects

> Most of these are company-internal, so their repositories are private. Public repositories are linked.

### PrioriTech: IT project intake & prioritization `private`

Divisions submitted IT requests with no shared way to judge them, so priorities depended on opinion and decisions went undocumented.
PrioriTech takes a request from intake through PMO scoring on weighted criteria and management review to a final decision.
It has four roles, a configurable weight system, revision loops in both directions, a full audit log, a portfolio dashboard with charts, and Excel export.

`Next.js` `React` `TypeScript` `Auth.js` `Prisma` `PostgreSQL` `Tailwind` `Recharts` `Vitest` `Playwright` `Docker`

### Cek Mekanik: vehicle inspection PWA `private`

Pre-service inspections used one hard-coded checklist for every bike and every service type.
This monorepo adds a Laravel API and admin panel plus an installable Next.js PWA for mechanics.
Each checklist is resolved from master data and a rule matrix, based on the motorcycle category and the service type.
Data is scoped per branch, and submissions queue offline when the connection drops.
A Python sync agent on the branch PCs sends service data from their Access databases.

`Laravel` `Next.js` `PWA` `MySQL` `Nginx` `Docker Compose` `PHPUnit` `Playwright` `Python`

### [Web Bengkel](https://github.com/rafiadli719/web-bengkel): workshop management system

A large PHP system that runs the workshop: service registration and queues, work orders, warranty claims, point of sale, purchasing, stock transfers between branches, cashier finance, and reports.
It also has role-based menu access, an integration with the Accurate Online accounting API, and a sync API fed from branch Access databases.
My recent work here: end-to-end validation of each module, fixes for broken transaction flows, and query performance work (removing N+1 queries, adding pagination, rewriting slow report queries).

`PHP` `MySQL` `JavaScript` `Python` `PhpSpreadsheet` `Dompdf`

### FB Video Scheduler: scheduled video posting `private`

This app removes the repetitive work of posting the same video to many Facebook groups by hand.
Users manage groups and videos and schedule posts to several groups at once.
The Laravel scheduler and queue workers run the posts through Playwright scripts, with a history of each attempt and whether it succeeded or failed.
Everything runs in one Docker container managed by Supervisor.

`Laravel` `Livewire` `Playwright` `Node.js` `MySQL` `FFmpeg` `Supervisor` `Docker`

<details>
<summary><b>More projects</b></summary>
<br/>

| Project | What it does | Stack |
| --- | --- | --- |
| [**Kasir**](https://github.com/rafiadli719/kasir) | Daily cashier closing per branch: opening cash, income and expenses, handover between cashiers, bank deposit recap, central finance reports, Excel/PDF export | PHP · PDO · MySQL · PhpSpreadsheet · FPDF |
| **Motor Identifier Service** `private` | One search box to identify a customer's motorcycle type from a plate, frame, or engine number, resolved in tiers (exact → prefix → contains → fuzzy) | Laravel · MySQL · Laravel Excel · Pest |
| **Project Checklist Dashboard** `private` | Progress tracking for IT projects, modules, and features, with MoSCoW priority, a REST API, and a webhook other projects report progress to | PHP (no framework) · SQLite · Alpine.js · Docker |
| **ScrapeMaps** `private` | Small tool that collects business listings from Google Maps by city and category | Node.js · Express · Playwright |

</details>

## 📚 Currently Working On

- **RAFI-Agent** `private`: a personal WhatsApp assistant (Next.js + Prisma) that answers IT troubleshooting questions from a knowledge base using embedding search, and auto-replies when I'm busy. Early stage.
- **Web Bengkel**: module-by-module end-to-end validation, bug fixes, and performance work.
- **Cek Mekanik**: inspection history, an operations dashboard for admins, and sync packages for each branch.

## 📈 GitHub Activity

<p align="center">
  <img height="165" src="https://github-readme-stats.vercel.app/api?username=rafiadli719&show_icons=true&hide=stars&hide_border=true&theme=transparent&title_color=2f81f7&icon_color=2f81f7" alt="GitHub stats" />
  <img height="165" src="https://streak-stats.demolab.com/?user=rafiadli719&theme=transparent&hide_border=true&ring=2f81f7&fire=2f81f7&currStreakLabel=2f81f7" alt="GitHub streak" />
</p>

<p align="center">
  <img width="100%" src="https://github-readme-activity-graph.vercel.app/graph?username=rafiadli719&bg_color=00000000&color=7d8590&title_color=7d8590&line=2f81f7&point=2f81f7&area=true&area_color=2f81f7&hide_border=true" alt="Contribution activity graph" />
</p>

## 🔗 Connect

<p>
  <a href="https://github.com/rafiadli719"><img src="https://img.shields.io/badge/GitHub-rafiadli719-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub" /></a>
</p>
