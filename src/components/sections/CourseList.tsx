"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { coursework } from "../../../data/coursework";
import type { EntryType } from "../../../data/coursework";
import CourseCard from "../ui/CourseCard";

const typeButtons: { type: EntryType; label: string }[] = [
  { type: "paper", label: "Papers" },
  { type: "project", label: "Projects" },
  { type: "assignment", label: "Assignments" },
];

// Semesters in order they appear in the data
const semesters = Array.from(new Set(coursework.map((e) => e.semester)));

function coursesForSemester(semester: string) {
  return Array.from(
    new Set(coursework.filter((e) => e.semester === semester).map((e) => e.course))
  );
}

const defaultSemester = semesters[0];
const defaultCourse = coursesForSemester(defaultSemester)[0] ?? null;
const defaultType: EntryType = "paper";

export default function CourseList() {
  const [activeSemester, setActiveSemester] = useState(defaultSemester);
  const [activeCourse, setActiveCourse] = useState<string | null>(defaultCourse);
  const [activeType, setActiveType] = useState<EntryType | null>(defaultType);

  const semesterCourses = useMemo(
    () => coursesForSemester(activeSemester),
    [activeSemester]
  );

  const filtered = coursework.filter((e) => {
    return (
      e.semester === activeSemester &&
      (!activeCourse || e.course === activeCourse) &&
      (!activeType || e.type === activeType)
    );
  });

  function handleSemesterChange(sem: string) {
    setActiveSemester(sem);
    setActiveCourse(coursesForSemester(sem)[0] ?? null); // default to first course in new semester
    setActiveType(defaultType);
  }

  return (
    <div className="flex flex-col gap-10">
      {/* ── Semester (required, single-select) ── */}
      <div>
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-[#444]">
          Semester
        </p>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Select semester">
          {semesters.map((sem) => (
            <button
              key={sem}
              onClick={() => handleSemesterChange(sem)}
              aria-pressed={activeSemester === sem}
              className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                activeSemester === sem
                  ? "text-[#ededed]"
                  : "text-[#888888] hover:text-[#ededed]"
              }`}
            >
              {activeSemester === sem && (
                <motion.span
                  layoutId="semester-pill"
                  className="absolute inset-0 rounded-lg bg-[#6366f1]/20 ring-1 ring-[#6366f1]/50"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative">{sem}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Course (optional toggle within semester) ── */}
      <div>
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-[#444]">
          Course
          {activeCourse && (
            <button
              onClick={() => setActiveCourse(null)}
              className="ml-3 normal-case tracking-normal text-[#6366f1] hover:opacity-75"
            >
              Clear
            </button>
          )}
        </p>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by course">
          {semesterCourses.map((course) => {
            const isActive = activeCourse === course;
            return (
              <button
                key={course}
                onClick={() => setActiveCourse(isActive ? null : course)}
                aria-pressed={isActive}
                className={`relative rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  isActive
                    ? "text-[#ededed]"
                    : "text-[#888888] hover:text-[#ededed]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="course-pill"
                    className="absolute inset-0 rounded-lg bg-[#6366f1]/20 ring-1 ring-[#6366f1]/50"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{course}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Type (optional toggle) ── */}
      <div>
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-[#444]">
          Type
          {activeType && (
            <button
              onClick={() => setActiveType(null)}
              className="ml-3 normal-case tracking-normal text-[#6366f1] hover:opacity-75"
            >
              Clear
            </button>
          )}
        </p>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by type">
          {typeButtons.map(({ type, label }) => {
            const isActive = activeType === type;
            return (
              <button
                key={type}
                onClick={() => setActiveType(isActive ? null : type)}
                aria-pressed={isActive}
                className={`relative rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  isActive
                    ? "text-[#ededed]"
                    : "text-[#888888] hover:text-[#ededed]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="type-pill"
                    className="absolute inset-0 rounded-lg bg-white/10 ring-1 ring-white/20"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Entry count */}
      <p className="text-xs text-[#444]">
        {filtered.length} {filtered.length === 1 ? "entry" : "entries"}
      </p>

      {/* Cards */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((entry) => (
            <motion.div
              key={entry.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
            >
              <CourseCard entry={entry} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-sm text-[#555]">
          No entries match the selected filters.
        </p>
      )}
    </div>
  );
}
