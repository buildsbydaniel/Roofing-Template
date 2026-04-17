"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "What areas do you serve?",
    answer: "We primarily serve San Diego and all surrounding areas including Hillcrest, La Jolla, Mission Valley, Chula Vista, El Cajon, Santee, and La Mesa. Get in touch to discuss your location and project needs.",
  },
  {
    question: "How long does a roof replacement take?",
    answer: "Most residential roof replacements are completed in 1–3 days depending on the size and complexity of your roof. We work efficiently to minimize disruption to your home and always clean up completely before we leave.",
  },
  {
    question: "Do you offer free quotes?",
    answer: "Yes — all quotes are completely free with no obligation. We'll assess your roof in person, walk you through the options, and provide a detailed written estimate before any work begins.",
  },
  {
    question: "Can you work with my insurance company?",
    answer: "Absolutely. We have extensive experience navigating insurance claims for storm and wind damage. Our team will document the damage thoroughly, provide the necessary reports, and coordinate directly with your adjuster.",
  },
  {
    question: "Do you provide a warranty on your work?",
    answer: "Yes. We offer a 10-year workmanship warranty on all installations, in addition to manufacturer warranties on materials — which range from 25 to 50 years depending on the product selected.",
  },
  {
    question: "How do I get started?",
    answer: "Just reach out using the contact form below or give us a call. We'll schedule a free on-site inspection and walk you through everything from there.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-16 md:gap-24">

          {/* Left — sticky heading */}
          <div className="md:sticky md:top-28 self-start">
            <span className="inline-block bg-[#111] text-white text-xs tracking-[0.15em] uppercase px-3.5 py-1.5 rounded-full mb-6">
              FAQs
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#111] leading-tight mb-5">
              Answering your questions
            </h2>
            <p className="text-[#111]/50 text-sm leading-relaxed mb-10">
              Got more questions? Send us your enquiry below.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-[#f0eeeb] hover:bg-[#e8e5e0] text-[#111] text-sm px-5 py-3 rounded-full transition-colors duration-200 cursor-pointer group"
            >
              Get in touch
              <span className="w-7 h-7 bg-[#111] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#333] transition-colors duration-200">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          </div>

          {/* Right — accordion */}
          <div>
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.05 }}
                viewport={{ once: true }}
                className="border border-[#e8e5e0] rounded-xl mb-3 overflow-hidden"
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer bg-white hover:bg-[#fafafa] transition-colors duration-150"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                >
                  <span className="text-[#111] text-base font-medium leading-snug">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 text-[#111]">
                    {openIndex === i ? (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M4 10h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    )}
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
                      <p className="px-6 pb-6 text-[#111]/55 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
