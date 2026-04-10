"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const contactInfo = [
  {
    label: "Phone",
    value: "(619) 555-0142",
    href: "tel:+16195550142",
  },
  {
    label: "Email",
    value: "hello@peakroofing.com",
    href: "mailto:hello@peakroofing.com",
  },
  {
    label: "Location",
    value: "San Diego, CA",
    href: null,
  },
  {
    label: "Hours",
    value: "Mon–Sat, 7am–6pm",
    href: null,
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[#111111] py-24 md:py-36">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 md:px-10"
      >
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left — info */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              className="text-white/30 text-xs tracking-[0.2em] uppercase mb-5 block"
            >
              Get in Touch
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.08 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-5xl text-white leading-tight mb-6"
            >
              Get a free roof inspection
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
              viewport={{ once: true }}
              className="text-white/50 text-sm leading-relaxed mb-12"
            >
              Fill out the form and one of our roofing specialists will reach out
              within one business day to schedule your free inspection.
            </motion.p>

            {/* Contact details */}
            <div className="space-y-6 border-t border-white/10 pt-10">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.25, 0.1, 0.25, 1],
                    delay: 0.2 + i * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="flex items-start gap-6"
                >
                  <span className="text-white/25 text-xs tracking-[0.15em] uppercase w-16 pt-0.5 flex-shrink-0">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-white text-sm hover:text-white/70 transition-colors duration-200 cursor-pointer"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-white text-sm">{item.value}</span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="h-full flex flex-col justify-center items-start py-12">
                <div className="text-white/30 text-xs tracking-[0.2em] uppercase mb-4">
                  Message Sent
                </div>
                <h3 className="font-serif text-3xl text-white mb-4">
                  Thank you!
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  We&apos;ll be in touch within one business day to schedule your
                  free inspection.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="text-white/40 text-xs tracking-[0.12em] uppercase block mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="John Smith"
                      className="w-full bg-transparent border border-white/15 text-white placeholder-white/20 text-sm px-4 py-3.5 focus:outline-none focus:border-white/40 transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-white/40 text-xs tracking-[0.12em] uppercase block mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="john@email.com"
                      className="w-full bg-transparent border border-white/15 text-white placeholder-white/20 text-sm px-4 py-3.5 focus:outline-none focus:border-white/40 transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="text-white/40 text-xs tracking-[0.12em] uppercase block mb-2">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="(619) 555-0000"
                    className="w-full bg-transparent border border-white/15 text-white placeholder-white/20 text-sm px-4 py-3.5 focus:outline-none focus:border-white/40 transition-colors duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="text-white/40 text-xs tracking-[0.12em] uppercase block mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    className="w-full bg-[#111111] border border-white/15 text-white/70 text-sm px-4 py-3.5 focus:outline-none focus:border-white/40 transition-colors duration-200 cursor-pointer appearance-none"
                  >
                    <option value="">Select a service...</option>
                    <option>Roof Replacement</option>
                    <option>Roof Repair</option>
                    <option>Roof Inspection</option>
                    <option>Waterproofing</option>
                    <option>Solar-Ready Roofing</option>
                    <option>Gutters & Drainage</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="text-white/40 text-xs tracking-[0.12em] uppercase block mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your roof..."
                    className="w-full bg-transparent border border-white/15 text-white placeholder-white/20 text-sm px-4 py-3.5 focus:outline-none focus:border-white/40 transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full border border-white text-white text-xs py-4 tracking-[0.15em] uppercase hover:bg-white hover:text-[#111111] transition-colors duration-200 cursor-pointer mt-2"
                >
                  Request Free Inspection
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
