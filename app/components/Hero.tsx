"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://placehold.co/1920x1080/1c1c1c/2e2e2e?text=."
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlay — dark at bottom, lighter at top */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-[#111111]/10" />

      {/* Bottom-aligned text content */}
      <div className="absolute bottom-0 left-0 right-0 px-6 md:px-10 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white/50 text-xs tracking-[0.25em] uppercase mb-5 block"
          >
            Licensed · Insured · 15 Years in Business
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-6 max-w-3xl"
          >
            Your trusted partner for quality roofing
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-white/60 text-base md:text-lg max-w-lg mb-10 leading-relaxed"
          >
            Peak Roofing Co. protects San Diego homes with expert craftsmanship
            and precision. Licensed, insured, 15 years in business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="border border-white text-white text-xs px-8 py-4 tracking-[0.15em] uppercase hover:bg-white hover:text-[#111111] transition-colors duration-200 cursor-pointer"
            >
              Get a Free Quote
            </a>
            <a
              href="#services"
              className="text-white/50 text-xs px-4 py-4 tracking-[0.15em] uppercase hover:text-white transition-colors duration-200 cursor-pointer flex items-center gap-2"
            >
              Our Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 right-8 md:right-10 text-white/30 text-[10px] tracking-[0.2em] uppercase flex flex-col items-center gap-2"
      >
        <span>Scroll</span>
        <div className="w-px h-8 bg-white/20" />
      </motion.div>
    </section>
  );
}
