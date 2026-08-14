"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, FileText, ExternalLink, X, ArrowRight } from "lucide-react";
import type { Project } from "../../../data/projects";

const categoryColors: Record<string, string> = {
  Systems: "bg-[#8ecbff] text-ink border-ink",
  "AI/ML": "bg-[#d6b4ff] text-ink border-ink",
  "Full-Stack": "bg-[#8ff0b0] text-ink border-ink",
};

interface ProjectCardProps {
  project: Project;
}

function ProjectLinks({ project, big }: { project: Project; big?: boolean }) {
  const size = big ? 16 : 16;
  return (
    <div className={`flex flex-wrap items-center gap-4 ${big ? "gap-5" : ""}`}>
      {project.links.github !== undefined && (
        <a
          href={project.links.github || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-ink-soft transition-colors hover:text-accent"
        >
          <Github size={size} />
          <span className="font-mono text-xs uppercase tracking-wide">
            GitHub
          </span>
        </a>
      )}
      {project.links.paper !== undefined && (
        <a
          href={project.links.paper || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-ink-soft transition-colors hover:text-accent"
        >
          <FileText size={size} />
          <span className="font-mono text-xs uppercase tracking-wide">
            Paper
          </span>
        </a>
      )}
      {project.links.demo !== undefined && (
        <a
          href={project.links.demo || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-ink-soft transition-colors hover:text-accent"
        >
          <ExternalLink size={size} />
          <span className="font-mono text-xs uppercase tracking-wide">
            Demo
          </span>
        </a>
      )}
    </div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  const categoryStyle =
    categoryColors[project.category] ?? "bg-white text-ink border-ink";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/70 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[85vh] w-full max-w-xl flex-col overflow-y-auto border-2 border-ink bg-paper p-8 brut-shadow"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="brut-press-sm absolute right-4 top-4 flex h-9 w-9 items-center justify-center border-2 border-ink bg-paper text-ink"
        >
          <X size={16} />
        </button>

        <span
          className={`inline-block w-fit border-2 px-2.5 py-0.5 font-mono text-xs font-semibold uppercase ${categoryStyle}`}
        >
          {project.category}
        </span>

        <h3 className="mt-4 pr-10 font-display text-2xl font-bold uppercase leading-tight text-ink">
          {project.title}
        </h3>

        <p className="mt-4 text-sm leading-relaxed text-ink-soft">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-ink/30 px-2 py-0.5 font-mono text-xs text-ink-soft"
            >
              {tag}
            </span>
          ))}
        </div>

        {(project.links.github ||
          project.links.paper ||
          project.links.demo) && (
          <div className="mt-6 border-t-2 border-ink pt-5">
            <ProjectLinks project={project} big />
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [open, setOpen] = useState(false);
  const categoryStyle =
    categoryColors[project.category] ?? "bg-white text-ink border-ink";

  return (
    <>
      <div className="brut-press flex h-full flex-col gap-4 border-2 border-ink bg-paper p-6 brut-shadow-sm">
        <div className="flex items-start justify-between gap-3">
          <span
            className={`inline-block border-2 px-2.5 py-0.5 font-mono text-xs font-semibold uppercase ${categoryStyle}`}
          >
            {project.category}
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-ink">{project.title}</h3>
          <p className="line-clamp-3 text-sm leading-relaxed text-ink-soft">
            {project.description}
          </p>
          <button
            onClick={() => setOpen(true)}
            className="flex w-fit items-center gap-1 pt-1 font-mono text-xs font-semibold uppercase tracking-wide text-accent transition-opacity hover:opacity-70"
          >
            Read more
            <ArrowRight size={13} />
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-ink/30 px-2 py-0.5 font-mono text-xs text-ink-soft"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-3 border-t-2 border-ink pt-4">
          <ProjectLinks project={project} />
        </div>
      </div>

      <AnimatePresence>
        {open && <ProjectModal project={project} onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
