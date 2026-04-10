"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "How long does a roof replacement take?",
    answer:
      "Most residential roof replacements are completed in 1–3 days depending on the size and complexity of your roof. We work efficiently to minimize disruption to your home and always clean up completely before we leave.",
  },
  {
    question: "Do you offer a warranty on your work?",
    answer:
      "Yes. We offer a 10-year workmanship warranty on all installations, in addition to manufacturer warranties on materials — which range from 25 to 50 years depending on the product selected.",
  },
  {
    question: "Can you work with my insurance company?",
    answer:
      "Absolutely. We have extensive experience navigating insurance claims for storm and wind damage. Our team will document the damage thoroughly, provide the necessary reports, and coordinate directly with your adjuster.",
  },
  {
    question: "How much does a new roof cost in San Diego?",
    answer:
      "Roof replacement costs vary based on square footage, pitch, material choice, and any structural repairs needed. Most residential projects in San Diego range from $8,000 to $25,000. We provide free, detailed estimates with no obligation.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#f5f2ed] py-24 md:py-36">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 md:px-10"
      >
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left — sticky heading */}
          <div className="md:sticky md:top-28 self-start">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              className="text-[#111111]/40 text-xs tracking-[0.2em] uppercase mb-5 block"
            >
              FAQ
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.08 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-5xl text-[#111111] leading-tight mb-6"
            >
              Frequently asked questions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
              viewport={{ once: true }}
              className="text-[#111111]/50 text-sm leading-relaxed mb-8"
            >
              Still have questions? Our team is happy to help.
            </motion.p>
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.22 }}
              viewport={{ once: true }}
              className="inline-block border border-[#111111] text-[#111111] text-xs px-7 py-3.5 tracking-[0.15em] uppercase hover:bg-[#111111] hover:text-white transition-colors duration-200 cursor-pointer"
            >
              Contact Us
            </motion.a>
          </div>

          {/* Right — accordion */}
          <div className="divide-y divide-[#111111]/10">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: i * 0.1,
                }}
                viewport={{ once: true }}
              >
                <button
                  className="w-full text-left py-6 flex items-start justify-between gap-4 cursor-pointer group"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                >
                  <span className="text-[#111111] text-base font-medium leading-snug group-hover:opacity-70 transition-opacity duration-200">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 mt-0.5 text-[#111111]/40">
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${
                        openIndex === i ? "rotate-45" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-[#111111]/55 text-sm leading-relaxed pb-6">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
