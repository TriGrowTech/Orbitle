"use client";

import React, { useState } from "react";
import { useSpots } from "@/context/SpotsContext";

interface ContactNewProps {
  id?: string;
  heading?: string;
  subheading?: string;
  onFormSubmit?: () => void;
}

const inputStyle: React.CSSProperties = {
  padding: "10px 14px",
  border: "1.5px solid #e2e8f0",
  borderRadius: 10,
  background: "#f0f4fa",
  color: "#0d1b2e",
  fontSize: 14,
  fontFamily: "inherit",
  outline: "none",
  width: "100%",
  boxSizing: "border-box",
};

export default function ContactNew({
  id = "contact",
  heading = "Ready to launch your travel platform?",
  subheading = "Tell us about your business and we'll get back within 24 hours with a tailored demo and plan options.",
  onFormSubmit,
}: ContactNewProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { decrementSpots } = useSpots();

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
    decrementSpots();
    onFormSubmit?.();
  }

  return (
    <section
      id={id}
      style={{
        background: "#f0f4fa",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
      className="px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24"
    >
      <div
        style={{ maxWidth: 1080, margin: "0 auto" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start"
      >
        {/* Left */}
        <div>
          <h2
            style={{
              fontSize: "clamp(26px, 4vw, 46px)",
              fontWeight: 800,
              color: "#0d1b2e",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            {heading}
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#4b5e7a",
              lineHeight: 1.75,
              marginBottom: 32,
            }}
          >
            {subheading}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              {
                icon: "🗂️",
                title: "Full Platform Demo",
                sub: "Marketplace, agent portal, operator dashboard, lead CRM — everything in one walkthrough.",
              },
              {
                icon: "⚡",
                title: "Live in 48–72 Hours",
                sub: "From signed-up to live platform. We handle DNS, SSL, hosting, and onboarding.",
              },
              {
                icon: "🤝",
                title: "Dedicated Setup Support",
                sub: "We stay with you through launch — WhatsApp, email, and call support throughout.",
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
                    background: "#eff6ff",
                    border: "1px solid #dbeafe",
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
                      color: "#0d1b2e",
                      marginBottom: 2,
                    }}
                  >
                    {title}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "#7a8fa8",
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
              background: "#fff",
              border: "1px solid #e2e8f0",
              borderRadius: 28,
              padding: "40px 32px",
              textAlign: "center",
              boxShadow: "0 4px 40px rgba(37,99,235,0.07)",
            }}
          >
            <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
            <h3
              style={{
                fontSize: 22,
                fontWeight: 800,
                color: "#0d1b2e",
                marginBottom: 10,
              }}
            >
              Demo request received!
            </h3>
            <p style={{ fontSize: 14, color: "#4b5e7a", lineHeight: 1.7 }}>
              We'll reach out within 24 hours with calendar options and a
              platform overview.
            </p>
          </div>
        ) : (
          <div
            style={{
              background: "#fff",
              border: "1px solid #e2e8f0",
              borderRadius: 28,
              padding: "32px 28px",
              boxShadow: "0 4px 40px rgba(37,99,235,0.07)",
            }}
          >
            <h3
              style={{
                fontSize: 20,
                fontWeight: 800,
                color: "#0d1b2e",
                letterSpacing: "-0.02em",
                marginBottom: 6,
              }}
            >
              Book a demo
            </h3>
            <p
              style={{
                fontSize: 13.5,
                color: "#7a8fa8",
                marginBottom: 20,
                lineHeight: 1.6,
              }}
            >
              Fill in your details — we'll reply within 24 hours.
            </p>

            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: 12 }}
            >
              {/* Name + Phone — stack on small, 2-col on sm+ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#0d1b2e" }}>
                    Your Name
                  </span>
                  <input
                    name="name"
                    required
                    placeholder="Enter your full name"
                    style={inputStyle}
                  />
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#0d1b2e" }}>
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

              {/* Email + Business — same */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#0d1b2e" }}>
                    Email
                  </span>
                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="name@company.com"
                    style={inputStyle}
                  />
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#0d1b2e" }}>
                    Business Name
                  </span>
                  <input
                    name="business"
                    required
                    placeholder="Your Company Name"
                    style={inputStyle}
                  />
                </label>
              </div>

              <label style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: "#0d1b2e" }}>
                  How many agents on your team?
                </span>
                <select name="team_size" style={inputStyle}>
                  <option>Just me (solo operator)</option>
                  <option>2–5 agents</option>
                  <option>6–15 agents</option>
                  <option>16–50 agents</option>
                  <option>50+ agents</option>
                </select>
              </label>

              <label style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: "#0d1b2e" }}>
                  Anything to add?
                </span>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Tell us about your current platform setup and what you're looking to improve."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
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
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                }}
              >
                {loading ? "Submitting…" : "Book My Demo →"}
              </button>
              <p
                style={{
                  fontSize: 12,
                  color: "#7a8fa8",
                  textAlign: "center",
                  lineHeight: 1.5,
                }}
              >
                No commitment required. We'll share plan details within 24 hours.
              </p>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}