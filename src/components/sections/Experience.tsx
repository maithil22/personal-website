"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

interface Role {
  company: string;
  location: string;
  title: string;
  period: string;
  bullets: string[];
}

const roles: Role[] = [
  {
    company: "MathWorks",
    location: "Natick, MA",
    title: "Software Engineering Intern",
    period: "May 2026 – Aug 2026",
    bullets: [
      "Built an autonomous LLM agent for a 50TB infrastructure data warehouse, using MCP tool-calling and schema-driven APIs to translate natural language into validated queries across 45+ endpoints.",
      "Engineered the agent's reasoning framework for multi-step planning, parameter extraction, and sequential/parallel API workflows, with caching, validation, and enterprise SSO for safe data access.",
    ],
  },
  {
    company: "The D. E. Shaw Group",
    location: "Hyderabad, India",
    title: "Senior Member Technical — Investor Relations",
    period: "Jul 2022 – Jun 2025",
    bullets: [
      "Architected a data platform with temporal modeling (Python, SQL) over 100M+ records, delivering a 2.5× growth in active platform usage through optimized query pipelines and automated validation workflows.",
      "Shipped a React full-stack Language-to-Visualization tool used by 100+ stakeholders, enabling natural language-driven analytical plot generation and eliminating dependency on analyst intermediaries for ad-hoc reporting.",
      "Reduced data validation turnaround from days to hours by engineering automated anomaly detection and reconciliation pipelines across multiple upstream data feeds.",
    ],
  },
  {
    company: "Amazon.com, Inc.",
    location: "Hyderabad, India",
    title: "Software Development Engineering Intern — Finance Automation",
    period: "Feb 2022 – Jun 2022",
    bullets: [
      "Reduced manual finance review effort by 35% by building JavaScript and Ruby on Rails tooling that automatically surfaced edge-case discrepancies in vendor invoice workflows across high-volume transaction data.",
      "Cut operational maintenance costs by 25% by leading migration of critical finance APIs from on-premises Java infrastructure to native AWS, improving reliability and reducing deployment overhead.",
    ],
  },
  {
    company: "Salesforce, Inc.",
    location: "Hyderabad, India",
    title: "Software Engineering Intern — Big Data Cloud",
    period: "Jun 2021 – Jul 2021",
    bullets: [
      "Slashed incident resolution time by 30% by building a multithreaded Python library for real-time deployment metric tracking across distributed data centers, with integrated alerting and anomaly detection.",
      "Won the company-wide intern hackathon (competing against 200+ interns) by engineering a computer-vision-based 2FA liveness verification system using OpenCV and TensorFlow.",
    ],
  },
];

function RoleCard({ role, index }: { role: Role; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const amp = shouldReduceMotion ? 0 : 1;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.35"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [-36 * amp, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.15, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ x, opacity }}
      className="relative overflow-hidden border-2 border-paper p-6"
    >
      <span
        className="pointer-events-none absolute -right-2 -top-6 select-none font-display text-8xl font-bold text-paper/[0.06]"
        aria-hidden
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-semibold text-paper">{role.company}</p>
          <p className="text-sm text-paper/70">{role.title}</p>
        </div>
        <div className="text-left sm:text-right">
          <p className="border-2 border-accent bg-accent/10 px-2 py-0.5 font-mono text-xs font-medium text-accent">
            {role.period}
          </p>
          <p className="mt-1 font-mono text-xs text-paper/50">
            {role.location}
          </p>
        </div>
      </div>

      <ul className="relative mt-4 flex flex-col gap-2">
        {role.bullets.map((bullet, j) => (
          <li key={j} className="flex gap-2 text-sm text-paper/70">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-accent" />
            {bullet}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: lineProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.75", "end 0.25"],
  });

  return (
    <section
      id="experience"
      className="border-b-[3px] border-ink bg-ink py-24 text-paper"
      aria-labelledby="experience-heading"
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
            id="experience-heading"
            className="font-display text-3xl font-bold uppercase tracking-tight text-paper sm:text-4xl"
          >
            Experience
          </h2>
          <span className="font-mono text-sm text-paper/60">02 / 04</span>
        </motion.div>

        <div ref={containerRef} className="relative flex flex-col gap-6 pl-6 md:pl-10">
          {/* Track */}
          <div
            className="absolute left-0 top-1 hidden h-[calc(100%-0.5rem)] w-[3px] bg-paper/15 md:block"
            aria-hidden
          />
          <motion.div
            className="absolute left-0 top-1 hidden h-[calc(100%-0.5rem)] w-[3px] bg-accent md:block"
            style={{ scaleY: lineProgress, transformOrigin: "top" }}
            aria-hidden
          />

          {roles.map((role, i) => (
            <RoleCard key={role.company} role={role} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
