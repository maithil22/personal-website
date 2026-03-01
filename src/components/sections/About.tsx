"use client";

import { motion } from "framer-motion";

const skills: Record<string, string[]> = {
  Languages: ["Python", "Java", "C++", "JavaScript", "TypeScript", "SQL"],
  "ML & Data": [
    "TensorFlow",
    "Keras",
    "Scikit-learn",
    "OpenCV",
    "Pandas",
    "NumPy",
  ],
  "Web & APIs": ["React", "Node.js", "REST APIs", "gRPC", "Next.js"],
  Databases: ["MySQL", "MongoDB", "HBase", "Cassandra", "BigQuery"],
  "Big Data": ["Spark", "Kafka", "HDFS", "PyArrow"],
  DevOps: ["Docker", "Kubernetes", "Git", "Linux", "Bash"],
};

const education = [
  {
    school: "University of Wisconsin–Madison",
    degree: "M.S. Computer Science",
    period: "Sep 2025 – May 2027",
    gpa: "4.0 / 4.0",
    courses: "Distributed Systems, Foundational Models, ML, Big Data",
  },
  {
    school: "BITS Pilani",
    degree: "B.E. Computer Science · Minor in Data Science",
    period: "Aug 2018 – May 2022",
    gpa: "8.29 / 10.0",
    courses: "DSA, OOP, Database Systems, Operating Systems",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24" aria-labelledby="about-heading">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2
            id="about-heading"
            className="text-2xl font-bold text-[#ededed] sm:text-3xl"
          >
            About
          </h2>
          <div className="mt-2 h-px w-12 bg-[#6366f1]" />
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Bio + Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <p className="text-base leading-relaxed text-[#888888]">
              I&apos;m an M.S. Computer Science student at the{" "}
              <span className="text-[#ededed]">
                University of Wisconsin–Madison
              </span>{" "}
              (GPA 4.0), previously a{" "}
              <span className="text-[#ededed]">
                Senior Member Technical at D. E. Shaw Group
              </span>{" "}
              where I built large-scale data infrastructure and analytics
              platforms across three years.
            </p>
            <p className="text-base leading-relaxed text-[#888888]">
              My interests span distributed systems, machine learning, and
              full-stack engineering. I hold a B.E. in Computer Science with a
              Minor in Data Science from{" "}
              <span className="text-[#ededed]">BITS Pilani</span>, and I enjoy
              bridging deep systems knowledge with applied AI to ship things that
              scale.
            </p>

            {/* Education cards */}
            <div className="flex flex-col gap-3">
              {education.map((edu) => (
                <div
                  key={edu.school}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-semibold text-[#ededed]">
                        {edu.school}
                      </p>
                      <p className="text-xs text-[#888888]">{edu.degree}</p>
                    </div>
                    <span className="shrink-0 text-xs text-[#6366f1]">
                      {edu.gpa}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-[#888888]">
                    {edu.period} · {edu.courses}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            {Object.entries(skills).map(([group, items]) => (
              <div key={group}>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#6366f1]">
                  {group}
                </p>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#ededed]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
