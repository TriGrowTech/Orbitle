"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const HEADING = "'Poppins', sans-serif";
const BODY    = "'Montserrat', sans-serif";

const SLIDES = [
  {
    bg: "linear-gradient(135deg, #0d1b2e 0%, #1e3a5f 50%, #2563eb 100%)",
    badge: "Orbitle for Agents",
    headline: "A professional operation. Not just a pretty website.",
    sub: "Enquiry capture, lead tracking, and package management — built for agents who are serious about growing.",
    stat: "10 min",
    statLabel: "from signup to live.",
    accent: "#93c5fd",
  },
  {
    bg: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 40%, #0d9488 100%)",
    badge: "Orbitle for Operators",
    headline: "Your network. Structured, visible, and under control.",
    sub: "Manage agents, distribute leads, and track performance across your entire operation — from one place.",
    stat: "1",
    statLabel: "dashboard for your entire network.",
    accent: "#5eead4",
  },
  {
    bg: "linear-gradient(135deg, #1c0a00 0%, #7c2d12 45%, #ea580c 100%)",
    badge: "The Status Quo",
    headline: "Most travel businesses run on WhatsApp and hope.",
    sub: "Enquiries slip. Follow-ups don't happen. There's no system — just effort. Orbitle replaces the chaos.",
    stat: "82%",
    statLabel: "of enquiries never get followed up.",
    accent: "#fdba74",
  },
  {
    bg: "linear-gradient(135deg, #0d1b2e 0%, #1e3a5f 40%, #0284c7 100%)",
    badge: "Built for India",
    headline: "Designed for how Indian travel agents actually work.",
    sub: "WhatsApp-first enquiries, package-based selling, agent networks — Orbitle is built around your reality, not a Western CRM template.",
    stat: "₹499",
    statLabel: "per month. One booking pays for a year.",
    accent: "#7dd3fc",
  },
  {
    bg: "linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #7c3aed 100%)",
    badge: "Early Access",
    headline: "First 100 agents lock in lifetime access.",
    sub: "Pay once. No renewals. No price hikes. The window closes at 100 members.",
    stat: "97",
    statLabel: "of 100 spots taken.",
    accent: "#c4b5fd",
  },
];

export default function AuthCarousel() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setActive((a) => (a + 1) % SLIDES.length);
        setAnimating(false);
      }, 400);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[active];

  function goTo(i: number) {
    setAnimating(true);
    setTimeout(() => { setActive(i); setAnimating(false); }, 700);
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: slide.bg,
        transition: "background 0.8s ease",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "36px 40px",
        boxSizing: "border-box",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative circles */}
      <div style={{ position: "absolute", top: -80, right: -80, width: 320, height: 320, borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -60, left: -60, width: 240, height: 240, borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "40%", left: "60%", width: 160, height: 160, borderRadius: "50%", background: "rgba(255,255,255,0.03)", pointerEvents: "none" }} />

      {/* Top: logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <Image
          src="/images/orbitle-logo.png"
          alt="Orbitle logo"
          width={32}
          height={32}
          style={{ objectFit: "contain", borderRadius: "8px" }}
          priority
        />
        <span style={{
          fontSize: 17,
          fontWeight: 800,
          color: "rgba(255,255,255,0.95)",
          fontStyle: "italic",
          letterSpacing: "-0.3px",
          fontFamily: HEADING,
        }}>
          Orbitle
        </span>
      </div>

      {/* Center: content */}
      <div style={{
        opacity: animating ? 0 : 1,
        transform: animating ? "translateY(12px)" : "translateY(0)",
        transition: "opacity 0.4s ease, transform 0.4s ease",
      }}>
        {/* Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.18)",
          borderRadius: 20, padding: "5px 14px", marginBottom: 20,
        }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: slide.accent }} />
          <span style={{
            fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.9)",
            letterSpacing: "0.06em", textTransform: "uppercase", fontFamily: BODY,
          }}>
            {slide.badge}
          </span>
        </div>

        {/* Headline */}
        <h2 style={{
          fontSize: "clamp(22px, 2.6vw, 30px)",
          fontWeight: 700,
          color: "#ffffff",
          lineHeight: 1.25,
          margin: "0 0 14px 0",
          letterSpacing: "-0.3px",
          fontFamily: HEADING,
          maxWidth: 380,
        }}>
          {slide.headline}
        </h2>

        {/* Subtitle */}
        <p style={{
          fontSize: 14, color: "rgba(255,255,255,0.65)",
          lineHeight: 1.65, margin: "0 0 28px 0",
          maxWidth: 360, fontFamily: BODY, fontWeight: 400,
        }}>
          {slide.sub}
        </p>

        {/* Stat card */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 16,
          background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)",
          borderRadius: 16, padding: "14px 22px", backdropFilter: "blur(8px)",
        }}>
          <span style={{
            fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 700,
            color: slide.accent, lineHeight: 1, fontFamily: HEADING,
          }}>
            {slide.stat}
          </span>
          <span style={{
            fontSize: 13, color: "rgba(255,255,255,0.7)", fontWeight: 500,
            lineHeight: 1.4, fontFamily: BODY, maxWidth: 120,
          }}>
            {slide.statLabel}
          </span>
        </div>
      </div>

      {/* Bottom: dots */}
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              width: i === active ? 24 : 8, height: 8, borderRadius: 4,
              background: i === active ? slide.accent : "rgba(255,255,255,0.3)",
              border: "none", cursor: "pointer", padding: 0,
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}