# Masters in CS Personal Portfolio: Project Intelligence

## Project Context
A high-performance, professional portfolio for Maithil Rupesh Mehta, a Masters in Computer Science student. This site acts as a "Master Repository" of all specialized technical work (AI, Systems, SWE) while providing a single, streamlined professional PDF for recruiters.

## Technical Stack
- **Framework**: Next.js 15+ (App Router, TypeScript)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion (Subtle, professional transitions)
- **Icons**: Lucide React
- **Content**: Static Data Objects (`/data/projects.ts`) with MDX support for deep-dives.

## Resume & Profile Strategy
- **Single Source of Truth**: Multiple LaTeX files exist in `/resumes/`, but only ONE compiled PDF is exposed to the user at `/public/resume.pdf`.
- **Profiles**: Primary links include LinkedIn, GitHub, and [Optional: Google Scholar/Portfolio].
- **Project Inspiration**: The website UI must aggregate projects from ALL specialized resumes (ML, Systems, Web) into a single filterable gallery to show breadth of expertise.

## Development Standards
- **Component Pattern**: Atomic design. Keep UI components in `/components/ui` and layout sections in `/components/sections`.
- **Naming Convention**: PascalCase for components (e.g., `ProjectCard.tsx`), kebab-case for utility files (e.g., `format-date.ts`).
- **Responsive Design**: Mobile-first. Ensure LaTeX math formulas (if any) or code blocks wrap correctly on small screens.
- **Performance**: Images must use `next/image` for optimization.

## Key Commands
- **Dev**: `npm run dev`
- **Build**: `npm run build`
- **Lint**: `npm run lint`
- **Resume Sync**: `cp resumes/preferred_version.pdf public/resume.pdf` (Manual sync command)

## Content Schema (Data Structure)
Projects should be defined with the following interface to allow for filtering:
- `id`: string
- `title`: string
- `description`: string (Bullet points from LaTeX resumes)
- `tags`: string[] (e.g., ["Distributed Systems", "Python", "Research"])
- `category`: "Systems" | "AI/ML" | "Full-Stack"
- `links`: { github?: string, paper?: string, demo?: string }

## Workflow & Tooling
- **Frontend First**: Before generating UI components, invoke `frontend-design` to plan layout, accessibility (ARIA), and responsive breakpoints.
- **Iconography**: Use `lucide-react` for all icons.
- **State Management**: Prefer React `useState` and `useContext` for local UI state; avoid heavy libraries unless complexity scales.