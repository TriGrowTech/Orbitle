"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const JOBS = [
  {
    id: "digital-marketer",
    title: "Digital Marketer",
    type: "Full-Time · Remote",
    badge: "Hiring",
    badgeColor: "#16a34a",
    badgeBg: "#dcfce7",
    icon: "📣",
    location: "Remote — India",
    about:
      "We're looking for a performance-driven Digital Marketer to own our growth engine. You'll run paid and organic campaigns that bring travel operators and agents to the Orbitle platform. You understand the travel-tech space, love data, and know how to turn clicks into customers.",
    responsibilities: [
      "Plan and execute paid campaigns on Google, Meta, and LinkedIn",
      "Manage organic growth via SEO, content, and social media",
      "Build and optimise email marketing sequences for leads and onboarding",
      "Run A/B tests on landing pages and ads — data drives all decisions",
      "Coordinate with the design team to produce campaign creatives",
      "Track, report, and improve performance across all channels weekly",
    ],
    requirements: [
      "2+ years of digital marketing experience — preferably B2B SaaS or travel",
      "Strong grasp of Google Ads, Meta Ads Manager, and analytics tools",
      "Experience with email automation (Mailchimp, Brevo, or similar)",
      "Ability to write crisp ad copy and campaign briefs",
      "Analytical mindset — comfortable pulling insights from dashboards",
      "Self-starter who can manage campaigns independently",
    ],
    bonus: "Experience in travel industry or SaaS startup marketing ✓",
  },
  {
    id: "graphic-designer",
    title: "Graphic Designer",
    type: "Full-Time · Remote",
    badge: "Hiring",
    badgeColor: "#2563eb",
    badgeBg: "#eff6ff",
    icon: "🎨",
    location: "Remote — India",
    about:
      "We need a sharp Graphic Designer who can translate ideas into beautiful visuals — for product UI, marketing campaigns, social media, and pitch decks. You'll be a core part of how Orbitle looks and feels to the world.",
    responsibilities: [
      "Design marketing assets for digital campaigns (ads, banners, emails)",
      "Create social media graphics and short-form video thumbnails",
      "Collaborate closely with product and marketing teams",
      "Maintain and evolve the Orbitle brand identity and design system",
      "Design presentation decks, brochures, and sales materials",
      "Produce mockups and UI visual aids for the website and blog",
    ],
    requirements: [
      "2+ years of graphic design experience (agency or in-house)",
      "Strong portfolio demonstrating digital and brand design work",
      "Expert-level Figma or Adobe Creative Suite (Illustrator, Photoshop)",
      "Strong typographic sensibility and eye for clean layouts",
      "Able to handle multiple projects and meet tight deadlines",
      "Some video editing or motion experience is a big plus",
    ],
    bonus: "Portfolio that includes SaaS or tech brand work ✓",
  },
  {
    id: "lead-aggregator",
    title: "Lead Aggregator",
    type: "Full-Time · Remote",
    badge: "Hiring",
    badgeColor: "#9333ea",
    badgeBg: "#f3e8ff",
    icon: "🎯",
    location: "Remote — India",
    about:
      "As a Lead Aggregator at Orbitle, you'll be the engine behind our sales pipeline — identifying, sourcing, and qualifying travel operators and agents across India who are the right fit for the platform. You'll work directly with the founder team to build and maintain a high-quality lead database.",
    responsibilities: [
      "Research and identify independent travel agents and tour operators across India",
      "Build and maintain a structured lead database (CRM-ready)",
      "Qualify leads based on business size, needs, and readiness to adopt software",
      "Reach out via WhatsApp, email, and LinkedIn to warm up prospects",
      "Coordinate handoff of qualified leads to the sales and onboarding team",
      "Track outreach metrics and continuously refine targeting strategy",
    ],
    requirements: [
      "1+ years of experience in lead generation, sales, or outreach",
      "Strong research skills — ability to find and verify contact information",
      "Excellent written and verbal communication in English and Hindi",
      "Experience with CRM tools or structured spreadsheet-based pipelines",
      "Self-motivated and able to hit weekly outreach and sourcing targets",
      "Strong understanding of the Indian travel industry is a major plus",
    ],
    bonus: "Previous experience in travel, ed-tech, or SaaS sales ✓",
  },
] as const;

// ─────────────────────────────────────────────
// JOB CARD
// ─────────────────────────────────────────────
function JobCard({ job, onApply }: { job: typeof JOBS[number]; onApply: (id: string) => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        background: "#fff",
        border: "1.5px solid #e2e8f0",
        borderRadius: 20,
        overflow: "hidden",
        transition: "box-shadow 0.2s, border-color 0.2s",
        boxShadow: open ? "0 8px 40px rgba(37,99,235,0.1)" : "none",
        borderColor: open ? "#2563eb" : "#e2e8f0",
      }}
    >
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "28px 32px",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: 16,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 52, height: 52, borderRadius: 16, background: "#f0f4fa", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>
            {job.icon}
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
              <span style={{ fontSize: 20, fontWeight: 800, color: "#0d1b2e", letterSpacing: "-0.02em" }}>{job.title}</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 50, background: job.badgeBg, color: job.badgeColor }}>{job.badge}</span>
            </div>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <span style={{ fontSize: 13, color: "#7a8fa8", fontWeight: 500 }}>📍 {job.location}</span>
              <span style={{ fontSize: 13, color: "#7a8fa8", fontWeight: 500 }}>⏱ {job.type}</span>
            </div>
          </div>
        </div>
        <span style={{ fontSize: 20, color: "#7a8fa8", flexShrink: 0, transform: open ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }}>
          ↓
        </span>
      </button>

      {/* Expandable content */}
      {open && (
        <div style={{ borderTop: "1px solid #e2e8f0", padding: "28px 32px" }}>
          <p style={{ fontSize: 15, color: "#4b5e7a", lineHeight: 1.75, marginBottom: 28 }}>{job.about}</p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, marginBottom: 24 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#2563eb", marginBottom: 14 }}>What You'll Do</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                {job.responsibilities.map((r) => (
                  <li key={r} style={{ display: "flex", gap: 10, fontSize: 13.5, color: "#4b5e7a", lineHeight: 1.55 }}>
                    <span style={{ color: "#2563eb", fontWeight: 700, flexShrink: 0 }}>→</span>{r}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#0d1b2e", marginBottom: 14 }}>What We're Looking For</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                {job.requirements.map((r) => (
                  <li key={r} style={{ display: "flex", gap: 10, fontSize: 13.5, color: "#4b5e7a", lineHeight: 1.55 }}>
                    <span style={{ color: "#16a34a", fontWeight: 700, flexShrink: 0 }}>✓</span>{r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{ background: "#f0f4fa", border: "1px solid #e2e8f0", borderRadius: 12, padding: "14px 18px", marginBottom: 24, fontSize: 13.5, color: "#4b5e7a" }}>
            <strong style={{ color: "#16a34a" }}>Bonus:</strong> {job.bonus}
          </div>

          <button
            onClick={() => onApply(job.id)}
            style={{
              background: "#2563eb",
              color: "#fff",
              border: "none",
              borderRadius: 50,
              padding: "14px 32px",
              fontSize: 15,
              fontWeight: 700,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              cursor: "pointer",
            }}
          >
            Apply for this Role →
          </button>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// APPLY MODAL
// ─────────────────────────────────────────────
function ApplyModal({ jobId, onClose }: { jobId: string; onClose: () => void }) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const job = JOBS.find((j) => j.id === jobId);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name") as string;
    const email = fd.get("email") as string;
    const phone = fd.get("phone") as string;
    const portfolio = fd.get("portfolio") as string;
    const why = fd.get("why") as string;

    try {
      const res = await fetch("https://api.gopalshukla.in/api/orbitle/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          intent: `career-application-${jobId}`,
          name,
          email,
          phone,
          message: `Role: ${job?.title}\nPortfolio/LinkedIn: ${portfolio || "Not provided"}\n\nWhy Orbitle:\n${why}`,
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSent(true);
      } else {
        setError("Submission failed. Please try again or email us directly.");
      }
    } catch {
      setError("Network error. Please try again or email careers@trigrowtech.in");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 20, background: "rgba(13,27,46,0.55)", backdropFilter: "blur(4px)" }}>
      <div style={{ background: "#fff", borderRadius: 24, padding: "40px 36px", maxWidth: 500, width: "100%", position: "relative", boxShadow: "0 32px 64px rgba(0,0,0,0.2)", fontFamily: "'Plus Jakarta Sans', sans-serif", maxHeight: "90vh", overflowY: "auto" }}>
        <button onClick={onClose} style={{ position: "absolute", top: 16, right: 16, background: "#f0f4fa", border: "none", borderRadius: 8, width: 32, height: 32, cursor: "pointer", fontSize: 18, color: "#7a8fa8", display: "flex", alignItems: "center", justifyContent: "center" }}>×</button>

        {sent ? (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div style={{ fontSize: 52, marginBottom: 16 }}>🎉</div>
            <h3 style={{ fontSize: 22, fontWeight: 800, color: "#0d1b2e", marginBottom: 10 }}>Application Received!</h3>
            <p style={{ fontSize: 14, color: "#4b5e7a", lineHeight: 1.7, marginBottom: 24 }}>
              We've received your application for <strong>{job?.title}</strong>. We'll review your profile and get back to you within 3–5 business days.
            </p>
            <button onClick={onClose} style={{ background: "#2563eb", color: "#fff", border: "none", borderRadius: 50, padding: "12px 28px", fontSize: 14, fontWeight: 700, fontFamily: "inherit", cursor: "pointer" }}>
              Close
            </button>
          </div>
        ) : (
          <>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: "#f0f4fa", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>
                {job?.icon}
              </div>
              <div>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: "#0d1b2e" }}>Apply — {job?.title}</h3>
                <p style={{ fontSize: 12, color: "#7a8fa8", marginTop: 2 }}>Remote · Full-time · Orbitle by TrigrowTech</p>
              </div>
            </div>

            {error && (
              <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 10, padding: "12px 16px", fontSize: 13, color: "#dc2626", marginBottom: 16, lineHeight: 1.5 }}>
                ⚠️ {error}
              </div>
            )}

            <form style={{ display: "flex", flexDirection: "column", gap: 14 }} onSubmit={handleSubmit}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <label style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#0d1b2e" }}>Full Name *</span>
                  <input name="name" type="text" required placeholder="Rahul Sharma" style={{ padding: "10px 14px", border: "1.5px solid #e2e8f0", borderRadius: 10, fontSize: 14, fontFamily: "inherit", outline: "none", background: "#f8fafc", color: "#0d1b2e" }} />
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#0d1b2e" }}>Phone *</span>
                  <input name="phone" type="tel" required placeholder="+91 98765 43210" style={{ padding: "10px 14px", border: "1.5px solid #e2e8f0", borderRadius: 10, fontSize: 14, fontFamily: "inherit", outline: "none", background: "#f8fafc", color: "#0d1b2e" }} />
                </label>
              </div>
              <label style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: "#0d1b2e" }}>Email Address *</span>
                <input name="email" type="email" required placeholder="rahul@email.com" style={{ padding: "10px 14px", border: "1.5px solid #e2e8f0", borderRadius: 10, fontSize: 14, fontFamily: "inherit", outline: "none", background: "#f8fafc", color: "#0d1b2e" }} />
              </label>
              <label style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: "#0d1b2e" }}>LinkedIn / Portfolio URL <span style={{ fontWeight: 400, color: "#7a8fa8" }}>(optional)</span></span>
                <input name="portfolio" type="text" placeholder="linkedin.com/in/rahulsharma or yourportfolio.com" style={{ padding: "10px 14px", border: "1.5px solid #e2e8f0", borderRadius: 10, fontSize: 14, fontFamily: "inherit", outline: "none", background: "#f8fafc", color: "#0d1b2e" }} />
              </label>
              <label style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: "#0d1b2e" }}>Why do you want to join Orbitle? *</span>
                <textarea name="why" rows={4} required placeholder={`Tell us what excites you about the ${job?.title} role and what you'd bring to Orbitle...`} style={{ padding: "10px 14px", border: "1.5px solid #e2e8f0", borderRadius: 10, fontSize: 14, fontFamily: "inherit", outline: "none", background: "#f8fafc", resize: "vertical", color: "#0d1b2e" }} />
              </label>
              <button type="submit" disabled={loading} style={{ background: "#2563eb", color: "#fff", border: "none", borderRadius: 50, padding: "14px", fontSize: 15, fontWeight: 700, fontFamily: "inherit", cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.7 : 1, marginTop: 4, transition: "opacity 0.2s" }}>
                {loading ? "Submitting…" : "Submit Application →"}
              </button>
              <p style={{ fontSize: 11.5, color: "#7a8fa8", textAlign: "center" }}>
                Or email directly: <a href="mailto:careers@trigrowtech.in" style={{ color: "#2563eb" }}>careers@trigrowtech.in</a>
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function CareersPage() {
  const [applyJobId, setApplyJobId] = useState<string | null>(null);

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif", background: "#f0f4fa", color: "#0d1b2e", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        @media (max-width: 768px) {
          .careers-grid { grid-template-columns: 1fr !important; }
          .job-body-grid { grid-template-columns: 1fr !important; }
          .hero-pad { padding: 56px 20px !important; }
        }
      `}</style>

      {/* Nav */}
      <nav style={{ background: "#fff", borderBottom: "1px solid #e2e8f0", padding: "0 24px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <Image src="/images/orbitle-logo.png" alt="Orbitle" width={28} height={28} style={{ objectFit: "contain" }} />
          <span style={{ fontSize: 18, fontWeight: 800, color: "#0d1b2e", fontStyle: "italic", letterSpacing: "-0.02em" }}>Orbitle</span>
          <span style={{ fontSize: 10, color: "#7a8fa8", fontWeight: 600 }}>by TrigrowTech</span>
        </Link>
        <Link href="/#contact" style={{ background: "#2563eb", color: "#fff", fontSize: 13, fontWeight: 700, padding: "8px 20px", borderRadius: 50, textDecoration: "none" }}>
          Get a Demo →
        </Link>
      </nav>

      {/* Hero */}
      <div className="hero-pad" style={{ background: "#0d1b2e", padding: "88px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(37,99,235,0.15)", border: "1px solid rgba(37,99,235,0.3)", borderRadius: 50, padding: "6px 16px", fontSize: 12, fontWeight: 700, color: "#93c5fd", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 28 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
            We're Hiring — Join the Founding Team
          </div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.08, marginBottom: 20 }}>
            Help build the future of<br />
            <span style={{ color: "#60a5fa" }}>Indian travel business.</span>
          </h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, maxWidth: 520, margin: "0 auto 32px" }}>
            Orbitle is an early-stage SaaS platform building the travel business infrastructure for India. We're a small, action-oriented team — every hire shapes what we become.
          </p>
          <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap" }}>
            {[["🌏", "Remote-first"], ["⚡", "High growth"], ["🎯", "Meaningful work"]].map(([icon, label]) => (
              <span key={label as string} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.7)", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", padding: "8px 18px", borderRadius: 50 }}>
                {icon as string} {label as string}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Jobs count */}
      <div style={{ background: "#fff", borderBottom: "1px solid #e2e8f0", padding: "20px 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: "#4b5e7a" }}><strong style={{ color: "#0d1b2e" }}>{JOBS.length} open positions</strong> · All roles are remote-first across India</div>
          <div style={{ display: "flex", gap: 8 }}>
            {JOBS.map((j) => (
              <span key={j.id} style={{ fontSize: 11.5, fontWeight: 700, padding: "4px 12px", borderRadius: 50, background: j.badgeBg, color: j.badgeColor }}>{j.icon} {j.title}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Jobs list */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px" }}>
        <div className="job-body-grid" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {JOBS.map((job) => (
            <JobCard key={job.id} job={job} onApply={(id) => setApplyJobId(id)} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ marginTop: 56, background: "#0d1b2e", borderRadius: 20, padding: "40px", textAlign: "center" }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#93c5fd", marginBottom: 14 }}>Don't see your role?</div>
          <h3 style={{ fontSize: 26, fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", marginBottom: 12 }}>Still want to work with us?</h3>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: 24, maxWidth: 440, margin: "0 auto 24px" }}>
            We're always looking for exceptional people. Send us a note with what you bring to the table — we'd love to hear from you.
          </p>
          <a
            href="mailto:careers@trigrowtech.in?subject=Open Application — Orbitle"
            style={{ display: "inline-block", background: "#2563eb", color: "#fff", fontSize: 14, fontWeight: 700, padding: "14px 28px", borderRadius: 50, textDecoration: "none" }}
          >
            Email careers@trigrowtech.in →
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ background: "#0d1b2e", padding: "32px 24px", textAlign: "center" }}>
        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.3)" }}>
          © 2026 TrigrowTech. All rights reserved. ·{" "}
          <Link href="/privacy-policy" style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>Privacy Policy</Link>
        </div>
      </footer>

      {/* Apply Modal */}
      {applyJobId && <ApplyModal jobId={applyJobId} onClose={() => setApplyJobId(null)} />}
    </div>
  );
}
