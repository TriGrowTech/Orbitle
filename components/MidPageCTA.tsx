"use client";

import React, { useState } from "react";

// MidPageCTA.tsx
// Second contact form instance on the Operators homepage.
// Sits between WhyOrbitle and Testimonials — catches warm readers
// before they scroll all the way to the footer.

const inputStyle: React.CSSProperties = {
  padding: "10px 14px",
  border: "1.5px solid rgba(255,255,255,0.15)",
  borderRadius: 10,
  background: "rgba(255,255,255,0.07)",
  color: "#fff",
  fontSize: 14,
  fontFamily: "inherit",
  outline: "none",
  width: "100%",
};

export default function MidPageCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(fd)),
    }).catch(() => {});
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #0d1b2e 0%, #1e3a5f 100%)",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
      className="px-6 sm:px-10 py-16 sm:py-20 lg:py-24"
    >
      <div
        style={{ maxWidth: 1080, margin: "0 auto" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start"
      >
        {/* Left copy */}
        <div>
          <span
            style={{
              display: "inline-block",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase" as const,
              color: "#93c5fd",
              background: "rgba(147,197,253,0.1)",
              padding: "5px 14px",
              borderRadius: 20,
              marginBottom: 24,
            }}
          >
            Book a demo
          </span>
          <h2
            style={{
              fontSize: "clamp(26px,3.5vw,42px)",
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: 18,
            }}
          >
            See the full operator platform — live in 20 minutes.
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.75,
              marginBottom: 36,
            }}
          >
            We'll walk you through the marketplace, agent portal, lead
            management and your super admin panel — tailored to your business
            size and structure.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              {
                icon: "🗂️",
                title: "Full platform walkthrough",
                sub: "Marketplace, agent portal, operator dashboard, lead CRM",
              },
              {
                icon: "🎯",
                title: "Tailored to your business",
                sub: "We'll map your current setup to what Orbitle can replace",
              },
              {
                icon: "💬",
                title: "WhatsApp follow-up",
                sub: "We're reachable — not hidden behind a ticketing system",
              },
            ].map(({ icon, title, sub }) => (
              <div
                key={title}
                style={{ display: "flex", alignItems: "flex-start", gap: 14 }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    flexShrink: 0,
                    borderRadius: 12,
                    background: "rgba(37,99,235,0.25)",
                    border: "1px solid rgba(37,99,235,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                  }}
                >
                  {icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: "#fff",
                      marginBottom: 2,
                    }}
                  >
                    {title}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "rgba(255,255,255,0.5)",
                      lineHeight: 1.55,
                    }}
                  >
                    {sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        {submitted ? (
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 24,
              padding: "40px 32px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
            <h3
              style={{
                fontSize: 22,
                fontWeight: 800,
                color: "#fff",
                marginBottom: 10,
              }}
            >
              Demo request received!
            </h3>
            <p
              style={{
                fontSize: 14,
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.7,
              }}
            >
              We'll reach out within 24 hours to schedule your walkthrough.
            </p>
          </div>
        ) : (
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 24,
              padding: "32px",
            }}
          >
            <h3
              style={{
                fontSize: 20,
                fontWeight: 800,
                color: "#fff",
                marginBottom: 6,
              }}
            >
              Book your demo
            </h3>
            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.45)",
                marginBottom: 22,
                lineHeight: 1.6,
              }}
            >
              We'll get back to you within 24 hours.
            </p>

            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: 12 }}
            >
              <div
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
              >
                <label
                  style={{ display: "flex", flexDirection: "column", gap: 5 }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: "rgba(255,255,255,0.5)",
                      textTransform: "uppercase" as const,
                      letterSpacing: "0.06em",
                    }}
                  >
                    Name
                  </span>
                  <input
                    name="name"
                    required
                    placeholder="Enter your full name"
                    style={inputStyle}
                  />
                </label>
                <label
                  style={{ display: "flex", flexDirection: "column", gap: 5 }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: "rgba(255,255,255,0.5)",
                      textTransform: "uppercase" as const,
                      letterSpacing: "0.06em",
                    }}
                  >
                    Phone
                  </span>
                  <input
                    name="phone"
                    required
                    type="tel"
                    placeholder="+91 00000 00000"
                    style={inputStyle}
                  />
                </label>
              </div>
              <label
                style={{ display: "flex", flexDirection: "column", gap: 5 }}
              >
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.5)",
                    textTransform: "uppercase" as const,
                    letterSpacing: "0.06em",
                  }}
                >
                  Business Name
                </span>
                <input
                  name="business"
                  required
                  placeholder="Your Company Name"
                  style={inputStyle}
                />
              </label>
              <label
                style={{ display: "flex", flexDirection: "column", gap: 5 }}
              >
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.5)",
                    textTransform: "uppercase" as const,
                    letterSpacing: "0.06em",
                  }}
                >
                  How many agents do you work with?
                </span>
                <select name="agents" style={inputStyle}>
                  <option>Solo / just me</option>
                  <option>2–5 agents</option>
                  <option>6–15 agents</option>
                  <option>16–50 agents</option>
                  <option>50+ agents</option>
                </select>
              </label>
              <button
                type="submit"
                disabled={loading}
                style={{
                  width: "100%",
                  padding: "14px",
                  background: "#2563eb",
                  color: "#fff",
                  border: "none",
                  borderRadius: 50,
                  fontSize: 15,
                  fontWeight: 700,
                  fontFamily: "inherit",
                  cursor: loading ? "not-allowed" : "pointer",
                  opacity: loading ? 0.7 : 1,
                  marginTop: 4,
                }}
              >
                {loading ? "Submitting…" : "Book My Demo →"}
              </button>
              <p
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.3)",
                  textAlign: "center",
                  lineHeight: 1.5,
                }}
              >
                No commitment. We'll send calendar options within 24 hours.
              </p>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
