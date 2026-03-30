"use client";

import React, { useState } from "react";

// ─────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────
interface FormData {
  name:     string;
  phone:    string;
  email:    string;
  business: string;
  plan:     string;
  domain:   string;
  message:  string;
}

const PLAN_OPTIONS = [
  "Monthly — ₹499/mo",
  "6-Month — ₹2,499",
  "Yearly — ₹3,999 (Most Popular)",
  "Lifetime — ₹9,999 (Pay Once)",
] as const;

const AVATAR_INITIALS = ["SM", "RK", "AM", "PJ"] as const;

// ─────────────────────────────────────────────
// SHARED STYLES
// ─────────────────────────────────────────────
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
};

// ─────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────

/** Stacked avatar row + social proof text */
function SocialProofStrip() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "10px 14px",
        background: "#f0f4fa",
        border: "1px solid #e2e8f0",
        borderRadius: 10,
        marginBottom: 20,
        fontSize: 13,
        color: "#4b5e7a",
        fontWeight: 500,
      }}
    >
      {/* Stacked avatars */}
      <div style={{ display: "flex" }}>
        {AVATAR_INITIALS.map((init, i) => (
          <div
            key={init}
            style={{
              width: 28, height: 28,
              borderRadius: "50%",
              background: "#eff6ff",
              border: "2px solid #fff",
              marginLeft: i === 0 ? 0 : -8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 9,
              fontWeight: 800,
              color: "#2563eb",
            }}
          >
            {init}
          </div>
        ))}
      </div>
      <span><strong>96 spots</strong> remaining at founding rate</span>
    </div>
  );
}

/** Labelled input/select/textarea wrapper */
function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 5 }}>
      <span style={{ fontSize: 12, fontWeight: 700, color: "#0d1b2e" }}>{label}</span>
      {children}
    </label>
  );
}

/** Success state shown after submission */
function SuccessMessage({ compact }: { compact: boolean }) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e2e8f0",
        borderRadius: 28,
        padding: compact ? "32px 28px" : "40px 36px",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
      <h3 style={{ fontSize: 22, fontWeight: 800, color: "#0d1b2e", marginBottom: 10 }}>
        You're on the list!
      </h3>
      <p style={{ fontSize: 14, color: "#4b5e7a", lineHeight: 1.7 }}>
        We'll reach out within 24 hours with your trial access and plan details. Welcome to Orbitle!
      </p>
    </div>
  );
}

// ─────────────────────────────────────────────
// MAIN EXPORT
// ─────────────────────────────────────────────
export default function ContactForm({ compact = false, onSubmit }: { compact?: boolean; onSubmit?: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;

    try {
      const response = await fetch('https://api.gopalshukla.in/api/orbitle/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          intent: 'agent-signup',
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message || `Business: ${data.business}, Plan: ${data.plan}, Domain: ${data.domain}`,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
      } else {
        alert('Failed to send. Please try again.');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      alert('Server error. Please try again later.');
    } finally {
      setLoading(false);
    }
  }

  if (submitted) return <SuccessMessage compact={compact} />;

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e2e8f0",
        borderRadius: 28,
        padding: compact ? "28px 24px" : "36px",
        boxShadow: "0 4px 40px rgba(37,99,235,0.07)",
      }}
    >
      <h3 style={{ fontSize: 22, fontWeight: 800, color: "#0d1b2e", letterSpacing: "-0.02em", marginBottom: 6 }}>
        Get your travel website
      </h3>
      <p style={{ fontSize: 13.5, color: "#7a8fa8", marginBottom: 20, lineHeight: 1.6 }}>
        Fill in your details and we'll reach out within 24 hours with trial access and plan options.
      </p>

      <SocialProofStrip />

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>

        {/* Row 1: Name + Phone */}
        <div className="form-grid-2">
          <Field label="Your Name">
            <input name="name" required placeholder="Sara Mehta" style={inputStyle} />
          </Field>
          <Field label="Phone">
            <input name="phone" required type="tel" placeholder="+91 98765 43210" style={inputStyle} />
          </Field>
        </div>

        {/* Row 2: Email + Business */}
        <div className="form-grid-2">
          <Field label="Email">
            <input name="email" required type="email" placeholder="sara@saratravels.com" style={inputStyle} />
          </Field>
          <Field label="Business Name">
            <input name="business" required placeholder="Sara Travels" style={inputStyle} />
          </Field>
        </div>

        {/* Row 3: Plan + Domain */}
        <div className="form-grid-2">
          <Field label="Plan You're Interested In">
            <select name="plan" style={inputStyle}>
              {PLAN_OPTIONS.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          </Field>
          <Field label="Domain Name (if any)">
            <input name="domain" placeholder="saratravels.com" style={inputStyle} />
          </Field>
        </div>

        {/* Message */}
        <Field label="Anything to add?">
          <textarea
            name="message"
            rows={3}
            placeholder="Tell us about your current setup — how are you managing enquiries right now?"
            style={{ ...inputStyle, resize: "vertical" }}
          />
        </Field>

        {/* Submit */}
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
          {loading ? "Submitting…" : "Submit & Get Trial Access →"}
        </button>

        <p style={{ fontSize: 12, color: "#7a8fa8", textAlign: "center", lineHeight: 1.5 }}>
          No commitment required. We'll share plan details within 24 hours.
        </p>

        {/* Urgency pill */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 6,
            fontSize: 12.5,
            fontWeight: 700,
            color: "#2563eb",
            background: "#eff6ff",
            padding: "7px 18px",
            borderRadius: 50,
            textAlign: "center",
          }}
        >
          ⚡ 78 founding spots remaining — lifetime pricing closes at 100
        </div>
      </form>
    </div>
  );
}