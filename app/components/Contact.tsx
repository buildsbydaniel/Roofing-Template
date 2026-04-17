"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    width: "100%",
    background: "white",
    border: "1px solid #e2e0dc",
    borderRadius: "10px",
    padding: "14px 16px",
    fontSize: "15px",
    color: "#111",
    outline: "none",
    fontFamily: "inherit",
  };

  const labelStyle = {
    display: "block",
    fontSize: "13px",
    fontWeight: 500,
    color: "#111",
    marginBottom: "6px",
  };

  return (
    <section id="contact" style={{ background: "#111111", padding: "80px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 64px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: "80px", alignItems: "start" }}>

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
          >
            <span style={{
              display: "inline-block",
              background: "rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.7)",
              fontSize: "11px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              padding: "5px 14px",
              borderRadius: "100px",
              marginBottom: "20px",
            }}>
              Contact
            </span>
            <h2 style={{
              fontFamily: "var(--font-serif, Georgia, serif)",
              fontSize: "42px",
              fontWeight: 400,
              color: "#ffffff",
              lineHeight: 1.15,
              marginBottom: "16px",
            }}>
              Get in touch
            </h2>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: "48px", maxWidth: "340px" }}>
              For any inquiries or to get your free roof inspection, reach out to our team using the details below.
            </p>

            {/* Contact details */}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "32px", display: "flex", flexDirection: "column", gap: "0" }}>
              {[
                { label: "Office", value: "San Diego, CA 92101" },
                { label: "Email", value: "hello@peakroofing.com" },
                { label: "Telephone", value: "(619) 555-0142" },
              ].map((item, i) => (
                <div key={item.label} style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "16px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}>
                  <span style={{ fontSize: "14px", fontWeight: 500, color: "rgba(255,255,255,0.9)" }}>{item.label}</span>
                  <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)" }}>{item.value}</span>
                </div>
              ))}
            </div>

            {/* Social */}
            <div style={{ marginTop: "32px" }}>
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", marginBottom: "14px", textTransform: "uppercase", letterSpacing: "1px" }}>Follow us</div>
              <div style={{ display: "flex", gap: "16px" }}>
                {[
                  { label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                  { label: "X", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                ].map((s) => (
                  <a key={s.label} href="#" style={{
                    width: "38px", height: "38px", borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.15)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "rgba(255,255,255,0.5)",
                    transition: "all 0.2s",
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d={s.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — form card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
            viewport={{ once: true }}
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "40px",
            }}
          >
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <h3 style={{ fontFamily: "var(--font-serif, Georgia, serif)", fontSize: "28px", fontWeight: 400, color: "#111", marginBottom: "12px" }}>
                  Thank you!
                </h3>
                <p style={{ fontSize: "15px", color: "rgba(17,17,17,0.5)", lineHeight: 1.6 }}>
                  We&apos;ll be in touch within one business day to schedule your free inspection.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <label style={labelStyle}>Name <span style={{ color: "#e53e3e" }}>*</span></label>
                  <input type="text" required placeholder="John Smith" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Email <span style={{ color: "#e53e3e" }}>*</span></label>
                  <input type="email" required placeholder="johnsmith@gmail.com" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Phone Number</label>
                  <input type="tel" placeholder="(619) 555-0000" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Message <span style={{ color: "#e53e3e" }}>*</span></label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Hello, I'd like to enquire about..."
                    style={{ ...inputStyle, resize: "none" }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    width: "100%",
                    background: "#333",
                    color: "white",
                    border: "none",
                    borderRadius: "10px",
                    padding: "16px",
                    fontSize: "15px",
                    fontWeight: 500,
                    cursor: "pointer",
                    fontFamily: "inherit",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#111")}
                  onMouseLeave={e => (e.currentTarget.style.background = "#333")}
                >
                  Send message
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
