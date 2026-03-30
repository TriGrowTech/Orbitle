"use client";

import React, { useState } from "react";
import Link from "next/link";
import NavBar from "./Navbar";
import HeroSection from "./HeroSection";
import ContactForm from "./ContactForm";

// ─────────────────────────────────────────────
// GLOBAL STYLES (injected once at page level)
// ─────────────────────────────────────────────
const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  input, select, textarea, button { font-family: 'Plus Jakarta Sans', sans-serif; }

  input:focus, select:focus, textarea:focus {
    border-color: #2563eb !important;
    background: #fff !important;
    outline: none;
  }

  /* ── Hover effects ── */
  .step-card:hover     { box-shadow: 0 8px 32px rgba(37,99,235,0.1); transform: translateY(-2px); }
  .why-card:hover      { background: #eff6ff !important; border-color: #2563eb !important; }
  .tcard:hover         { box-shadow: 0 8px 32px rgba(0,0,0,0.07); }
  .pcard:hover         { border-color: #2563eb !important; }
  .change-card:hover   { border-color: #2563eb !important; }
  .platform-card:hover { border-color: #2563eb !important; box-shadow: 0 4px 24px rgba(37,99,235,0.08); }
  .nav-link:hover      { color: #0d1b2e !important; }
  .sidebar-link:hover  { color: #2563eb !important; background: #eff6ff !important; }

  /* ── Animations ── */
  @keyframes float   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
  @keyframes fadein  { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
  .hero-h1      { animation: fadein 0.5s ease both; }
  .hero-sub     { animation: fadein 0.5s 0.1s ease both; }
  .hero-actions { animation: fadein 0.5s 0.2s ease both; }
  .hero-pills   { animation: fadein 0.5s 0.3s ease both; }
  .float-notif  { animation: float 3s ease-in-out infinite; }

  /* ── Form grid ── */
  .form-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }

  /* ── Responsive: ≤ 768px ── */
  @media (max-width: 768px) {
    /* Nav */
    .hamburger           { display: flex !important; }
    .nav-mobile-right    { display: flex !important; }
    .nav-links-desktop   { display: none !important; }
    .nav-cta-desktop     { display: none !important; }
    .nav-pad             { padding: 0 20px !important; }

    /* Hero */
    .hero-section    { padding: 48px 20px 0 !important; }
    .hero-h1-text    { font-size: 32px !important; }
    .hero-sub-text   { font-size: 15px !important; }
    .hero-actions    { flex-direction: column !important; align-items: stretch !important; }
    .hero-actions a  { text-align: center !important; justify-content: center !important; }
    .hero-pills      { gap: 12px !important; }
    .dashboard-mock  { margin-top: 32px !important; }

    /* Sections */
    .section-pad     { padding: 56px 20px !important; }
    .section-title   { font-size: 28px !important; }

    /* Grids */
    .grid-3          { grid-template-columns: 1fr !important; }
    .grid-2          { grid-template-columns: 1fr !important; }
    .mid-cta-grid    { grid-template-columns: 1fr !important; gap: 40px !important; }
    .pricing-grid    { grid-template-columns: 1fr 1fr !important; }

    /* Value banner */
    .value-banner-grid    { grid-template-columns: 1fr !important; gap: 32px !important; }
    .value-banner-divider { display: none !important; }
    .value-price          { font-size: 56px !important; }

    /* Footer */
    .footer-grid     { grid-template-columns: 1fr 1fr !important; gap: 36px !important; }
    .footer-brand    { grid-column: 1 / -1 !important; }

    /* Announcement bar */
    .ann-bar-timer { display: none !important; }

    /* Form */
    .form-grid-2 { grid-template-columns: 1fr !important; }
  }

  @media (max-width: 480px) {
    .pricing-grid { grid-template-columns: 1fr !important; }
    .footer-grid  { grid-template-columns: 1fr !important; }
  }

  /* Shimmer animation for announcement bar */
  @keyframes ann-slide { from { transform: translateX(-100%); } to { transform: translateX(400%); } }
  .ann-shimmer { animation: ann-slide 3s linear infinite; }
`;

// ─────────────────────────────────────────────
// SHARED DATA  (kept close to the sections that use them)
// ─────────────────────────────────────────────

const HOW_IT_WORKS_STEPS = [
  { n: 1, tag: "We do the setup",    title: "Tell Us Your Domain",              body: "Share your domain name. We handle DNS, SSL, hosting, and every technical detail. Don't have one? We provide it — included on 6-month and yearly plans." },
  { n: 2, tag: "You're in control",  title: "Add Packages & Brand Your Site",   body: "Upload your tour packages, set prices, add photos, write your bio. Your admin panel gives you full control over everything customers see — no technical skills required." },
  { n: 3, tag: "Live in 5 minutes",  title: "Receive Enquiries Directly",       body: "Customers visit your website, browse your packages, and fill your enquiry form. Every lead lands directly in your admin panel. Share your link on WhatsApp, Instagram, Google — watch enquiries come in." },
] as const;

const PLATFORM_CARDS = [
  {
    icon: "🌏", iconBg: "#eff6ff",
    title: "Travel Marketplace Website",
    desc: "A branded travel website on your own domain. Not a listing on someone else's platform — your own destination where customers find, browse, and enquire.",
    features: [
      "Homepage with hero banner, tagline, featured packages",
      "Full packages page — search and filter by destination, duration, price",
      "Individual package detail pages with itinerary, photos, inclusions",
      "About page — your story, expertise, certifications",
      "Plan My Tour form — custom trip requests sent directly to you",
      "WhatsApp chat button, contact page, FAQs — all included",
      "Mobile responsive · SSL secured · Fast loading · Basic SEO",
    ],
  },
  {
    icon: "⚙️", iconBg: "rgba(13,27,46,0.06)",
    title: "Admin Panel",
    desc: "Your private dashboard to manage everything on your website. Add packages, track enquiries, follow up on leads — all from one clean interface.",
    features: [
      "Add, edit, list, unlist packages — live immediately",
      "All enquiries in one dashboard — website form, package form, custom tour",
      "Lead pipeline — New → Contacted → Proposal Sent → Booked",
      "Set follow-up reminders on any enquiry",
      "WhatsApp shortcut — one click to open chat with any lead",
      "Manage homepage content, testimonials, FAQs from dashboard",
      "Export all enquiries to Excel anytime",
    ],
  },
  {
    icon: "📦", iconBg: "#eff6ff",
    title: "Package Management",
    desc: "Upload and manage your full tour catalogue. Every package gets a dedicated detail page on your website the moment you publish it.",
    features: [
      "Full itinerary builder — day by day breakdown",
      "Photo galleries, inclusions, exclusions, highlights",
      "Category tags — honeymoon, adventure, family, pilgrimage, international",
      "Duplicate packages for similar tours — save time",
      "Control which packages feature on your homepage",
      "Draft mode — work on packages before going live",
    ],
  },
  {
    icon: "📊", iconBg: "rgba(13,27,46,0.06)",
    title: "Enquiry & Lead Management",
    desc: "Never lose a lead again. Every enquiry that comes through your website lands in your admin panel with full details and a clear follow-up pipeline.",
    features: [
      "Status pipeline — New → Contacted → Proposal Sent → Booked → Closed",
      "Internal notes per enquiry — remember every conversation",
      "Follow-up reminders with date and note",
      "See which package each lead was interested in",
      "Filter by status, date, source — find any lead instantly",
      "Mark as converted and track monthly bookings",
    ],
  },
] as const;

const WHAT_CHANGES_CARDS = [
  { label: "Your Online Presence", before: "WhatsApp link",  after: "yourname.com",   pill: "Professional",        pillColor: "#2563eb", pillBg: "#eff6ff", desc: "Stop sharing a WhatsApp link or PDF catalogue. Give customers a real website that earns trust before they ever call you." },
  { label: "Enquiry Management",   before: "WhatsApp chaos", after: "Clean dashboard", pill: "Organised",           pillColor: "#16a34a", pillBg: "#dcfce7", desc: "Every lead in one place with status, notes, and follow-up reminders. Never lose track of a potential booking again." },
  { label: "Setup Cost",           before: "₹10,000 + wait", after: "₹499/month",      pill: "Or ₹9,999 lifetime", pillColor: "#16a34a", pillBg: "#dcfce7", desc: "No one-time builds that go stale. Your platform is always maintained, updated, and supported." },
  { label: "Lead Leakage",         before: "Lost in chats",  after: "~0% lost",        pill: "Eliminated",          pillColor: "#16a34a", pillBg: "#dcfce7", desc: "Every enquiry from your website lands in your admin panel. No missed messages, no leads buried in WhatsApp threads." },
] as const;

const WHY_CARDS = [
  { icon: "🚀", title: "Live in 5 minutes — not 6 weeks",    body: "Freelancers take 4–8 weeks to build a basic site. Orbitle has you live in 5 minutes. Share your domain, we handle DNS, SSL, hosting, and setup — you're done." },
  { icon: "🏷️", title: "Your brand. Not a listing on ours.", body: "Everything runs on your domain — yourname.com. Not on a platform you don't own. Every click, every enquiry stays with you." },
  { icon: "📲", title: "Built for WhatsApp-first agents",    body: "Share your website link on WhatsApp, Instagram, Google My Business. Customers browse your packages, fill the form — you get a notification instantly." },
  { icon: "🔧", title: "No developer. No extra cost. Ever.", body: "Add packages, update prices, change your homepage banner — all from your admin panel. No calling a developer. No waiting. No extra billing." },
  { icon: "📈", title: "Grow into an operator later",        body: "When you're ready to hire agents under you, upgrade to the full Orbitle operator bundle. Your website, your data, your brand — nothing starts from scratch." },
  { icon: "🛡️", title: "TrigrowTech manages everything",    body: "Hosting, uptime, SSL renewal, platform updates — all handled by TrigrowTech. You focus on selling tours. We keep the infrastructure running 24/7." },
] as const;

const TESTIMONIALS = [
  { init: "SM", name: "Sara M.",   role: "Independent Agent, Mumbai",  text: "I've been sending people my Justdial page because I don't have my own website. I paid someone ₹8,000 for a site two years ago and it just stopped working. This is exactly what I needed." },
  { init: "RK", name: "Ravi K.",   role: "Travel Agent, Hyderabad",    text: "I manage all my leads on WhatsApp and I lose track of at least 20–30% of them. A proper enquiry dashboard with follow-up reminders — this is what I've needed for years." },
  { init: "AM", name: "Anjali M.", role: "Travel Agent, Lucknow",      text: "The lifetime plan got me. I was about to spend ₹12,000 getting a website built. Same price — but now I get admin panel, enquiry tracking, hosting, support, ongoing. Not even a comparison." },
] as const;

const PRICING_PLANS = [
  {
    name: "Monthly",    price: "₹499",    per: "₹17/day · Billed monthly",          save: "Start anytime", featured: false,
    features: ["Travel marketplace website", "Full admin panel", "Bring your own domain", "Package management", "Enquiry tracking & pipeline", "1-week free trial"],
    cta: "Get Started →",
  },
  {
    name: "6 Months",   price: "₹2,499",  per: "₹14/day · Save ₹495",               save: "Save 17%",      featured: false,
    features: ["Everything in Monthly", "Domain included (we provide)", "Priority email support", "Package management", "Enquiry tracking & pipeline", "1-week free trial"],
    cta: "Get Started →",
  },
  {
    name: "Yearly",     price: "₹3,999",  per: "₹11/day · Save ₹1,989",             save: "Save 33%",      featured: true,
    features: ["Everything in 6-Month", "Domain included", "Priority WhatsApp support", "Quarterly content updates", "SEO meta setup included", "1-week free trial"],
    cta: "Get Started →",
  },
  {
    name: "Lifetime",   price: "₹9,999",  per: "One-time · Pay once, yours forever", save: "78 spots left", featured: false,
    features: ["Everything in Yearly", "Domain included — forever", "Dedicated support", "Ongoing content updates", "First access to new features", "No renewal. Ever."],
    cta: "Claim Lifetime →",
  },
] as const;

const FOOTER_COLUMNS = [
  {
    heading: "Platform",
    links: [
      { label: "Travel Marketplace", href: "#platform" },
      { label: "Admin Panel", href: "#platform" },
      { label: "Package Management", href: "#platform" },
      { label: "Enquiry Tracking", href: "#platform" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About TrigrowTech", href: "#" },
      { label: "Careers", href: "/careers" },
      { label: "Earn with Orbitle", href: "/earn" },
      { label: "Contact", href: "#get-started" },
    ],
    extra: { label: "For Operators ↗", href: "/operators" },
  },
  {
    heading: "Resources",
    links: [
      { label: "Get Your Website", href: "#get-started" },
      { label: "See Pricing", href: "#pricing" },
      { label: "Book a Demo", href: "#get-started" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
  },
] as const;

// ─────────────────────────────────────────────
// SHARED LAYOUT HELPERS
// ─────────────────────────────────────────────

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "inline-block",
        fontSize: 12, fontWeight: 700,
        letterSpacing: "0.1em", textTransform: "uppercase",
        color: "#2563eb", background: "#eff6ff",
        padding: "5px 14px", borderRadius: 20, marginBottom: 20,
      }}
    >
      {children}
    </div>
  );
}

function SectionTitle({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <h2
      className="section-title"
      style={{
        fontSize: "clamp(28px,4vw,50px)",
        fontWeight: 800, color: "#0d1b2e",
        letterSpacing: "-0.03em", lineHeight: 1.08,
        marginBottom: 16, ...style,
      }}
    >
      {children}
    </h2>
  );
}

function SectionSub({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: 17, color: "#4b5e7a", maxWidth: 540, lineHeight: 1.7, marginBottom: 56 }}>
      {children}
    </p>
  );
}

// ─────────────────────────────────────────────
// SECTION COMPONENTS  (static, no state)
// ─────────────────────────────────────────────

function HowItWorksSection() {
  return (
    <section id="how" className="section-pad" style={{ background: "#f0f4fa", padding: "88px 40px" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <Eyebrow>How It Works</Eyebrow>
        <SectionTitle>You bring the packages.<br />We build the platform.</SectionTitle>
        <SectionSub>Three steps from zero to a professional travel website running on your own domain — in 5 minutes.</SectionSub>

        <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {HOW_IT_WORKS_STEPS.map(({ n, tag, title, body }) => (
            <div key={n} className="step-card" style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 20, padding: "36px 32px", transition: "box-shadow 0.2s, transform 0.2s" }}>
              <div style={{ width: 42, height: 42, borderRadius: 12, background: "#2563eb", color: "#fff", fontSize: 18, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                {n}
              </div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#2563eb", marginBottom: 10 }}>{tag}</div>
              <div style={{ fontSize: 22, fontWeight: 800, color: "#0d1b2e", letterSpacing: "-0.02em", marginBottom: 14, lineHeight: 1.2 }}>{title}</div>
              <p style={{ fontSize: 14.5, color: "#4b5e7a", lineHeight: 1.75 }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlatformSection() {
  return (
    <section id="platform" className="section-pad" style={{ background: "#fff", padding: "88px 40px" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 24 }}>
          <div>
            <Eyebrow>The Platform</Eyebrow>
            <SectionTitle>Two Powerful Systems.<br />One Simple Platform.</SectionTitle>
            <p style={{ fontSize: 17, color: "#4b5e7a", lineHeight: 1.7 }}>You're not buying a website. You're getting a complete travel business presence online.</p>
          </div>
          <div style={{ fontSize: 15, color: "#7a8fa8", maxWidth: 300, lineHeight: 1.65, padding: "16px 20px", background: "#f0f4fa", border: "1px solid #e2e8f0", borderRadius: 12, fontWeight: 500 }}>
            Your own marketplace website and a full admin panel to manage it — on your domain, with your brand, your packages, your leads.
          </div>
        </div>

        <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {PLATFORM_CARDS.map(({ icon, iconBg, title, desc, features }) => (
            <div key={title} className="platform-card" style={{ background: "#f0f4fa", border: "1.5px solid #e2e8f0", borderRadius: 20, padding: "36px 34px", transition: "border-color 0.2s, box-shadow 0.2s" }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: iconBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 20 }}>{icon}</div>
              <h3 style={{ fontSize: 22, fontWeight: 800, color: "#0d1b2e", letterSpacing: "-0.02em", marginBottom: 10, lineHeight: 1.2 }}>{title}</h3>
              <p style={{ fontSize: 14, color: "#4b5e7a", marginBottom: 22, lineHeight: 1.65 }}>{desc}</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 9 }}>
                {features.map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13.5, color: "#4b5e7a", lineHeight: 1.5 }}>
                    <span style={{ color: "#2563eb", fontWeight: 800, flexShrink: 0, fontSize: 13 }}>✓</span>{f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueBannerSection() {
  return (
    <section className="section-pad" style={{ background: "#0d1b2e", padding: "88px 40px" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div className="value-banner-grid" style={{ display: "grid", gridTemplateColumns: "auto 1px 1fr", gap: 56, alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#93c5fd", marginBottom: 8 }}>Starting from</div>
            <div className="value-price" style={{ fontSize: 80, fontWeight: 800, color: "#fff", lineHeight: 1, letterSpacing: "-0.04em", marginBottom: 6 }}>
              <sup style={{ fontSize: 32, verticalAlign: "super" }}>₹</sup>499
              <sub style={{ fontSize: 22, color: "rgba(255,255,255,0.5)" }}>/mo</sub>
            </div>
            <div style={{ fontSize: 14, color: "rgba(255,255,255,0.4)" }}>Or ₹9,999 one-time — forever.</div>
          </div>

          <div className="value-banner-divider" style={{ background: "rgba(255,255,255,0.1)", height: 120 }} />

          <div>
            <h2 style={{ fontSize: "clamp(22px,3vw,38px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: 16 }}>
              Someone paid ₹10,000 for a basic website with no support. You deserve better.
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.75, marginBottom: 28 }}>
              Agents are spending ₹8,000–₹15,000 getting freelancers to build a travel site — no admin panel, no lead tracking, no ongoing support, no updates. Orbitle gives you a better product at a fraction of that.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {["100% Data Ownership", "Zero Commission to OTAs", "All Enquiries Direct to You", "No Revenue Share"].map((t) => (
                <span key={t} style={{ fontSize: 12.5, fontWeight: 700, color: "#fff", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", padding: "6px 16px", borderRadius: 50 }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatChangesSection() {
  return (
    <section className="section-pad" style={{ background: "#f0f4fa", padding: "88px 40px" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div style={{ fontSize: "clamp(26px,3.5vw,46px)", fontWeight: 800, color: "#0d1b2e", letterSpacing: "-0.03em", marginBottom: 40, lineHeight: 1.1 }}>
          What changes when you use Orbitle
        </div>
        <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 }}>
          {WHAT_CHANGES_CARDS.map(({ label, before, after, pill, pillColor, pillBg, desc }) => (
            <div key={label} className="change-card" style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 20, padding: 32, transition: "border-color 0.2s" }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#7a8fa8", marginBottom: 18 }}>{label}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12, flexWrap: "wrap" }}>
                <span style={{ fontSize: 20, fontWeight: 800, color: "#cbd5e1", textDecoration: "line-through", textDecorationColor: "rgba(220,50,50,0.5)", letterSpacing: "-0.02em" }}>{before}</span>
                <span style={{ fontSize: 18, color: "#7a8fa8" }}>→</span>
                <span style={{ fontSize: 20, fontWeight: 800, color: "#0d1b2e", letterSpacing: "-0.02em" }}>{after}</span>
              </div>
              <span style={{ display: "inline-flex", alignItems: "center", fontSize: 12, fontWeight: 700, padding: "4px 12px", borderRadius: 50, marginBottom: 12, background: pillBg, color: pillColor }}>{pill}</span>
              <p style={{ fontSize: 13.5, color: "#4b5e7a", lineHeight: 1.7 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyOrbitleSection() {
  return (
    <section className="section-pad" style={{ background: "#fff", padding: "88px 40px" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <Eyebrow>Why Orbitle</Eyebrow>
        <SectionTitle style={{ marginBottom: 48 }}>Built for agents<br />who mean business.</SectionTitle>
        <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {WHY_CARDS.map(({ icon, title, body }) => (
            <div key={title} className="why-card" style={{ background: "#f0f4fa", border: "1px solid #e2e8f0", borderRadius: 20, padding: 32, transition: "all 0.2s" }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 18, border: "1px solid #dbeafe" }}>{icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: "#0d1b2e", letterSpacing: "-0.02em", marginBottom: 10, lineHeight: 1.3 }}>{title}</h3>
              <p style={{ fontSize: 14, color: "#4b5e7a", lineHeight: 1.75 }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MidPageCTASection({ onFormSubmit }: { onFormSubmit: () => void }) {
  const FEATURES = [
    { icon: "⚡", title: "5-minute setup",              sub: "We configure everything — DNS, SSL, hosting, theme" },
    { icon: "📋", title: "Full admin panel included",   sub: "Manage packages and leads from day one" },
    { icon: "♾️", title: "Lifetime plan available",     sub: "₹9,999 once — never pay again" },
  ] as const;

  return (
    <section id="try-now" className="section-pad" style={{ background: "linear-gradient(135deg, #0d1b2e 0%, #1e3a5f 100%)", padding: "88px 40px" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div className="mid-cta-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
          <div>
            <span style={{ display: "inline-block", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#93c5fd", background: "rgba(147,197,253,0.1)", padding: "5px 14px", borderRadius: 20, marginBottom: 24 }}>
              Start your free trial
            </span>
            <h2 style={{ fontSize: "clamp(26px,4vw,44px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 20 }}>
              Ready to stop losing leads on WhatsApp?
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.75, marginBottom: 36 }}>
              Get your own branded travel website live in 5 minutes. Start with a 1-week free trial — no credit card required.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {FEATURES.map(({ icon, title, sub }) => (
                <div key={title} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <div style={{ width: 40, height: 40, flexShrink: 0, borderRadius: 12, background: "rgba(37,99,235,0.25)", border: "1px solid rgba(37,99,235,0.4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>{icon}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 2 }}>{title}</div>
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.55 }}>{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reusable form — compact variant */}
          <ContactForm compact onSubmit={onFormSubmit} />
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="section-pad" style={{ background: "#f0f4fa", padding: "88px 40px" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <Eyebrow>From Our Early Access</Eyebrow>
        <SectionTitle>What agents said<br />when they signed up</SectionTitle>
        <p style={{ fontSize: 15, color: "#7a8fa8", maxWidth: 540, lineHeight: 1.7, marginTop: 12, marginBottom: 48 }}>
          The platform is still being built. These are real comments from agents who joined our early access after seeing the concept.
        </p>
        <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {TESTIMONIALS.map(({ init, name, role, text }) => (
            <div key={name} className="tcard" style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 20, padding: 32, transition: "box-shadow 0.2s" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11, fontWeight: 700, letterSpacing: "0.05em", color: "#16a34a", background: "#dcfce7", border: "1px solid rgba(22,163,74,0.2)", padding: "4px 12px", borderRadius: 50, marginBottom: 18 }}>
                ✓ Early Access
              </div>
              <p style={{ fontSize: 15, color: "#4b5e7a", lineHeight: 1.75, marginBottom: 22, fontStyle: "italic" }}>"{text}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#eff6ff", border: "2px solid #dbeafe", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, color: "#2563eb", flexShrink: 0 }}>{init}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#0d1b2e" }}>{name}</div>
                  <div style={{ fontSize: 12, color: "#7a8fa8", marginTop: 1 }}>{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection({ unlocked }: { unlocked: boolean }) {
  return (
    <section id="pricing" className="section-pad" style={{ background: "#fff", padding: "88px 40px", textAlign: "center" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <Eyebrow>Pricing</Eyebrow>
        <SectionTitle>Founding discount for the first 100 agents.<br />Starting from ₹499/month.</SectionTitle>
        <p style={{ fontSize: 17, color: "#4b5e7a", maxWidth: 540, margin: "0 auto 48px", lineHeight: 1.7 }}>
          No commissions. No revenue share. No per-lead charges. One flat subscription — everything maintained for you.
        </p>

        {/* Lock overlay */}
        <div style={{ position: "relative" }}>
          {!unlocked && (
            <div style={{ position: "absolute", inset: 0, zIndex: 20, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
              <div style={{ position: "absolute", inset: 0, background: "rgba(255,255,255,0.5)", backdropFilter: "blur(6px)", borderRadius: 24 }} />
              <div style={{ position: "relative", zIndex: 1, pointerEvents: "auto", background: "#fff", border: "1px solid #e2e8f0", borderRadius: 24, padding: "40px 36px", maxWidth: 380, textAlign: "center", boxShadow: "0 32px 64px rgba(0,0,0,0.12)" }}>
                <div style={{ width: 56, height: 56, borderRadius: 16, background: "#eff6ff", border: "1px solid #dbeafe", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, margin: "0 auto 20px" }}>🔒</div>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: "#0d1b2e", marginBottom: 10, letterSpacing: "-0.02em" }}>Pricing Unlocks After Sign-Up</h3>
                <p style={{ fontSize: 14, color: "#4b5e7a", lineHeight: 1.7, marginBottom: 24 }}>Fill in your details in the form above or below to instantly reveal our founding-period pricing.</p>
                <button
                  onClick={() => document.getElementById("get-started")?.scrollIntoView({ behavior: "smooth" })}
                  style={{ width: "100%", padding: "13px", background: "#2563eb", color: "#fff", border: "none", borderRadius: 50, fontSize: 14, fontWeight: 700, fontFamily: "inherit", cursor: "pointer" }}
                >
                  Show Me Pricing →
                </button>
                <p style={{ fontSize: 12, color: "#7a8fa8", marginTop: 12 }}>No commitment required · Free trial included</p>
              </div>
            </div>
          )}

          <div className="pricing-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, filter: unlocked ? "none" : "blur(8px) grayscale(1)", opacity: unlocked ? 1 : 0.35, pointerEvents: unlocked ? "auto" : "none", userSelect: unlocked ? "auto" : "none", transition: "all 0.5s ease" }}>
            {PRICING_PLANS.map(({ name, price, per, save, featured, features, cta }) => (
              <div
                key={name}
                className="pcard"
                style={{
                  background: featured ? "#0d1b2e" : "#f0f4fa",
                  border: `1.5px solid ${featured ? "#0d1b2e" : "#e2e8f0"}`,
                  borderRadius: 20, padding: "28px 24px 24px",
                  position: "relative", transition: "border-color 0.2s", textAlign: "left",
                }}
              >
                {featured && (
                  <div style={{ position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)", background: "#2563eb", color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", padding: "4px 16px", borderRadius: 50, whiteSpace: "nowrap" }}>
                    Most Popular
                  </div>
                )}
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: featured ? "rgba(255,255,255,0.45)" : "#7a8fa8", marginBottom: 14 }}>{name}</div>
                <div style={{ fontSize: 36, fontWeight: 800, color: featured ? "#fff" : "#0d1b2e", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 4 }}>{price}</div>
                <div style={{ fontSize: 12, color: featured ? "rgba(255,255,255,0.4)" : "#7a8fa8", marginBottom: 14 }}>{per}</div>
                <span style={{ display: "inline-block", fontSize: 12, fontWeight: 700, padding: "4px 12px", borderRadius: 50, marginBottom: 18, background: featured ? "rgba(255,255,255,0.1)" : "#dcfce7", color: featured ? "rgba(255,255,255,0.7)" : "#16a34a" }}>{save}</span>
                <div style={{ height: 1, background: featured ? "rgba(255,255,255,0.1)" : "#e2e8f0", marginBottom: 18 }} />
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 9, marginBottom: 22 }}>
                  {features.map((f) => (
                    <li key={f} style={{ fontSize: 13, color: featured ? "rgba(255,255,255,0.65)" : "#4b5e7a", display: "flex", gap: 8, alignItems: "flex-start", lineHeight: 1.5 }}>
                      <span style={{ color: featured ? "#93c5fd" : "#16a34a", fontWeight: 800, fontSize: 12, flexShrink: 0 }}>✓</span>{f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => document.getElementById("get-started")?.scrollIntoView({ behavior: "smooth" })}
                  style={{ width: "100%", padding: 12, borderRadius: 50, fontSize: 14, fontWeight: 700, fontFamily: "inherit", cursor: "pointer", transition: "all 0.15s", background: featured ? "#2563eb" : "transparent", color: featured ? "#fff" : "#0d1b2e", border: featured ? "none" : "1.5px solid #cbd5e1" }}
                >
                  {cta}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 28, background: "#f0f4fa", border: "1px solid #e2e8f0", borderRadius: 12, padding: "20px 24px", fontSize: 13.5, color: "#7a8fa8", lineHeight: 1.7, textAlign: "center" }}>
          <strong style={{ color: "#0d1b2e" }}>Domain Note:</strong> We provision and configure your domain as part of the subscription. Domain provisioning by us requires a minimum 6-month plan. You can also bring your own domain on any plan. ·{" "}
          <strong style={{ color: "#0d1b2e" }}>All plans include a 1-week free trial.</strong> ·{" "}
          <strong style={{ color: "#0d1b2e" }}>Lifetime plan is limited to the first 100 agents.</strong> 78 founding spots remaining.
        </div>
      </div>
    </section>
  );
}

function MainCTASection({ onFormSubmit }: { onFormSubmit: () => void }) {
  const ITEMS = [
    { icon: "🎁", title: "Founding Discount",       sub: "Locked in permanently on submission. Not available after 100 agents." },
    { icon: "⚡", title: "1-Week Free Trial",        sub: "Explore the full platform before paying a single rupee." },
    { icon: "🌐", title: "Live in 5 Minutes",         sub: "Full website on your domain. We handle every technical detail." },
    { icon: "♾️", title: "Lifetime Plan Available",  sub: "Pay ₹9,999 once — same price as a freelancer build, but forever." },
  ] as const;

  return (
    <section id="get-started" className="section-pad" style={{ background: "#f0f4fa", padding: "88px 40px" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div className="mid-cta-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
          <div>
            <h2 style={{ fontSize: "clamp(28px,4vw,50px)", fontWeight: 800, color: "#0d1b2e", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 18 }}>
              Get your own travel website <span style={{ color: "#2563eb" }}>today.</span>
            </h2>
            <p style={{ fontSize: 16, color: "#4b5e7a", lineHeight: 1.75, marginBottom: 36 }}>
              Stop losing leads on WhatsApp. Stop sending customers to someone else's platform. Your website. Your brand. Your bookings — starting at ₹499/month.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {ITEMS.map(({ icon, title, sub }) => (
                <div key={title} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <div style={{ width: 40, height: 40, flexShrink: 0, borderRadius: 12, background: "#eff6ff", border: "1px solid #dbeafe", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>{icon}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#0d1b2e", marginBottom: 2 }}>{title}</div>
                    <div style={{ fontSize: 13, color: "#7a8fa8", lineHeight: 1.55 }}>{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reusable form — full variant */}
          <ContactForm onSubmit={onFormSubmit} />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#0d1b2e", padding: "56px 20px 32px" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 56, paddingBottom: 44, borderBottom: "1px solid rgba(255,255,255,0.07)", marginBottom: 32 }}>
          {/* Brand column */}
          <div className="footer-brand">
            <div style={{ fontSize: 22, fontWeight: 800, fontStyle: "italic", color: "#fff", marginBottom: 8, letterSpacing: "-0.02em" }}>Orbitle for Agents</div>
            <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, marginBottom: 18 }}>
              A travel website and admin panel for independent travel agents, by TrigrowTech. Your brand. Your domain. Your bookings.
            </p>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", lineHeight: 2 }}>
              support@trigrowtech.in<br />+91 6395163348
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map(({ heading, links, extra }: any) => (
            <div key={heading}>
              <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 16 }}>{heading}</h4>
              {links.map((l: any) => {
                const label = typeof l === "string" ? l : l.label;
                const href = typeof l === "string" ? "#" : l.href;
                return (
                  <Link key={label} href={href} style={{ display: "block", fontSize: 13.5, color: "rgba(255,255,255,0.45)", textDecoration: "none", marginBottom: 11, transition: "color 0.15s" }}>{label}</Link>
                );
              })}
              {extra && (
                <Link href={extra.href} style={{ display: "inline-block", fontSize: 13, fontWeight: 700, color: "#93c5fd", textDecoration: "none", marginTop: 6, padding: "5px 14px", borderRadius: 20, border: "1px solid rgba(147,197,253,0.2)", background: "rgba(147,197,253,0.05)" }}>
                  {extra.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12.5, flexWrap: "wrap", gap: 12 }}>
          <span style={{ color: "rgba(255,255,255,0.3)" }}>© 2026 TrigrowTech. All rights reserved.</span>
          <div style={{ display: "flex", gap: 20 }}>
            <Link href="/privacy-policy" style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>Privacy Policy</Link>
            <Link href="/terms-of-service" style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────
// PAGE ROOT
// ─────────────────────────────────────────────
export default function AgentsPage() {
  const [pricingUnlocked, setPricingUnlocked] = useState(false);
  const unlockPricing = () => setPricingUnlocked(true);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Orbitle for Agents",
    "operatingSystem": "Web-based",
    "applicationCategory": "TravelAgencySoftware",
    "description": "White-label travel business platform for independent travel agents. Branded marketplace and admin panel on your own domain in 48 hours.",
    "offers": {
      "@type": "Offer",
      "price": "499",
      "priceCurrency": "INR"
    }
  };

  return (
    <div
      style={{
        fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif",
        background: "#f0f4fa",
        color: "#0d1b2e",
        lineHeight: 1.6,
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <style>{GLOBAL_STYLES}</style>

      <NavBar />
      <HeroSection />
      <HowItWorksSection />
      <PlatformSection />
      <ValueBannerSection />
      <WhatChangesSection />
      <WhyOrbitleSection />
      <MidPageCTASection onFormSubmit={unlockPricing} />
      <TestimonialsSection />
      <PricingSection unlocked={pricingUnlocked} />
      <MainCTASection onFormSubmit={unlockPricing} />

      {/* Operators CTA Banner */}
      <section style={{ background: "#0d1b2e", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "40px 24px", display: "flex", flexDirection: "column", gap: 20, alignItems: "center", textAlign: "center" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#93c5fd" }}>Running a team of agents?</div>
          <h3 style={{ fontSize: "clamp(20px, 3vw, 32px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
            Orbitle for Operators — built for travel companies with agents.
          </h3>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, maxWidth: 560 }}>
            Marketplace website, agent portal, lead management, subdomains for every agent — all on your domain. If you have a team, this is the platform.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <a href="/operators" style={{ background: "#2563eb", color: "#fff", fontSize: 14, fontWeight: 700, padding: "13px 28px", borderRadius: 50, textDecoration: "none" }}>Explore Orbitle for Operators →</a>
           
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}