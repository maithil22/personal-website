"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll } from "framer-motion";
import { Github } from "lucide-react";

const homeLinks = [
  { label: "About", href: "/#about", id: "about" },
  { label: "Experience", href: "/#experience", id: "experience" },
  { label: "Projects", href: "/#projects", id: "projects" },
  { label: "Contact", href: "/#contact", id: "contact" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(null);
      return;
    }

    const sections = homeLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b-[3px] border-ink bg-paper transition-shadow duration-200 ${
        scrolled ? "shadow-[0_4px_0_0_rgba(17,17,16,0.08)]" : ""
      }`}
    >
      {/* Scroll progress — grows over the bottom border as the page scrolls */}
      <motion.div
        className="absolute bottom-0 left-0 z-10 h-[3px] w-full origin-left bg-accent"
        style={{ scaleX: scrollYProgress }}
      />

      <nav
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
        aria-label="Primary navigation"
      >
        <Link
          href="/"
          className="font-display text-base font-bold uppercase tracking-tight text-ink"
        >
          Maithil Mehta<span className="text-accent">.</span>
        </Link>

        <div className="flex items-center gap-1 font-mono text-xs uppercase tracking-widest">
          {homeLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={activeSection === link.id ? "true" : undefined}
              className={`px-3 py-1.5 transition-colors ${
                activeSection === link.id
                  ? "bg-ink text-paper"
                  : "text-ink-soft hover:bg-ink hover:text-paper"
              }`}
            >
              {link.label}
            </a>
          ))}

          <Link
            href="/coursework"
            className={`px-3 py-1.5 transition-colors ${
              pathname === "/coursework"
                ? "bg-accent text-accent-ink"
                : "text-ink-soft hover:bg-ink hover:text-paper"
            }`}
          >
            Coursework
          </Link>

          <a
            href="https://github.com/maithil22"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="ml-1 flex h-8 w-8 items-center justify-center border-2 border-ink text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            <Github size={15} />
          </a>
        </div>
      </nav>
    </header>
  );
}
