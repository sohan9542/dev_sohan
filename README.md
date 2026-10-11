# Dev Sohan — Personal Portfolio

Personal portfolio website for **Sohanur Rahman** ([@sohan9542](https://github.com/sohan9542)), showcasing selected projects, skills, and design work.

**Live site:** [https://dev-sohan.vercel.app](https://dev-sohan.vercel.app)

> Built from the open-source BraydenTW portfolio template, customized with original content and branding for Dev Sohan.

## Features

- Home page with hero, featured projects, skills, testimonials, and contact CTA
- Full projects gallery with tag filtering (`/projects`, `/projects/tag/[tag]`)
- Designs gallery (`/designs`)
- Custom 404 page
- Responsive layout with mobile navigation
- SEO-friendly meta tags and Open Graph image

## Tech stack

- [Next.js](https://nextjs.org/) 12 (Pages Router)
- [React](https://reactjs.org/) 17
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 3
- [react-scroll](https://github.com/fisshy/react-scroll) for in-page navigation
- [Jest](https://jestjs.io/) for unit tests
- Deployed on [Vercel](https://vercel.com/)

## Getting started

### Prerequisites

- Node.js 16+ (18 recommended; CI uses Node 18)
- Yarn

### Setup

```bash
git clone https://github.com/sohan9542/dev_sohan.git
cd dev_sohan
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

This project does not require environment variables for local development. See [`.env.example`](./.env.example).

## Scripts

| Command              | Description                          |
| -------------------- | ------------------------------------ |
| `yarn dev`           | Start the development server         |
| `yarn build`         | Create a production build            |
| `yarn start`         | Serve the production build           |
| `yarn lint`          | Run ESLint via `next lint`           |
| `yarn typecheck`     | Run TypeScript (`tsc --noEmit`)      |
| `yarn test`          | Run Jest unit tests                  |
| `yarn format`        | Format files with Prettier           |
| `yarn format:check`  | Check formatting without writing     |

## Project structure

```text
.
├── components/          # UI by section (home, projects, designs, global, utility)
├── data/                # Site content (projects, skills, testimonials, routes)
├── pages/               # Next.js routes (index, projects, designs, 404)
├── public/static/       # Images, icons, favicons, doodles
├── styles/              # Global CSS
├── types/               # Shared TypeScript types
├── utils/               # Helpers (kebab-case, 404 animation)
└── .github/workflows/   # CI (install, lint, typecheck, test, build)
```

## CI

GitHub Actions runs on pushes and pull requests to `main`: install → lint → typecheck → test → build.
