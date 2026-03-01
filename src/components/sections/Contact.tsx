"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, FileDown } from "lucide-react";

const links = [
  {
    href: "mailto:mmehta28@wisc.edu",
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
      className="py-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-8 text-center"
        >
          <div>
            <h2
              id="contact-heading"
              className="text-2xl font-bold text-[#ededed] sm:text-3xl"
            >
              Get in Touch
            </h2>
            <div className="mx-auto mt-2 h-px w-12 bg-[#6366f1]" />
            <p className="mt-4 max-w-md text-base text-[#888888]">
              Open to research collaborations, internships, and full-time
              opportunities. Reach out any time.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {links.map(({ href, icon: Icon, label, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-[#888888] transition-colors hover:border-white/20 hover:text-[#ededed]"
              >
                <Icon size={16} />
                {label}
              </a>
            ))}
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-[#6366f1] px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            <FileDown size={15} />
            Download Resume
          </a>
        </motion.div>
      </div>

      <div className="mt-20 border-t border-white/10 py-6 text-center text-xs text-[#888888]">
        © {new Date().getFullYear()} Maithil Mehta. Built with Next.js &amp;
        Tailwind CSS.
      </div>
    </section>
  );
}
