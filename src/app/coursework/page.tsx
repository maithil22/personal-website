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
      <div className="mb-12">
        <p className="mb-3 text-xs font-medium uppercase tracking-widest text-[#6366f1]">
          University of Wisconsin–Madison · M.S. Computer Science
        </p>
        <h1 className="text-3xl font-bold text-[#ededed] sm:text-4xl">
          Coursework
        </h1>
        <div className="mt-3 h-px w-12 bg-[#6366f1]" />
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#888888]">
          Papers I&apos;ve read, projects I&apos;ve built, and assignments I&apos;ve worked
          through as part of my graduate coursework. Cards marked with a
          reflection contain my personal notes on the work.
        </p>
      </div>

      <CourseList />
    </main>
  );
}
