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
    <section id="projects" className="border-b-[3px] border-ink py-24" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-end justify-between border-b-[3px] border-ink pb-3"
        >
          <h2
            id="projects-heading"
            className="font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl"
          >
            Projects
          </h2>
          <span className="font-mono text-sm text-ink-soft">03 / 04</span>
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
              className={`border-2 border-ink px-4 py-1.5 font-mono text-sm font-medium uppercase transition-colors ${
                active === filter
                  ? "bg-ink text-paper"
                  : "bg-paper text-ink hover:bg-ink/10"
              }`}
              aria-pressed={active === filter}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Card grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
