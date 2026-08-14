"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, FileText, ExternalLink, ChevronDown, BookOpen, FlaskConical, ClipboardList } from "lucide-react";
import type { CourseEntry } from "../../../data/coursework";

const typeConfig = {
  paper: {
    label: "Paper",
    icon: BookOpen,
    style: "bg-[#8ecbff] text-ink border-ink",
  },
  project: {
    label: "Project",
    icon: FlaskConical,
    style: "bg-[#8ff0b0] text-ink border-ink",
  },
  assignment: {
    label: "Assignment",
    icon: ClipboardList,
    style: "bg-[#ffd85e] text-ink border-ink",
  },
};

export default function CourseCard({ entry }: { entry: CourseEntry }) {
  const [expanded, setExpanded] = useState(false);
  const config = typeConfig[entry.type];
  const Icon = config.icon;
  const hasLinks =
    entry.links?.paper || entry.links?.github || entry.links?.demo;

  return (
    <div className="brut-press flex h-full flex-col border-2 border-ink bg-paper brut-shadow-sm">
      {/* Header */}
      <div className="flex flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <span
            className={`inline-flex items-center gap-1.5 border-2 px-2.5 py-0.5 font-mono text-xs font-semibold ${config.style}`}
          >
            <Icon size={11} />
            {config.label}
          </span>
          <span className="shrink-0 font-mono text-xs text-ink-soft">
            {entry.semester}
          </span>
        </div>

        <div>
          <h3 className="text-sm font-semibold leading-snug text-ink">
            {entry.title}
          </h3>
          {entry.authors && (
            <p className="mt-0.5 font-mono text-xs text-ink-soft">
              {entry.authors}
              {entry.year ? ` · ${entry.year}` : ""}
            </p>
          )}
        </div>

        <p className="text-xs leading-relaxed text-ink-soft">
          {entry.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className="border border-ink/30 px-2 py-0.5 font-mono text-[11px] text-ink-soft"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer: links + reflection toggle */}
      <div className="mt-auto flex items-center justify-between border-t-2 border-ink px-5 py-3">
        <div className="flex items-center gap-3">
          {entry.links?.paper && (
            <a
              href={entry.links.paper}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Paper"
              className="text-ink-soft transition-colors hover:text-accent"
            >
              <FileText size={15} />
            </a>
          )}
          {entry.links?.github && (
            <a
              href={entry.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-ink-soft transition-colors hover:text-accent"
            >
              <Github size={15} />
            </a>
          )}
          {entry.links?.demo && (
            <a
              href={entry.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Demo"
              className="text-ink-soft transition-colors hover:text-accent"
            >
              <ExternalLink size={15} />
            </a>
          )}
          {!hasLinks && <span className="font-mono text-[11px] text-ink-soft/60">—</span>}
        </div>

        {entry.reflection && (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="flex items-center gap-1 font-mono text-xs uppercase tracking-wide text-ink transition-opacity hover:text-accent"
            aria-expanded={expanded}
          >
            Reflection
            <motion.span
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="inline-flex"
            >
              <ChevronDown size={13} />
            </motion.span>
          </button>
        )}
      </div>

      {/* Expandable reflection */}
      <AnimatePresence initial={false}>
        {expanded && entry.reflection && (
          <motion.div
            key="reflection"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border-t-2 border-ink bg-accent/10 px-5 py-4">
              <p className="mb-2 font-mono text-[10px] font-semibold uppercase tracking-widest text-ink">
                My Reflection
              </p>
              <p className="text-xs leading-relaxed text-ink-soft">
                {entry.reflection}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
