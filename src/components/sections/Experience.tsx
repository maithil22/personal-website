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
    title: "Software Engineering Intern — Infrastructure Automation & Tooling",
    period: "May 2026 – Aug 2026",
    bullets: [
      "Built and productionized an LLM agent (Python, GPT-4o, Claude Opus) that lets non-technical users query a 50TB infrastructure data warehouse in natural language, replacing manual API lookups across 45+ REST endpoints.",
      "Designed an agent harness around a state-machine loop (tool call, think, observe, code, respond) where the model picks each step, with an MCP tool layer, parameter validation, response caching, and resumable session summaries.",
      "Built a 200-query eval set (50 hand-written, 150 LLM-generated and reviewed) on which the agent reached 90% task accuracy and 95.3% step-level trajectory match.",
    ],
  },
  {
    company: "The D. E. Shaw Group",
    location: "Hyderabad, India",
    title: "Senior Member Technical (Software Engineer) — Investor Relations",
    period: "Jul 2022 – Jun 2025",
    bullets: [
      "Led the design and build of a temporal data platform (Python, PostgreSQL, Kafka, React) over 100M+ records of fund performance and risk metrics, serving 100+ internal users. Dashboard users grew 2.5× within a month of launch and manual on-call data requests fell to near zero.",
      "Prototyped an LLM-powered (GPT-4) natural-language-to-chart tool that generated internal query-language and plotting code with sandboxed execution, and helped design eval questions for the fine-tuned query-language model.",
      "Cut data validation turnaround from 3–4 days to ~30 minutes with rule-based anomaly checks on statistics.",
    ],
  },
  {
    company: "Amazon",
    location: "Hyderabad, India",
    title: "Software Engineering Intern — Finance Automation",
    period: "Feb 2022 – Jun 2022",
    bullets: [
      "Migrated 15 finance APIs from on-premises Java services to AWS (Lambda, S3, EC2), cutting infrastructure costs by 25%, and reworked business logic, data models, and unit tests for the new APIs.",
      "Built JavaScript and Ruby on Rails tooling that flags discrepancies between vendor invoices and goods Amazon actually received (damaged or incorrect items), routing them to vendors for explanation and reconciliation.",
    ],
  },
  {
    company: "Salesforce",
    location: "Hyderabad, India",
    title: "Software Engineering Intern — Big Data",
    period: "Jun 2021 – Jul 2021",
    bullets: [
      "Built a multithreaded Python service that polls HBase clusters across data centers for RPM deployment status, powering the production dashboard and cutting failed-deployment root-cause time by 30%.",
      "Won the company-wide intern hackathon (200+ interns) as part of a 3-person team with a computer-vision 2FA liveness check that detects facial micro-movements from screen-light reflections.",
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
