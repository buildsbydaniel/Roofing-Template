"use client";

import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "Hillcrest Residence — Full Roof Replacement",
    category: "Residential",
    year: "2024",
    image: "https://placehold.co/800x560/c8c3bc/8a8480?text=Project+01",
    location: "Hillcrest, San Diego",
  },
  {
    number: "02",
    title: "Mission Valley Commercial Complex",
    category: "Commercial",
    year: "2024",
    image: "https://placehold.co/800x560/b8b3ac/7a7470?text=Project+02",
    location: "Mission Valley, San Diego",
  },
  {
    number: "03",
    title: "La Jolla Waterproofing & Solar Prep",
    category: "Residential",
    year: "2023",
    image: "https://placehold.co/800x560/a8a39c/6a6460?text=Project+03",
    location: "La Jolla, San Diego",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#f5f2ed] py-24 md:py-36">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 md:px-10"
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              className="text-[#111111]/40 text-xs tracking-[0.2em] uppercase mb-4 block"
            >
              Our Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.08 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-5xl text-[#111111] leading-tight"
            >
              Recent Projects
            </motion.h2>
          </div>
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
            viewport={{ once: true }}
            className="mt-4 md:mt-0 text-[#111111]/50 text-xs tracking-[0.15em] uppercase hover:text-[#111111] transition-colors duration-200 cursor-pointer flex items-center gap-2"
          >
            View All Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.1, 0.25, 1],
                delay: i * 0.1,
              }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="overflow-hidden mb-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Meta */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#111111]/40 text-xs tracking-[0.15em] uppercase">
                  {project.category}
                </span>
                <span className="text-[#111111]/30 text-xs">{project.year}</span>
              </div>
              <h3 className="text-[#111111] text-base font-medium leading-snug mb-1">
                {project.title}
              </h3>
              <p className="text-[#111111]/40 text-xs tracking-wide">
                {project.location}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
