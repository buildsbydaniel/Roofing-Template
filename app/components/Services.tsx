"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// ── Inline SVG icons (thin-line style) ──────────────────────────────────────
const HouseIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.25} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5L12 3l9 7.5V21H15v-5.25a.75.75 0 00-.75-.75h-4.5a.75.75 0 00-.75.75V21H3V10.5z" />
  </svg>
);
const WrenchIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.25} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
  </svg>
);
const SearchIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.25} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0015.803 15.803z" />
  </svg>
);
const DropIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.25} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c0 0-7 6.75-7 11.25a7 7 0 0014 0C19 9.75 12 3 12 3z" />
  </svg>
);
const SunIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.25} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M12 19.5V21M4.219 4.219l1.061 1.061M17.72 17.72l1.06 1.06M3 12h1.5M19.5 12H21M4.219 19.781l1.061-1.061M17.72 6.28l1.06-1.061M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
  </svg>
);
const GutterIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.25} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 6v2a2 2 0 002 2h14a2 2 0 002-2V6M7 10v8M7 18h10M17 10v8" />
  </svg>
);

// ── Services data ────────────────────────────────────────────────────────────
const services = [
  {
    id: "replacement",
    title: "Roof Replacement",
    description:
      "Complete tear-off and replacement using premium shingles, metal, or tile built to handle San Diego weather for decades.",
    image: "https://placehold.co/800x900/2a2a2a/555555?text=Roof+Replacement",
    icon: <HouseIcon />,
  },
  {
    id: "repair",
    title: "Roof Repair",
    description:
      "Leaks, storm damage, missing shingles — we diagnose fast and fix it right the first time, guaranteed.",
    image: "https://placehold.co/800x900/3a3530/706050?text=Roof+Repair",
    icon: <WrenchIcon />,
  },
  {
    id: "inspection",
    title: "Roof Inspection",
    description:
      "Detailed inspection reports with photos. Ideal for homebuyers, sellers, and annual maintenance.",
    image: "https://placehold.co/800x900/2c3035/505860?text=Roof+Inspection",
    icon: <SearchIcon />,
  },
  {
    id: "waterproofing",
    title: "Waterproofing",
    description:
      "Protect flat roofs and decks from moisture damage with our advanced waterproofing systems.",
    image: "https://placehold.co/800x900/253040/405570?text=Waterproofing",
    icon: <DropIcon />,
  },
  {
    id: "solar",
    title: "Solar-Ready Roofing",
    description:
      "We prep your roof for solar panel installation — reinforced decking, proper flashing, zero leaks.",
    image: "https://placehold.co/800x900/353020/706530?text=Solar-Ready+Roofing",
    icon: <SunIcon />,
  },
  {
    id: "gutters",
    title: "Gutters & Drainage",
    description:
      "Custom seamless gutters and full drainage systems installed alongside any roofing project.",
    image: "https://placehold.co/800x900/303030/606060?text=Gutters+%26+Drainage",
    icon: <GutterIcon />,
  },
];

// ── Component ────────────────────────────────────────────────────────────────
export default function Services() {
  const [openId, setOpenId] = useState<string>(services[0].id);

  const activeService = services.find((s) => s.id === openId) ?? services[0];

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? services[0].id : id));
  };

  return (
    <section id="services" className="bg-[#f5f2ed] py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* ── Section header ── */}
        <div className="text-center mb-14 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="inline-block bg-[#111111] text-white text-xs tracking-[0.15em] uppercase px-4 py-1.5 rounded-full mb-5"
          >
            Services
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.08 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-[#111111] leading-tight mb-4"
          >
            What we do
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
            viewport={{ once: true }}
            className="text-[#111111]/50 text-base max-w-md mx-auto"
          >
            Find out which one of our services fits the needs of your project
          </motion.p>
        </div>

        {/* ── Two-column layout ── */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-[45fr_55fr] gap-8 md:gap-12 items-start">

          {/* Left — crossfading image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="relative w-full overflow-hidden hidden md:block"
            style={{ height: "580px" }}
          >
            <AnimatePresence mode="sync">
              <motion.img
                key={activeService.id}
                src={activeService.image}
                alt={activeService.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </motion.div>

          {/* Right — accordion */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
            viewport={{ once: true }}
            className="divide-y divide-[#111111]/10"
          >
            {services.map((service, i) => {
              const isOpen = openId === service.id;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.07 }}
                  viewport={{ once: true }}
                >
                  {/* Row header */}
                  <button
                    onClick={() => toggle(service.id)}
                    className="w-full flex items-center gap-4 py-5 text-left cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    {/* Icon */}
                    <span
                      className={`flex-shrink-0 transition-colors duration-200 ${
                        isOpen ? "text-[#111111]" : "text-[#111111]/40"
                      }`}
                    >
                      {service.icon}
                    </span>

                    {/* Title */}
                    <span
                      className={`flex-1 font-medium text-base transition-colors duration-200 ${
                        isOpen ? "text-[#111111]" : "text-[#111111]/60"
                      } group-hover:text-[#111111]`}
                    >
                      {service.title}
                    </span>

                    {/* Toggle */}
                    <span
                      className={`flex-shrink-0 w-6 h-6 flex items-center justify-center transition-colors duration-200 ${
                        isOpen ? "text-[#111111]" : "text-[#111111]/30"
                      }`}
                    >
                      <motion.svg
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </motion.svg>
                    </span>
                  </button>

                  {/* Expandable description */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-[#111111]/55 text-sm leading-relaxed pl-11 pb-5 pr-8">
                          {service.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
