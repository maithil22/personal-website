"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, FileText, ExternalLink, ChevronDown, BookOpen, FlaskConical, ClipboardList } from "lucide-react";
import type { CourseEntry } from "../../../data/coursework";

const typeConfig = {
  paper: {
    label: "Paper",
    icon: BookOpen,
    style: "text-indigo-400 bg-indigo-400/10 border-indigo-400/20",
  },
  project: {
    label: "Project",
    icon: FlaskConical,
    style: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  },
  assignment: {
    label: "Assignment",
    icon: ClipboardList,
    style: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  },
};

export default function CourseCard({ entry }: { entry: CourseEntry }) {
  const [expanded, setExpanded] = useState(false);
  const config = typeConfig[entry.type];
  const Icon = config.icon;
  const hasLinks =
    entry.links?.paper || entry.links?.github || entry.links?.demo;

  return (
    <div className="flex flex-col rounded-xl border border-white/10 bg-[#111111] transition-colors hover:border-white/20">
      {/* Header */}
      <div className="flex flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${config.style}`}
          >
            <Icon size={11} />
            {config.label}
          </span>
          <span className="shrink-0 text-xs text-[#555]">{entry.semester}</span>
        </div>

        <div>
          <h3 className="text-sm font-semibold leading-snug text-[#ededed]">
            {entry.title}
          </h3>
          {entry.authors && (
            <p className="mt-0.5 text-xs text-[#555]">
              {entry.authors}
              {entry.year ? ` · ${entry.year}` : ""}
            </p>
          )}
        </div>

        <p className="text-xs leading-relaxed text-[#888888]">
          {entry.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-white/8 bg-white/5 px-2 py-0.5 text-[11px] text-[#666]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer: links + reflection toggle */}
      <div className="flex items-center justify-between border-t border-white/8 px-5 py-3">
        <div className="flex items-center gap-3">
          {entry.links?.paper && (
            <a
              href={entry.links.paper}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Paper"
              className="text-[#555] transition-colors hover:text-[#ededed]"
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
              className="text-[#555] transition-colors hover:text-[#ededed]"
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
              className="text-[#555] transition-colors hover:text-[#ededed]"
            >
              <ExternalLink size={15} />
            </a>
          )}
          {!hasLinks && <span className="text-[11px] text-[#444]">—</span>}
        </div>

        {entry.reflection && (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="flex items-center gap-1 text-xs text-[#6366f1] transition-opacity hover:opacity-80"
            aria-expanded={expanded}
          >
            My reflection
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
            <div className="border-t border-[#6366f1]/20 bg-[#6366f1]/5 px-5 py-4">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-[#6366f1]">
                My Reflection
              </p>
              <p className="text-xs leading-relaxed text-[#999]">
                {entry.reflection}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
