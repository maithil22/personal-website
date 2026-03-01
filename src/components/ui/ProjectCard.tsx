import { motion } from "framer-motion";
import { Github, FileText, ExternalLink } from "lucide-react";
import type { Project } from "../../../data/projects";

const categoryColors: Record<string, string> = {
  Systems: "text-sky-400 bg-sky-400/10 border-sky-400/20",
  "AI/ML": "text-violet-400 bg-violet-400/10 border-violet-400/20",
  "Full-Stack": "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const categoryStyle =
    categoryColors[project.category] ??
    "text-gray-400 bg-gray-400/10 border-gray-400/20";

  return (
    <motion.div
      whileHover={{ scale: 1.02, borderColor: "rgba(99,102,241,0.5)" }}
      transition={{ duration: 0.2 }}
      className="flex flex-col gap-4 rounded-xl border border-white/10 bg-[#111111] p-6"
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium ${categoryStyle}`}
        >
          {project.category}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-[#ededed]">
          {project.title}
        </h3>
        <p className="line-clamp-3 text-sm leading-relaxed text-[#888888]">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-[#888888]"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center gap-3 border-t border-white/10 pt-4">
        {project.links.github !== undefined && (
          <a
            href={project.links.github || "#"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub repository"
            className="text-[#888888] transition-colors hover:text-[#ededed]"
          >
            <Github size={16} />
          </a>
        )}
        {project.links.paper !== undefined && (
          <a
            href={project.links.paper || "#"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Paper"
            className="text-[#888888] transition-colors hover:text-[#ededed]"
          >
            <FileText size={16} />
          </a>
        )}
        {project.links.demo !== undefined && (
          <a
            href={project.links.demo || "#"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Live demo"
            className="text-[#888888] transition-colors hover:text-[#ededed]"
          >
            <ExternalLink size={16} />
          </a>
        )}
      </div>
    </motion.div>
  );
}
