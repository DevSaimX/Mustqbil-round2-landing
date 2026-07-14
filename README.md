# Mustqbil — AI-Powered Careers Landing Page

Mustqbil is a redesigned career-tech landing page focused on AI-assisted job discovery, career tools, and employer hiring workflows. It was completed as a Round 2 AI-First Developer Bootcamp assessment submission and transforms a generic starter landing page into a polished, responsive product experience.

## Live Demo

- Live website: https://mustqbil-round2-landing-tau.vercel.app/
- GitHub repository: https://github.com/DevSaimX/Mustqbil-round2-landing

## Assessment Overview

This project was completed for Round 2 of an AI-First Developer Bootcamp assessment. The task was to clone a provided public repository, rebuild and improve the existing landing page, and produce a final version that improves visual design, content, responsiveness, performance, and user experience.

The original starter page was a generic SaaS-style project-management landing page branded as "Clarity." The final submission repositions the experience as Mustqbil, an AI-powered careers and job-matching platform for job seekers and employers.

## Before and After

### Original starter

- Generic "Clarity" project-management branding
- Basic SaaS-style landing-page content
- Limited product-specific interaction
- Simple static landing-page structure

### Final redesign

- Mustqbil career-tech brand and product concept
- AI-powered job-matching presentation
- Featured job listings with categories, match scores, salaries, locations, and remote labels
- Job filtering and saved-job interactions
- Mobile-only Show More and Show Fewer behavior for job cards
- AI career tools section
- How It Works workflow
- Employer benefits section
- Testimonials and FAQ
- Fixed navigation with mobile menu
- Page-scroll progress indicator
- Responsive layouts, rich backgrounds, and restrained animations

## Key Improvements

### Design and Branding

- Complete rebrand from Clarity to Mustqbil
- Career-tech visual identity with a dark forest-green, warm cream, and yellow palette
- Mustqbil logo usage in navigation and footer
- Custom favicon and metadata using `/favicon.png`
- Rich CSS-based section backgrounds
- Consistent card system for jobs, tools, stats, testimonials, and employer benefits
- Improved typography, spacing, and visual hierarchy

### User Experience

- Fixed navbar that remains visible while scrolling
- Scroll-progress indicator attached to the top of the page
- Smooth in-page navigation
- Responsive Radix-powered mobile menu
- Functional job category filters
- Saved-job bookmark interactions persisted with `localStorage`
- Mobile Show More and Show Fewer behavior for Featured Jobs
- Accessible FAQ accordion
- Responsive layouts from mobile through large desktop
- Visible focus and interaction states

### Motion and Interaction

- Hero entrance sequence
- Section reveal animations
- Card stagger animations
- Animated platform counters
- Job-filter loading skeletons
- How It Works progress path
- Reduced-motion support
- Animation fixes to prevent post-load mobile layout shifts

### Responsive Design

The page was reviewed and refined for mobile, tablet, laptop, and large desktop layouts. Implemented responsive behavior includes:

- Stacked cards on mobile
- Responsive heading and body typography
- Wrapping job filter chips
- Mobile-only limit of three job cards before expansion
- Vertical How It Works flow on smaller screens
- Responsive mobile navigation
- Simplified decorative backgrounds on mobile to avoid overflow and clipping

### Performance and Accessibility

- Semantic section structure and landmarks
- Keyboard-accessible buttons, links, filters, menu, and accordion controls
- ARIA attributes for pressed, expanded, hidden, and live regions where appropriate
- Visible focus states through the shared UI styling
- Reduced-motion support via media-query-aware hooks and CSS
- Transform and opacity-based animations
- CSS-driven decorative backgrounds instead of large decorative image assets
- SSR-safe browser API usage for `localStorage`, media queries, and hydration-sensitive behavior

## Features

- AI-powered job-matching hero presentation
- Job title, skill, company, and location search inputs
- Remote jobs toggle
- Featured jobs with realistic Pakistani cities and remote roles
- Job category filtering
- Saved jobs using browser `localStorage`
- Mobile Show More and Show Fewer job-list behavior
- AI Resume Builder presentation
- Resume Match Analysis
- Personalized Job Recommendations
- Interview Preparation
- Application Tracker
- Career Copilot
- Four-step How It Works workflow
- Employer benefits for job descriptions, screening, shortlists, and applicant management
- Testimonials
- FAQ accordion
- Fixed navbar
- Scroll-progress bar
- Responsive mobile menu
- Custom favicon and metadata

## Tech Stack

- TanStack Start
- TanStack Router
- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- Radix UI
- Lucide React
- React Query
- pnpm
- ESLint
- Prettier

## Project Structure

```text
public/
  favicon.png
  mustqbil-logo.png

src/
  components/
    landing/
    ui/
  data/
  hooks/
  lib/
  routes/
  types/
  styles.css

package.json
vite.config.ts
tsconfig.json
```

## Getting Started

### Requirements

- Node.js 20 or later
- pnpm recommended
- npm is also supported by the project scripts

### Clone

```bash
git clone https://github.com/DevSaimX/Mustqbil-round2-landing.git
cd Mustqbil-round2-landing
```

### Install dependencies

```bash
pnpm install
```

Or with npm:

```bash
npm install
```

### Run locally

```bash
pnpm dev
```

The local development URL is printed in the terminal.

### Production build

```bash
pnpm build
```

### Preview

```bash
pnpm preview
```

## Available Scripts

| Script           | Description                       |
| ---------------- | --------------------------------- |
| `pnpm dev`       | Start the Vite development server |
| `pnpm build`     | Create a production build         |
| `pnpm build:dev` | Create a development-mode build   |
| `pnpm preview`   | Preview the built application     |
| `pnpm lint`      | Run ESLint across the project     |
| `pnpm format`    | Format files with Prettier        |

The same scripts can be run with npm, for example `npm run build`.

## Deployment

The project is suitable for Vercel deployment.

Recommended process:

1. Push the repository to GitHub.
2. Import `DevSaimX/Mustqbil-round2-landing` into Vercel.
3. Use pnpm installation or Vercel's detected package-manager settings.
4. Use the project build command: `pnpm build`.
5. Deploy the project.

When Git integration is enabled, new pushes to the production branch trigger automatic redeployment.

## AI-Assisted Development

AI assistance was used during development to support the workflow, including:

- Reviewing the starter repository
- Exploring redesign directions
- Generating implementation plans
- Refining responsive behavior
- Debugging animation-related mobile alignment issues
- Auditing accessibility and interaction states
- Reviewing build and hydration issues
- Improving documentation

AI output was reviewed, tested, and refined manually before being kept in the final submission.

## Example AI Prompts

- Transform the starter Clarity page into an AI-powered career platform.
- Audit and improve mobile responsiveness.
- Create a cohesive animation system for the landing page.
- Fix animation-induced mobile alignment issues.
- Add a fixed navbar with scroll progress.
- Audit SSR hydration safety.

## Design Decisions

- The career-tech concept was chosen because it gives the landing page a clearer product story and stronger assessment fit than a generic SaaS page.
- The green, cream, and yellow palette supports a professional, Pakistan-first career platform identity while avoiding generic purple AI SaaS styling.
- Interactions were kept lightweight so the page feels premium without hurting performance.
- `localStorage` is used for saved jobs because the project has no backend and saved jobs should persist across refreshes in the browser.
- Decorative backgrounds are CSS-based and simplified on mobile to reduce overflow risk.
- Animation is intentionally restrained and uses transform/opacity where possible.

## Accessibility

Implemented accessibility measures include:

- Semantic sections and navigation
- Keyboard-accessible links, buttons, filter chips, bookmarks, and accordion controls
- Accessible labels for icon-only buttons
- `aria-pressed` for bookmark and filter states
- `aria-expanded` and `aria-controls` for the mobile Show More button
- `aria-live` for filtered job results
- Visible focus styles from the shared UI system
- Reduced-motion support
- Readable contrast across dark and light sections
- Mobile-friendly touch targets

This README does not claim formal WCAG certification.

## Performance Considerations

- Reusable landing components keep the page easier to maintain.
- Data for jobs, stats, tools, testimonials, and FAQ lives in typed arrays.
- Decorative backgrounds are CSS/SVG-based rather than large stock images.
- Animations rely on transform and opacity instead of layout-heavy properties.
- Event listeners and timers are cleaned up where used.
- Browser-only APIs are accessed inside effects or event handlers to avoid SSR hydration issues.
- Mobile backgrounds and reveal animations were adjusted to prevent horizontal overflow.

## Known Limitations

- Job listings and platform statistics are demo data.
- Search inputs are presentation-only and do not call a backend.
- Sign-in, profile creation, and post-a-job actions are not connected to authentication or APIs.
- AI career tools are represented as landing-page product concepts rather than live AI services.
- Employer workflows are not connected to an applicant-tracking backend.
- Saved jobs are stored locally in the browser only.

## Future Improvements

- Backend job API
- Authentication and user profiles
- Resume upload and parsing
- Real AI matching service
- Application tracker backed by a database
- Employer dashboard
- Database-backed saved jobs
- Automated unit, accessibility, and visual regression tests

## Screenshots

Add desktop screenshot here.

Add mobile screenshot here.

## Author

Built by Saim Iftikhar.
