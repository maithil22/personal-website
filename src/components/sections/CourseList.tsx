"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { coursework, courses } from "../../../data/coursework";
import type { EntryType } from "../../../data/coursework";
import CourseCard from "../ui/CourseCard";

const typeButtons: { type: EntryType; label: string }[] = [
  { type: "paper", label: "Papers" },
  { type: "project", label: "Projects" },
  { type: "assignment", label: "Assignments" },
];

// Semesters in order they appear in the course registry (not just entries,
// so a course can show up before any work for it has been logged)
const semesters = Array.from(new Set(courses.map((c) => c.semester)));

function coursesForSemester(semester: string) {
  return courses.filter((c) => c.semester === semester).map((c) => c.name);
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
        <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-widest text-ink-soft">
          Semester
        </p>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Select semester">
          {semesters.map((sem) => (
            <button
              key={sem}
              onClick={() => handleSemesterChange(sem)}
              aria-pressed={activeSemester === sem}
              className={`border-2 border-ink px-4 py-2 font-mono text-sm font-medium transition-colors ${
                activeSemester === sem
                  ? "bg-ink text-paper"
                  : "bg-paper text-ink hover:bg-ink/10"
              }`}
            >
              {sem}
            </button>
          ))}
        </div>
      </div>

      {/* ── Course (optional toggle within semester) ── */}
      <div>
        <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-widest text-ink-soft">
          Course
          {activeCourse && (
            <button
              onClick={() => setActiveCourse(null)}
              className="ml-3 normal-case tracking-normal text-accent hover:opacity-75"
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
                className={`border-2 border-ink px-3 py-1.5 font-mono text-xs font-medium transition-colors ${
                  isActive
                    ? "bg-ink text-paper"
                    : "bg-paper text-ink hover:bg-ink/10"
                }`}
              >
                {course}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Type (optional toggle) ── */}
      <div>
        <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-widest text-ink-soft">
          Type
          {activeType && (
            <button
              onClick={() => setActiveType(null)}
              className="ml-3 normal-case tracking-normal text-accent hover:opacity-75"
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
                className={`border-2 border-ink px-3 py-1.5 font-mono text-xs font-medium transition-colors ${
                  isActive
                    ? "bg-accent text-accent-ink"
                    : "bg-paper text-ink hover:bg-ink/10"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Entry count */}
      <p className="font-mono text-xs text-ink-soft">
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
        <p className="border-2 border-dashed border-ink/30 py-16 text-center font-mono text-sm text-ink-soft">
          No entries match the selected filters.
        </p>
      )}
    </div>
  );
}
