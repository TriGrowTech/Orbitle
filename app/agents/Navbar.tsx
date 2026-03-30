"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// ─────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────
interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "How It Works", href: "#how" },
  { label: "Platform",     href: "#platform" },
  { label: "Pricing",      href: "#pricing" },
  { label: "Contact",      href: "#get-started" },
];

// ─────────────────────────────────────────────
// COUNTDOWN HOOK
// ─────────────────────────────────────────────
function useCountdown(initialSeconds: number) {
  const [s, setS] = useState(initialSeconds);
  useEffect(() => {
    const id = setInterval(() => setS((prev) => Math.max(0, prev - 1)), 1000);
    return () => clearInterval(id);
  }, []);
  const hh  = String(Math.floor(s / 3600)).padStart(2, "0");
  const mm  = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
  const sec = String(s % 60).padStart(2, "0");
  return `${hh}:${mm}:${sec}`;
}

// ─────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────

/** Three-bar hamburger button shown on mobile */
function HamburgerButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="hamburger"
      onClick={onClick}
      aria-label="Open navigation menu"
      style={{
        background: "none",
        border: "1.5px solid #e2e8f0",
        borderRadius: 7,
        width: 32,
        height: 32,
        cursor: "pointer",
        padding: 0,
        display: "none",           // shown via CSS media query
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        flexShrink: 0,
      }}
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{ display: "block", width: 14, height: 1.5, background: "#0d1b2e", borderRadius: 2 }}
        />
      ))}
    </button>
  );
}

/** Semi-transparent backdrop that closes the sidebar on click */
function SidebarBackdrop({ onClick }: { onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(13,27,46,0.45)",
        zIndex: 199,
        backdropFilter: "blur(2px)",
      }}
    />
  );
}

/** Half-screen slide-in sidebar for mobile nav */
function Sidebar({
  open,
  onClose,
  countdown,
}: {
  open: boolean;
  onClose: () => void;
  countdown: string;
}) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0, right: 0, bottom: 0,
        width: "50vw",
        minWidth: 260,
        maxWidth: 340,
        background: "#fff",
        zIndex: 200,
        boxShadow: "-8px 0 40px rgba(13,27,46,0.15)",
        display: "flex",
        flexDirection: "column",
        transform: open ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.25s ease",
        overflowY: "auto",
      }}
    >
      {/* Header: logo + close */}
      <div
        style={{
          padding: "20px 24px",
          borderBottom: "1px solid #e2e8f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Image
            src="/images/orbitle-logo.png"
            alt="Orbitle logo"
            width={32}
            height={32}
            style={{ objectFit: "contain" }}
            priority
          />
          <div>
            <div style={{ fontSize: 17, fontWeight: 800, color: "#0d1b2e", fontStyle: "italic", letterSpacing: "-0.02em" }}>
              Orbitle
            </div>
            <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#7a8fa8" }}>
              by TrigrowTech
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          aria-label="Close menu"
          style={{
            background: "#f0f4fa",
            border: "none",
            borderRadius: 8,
            width: 34, height: 34,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
            color: "#4b5e7a",
          }}
        >
          ×
        </button>
      </div>

      {/* "For Agents" badge */}
      <div style={{ padding: "14px 24px", borderBottom: "1px solid #f0f4fa" }}>
        <span
          style={{
            background: "#eff6ff",
            color: "#2563eb",
            border: "1px solid #dbeafe",
            fontSize: 11.5,
            fontWeight: 700,
            padding: "4px 12px",
            borderRadius: 20,
            letterSpacing: "0.02em",
          }}
        >
          For Agents
        </span>
      </div>

      {/* Announcement / countdown pill */}
      <div style={{ margin: "16px 24px", background: "#0d1b2e", borderRadius: 12, padding: "12px 16px" }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#93c5fd", marginBottom: 4, letterSpacing: "0.06em", textTransform: "uppercase" }}>
          Early Access
        </div>
        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", lineHeight: 1.5 }}>
          <strong style={{ color: "#fff" }}>96 spots left</strong> — Lifetime pricing closes at 100 agents
        </div>
        <div style={{ marginTop: 8, fontSize: 13, fontFamily: "monospace", color: "#93c5fd", fontWeight: 600 }}>
          🕐 {countdown}
        </div>
      </div>

      {/* Nav links */}
      <nav style={{ padding: "8px 16px", flex: 1 }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#7a8fa8", padding: "8px 8px 4px" }}>
          Navigation
        </div>

        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="sidebar-link"
            onClick={onClose}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "12px 12px",
              borderRadius: 10,
              marginBottom: 2,
              fontSize: 15,
              fontWeight: 600,
              color: "#4b5e7a",
              textDecoration: "none",
              transition: "all 0.15s",
            }}
          >
            {label}
          </a>
        ))}

        <div style={{ height: 1, background: "#e2e8f0", margin: "12px 8px" }} />

        <Link
          href="/operators"
          onClick={onClose}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "12px 12px",
            borderRadius: 10,
            fontSize: 14,
            fontWeight: 600,
            color: "#7a8fa8",
            textDecoration: "none",
          }}
        >
          For Operators ↗
        </Link>

        <div style={{ height: 1, background: "#e2e8f0", margin: "8px 8px" }} />
        <Link
          href="/earn"
          onClick={onClose}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 12px",
            borderRadius: 10,
            fontSize: 13,
            fontWeight: 700,
            color: "#2563eb",
            textDecoration: "none",
            background: "#eff6ff",
          }}
        >
          Earn with Orbitle
        </Link>
      </nav>

      {/* CTA */}
      <div style={{ padding: "16px 24px 28px", borderTop: "1px solid #e2e8f0" }}>
        <a
          href="#get-started"
          onClick={onClose}
          style={{
            display: "block",
            width: "100%",
            textAlign: "center",
            background: "#2563eb",
            color: "#fff",
            fontSize: 15,
            fontWeight: 700,
            padding: "14px",
            borderRadius: 50,
            textDecoration: "none",
          }}
        >
          Get My Website →
        </a>
      </div>
    </div>
  );
}

/** Top announcement strip with countdown */
function AnnouncementBar({
  countdown,
  onDismiss,
}: {
  countdown: string;
  onDismiss: () => void;
}) {
  return (
    <div
      className="ann-bar"
      style={{
        background: "#0d1b2e",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Content row — wraps on mobile */}
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "10px 48px 10px 16px", // right padding leaves room for × button
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          flexWrap: "wrap",
          fontSize: 12,
          fontWeight: 600,
        }}
      >
        {/* Badge */}
        <span
          style={{
            background: "#2563eb",
            color: "#fff",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "3px 8px",
            borderRadius: 4,
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          Early Access
        </span>

        {/* Message */}
        <span style={{ color: "rgba(255,255,255,0.85)", textAlign: "center" }}>
          First 100 agents get lifetime pricing —{" "}
          <strong style={{ color: "#fff" }}>96 spots left</strong>
        </span>

        {/* Timer - hidden on very small screens via CSS class */}
        <div
          className="ann-bar-timer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.15)",
            padding: "3px 10px",
            borderRadius: 6,
            fontWeight: 600,
            fontSize: 12,
            fontFamily: "monospace",
            color: "#fff",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          🕐 {countdown}
        </div>

        {/* CTA link */}
        <a
          href="#get-started"
          style={{
            color: "#93c5fd",
            fontWeight: 700,
            fontSize: 12,
            textDecoration: "none",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          Reserve your spot →
        </a>
      </div>

      {/* Dismiss — absolute so it doesn't affect flex layout */}
      <button
        onClick={onDismiss}
        aria-label="Dismiss announcement"
        style={{
          position: "absolute",
          right: 10,
          top: "50%",
          transform: "translateY(-50%)",
          background: "none",
          border: "none",
          color: "rgba(255,255,255,0.45)",
          cursor: "pointer",
          fontSize: 18,
          lineHeight: 1,
          padding: "4px 6px",
          flexShrink: 0,
        }}
      >
        ×
      </button>

      {/* Animated shimmer line at bottom */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: "rgba(37,99,235,0.3)", overflow: "hidden" }}>
        <div
          className="ann-shimmer"
          style={{ height: "100%", width: "33%", background: "linear-gradient(90deg, transparent, #2563eb, transparent)" }}
        />
      </div>
    </div>
  );
}


// ─────────────────────────────────────────────
// MAIN EXPORT
// ─────────────────────────────────────────────
export default function NavBar() {
  const [annVisible,   setAnnVisible]   = useState(true);
  const [sidebarOpen, setSidebarOpen]   = useState(false);
  const [scrolled,    setScrolled]      = useState(false);
  const countdown = useCountdown(23 * 3600 + 54 * 60 + 51);

  // Scroll detection for floating pill effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close sidebar on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSidebarOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Lock body scroll while sidebar is open
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [sidebarOpen]);

  return (
    <>
      {/* Desktop size restoration */}
      <style>{`
        @media (min-width: 1024px) {
          .nav-root-agt   { height: 68px !important; padding: 0 40px !important; gap: 24px !important; }
          .nav-brand-agt  { gap: 12px !important; }
          .nav-logo-agt   { width: 36px !important; height: 36px !important; }
          .nav-name-agt   { font-size: 20px !important; }
          .nav-badge-agt  { font-size: 11.5px !important; padding: 4px 12px !important; }
        }
      `}</style>

      {/* Sidebar backdrop + panel */}
      {sidebarOpen && <SidebarBackdrop onClick={() => setSidebarOpen(false)} />}
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        countdown={countdown}
      />

      {/* Announcement bar */}
      {annVisible && (
        <AnnouncementBar
          countdown={countdown}
          onDismiss={() => setAnnVisible(false)}
        />
      )}

      {/* Sticky nav */}
      <nav
        className="nav-pad nav-root-agt"
        style={{
          position: "sticky",
          top: scrolled ? 12 : 0,
          zIndex: 100,
          padding: "0 16px",
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 8,
          overflow: "hidden",
          // Floating pill
          margin: scrolled ? "0 12px" : "0",
          borderRadius: scrolled ? 999 : 0,
          background: scrolled ? "rgba(255,255,255,0.92)" : "#fff",
          backdropFilter: scrolled ? "blur(20px) saturate(200%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(200%)" : "none",
          border: scrolled ? "1px solid rgba(0,0,0,0.08)" : "none",
          borderBottom: scrolled ? "none" : "1px solid #e2e8f0",
          boxShadow: scrolled ? "0 8px 32px rgba(13,27,46,0.12)" : "none",
          transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {/* Brand — flex:1 + minWidth:0 lets it shrink on mobile */}
        <div className="nav-brand-agt" style={{ display: "flex", alignItems: "center", gap: 8, flex: 1, minWidth: 0 }}>
          <div className="nav-logo-agt" style={{ width: 28, height: 28, flexShrink: 0 }}>
            <Image
              src="/images/orbitle-logo.png"
              alt="Orbitle logo"
              width={28}
              height={28}
              style={{ objectFit: "contain", width: "100%", height: "100%" }}
              priority
            />
          </div>
          <div style={{ minWidth: 0 }}>
            <div className="nav-name-agt" style={{ fontSize: 17, fontWeight: 800, color: "#0d1b2e", fontStyle: "italic", letterSpacing: "-0.02em", whiteSpace: "nowrap" }}>
              Orbitle
            </div>
            <div className="hidden sm:block" style={{ fontSize: 8, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#7a8fa8" }}>
              by TrigrowTech
            </div>
          </div>
          <span
            className="nav-badge-agt"
            style={{
              background: "#eff6ff",
              color: "#2563eb",
              border: "1px solid #dbeafe",
              fontSize: 9,
              fontWeight: 700,
              padding: "2px 7px",
              borderRadius: 20,
              letterSpacing: "0.02em",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            For Agents
          </span>
        </div>

        {/* Desktop nav links */}
        <div className="nav-links-desktop" style={{ display: "flex", alignItems: "center", gap: 32 }}>

          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="nav-link"
              style={{ fontSize: 14, fontWeight: 500, color: "#4b5e7a", textDecoration: "none", transition: "color 0.15s" }}
            >
              {label}
            </a>
          ))}
          <Link
            href="/operators"
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "#4b5e7a",
              textDecoration: "none",
              padding: "6px 14px",
              borderRadius: 50,
              background: "#f0f4fa",
              whiteSpace: "nowrap",
              transition: "all 0.2s",
            }}
          >
            Switch to Operators →
          </Link>
          <Link
            href="/earn"
            className="nav-link"
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "#16a34a",
              textDecoration: "none",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            <span style={{ fontSize: 12 }}>💸</span> Earn with Orbitle
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="nav-cta-desktop" style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a
            href="#get-started"
            style={{
              background: "#2563eb",
              color: "#fff",
              fontSize: 14,
              fontWeight: 700,
              padding: "10px 22px",
              borderRadius: 50,
              textDecoration: "none",
              whiteSpace: "nowrap",
              display: "inline-block",
            }}
          >
            Get My Website →
          </a>
        </div>

        {/* Mobile: "Try for Free" + Hamburger — flexShrink:0 so it never gets squeezed */}
        <div className="nav-mobile-right" style={{ display: "none", alignItems: "center", gap: 6, flexShrink: 0 }}>
          <a
            href="#get-started"
            style={{
              background: "#2563eb",
              color: "#fff",
              fontSize: 11,
              fontWeight: 700,
              padding: "6px 11px",
              borderRadius: 50,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Try for Free
          </a>
          <HamburgerButton onClick={() => setSidebarOpen(true)} />
        </div>
      </nav>
    </>
  );
}