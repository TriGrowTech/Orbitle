"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// ─────────────────────────────────────────────
// TYPES & DATA
// ─────────────────────────────────────────────
interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "How It Works", href: "#how" },
  { label: "Platform",     href: "#platform" },
  { label: "Pricing",      href: "#pricing" },
  { label: "Contact",      href: "#contact" },
];

const EXTRA_NAV_LINKS: NavLink[] = [
  { label: "Careers",         href: "/careers" },
  { label: "Earn with Orbitle", href: "/earn" },
];

// ─────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────

/** Three-bar hamburger button shown on mobile */
function HamburgerButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Open navigation menu"
      style={{
        background: "none",
        border: "1px solid #e2e8f0",
        borderRadius: 7,
        width: 32,
        height: 32,
        cursor: "pointer",
        padding: 0,
        display: "flex",
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
}: {
  open: boolean;
  onClose: () => void;
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
        fontFamily: "'Plus Jakarta Sans', sans-serif",
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

      {/* "For Operators" badge */}
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
          For Operators
        </span>
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
            onClick={onClose}
            className="hover:text-blue-600 hover:bg-blue-50"
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
          href="/agents"
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
          For Agents ↗
        </Link>

        <div style={{ height: 1, background: "#e2e8f0", margin: "8px 8px" }} />

        {EXTRA_NAV_LINKS.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            onClick={onClose}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 12px",
              borderRadius: 10,
              fontSize: 13,
              fontWeight: 600,
              color: "#4b5e7a",
              textDecoration: "none",
            }}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* CTA */}
      <div style={{ padding: "16px 24px 28px", borderTop: "1px solid #e2e8f0" }}>
        <a
          href="#contact"
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
          Book a Demo →
        </a>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// MAIN EXPORT
// ─────────────────────────────────────────────
export default function NavNew() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      {/* Desktop size restoration via CSS — mobile stays compact, desktop gets full sizes */}
      <style>{`
        @media (min-width: 1024px) {
          .nav-root-ops   { height: 64px !important; padding: 0 24px !important; gap: 16px !important; }
          .nav-brand-ops  { gap: 10px !important; }
          .nav-logo-ops   { width: 32px !important; height: 32px !important; }
          .nav-name-ops   { font-size: 18px !important; }
          .nav-badge-ops  { font-size: 11px !important; padding: 3px 10px !important; }
        }
      `}</style>

      {/* Sidebar backdrop + panel */}
      {sidebarOpen && <SidebarBackdrop onClick={() => setSidebarOpen(false)} />}
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Sticky nav */}
      <nav
        className="nav-root-ops"
        style={{
          position: "sticky",
          top: scrolled ? 12 : 0,
          zIndex: 100,
          padding: scrolled ? "0 16px" : "0 16px",
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 8,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          overflow: "hidden",
          // Floating pill styles
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
        {/* Brand — flex:1 so it shrinks on mobile, minWidth:0 prevents overflow */}
        <div className="nav-brand-ops" style={{ display: "flex", alignItems: "center", gap: 8, flex: 1, minWidth: 0 }}>
          <div className="nav-logo-ops" style={{ width: 28, height: 28, flexShrink: 0 }}>
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
            <div
              className="nav-name-ops"
              style={{
                fontSize: 17,
                fontWeight: 800,
                color: "#0d1b2e",
                fontStyle: "italic",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                whiteSpace: "nowrap",
              }}
            >
              Orbitle
            </div>
            <div
              className="hidden sm:block"
              style={{
                fontSize: 8,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#7a8fa8",
              }}
            >
              by TrigrowTech
            </div>
          </div>
          <span
            className="nav-badge-ops"
            style={{
              background: "#eff6ff",
              color: "#2563eb",
              border: "1px solid #dbeafe",
              fontSize: 9,
              fontWeight: 700,
              padding: "2px 7px",
              borderRadius: 20,
              letterSpacing: "0.02em",
              flexShrink: 0,
              whiteSpace: "nowrap",
            }}
          >
            For Operators
          </span>
        </div>

        {/* Desktop Nav links */}
        <div
          className="hidden lg:flex"
          style={{ alignItems: "center", gap: 28 }}
        >

          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: "#4b5e7a",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              {label}
            </a>
          ))}
          <Link
            href="/agents"
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
            Switch to Agents →
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
        <div className="hidden lg:flex" style={{ alignItems: "center", gap: 12, flexShrink: 0 }}>
          <a
            href="#contact"
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
            Book a Demo →
          </a>
        </div>

        {/* Mobile: "Try for Free" + Hamburger */}
        <div className="flex lg:hidden" style={{ alignItems: "center", gap: 6, flexShrink: 0 }}>
          <a
            href="#contact"
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