"use client";

import { motion } from "framer-motion";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-white/8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        {/* Logo */}
        <a href="#" className="font-serif text-base text-white tracking-tight">
          Peak Roofing Co.
        </a>

        {/* Nav links */}
        <nav className="flex flex-wrap items-center justify-center gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/30 text-xs tracking-wide hover:text-white/70 transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-white/20 text-xs tracking-wide">
          © {new Date().getFullYear()} Peak Roofing Co. San Diego, CA
        </p>
      </motion.div>
    </footer>
  );
}
