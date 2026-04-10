"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Peak Roofing replaced our entire roof in under 3 days. The crew was professional, the job site was spotless, and the quality is outstanding. Highly recommend.",
    name: "Sarah M.",
    location: "Hillcrest, San Diego",
  },
  {
    quote:
      "After getting 4 quotes, Peak Roofing was the most transparent and fair. They found a structural issue no one else caught — and fixed it for free. That's integrity.",
    name: "James T.",
    location: "Mission Hills, San Diego",
  },
  {
    quote:
      "Our 30-year-old flat roof was a disaster. Peak Roofing's waterproofing system has been flawless through two rainy seasons. Worth every penny.",
    name: "Linda & Mark R.",
    location: "La Jolla, San Diego",
  },
];

// Duplicate for seamless infinite loop
const looped = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section className="bg-[#111111] py-24 md:py-28 overflow-hidden border-t border-white/5 border-b border-white/5">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Section label */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 mb-14">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="text-white/30 text-xs tracking-[0.2em] uppercase mb-4 block"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.08 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-white leading-tight max-w-md"
          >
            What our clients say
          </motion.h2>
        </div>

        {/* Scrolling strip */}
        <div className="flex animate-marquee gap-6 w-max">
          {looped.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-80 md:w-96 bg-white/5 border border-white/10 px-8 py-8"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, s) => (
                  <svg
                    key={s}
                    className="w-3.5 h-3.5 text-white/50"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-white/70 text-sm leading-relaxed mb-6 italic font-serif">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div>
                <div className="text-white text-sm font-medium">{t.name}</div>
                <div className="text-white/30 text-xs mt-0.5">{t.location}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
