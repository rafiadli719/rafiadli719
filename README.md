<p align="center">
  <img src="assets/banner.svg" width="100%" alt="Rafi Adli Pradiansyah — builds internal web apps, PWAs, data sync, and WhatsApp AI agents" />
</p>

## 👋 About

Most of my repositories are internal tools for **FIT MOTOR**, a multi-branch motorcycle workshop, built around problems the team runs into every day:
branch cashiers closing out their day, mechanics inspecting a motorcycle before a service, customer service staff identifying a customer's bike type, customers booking a service, divisions requesting work from IT.

I usually start a project with a written PRD, a design, and a task breakdown, then build it with Laravel / PHP or Next.js / TypeScript, package it with Docker, and deploy it to a VPS.
I also maintain an older PHP workshop system and sync data between it and the legacy branch databases.
I use Claude Code as part of my development workflow.

## 🧠 What I Build

- **Business workflow apps.** Multi-step processes with roles, statuses, approvals, and audit trails.
- **Operational systems for branches.** Service orders, point of sale, purchasing, stock, cashier closing, and bank deposits, all scoped per branch.
- **Mobile-first PWAs** for mechanics and customers, with offline support for unstable connections.
- **Data sync and integration.** Python agents that read branch Microsoft Access databases and push changes to web APIs, plus Excel/PDF import and export.
- **Automation and AI.** Scheduled jobs, browser automation with Playwright, and WhatsApp agents that answer from a knowledge base.

<p align="center">
  <img src="assets/architecture.svg" width="100%" alt="Branch Access databases sync through Python agents into PHP and Laravel APIs that feed Web Bengkel, the Cek Mekanik PWA and the customer PWA. WhatsApp messages flow through a gateway into AI agents and admin dashboards." />
</p>

## 🛠️ Tech I Work With

<p align="center">
  <img src="https://skillicons.dev/icons?i=php,laravel,ts,nextjs,react,vue,tailwind,mysql,postgres,sqlite,prisma,redis,py,nodejs,docker,nginx,githubactions,git&perline=9" alt="PHP, Laravel, TypeScript, Next.js, React, Vue, Tailwind, MySQL, PostgreSQL, SQLite, Prisma, Redis, Python, Node.js, Docker, Nginx, GitHub Actions, Git" />
</p>

| Area | Technologies |
| --- | --- |
| **Languages** | PHP · TypeScript · JavaScript · Python · SQL · Bash |
| **Backend** | Laravel (API, Blade, Livewire, queues and scheduler) · native PHP with PDO · Next.js route handlers · Express |
| **Frontend** | Next.js (App Router) · React · Tailwind CSS · Alpine.js · Recharts |
| **Data** | MySQL · PostgreSQL · SQLite · Prisma ORM · Microsoft Access (read via pyodbc) |
| **Testing** | PHPUnit · Pest · Vitest · Playwright (E2E and browser automation) |
| **Infra** | Docker / Docker Compose · Nginx · Supervisor · VPS deployment with shell scripts and GitHub Actions |
| **Integrations** | Auth.js · Laravel Socialite · WhatsApp gateway webhooks · OpenRouter / OpenAI-compatible APIs · PhpSpreadsheet / Laravel Excel / ExcelJS · FPDF / Dompdf |
| **Team projects** | Hono · Drizzle ORM · BullMQ + Redis · Vue 3 · shadcn-vue |

## 🚀 Featured Projects

<p align="center">
  <img src="assets/cards/priori-tech.svg" width="49%" alt="PrioriTech: IT project intake and prioritization" />
  <img src="assets/cards/cek-mekanik.svg" width="49%" alt="Cek Mekanik: vehicle inspection PWA" />
  <a href="https://github.com/rafiadli719/web-bengkel"><img src="assets/cards/web-bengkel.svg" width="49%" alt="Web Bengkel: workshop management system" /></a>
  <img src="assets/cards/fitmotor-agent.svg" width="49%" alt="FIT MOTOR AI Agent: WhatsApp CRM agent" />
  <img src="assets/cards/pwa-pelanggan.svg" width="49%" alt="Customer PWA: customer portal for the workshop" />
  <img src="assets/cards/fb-video-scheduler.svg" width="49%" alt="FB Video Scheduler: scheduled video posting" />
</p>

<p align="center"><sub><b>PUBLIC</b> repositories are linked · <b>PRIVATE</b> ones are company-internal · <b>TEAM</b> projects were built together with a teammate or vendor</sub></p>

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

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/rafiadli719/rafiadli719/output/github-snake-dark.svg" />
    <img width="100%" src="https://raw.githubusercontent.com/rafiadli719/rafiadli719/output/github-snake.svg" alt="Snake animation eating the contribution graph" />
  </picture>
</p>

## 🔗 Connect

<p>
  <a href="https://github.com/rafiadli719"><img src="https://img.shields.io/badge/GitHub-rafiadli719-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub" /></a>
</p>
