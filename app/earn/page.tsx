"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const HOW_IT_WORKS = [
  {
    n: 1,
    icon: "🔗",
    title: "Get Your Unique Referral Link",
    body: "Sign up below and receive your personalised referral link within 24 hours. Share it anywhere — WhatsApp, Instagram, email, or your own website.",
  },
  {
    n: 2,
    icon: "👤",
    title: "They Sign Up & Choose a Plan",
    body: "When someone uses your link to sign up and picks any paid plan — monthly, 6-month, yearly, or lifetime — the platform tracks it to your account automatically.",
  },
  {
    n: 3,
    icon: "💸",
    title: "You Earn — Instantly",
    body: "20% of their plan value hits your account the moment they pay. For monthly subscribers, you also earn 5% every month they renew — for as long as they stay.",
  },
] as const;

// Commission structure
const COMMISSION_TIERS = [
  {
    label: "Monthly Plan",
    planPrice: "₹2,999/mo",
    upfront: "₹599.80",
    recurring: "+ ₹149.95/mo" as string | null,
    recurringNote: "every month they renew",
    badge: null as string | null,
    isHighlighted: false,
  },
  {
    label: "6-Month Plan",
    planPrice: "₹14,394 total",
    upfront: "₹2,878.80",
    recurring: "+ ₹719.70/mo" as string | null,
    recurringNote: "every 6 months they renew",
    badge: null as string | null,
    isHighlighted: false,
  },
  {
    label: "Yearly Plan",
    planPrice: "₹23,988 total",
    upfront: "₹4,797.60",
    recurring: "+ ₹1,199.40/yr" as string | null,
    recurringNote: "every year they renew",
    badge: null as string | null,
    isHighlighted: false,
  },
  {
    label: "Lifetime Plan 🔥",
    planPrice: "₹29,999 one-time",
    upfront: "₹8,999.70",
    recurring: null as string | null,
    recurringNote: "one-time only — no recurring",
    badge: "30% One-Time — Highest Payout" as string | null,
    isHighlighted: true,
  },
] as const;

// ─────────────────────────────────────────────
// SIGN-UP FORM
// ─────────────────────────────────────────────
function AffiliateSignupForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 24, padding: "48px 36px", textAlign: "center", boxShadow: "0 4px 40px rgba(37,99,235,0.07)" }}>
        <div style={{ fontSize: 56, marginBottom: 16 }}>🎉</div>
        <h3 style={{ fontSize: 24, fontWeight: 800, color: "#0d1b2e", marginBottom: 12, letterSpacing: "-0.02em" }}>You're in!</h3>
        <p style={{ fontSize: 15, color: "#4b5e7a", lineHeight: 1.7 }}>
          We'll WhatsApp you your unique referral link and affiliate dashboard access within 24 hours. Watch your earnings grow!
        </p>
      </div>
    );
  }

  return (
    <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 24, padding: "36px", boxShadow: "0 4px 40px rgba(37,99,235,0.07)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <h3 style={{ fontSize: 22, fontWeight: 800, color: "#0d1b2e", letterSpacing: "-0.02em", marginBottom: 6 }}>
        Join the Affiliate Program
      </h3>
      <p style={{ fontSize: 13.5, color: "#7a8fa8", marginBottom: 24, lineHeight: 1.6 }}>
        Takes less than 60 seconds. We'll send your referral link via WhatsApp within 24 hours.
      </p>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {[
          ["Your Name", "text", "Rahul Sharma"],
          ["WhatsApp Number", "tel", "+91 98765 43210"],
          ["Email Address", "email", "rahul@email.com"],
        ].map(([label, type, placeholder]) => (
          <label key={label as string} style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#0d1b2e" }}>{label as string}</span>
            <input
              type={type as string}
              required
              placeholder={placeholder as string}
              style={{ padding: "11px 14px", border: "1.5px solid #e2e8f0", borderRadius: 10, fontSize: 14, fontFamily: "inherit", outline: "none", background: "#f8fafc", color: "#0d1b2e" }}
            />
          </label>
        ))}

        <label style={{ display: "flex", flexDirection: "column", gap: 5 }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: "#0d1b2e" }}>How do you know travel agents? <span style={{ fontWeight: 400, color: "#7a8fa8" }}>(optional)</span></span>
          <textarea
            rows={3}
            placeholder="e.g. I run a travel community, I'm an agent myself, I work with DMCs..."
            style={{ padding: "11px 14px", border: "1.5px solid #e2e8f0", borderRadius: 10, fontSize: 14, fontFamily: "inherit", outline: "none", background: "#f8fafc", resize: "vertical", color: "#0d1b2e" }}
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          style={{ width: "100%", padding: "15px", background: "#2563eb", color: "#fff", border: "none", borderRadius: 50, fontSize: 15, fontWeight: 700, fontFamily: "inherit", cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.7 : 1, marginTop: 4, transition: "opacity 0.2s" }}
        >
          {loading ? "Submitting…" : "Start Earning →"}
        </button>

        <p style={{ fontSize: 12, color: "#7a8fa8", textAlign: "center", lineHeight: 1.5 }}>
          Free to join · No monthly targets · Withdraw anytime
        </p>
      </form>
    </div>
  );
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function EarnPage() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif", background: "#f0f4fa", color: "#0d1b2e", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        @media (max-width: 900px) {
          .earn-main-grid  { grid-template-columns: 1fr !important; }
          .earn-step-grid  { grid-template-columns: 1fr !important; }
          .earn-commission-grid { grid-template-columns: 1fr !important; }
          .earn-hero-pad   { padding: 60px 20px !important; }
        }
        .earn-tier-card:hover { transform: translateY(-3px); }
        .earn-cta-btn:hover { opacity: 0.9; }
      `}</style>

      {/* Nav */}
      <nav style={{ background: "#fff", borderBottom: "1px solid #e2e8f0", padding: "0 24px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 50 }}>
        <Link href="/agents" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <Image src="/images/orbitle-logo.png" alt="Orbitle" width={28} height={28} style={{ objectFit: "contain" }} />
          <span style={{ fontSize: 18, fontWeight: 800, color: "#0d1b2e", fontStyle: "italic", letterSpacing: "-0.02em" }}>Orbitle</span>
          <span style={{ fontSize: 10, color: "#7a8fa8", fontWeight: 600 }}>by TrigrowTech</span>
        </Link>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <Link href="/operators" style={{ fontSize: 13, fontWeight: 600, color: "#4b5e7a", textDecoration: "none", padding: "7px 16px", borderRadius: 50, border: "1px solid #e2e8f0" }}>
            For Operators
          </Link>
          <a href="#join" style={{ background: "#2563eb", color: "#fff", fontSize: 13, fontWeight: 700, padding: "8px 20px", borderRadius: 50, textDecoration: "none" }}>
            Start Earning →
          </a>
        </div>
      </nav>

      {/* Hero */}
      <div className="earn-hero-pad" style={{ background: "linear-gradient(135deg, #0d1b2e 0%, #1e3a5f 100%)", padding: "88px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(37,99,235,0.15)", border: "1px solid rgba(37,99,235,0.3)", borderRadius: 50, padding: "6px 16px", fontSize: 12, fontWeight: 700, color: "#93c5fd", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 28 }}>
            💸 Affiliate Program — Now Open
          </div>
          <h1 style={{ fontSize: "clamp(34px, 5.5vw, 64px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.06, marginBottom: 24 }}>
            Refer a travel agent.<br />
            <span style={{ color: "#60a5fa" }}>Earn 20% upfront + 5% recurring.</span>
          </h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.65)", lineHeight: 1.75, maxWidth: 580, margin: "0 auto 40px" }}>
            Know travel agents or tour operators? Share Orbitle with them. Earn 20% of their plan instantly when they sign up — and 5% every month they stay subscribed.
            Lifetime plan referrals earn you <strong style={{ color: "#93c5fd" }}>30% one-time</strong>.
          </p>
          <a href="#join" className="earn-cta-btn" style={{ display: "inline-block", background: "#2563eb", color: "#fff", fontSize: 16, fontWeight: 700, padding: "16px 36px", borderRadius: 50, textDecoration: "none", boxShadow: "0 8px 32px rgba(37,99,235,0.4)", transition: "opacity 0.2s" }}>
            Join the Affiliate Program →
          </a>
          <p style={{ marginTop: 14, fontSize: 13, color: "rgba(255,255,255,0.4)" }}>
            Free to join · No targets · Unlimited earnings
          </p>
        </div>
      </div>

      {/* Commission Structure */}
      <div style={{ background: "#fff", padding: "80px 40px", borderBottom: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div style={{ display: "inline-block", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2563eb", background: "#eff6ff", padding: "5px 14px", borderRadius: 20, marginBottom: 18 }}>Commission Structure</div>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, color: "#0d1b2e", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 14 }}>
              Simple, transparent commissions.
            </h2>
            <p style={{ fontSize: 16, color: "#4b5e7a", lineHeight: 1.7, maxWidth: 540, margin: "0 auto" }}>
              20% upfront on sign-up, 5% recurring on renewals, 30% one-time on lifetime plans. That's it.
            </p>
          </div>

          <div className="earn-commission-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 48 }}>
          {COMMISSION_TIERS.map(({ label, planPrice, upfront, recurring, recurringNote, badge, isHighlighted }) => {
            const bg = isHighlighted ? "#2563eb" : "#f0f4fa";
            const border = isHighlighted ? "#1d4ed8" : "#e2e8f0";
            const textColor = isHighlighted ? "#fff" : "#4b5e7a";
            const mutedColor = isHighlighted ? "rgba(255,255,255,0.6)" : "#7a8fa8";
            const dividerColor = isHighlighted ? "rgba(255,255,255,0.15)" : "#e2e8f0";
            return (
              <div
                key={label}
                className="earn-tier-card"
                style={{ background: bg, border: `1.5px solid ${border}`, borderRadius: 20, padding: "28px 22px", transition: "transform 0.2s", position: "relative" }}
              >
                {badge && (
                  <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "#fff", color: "#2563eb", fontSize: 10, fontWeight: 700, padding: "4px 12px", borderRadius: 50, whiteSpace: "nowrap", border: "1.5px solid #dbeafe" }}>
                    {badge}
                  </div>
                )}
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: mutedColor, marginBottom: 10 }}>{label}</div>
                <div style={{ fontSize: 13, color: mutedColor, marginBottom: 16 }}>Plan: {planPrice}</div>

                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: mutedColor, marginBottom: 4 }}>You earn</div>
                <div style={{ fontSize: 30, fontWeight: 800, color: textColor, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 8 }}>{upfront}</div>
                <div style={{ fontSize: 11, color: isHighlighted ? "rgba(255,255,255,0.6)" : "#16a34a", fontWeight: 600, marginBottom: 10 }}>upfront (on sign-up)</div>

                {recurring && (
                  <div style={{ borderTop: `1px solid ${dividerColor}`, paddingTop: 12 }}>
                    <div style={{ fontSize: 18, fontWeight: 800, color: isHighlighted ? "#93c5fd" : "#2563eb" }}>{recurring}</div>
                    <div style={{ fontSize: 11, color: mutedColor, marginTop: 2 }}>{recurringNote}</div>
                  </div>
                )}
                {!recurring && (
                  <div style={{ borderTop: `1px solid ${dividerColor}`, paddingTop: 12, fontSize: 12, color: mutedColor }}>
                    {recurringNote}
                  </div>
                )}
              </div>
            );
          })}
          </div>

          {/* Simple Example Box */}
          <div style={{ background: "#f0f4fa", border: "2px solid #2563eb", borderRadius: 20, padding: "36px 40px" }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#2563eb", marginBottom: 16 }}>📝 Real Example</div>
            <h3 style={{ fontSize: 22, fontWeight: 800, color: "#0d1b2e", letterSpacing: "-0.02em", marginBottom: 20, lineHeight: 1.2 }}>
              You refer your friend Rahul, who signs up for the Yearly plan.
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { icon: "✅", step: "Day 1 — Rahul signs up and pays ₹23,988 for the year", earn: "You get ₹4,797 instantly (20% upfront)" },
                { icon: "🔁", step: "Month 13 — Rahul renews for another year", earn: "You get ₹1,199 again (5% recurring)" },
                { icon: "🔁", step: "Month 25 — He renews again", earn: "You get ₹1,199 again — every year he renews" },
              ].map(({ icon, step, earn }) => (
                <div key={step} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 20, flexShrink: 0 }}>{icon}</span>
                  <div>
                    <div style={{ fontSize: 14.5, fontWeight: 700, color: "#0d1b2e", marginBottom: 2 }}>{step}</div>
                    <div style={{ fontSize: 14, color: "#2563eb", fontWeight: 600 }}>→ {earn}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 24, background: "#0d1b2e", borderRadius: 12, padding: "16px 20px", fontSize: 14, color: "rgba(255,255,255,0.75)", lineHeight: 1.6 }}>
              <strong style={{ color: "#fff" }}>Lifetime plan example:</strong> You refer Sara who buys Lifetime at ₹29,999 →
              {" "}<strong style={{ color: "#93c5fd" }}>You earn ₹8,999 upfront (30%)</strong>. One-time, done. Sara pays once, you earn once — but it's the highest single payout.
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div style={{ background: "#f0f4fa", padding: "80px 40px" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div style={{ display: "inline-block", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2563eb", background: "#fff", padding: "5px 14px", borderRadius: 20, marginBottom: 18, border: "1px solid #e2e8f0" }}>How It Works</div>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, color: "#0d1b2e", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              Three steps from sharing to earning.
            </h2>
          </div>
          <div className="earn-step-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {HOW_IT_WORKS.map(({ n, icon, title, body }) => (
              <div key={n} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 20, padding: "36px 28px" }}>
                <div style={{ width: 44, height: 44, borderRadius: 14, background: "#2563eb", color: "#fff", fontSize: 20, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>{n}</div>
                <div style={{ fontSize: 28, marginBottom: 14 }}>{icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: "#0d1b2e", letterSpacing: "-0.02em", marginBottom: 10, lineHeight: 1.2 }}>{title}</h3>
                <p style={{ fontSize: 14.5, color: "#4b5e7a", lineHeight: 1.75 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why it works */}
      <div style={{ background: "#0d1b2e", padding: "80px 40px" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              Why this works.
            </h2>
          </div>
          <div className="earn-step-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {[
              { icon: "⚡", title: "Paid instantly — not net-30", body: "Your commission hits your account the moment the referred person's payment clears. No waiting, no invoice chasing." },
              { icon: "🔁", title: "Recurring income on monthly plans", body: "Refer once. Earn every month they renew. Five monthly referrals = five recurring income streams from a single share." },
              { icon: "📊", title: "No cap, no threshold", body: "There's no ceiling on your earnings and no minimum balance before you can withdraw. Earn ₹100 or ₹1,00,000 — withdraw whenever." },
              { icon: "🎯", title: "A product that actually converts", body: "India has 50,000+ travel agents without a proper website. Orbitle is priced for them and solves a real problem — referrals convert." },
              { icon: "🌏", title: "Share your link anywhere", body: "WhatsApp groups, Instagram stories, Facebook communities, email newsletters, travel blogs — everywhere agents hang out is a referral opportunity." },
              { icon: "🤝", title: "We handle everything else", body: "Support, onboarding, platform maintenance — all us. You just share the link. We take care of the rest of the customer journey." },
            ].map(({ icon, title, body }) => (
              <div key={title} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: "28px 24px" }}>
                <div style={{ fontSize: 28, marginBottom: 14 }}>{icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", marginBottom: 10, lineHeight: 1.3 }}>{title}</h3>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.75 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TL;DR Summary */}
      <div style={{ background: "#eff6ff", borderTop: "2px solid #dbeafe", borderBottom: "2px solid #dbeafe", padding: "40px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2563eb", marginBottom: 14 }}>Quick Summary</div>
          <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { label: "Monthly / 6-month / Yearly plans", value: "20% upfront + 5% recurring" },
              { label: "Lifetime plan", value: "30% upfront — one time only" },
              { label: "Payout timing", value: "Instant, on sign-up" },
            ].map(({ label, value }) => (
              <div key={label} style={{ background: "#fff", border: "1px solid #dbeafe", borderRadius: 14, padding: "18px 24px", textAlign: "left", minWidth: 220 }}>
                <div style={{ fontSize: 12, color: "#7a8fa8", fontWeight: 600, marginBottom: 4 }}>{label}</div>
                <div style={{ fontSize: 17, fontWeight: 800, color: "#2563eb" }}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sign-up section */}
      <div id="join" style={{ background: "linear-gradient(135deg, #0d1b2e 0%, #1e3a5f 100%)", padding: "80px 40px" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <div className="earn-main-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
            <div>
              <div style={{ display: "inline-block", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#93c5fd", background: "rgba(147,197,253,0.1)", padding: "5px 14px", borderRadius: 20, marginBottom: 24 }}>
                Start Earning Today
              </div>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 20 }}>
                Turn your travel network into income.
              </h2>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.75, marginBottom: 36 }}>
                Free to join, no targets, no minimums. Just share your link — we handle the rest, including onboarding, support, and payments.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {[
                  { icon: "💸", title: "20% upfront + 5% recurring", sub: "On monthly, 6-month, yearly plans. Paid the moment they do." },
                  { icon: "🔥", title: "30% one-time on Lifetime plans", sub: "Highest single payout per referral — ₹8,999 per person." },
                  { icon: "📊", title: "Referral dashboard included", sub: "Track every signup, plan, and earning amount in real time." },
                ].map(({ icon, title, sub }) => (
                  <div key={title} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                    <div style={{ width: 44, height: 44, flexShrink: 0, borderRadius: 12, background: "rgba(37,99,235,0.25)", border: "1px solid rgba(37,99,235,0.4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>{icon}</div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 2 }}>{title}</div>
                      <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.55 }}>{sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 40, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "16px 20px" }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>Questions?</div>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
                  WhatsApp us at <span style={{ color: "#93c5fd", fontWeight: 600 }}>+91 9696197706</span> or email <span style={{ color: "#93c5fd", fontWeight: 600 }}>affiliate@trigrowtech.in</span>
                </p>
              </div>
            </div>

            <AffiliateSignupForm />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ background: "#060e1a", padding: "32px 24px", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.3)" }}>
          © 2026 TrigrowTech. All rights reserved. ·{" "}
          <Link href="/agents" style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>For Agents</Link>
          {" · "}
          <Link href="/operators" style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>For Operators</Link>
          {" · "}
          <Link href="/careers" style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>Careers</Link>
          {" · "}
          <Link href="/privacy-policy" style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>Privacy Policy</Link>
        </div>
      </footer>
    </div>
  );
}
