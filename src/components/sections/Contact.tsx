"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, FileDown } from "lucide-react";

const links = [
  {
    href: "mailto:maithil.mehta@wisc.edu",
    icon: Mail,
    label: "Email",
    external: false,
  },
  {
    href: "https://www.linkedin.com/in/maithil-rupesh-mehta-35a603171/",
    icon: Linkedin,
    label: "LinkedIn",
    external: true,
  },
  {
    href: "https://github.com/maithil22",
    icon: Github,
    label: "GitHub",
    external: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-ink py-24 text-paper"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-end justify-between border-b-[3px] border-paper pb-3"
        >
          <h2
            id="contact-heading"
            className="font-display text-3xl font-bold uppercase tracking-tight text-paper sm:text-4xl"
          >
            Contact
          </h2>
          <span className="font-mono text-sm text-paper/60">04 / 04</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col items-start gap-8 border-2 border-paper p-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="max-w-md">
            <p className="font-display text-2xl font-bold uppercase text-paper">
              Let&apos;s build something<span className="text-accent">.</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-paper/70">
              Open to research collaborations, internships, and full-time
              opportunities. Reach out any time.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap gap-3">
              {links.map(({ href, icon: Icon, label, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2 border-2 border-paper px-4 py-2 font-mono text-xs uppercase tracking-wide text-paper transition-colors hover:bg-paper hover:text-ink"
                >
                  <Icon size={15} />
                  {label}
                </a>
              ))}
            </div>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="brut-press flex items-center justify-center gap-2 border-2 border-accent bg-accent px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wide text-accent-ink brut-shadow-paper"
            >
              <FileDown size={15} />
              View Resume
            </a>
          </div>
        </motion.div>
      </div>

      <div className="mt-16 border-t-2 border-paper/20 py-6 text-center font-mono text-xs text-paper/50">
        © {new Date().getFullYear()} Maithil Mehta. Built with Next.js &amp;
        Tailwind CSS.
      </div>
    </section>
  );
}
