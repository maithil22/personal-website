import type { Metadata } from "next";
import CourseList from "@/components/sections/CourseList";

export const metadata: Metadata = {
  title: "Coursework — Maithil Mehta",
  description:
    "Research papers, projects, and assignments from my MS in Computer Science at UW–Madison.",
};

export default function CourseworkPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 pb-24 pt-32">
      <div className="mb-12 border-b-[3px] border-ink pb-6">
        <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-ink-soft">
          University of Wisconsin–Madison · M.S. Computer Science
        </p>
        <h1 className="font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
          Coursework<span className="text-accent">.</span>
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-soft">
          Papers I&apos;ve read, projects I&apos;ve built, and assignments I&apos;ve worked
          through as part of my graduate coursework. Cards marked with a
          reflection contain my personal notes on the work.
        </p>
      </div>

      <CourseList />
    </main>
  );
}
