"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_rgba(255,255,255,0.08)]" : ""
      } bg-[#0a0a0a]/80`}
    >
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
        aria-label="Primary navigation"
      >
        <a
          href="#"
          className="text-sm font-semibold tracking-tight text-[#ededed] transition-opacity hover:opacity-80"
        >
          Maithil Mehta
        </a>

        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#888888] transition-colors hover:text-[#ededed]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/maithil22"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-[#888888] transition-colors hover:text-[#ededed]"
          >
            <Github size={18} />
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
