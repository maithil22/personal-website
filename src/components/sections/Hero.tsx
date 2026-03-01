"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Github, Linkedin, FileDown, ArrowDown } from "lucide-react";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item: Variants = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
      aria-label="Introduction"
    >
      {/* Floating background orbs */}
      <motion.div
        className="pointer-events-none absolute -top-48 left-1/3 h-[560px] w-[560px] rounded-full bg-indigo-600/10 blur-[130px]"
        animate={{ scale: [1, 1.18, 1], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-32 right-1/4 h-[420px] w-[420px] rounded-full bg-purple-600/10 blur-[110px]"
        animate={{ scale: [1, 1.22, 1], opacity: [0.3, 0.65, 0.3] }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.div
        className="pointer-events-none absolute left-10 top-1/3 h-[200px] w-[200px] rounded-full bg-sky-600/5 blur-[80px]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Main content — two-column on md+ */}
      <div className="relative z-10 mx-auto grid w-full max-w-5xl items-center gap-12 px-6 py-28 md:grid-cols-2">
        {/* ── Text column ── */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-6 text-center md:items-start md:text-left"
        >
          <motion.p
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-widest text-[#888888]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#6366f1]" />
            Masters in Computer Science · UW–Madison
          </motion.p>

          <motion.h1
            variants={item}
            className="text-4xl font-bold leading-tight tracking-tight text-[#ededed] sm:text-5xl md:text-6xl"
          >
            Maithil{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Mehta
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="max-w-lg text-base leading-relaxed text-[#888888] sm:text-lg"
          >
            Building at the intersection of{" "}
            <span className="font-medium text-[#ededed]">Systems</span>,{" "}
            <span className="font-medium text-[#ededed]">AI</span>, and{" "}
            <span className="font-medium text-[#ededed]">Full-Stack</span>{" "}
            engineering.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-wrap items-center justify-center gap-3 md:justify-start"
          >
            <a
              href="#projects"
              className="rounded-lg bg-[#6366f1] px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-indigo-500/25 transition-opacity hover:opacity-90"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-[#ededed] transition-colors hover:bg-white/10"
            >
              <FileDown size={15} />
              View Resume
            </a>
            <a
              href="https://github.com/maithil22"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-[#888888] transition-colors hover:text-[#ededed]"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/maithil-rupesh-mehta-35a603171/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-[#888888] transition-colors hover:text-[#ededed]"
            >
              <Linkedin size={18} />
            </a>
          </motion.div>
        </motion.div>

        {/* ── Photo placeholder column ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="relative h-64 w-64 md:h-80 md:w-80">
            {/* Ambient glow behind the ring */}
            <div className="absolute inset-4 rounded-full bg-indigo-500/20 blur-3xl" />

            {/* Rotating conic-gradient border ring */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, #6366f1, #8b5cf6, #ec4899, #06b6d4, #6366f1)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            />

            {/* Static inner photo (sibling, not child — won't rotate) */}
            <div className="absolute inset-[3px] overflow-hidden rounded-full">
              <Image
                src="/photo.jpeg"
                alt="Maithil Mehta"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bouncing scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-[10px] uppercase tracking-widest text-[#555]">
            scroll
          </span>
          <ArrowDown size={16} className="text-[#555]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
