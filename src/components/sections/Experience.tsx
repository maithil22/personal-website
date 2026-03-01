"use client";

import { motion } from "framer-motion";

interface Role {
  company: string;
  location: string;
  title: string;
  period: string;
  bullets: string[];
}

const roles: Role[] = [
  {
    company: "The D. E. Shaw Group",
    location: "Hyderabad, India",
    title: "Senior Member Technical — Investor Relations",
    period: "Jul 2022 – Jun 2025",
    bullets: [
      "Built a scalable, modular Python ETL framework to consolidate global investor information from diverse sources, creating a unified data warehouse powering multiple dashboards.",
      "Implemented custom bitemporal versioning in SQL to track historical investor attributes across 10 million records, ensuring data integrity.",
      "Developed a centralized React dashboard aggregating analytics for 50+ Relationship Managers, cutting manual data reconciliation from 5 days to under 5 minutes.",
      "Optimized backend queries with distributed memory caching, added validation layers, and automated workflows, driving a 2.5× increase in user adoption.",
    ],
  },
  {
    company: "Amazon.com, Inc.",
    location: "Hyderabad, India",
    title: "Software Development Engineering Intern — Finance Automation",
    period: "Feb 2022 – Jun 2022",
    bullets: [
      "Automated discrepancy detection in vendor invoices using JavaScript and Ruby on Rails to surface edge cases in financial workflows, reducing manual review by 35%.",
      "Led migration of critical finance APIs in Java from on-premises infrastructure to native AWS, cutting operational overhead and lowering maintenance costs by 25%.",
    ],
  },
  {
    company: "Salesforce, Inc.",
    location: "Hyderabad, India",
    title: "Software Engineering Intern — Big Data Cloud",
    period: "Jun 2021 – Jul 2021",
    bullets: [
      "Built a multithreaded Python library to poll deployment metrics across data center nodes, tracking rollout types and per-node success/failure.",
      "Integrated the library with dashboards and alerting systems, enabling early anomaly detection and cutting deployment issue resolution time by 30%.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2
            id="experience-heading"
            className="text-2xl font-bold text-[#ededed] sm:text-3xl"
          >
            Experience
          </h2>
          <div className="mt-2 h-px w-12 bg-[#6366f1]" />
        </motion.div>

        <div className="relative flex flex-col gap-0">
          {/* Vertical timeline line */}
          <div className="absolute left-[7px] top-2 hidden h-[calc(100%-2rem)] w-px bg-white/10 md:block" />

          {roles.map((role, i) => (
            <motion.div
              key={role.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative mb-10 md:pl-8"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-1.5 hidden h-3.5 w-3.5 rounded-full border-2 border-[#6366f1] bg-[#0a0a0a] md:block" />

              <div className="rounded-xl border border-white/10 bg-[#111111] p-5">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="font-semibold text-[#ededed]">
                      {role.company}
                    </p>
                    <p className="text-sm text-[#888888]">{role.title}</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-xs font-medium text-[#6366f1]">
                      {role.period}
                    </p>
                    <p className="text-xs text-[#888888]">{role.location}</p>
                  </div>
                </div>

                <ul className="mt-4 flex flex-col gap-2">
                  {role.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-2 text-sm text-[#888888]">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#6366f1]" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
