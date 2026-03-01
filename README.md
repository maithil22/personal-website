# maithilmehta.com — Personal Portfolio

Dark-themed portfolio site for Maithil Rupesh Mehta, Masters in CS student at UW-Madison.

**Live:** [maithilmehta.com](https://maithilmehta.com) · [personalwebsite-one-pi.vercel.app](https://personalwebsite-one-pi.vercel.app)

## Stack

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS v4**
- **Framer Motion** — page transitions, stagger animations, scroll-triggered reveals
- **Lucide React** — icons

## Structure

```
src/
  app/
    page.tsx               # Homepage (Hero → About → Experience → Projects → Contact)
    coursework/page.tsx    # Coursework tab (/coursework)
    layout.tsx             # Root layout with NavBar
    globals.css            # Dark theme CSS vars
  components/
    ui/
      ProjectCard.tsx      # Project card atom
      CourseCard.tsx       # Coursework card with expandable reflection
    sections/
      NavBar.tsx           # Sticky glass nav with active-route highlighting
      Hero.tsx             # Full-viewport intro with photo + animations
      About.tsx            # Bio, education, skills
      Experience.tsx       # Work timeline (D.E. Shaw, Amazon, Salesforce)
      Projects.tsx         # Filterable project grid (Systems / AI-ML / Full-Stack)
      Contact.tsx          # Social links + resume CTA
      CourseList.tsx       # Semester → Course → Type filter UI

data/
  projects.ts              # Typed Project[] (6 real projects)
  coursework.ts            # Typed CourseEntry[] (22 AOS papers, 8 Big Data projects, 5 ML homeworks)

resumes/                   # LaTeX source files
public/
  resume.pdf               # Single compiled PDF exposed to recruiters
  photo.jpeg               # Profile photo
```

## Development

```bash
npm run dev    # start dev server at localhost:3000
npm run build  # production build
npm run lint   # ESLint
```

## Resume sync

```bash
cp resumes/<version>.pdf public/resume.pdf
```

## Courses (Fall 2025)

| Course | Content |
|--------|---------|
| CS 736 — Advanced Operating Systems | 22 classic + recent systems papers |
| CS 544 — Introduction to Big Data | 8 projects (Docker → gRPC → HDFS → Spark → Cassandra → Kafka → BigQuery) |
| CS 760 — Machine Learning | 5 homeworks (Decision Trees → Neural Nets → SVMs/LLMs) |
