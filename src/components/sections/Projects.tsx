"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../../data/projects";
import type { ProjectCategory } from "../../../data/projects";
import ProjectCard from "../ui/ProjectCard";

type Filter = "All" | ProjectCategory;

const filters: Filter[] = ["All", "Systems", "AI/ML", "Full-Stack"];

export default function Projects() {
  const [active, setActive] = useState<Filter>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2
            id="projects-heading"
            className="text-2xl font-bold text-[#ededed] sm:text-3xl"
          >
            Projects
          </h2>
          <div className="mt-2 h-px w-12 bg-[#6366f1]" />
        </motion.div>

        {/* Filter bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-8 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter projects by category"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`relative rounded-lg px-4 py-1.5 text-sm font-medium transition-colors ${
                active === filter
                  ? "text-[#ededed]"
                  : "text-[#888888] hover:text-[#ededed]"
              }`}
              aria-pressed={active === filter}
            >
              {active === filter && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-lg bg-[#6366f1]/20 ring-1 ring-[#6366f1]/50"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative">{filter}</span>
            </button>
          ))}
        </motion.div>

        {/* Card grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
