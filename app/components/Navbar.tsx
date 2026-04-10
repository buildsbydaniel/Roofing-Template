"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#111111]/95 backdrop-blur-sm border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-serif text-lg text-white tracking-tight">
          Peak Roofing Co.
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="text-white/60 hover:text-white text-sm tracking-wide transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: navLinks.length * 0.08 + 0.05, duration: 0.5 }}
            className="border border-white/70 text-white text-sm px-5 py-2 tracking-wider hover:bg-white hover:text-[#111111] transition-colors duration-200 cursor-pointer"
          >
            Free Quote
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white cursor-pointer p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-[#111111] border-t border-white/10 px-6 py-5 flex flex-col gap-5"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/70 hover:text-white text-sm tracking-wide transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="border border-white text-white text-sm px-5 py-3 tracking-wider text-center hover:bg-white hover:text-[#111111] transition-colors cursor-pointer"
          >
            Free Quote
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
