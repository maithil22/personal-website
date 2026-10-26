"use client";

import { motion } from "framer-motion";

const skills: Record<string, string[]> = {
  Languages: [
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
    "SQL",
    "C++",
    "C",
    "Ruby",
    "HTML",
    "CSS",
    "React",
    "Ruby on Rails",
  ],
  "Machine Learning & Data Science": [
    "PyTorch",
    "TensorFlow",
    "Keras",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "OpenCV",
  ],
  "Generative AI & LLMs": [
    "HuggingFace Transformers",
    "OpenAI/Anthropic APIs",
    "MCP",
    "PEFT",
    "RAG",
    "LLM Eval",
    "Quantization",
    "Diffusion Models",
    "Prompt Engineering",
  ],
  "Big Data & Distributed Systems": [
    "Postgres",
    "Spark",
    "PyArrow",
    "HBase",
    "ChromaDB",
    "Qdrant",
    "Cassandra",
    "Kafka",
    "MySQL",
    "MongoDB",
  ],
  "DevOps & Tools": [
    "AWS (Lambda, S3, EC2)",
    "Git",
    "Docker",
    "Kubernetes",
    "Linux",
    "Bash/Shell",
    "Node.js",
    "gRPC",
  ],
  "Software Development Practices": [
    "Agile",
    "REST APIs",
    "CI/CD",
    "Unit Testing",
  ],
};

const education = [
  {
    school: "University of Wisconsin–Madison",
    degree: "M.S. Computer Science",
    period: "Sep 2025 – Dec 2026",
    gpa: "4.0 / 4.0",
    courses:
      "AI Agents, Foundation Models, Computer Vision, Machine Learning, Distributed Systems, HPC, Big Data",
    note: "Teaching Assistant — Data Management for Data Science",
  },
  {
    school: "BITS Pilani",
    degree: "B.E. Computer Science · Minor in Data Science",
    period: "Aug 2018 – May 2022",
    gpa: "8.29 / 10.0",
    courses:
      "Data Structures & Algorithms, Foundations of Data Science, Information Retrieval, Graph Mining",
  },
];

export default function About() {
  return (
    <section id="about" className="border-b-[3px] border-ink py-24" aria-labelledby="about-heading">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-end justify-between border-b-[3px] border-ink pb-3"
        >
          <h2
            id="about-heading"
            className="font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl"
          >
            About
          </h2>
          <span className="font-mono text-sm text-ink-soft">01 / 04</span>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Bio + Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <p className="text-base leading-relaxed text-ink-soft">
              I&apos;m an M.S. Computer Science student at the{" "}
              <span className="font-semibold text-ink">
                University of Wisconsin–Madison
              </span>{" "}
              (GPA 4.0), most recently a Software Engineering Intern at{" "}
              <span className="font-semibold text-ink">MathWorks</span>, and
              previously a{" "}
              <span className="font-semibold text-ink">
                Senior Member Technical at D. E. Shaw Group
              </span>{" "}
              where I built large-scale data infrastructure and analytics
              platforms across three years.
            </p>
            <p className="text-base leading-relaxed text-ink-soft">
              My interests span distributed systems, machine learning, and
              full-stack engineering. I hold a B.E. in Computer Science with a
              Minor in Data Science from{" "}
              <span className="font-semibold text-ink">BITS Pilani</span>, and
              I enjoy bridging deep systems knowledge with applied AI to ship
              things that scale.
            </p>

            {/* Education cards */}
            <div className="flex flex-col gap-4 pt-2">
              {education.map((edu) => (
                <div
                  key={edu.school}
                  className="border-2 border-ink bg-paper p-4 brut-shadow-sm"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-semibold text-ink">
                        {edu.school}
                      </p>
                      <p className="font-mono text-xs text-ink-soft">
                        {edu.degree}
                      </p>
                    </div>
                    <span className="shrink-0 border-2 border-ink bg-accent px-1.5 py-0.5 font-mono text-xs font-semibold text-accent-ink">
                      {edu.gpa}
                    </span>
                  </div>
                  <p className="mt-2 font-mono text-xs text-ink-soft">
                    {edu.period} · {edu.courses}
                  </p>
                  {edu.note && (
                    <p className="mt-1 font-mono text-xs text-accent">
                      {edu.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            {Object.entries(skills).map(([group, items]) => (
              <div key={group}>
                <p className="mb-2 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-ink">
                  <span className="h-2 w-2 bg-accent" />
                  {group}
                </p>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="border-2 border-ink bg-paper px-2.5 py-1 font-mono text-xs text-ink"
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
