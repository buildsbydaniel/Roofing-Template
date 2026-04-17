"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useRef, useState, useEffect } from "react";

const stats = [
  { end: 15,  duration: 2,   suffix: "+", separator: "", label: "Years in Business",  delay: 0 },
  { end: 300, duration: 2.5, suffix: "+", separator: ",", label: "Projects Completed", delay: 0.15 },
  { end: 12,  duration: 1.5, suffix: "",  separator: "", label: "Crew Members",        delay: 0.3 },
  { end: 100, duration: 2,   suffix: "%", separator: "", label: "Satisfaction Rate",   delay: 0.45 },
];

export default function About() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsInView, setStatsInView] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="bg-[#f5f2ed] py-24 md:py-36">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 md:px-10"
      >
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left column */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              className="text-[#111111]/40 text-xs tracking-[0.2em] uppercase mb-5 block"
            >
              About Us
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.08 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-5xl text-[#111111] leading-tight mb-6"
            >
              Craftsmanship built to last a lifetime
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
              viewport={{ once: true }}
              className="text-[#111111]/60 text-base leading-relaxed mb-5"
            >
              Since 2009, Peak Roofing Co. has been San Diego&apos;s most trusted
              residential and commercial roofing contractor. We combine modern
              materials with time-tested techniques to deliver roofs that protect
              your family for decades.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.22 }}
              viewport={{ once: true }}
              className="text-[#111111]/60 text-base leading-relaxed mb-12"
            >
              Every project is backed by our workmanship warranty and guided by a
              dedicated project manager — from first inspection to final
              walkthrough.
            </motion.p>

            {/* Stats grid */}
            <div ref={statsRef} className="grid grid-cols-2 gap-8 border-t border-[#111111]/10 pt-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.25, 0.1, 0.25, 1],
                    delay: 0.3 + i * 0.1,
                  }}
                  viewport={{ once: true }}
                >
                  <div className="font-serif text-4xl text-[#111111] mb-1">
                    {statsInView ? (
                      <CountUp
                        end={stat.end}
                        duration={stat.duration}
                        suffix={stat.suffix}
                        separator={stat.separator}
                        delay={stat.delay}
                      />
                    ) : (
                      <span>0{stat.suffix}</span>
                    )}
                  </div>
                  <div className="text-[#111111]/40 text-xs tracking-wide uppercase">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right column — image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Claude Roofing Template/Second Main.webp"
              alt="Peak Roofing Co. team at work on a San Diego roof"
              className="w-full h-[480px] md:h-[580px] object-cover"
            />
            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 bg-[#111111] text-white px-5 py-4">
              <div className="font-serif text-2xl">15+</div>
              <div className="text-white/50 text-xs tracking-wide mt-0.5">Years of Excellence</div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
