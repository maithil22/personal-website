"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { Github, Linkedin, FileDown, ExternalLink, ArrowDown } from "lucide-react";

const RESUME_DRIVE_URL =
  "https://drive.google.com/file/d/1ZV9zxawk9p-bDVuh2OMpsCT-WhG_hFkn/view?usp=sharing";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const amp = shouldReduceMotion ? 0 : 1;
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 100 * amp]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 90 * amp]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 1 - 0.7 * amp]);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 180 * amp]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 1 - 0.15 * amp]);
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden border-b-[3px] border-ink"
      aria-label="Introduction"
    >
      {/* Graph-paper texture — drifts slower than content on scroll */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          y: gridY,
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid w-full max-w-5xl items-center gap-12 px-6 py-28 md:grid-cols-[1.2fr_1fr]">
        {/* ── Text column ── */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          style={{ y: textY, opacity: textOpacity }}
          className="flex flex-col items-start gap-6"
        >
          <motion.p
            variants={item}
            className="inline-flex items-center gap-2 border-2 border-ink px-3 py-1 font-mono text-xs font-medium uppercase tracking-widest text-ink"
          >
            <span className="h-2 w-2 bg-accent" />
            M.S. Computer Science · UW–Madison
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-ink sm:text-6xl md:text-7xl"
          >
            Maithil
            <br />
            Mehta
            <span className="text-accent">.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="max-w-lg border-l-[3px] border-ink pl-4 text-base leading-relaxed text-ink-soft sm:text-lg"
          >
            Building at the intersection of{" "}
            <span className="font-semibold text-ink">Systems</span>,{" "}
            <span className="font-semibold text-ink">AI</span>, and{" "}
            <span className="font-semibold text-ink">Full-Stack</span>{" "}
            engineering.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="brut-press border-2 border-ink bg-ink px-5 py-2.5 font-mono text-sm font-medium uppercase tracking-wide text-paper brut-shadow-sm"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="brut-press flex items-center gap-2 border-2 border-ink bg-paper px-5 py-2.5 font-mono text-sm font-medium uppercase tracking-wide text-ink brut-shadow-sm"
            >
              <FileDown size={15} />
              Resume
            </a>
            <a
              href={RESUME_DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume on Google Drive"
              className="brut-press flex h-11 w-11 items-center justify-center border-2 border-ink bg-paper text-ink brut-shadow-sm"
              title="Resume on Google Drive"
            >
              <ExternalLink size={18} />
            </a>
            <a
              href="https://github.com/maithil22"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="brut-press flex h-11 w-11 items-center justify-center border-2 border-ink bg-paper text-ink brut-shadow-sm"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/maithil-rupesh-mehta-35a603171/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="brut-press flex h-11 w-11 items-center justify-center border-2 border-ink bg-paper text-ink brut-shadow-sm"
            >
              <Linkedin size={18} />
            </a>
          </motion.div>
        </motion.div>

        {/* ── Photo block ── */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          style={{ y: photoY, scale: photoScale }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative h-64 w-64 sm:h-72 sm:w-72">
            <div className="absolute -bottom-4 -right-4 h-full w-full bg-accent" />
            <div className="relative h-full w-full overflow-hidden border-[3px] border-ink">
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

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{ opacity: indicatorOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 font-mono"
        >
          <span className="text-[10px] uppercase tracking-widest text-ink-soft">
            scroll
          </span>
          <ArrowDown size={16} className="text-ink-soft" />
        </motion.div>
      </motion.div>
    </section>
  );
}
