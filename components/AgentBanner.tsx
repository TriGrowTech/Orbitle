"use client";

import React from "react";
import Link from "next/link";

// AgentBanner.tsx
// Displayed on the Operators homepage.
// Targets independent travel agents who land on the wrong page
// and redirects them to /agents.

export default function AgentBanner() {
  return (
    <section
      style={{
        background: "#f0f4fa",
        borderTop: "1px solid #e2e8f0",
        borderBottom: "1px solid #e2e8f0",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
      className="px-6 sm:px-10 py-10 sm:py-12"
    >
      <div
        style={{ maxWidth: 1080, margin: "0 auto" }}
        className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-10 items-center"
      >
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#eff6ff",
              border: "1px solid #dbeafe",
              borderRadius: 50,
              padding: "5px 14px",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              color: "#2563eb",
              marginBottom: 14,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#2563eb",
                display: "inline-block",
              }}
            />
            Independent Agent?
          </div>
          <h2
            style={{
              fontSize: "clamp(20px, 2.8vw, 34px)",
              fontWeight: 800,
              color: "#0d1b2e",
              letterSpacing: "-0.03em",
              lineHeight: 1.2,
              marginBottom: 10,
            }}
          >
            Orbitle for Operators is for travel companies with agents.{" "}
            <span style={{ color: "#2563eb" }}>
              Working solo? We built a product just for you.
            </span>
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "#4b5e7a",
              lineHeight: 1.7,
              maxWidth: 560,
            }}
          >
            Orbitle for Agents is a standalone product — your own branded travel
            website and admin panel, live on your domain in 5 minutes. Starting
            at ₹499/month.
          </p>
        </div>

        <div className="flex flex-col gap-3 items-start lg:items-end">
          <Link
            href="/agents"
            style={{
              background: "#2563eb",
              color: "#fff",
              fontSize: 15,
              fontWeight: 700,
              padding: "14px 28px",
              borderRadius: 50,
              textDecoration: "none",
              whiteSpace: "nowrap",
              display: "inline-block",
            }}
          >
            Go to Orbitle for Agents →
          </Link>
          <span
            style={{
              fontSize: 12,
              color: "#7a8fa8",
              fontWeight: 500,
            }}
          >
            Marketplace website + admin panel · Starting ₹499/mo
          </span>
        </div>
      </div>
    </section>
  );
}
