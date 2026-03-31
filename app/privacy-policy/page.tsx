"use client";

import React from "react";
import Link from "next/link";

const STYLES = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Plus Jakarta Sans', sans-serif; }

  .pp-prose h2 {
    font-size: 22px;
    font-weight: 800;
    color: #0d1b2e;
    letter-spacing: -0.02em;
    margin: 48px 0 14px;
    padding-top: 8px;
    border-top: 1px solid #e2e8f0;
  }
  .pp-prose h2:first-of-type { border-top: none; margin-top: 0; }
  .pp-prose p { font-size: 15px; color: #4b5e7a; line-height: 1.8; margin-bottom: 14px; }
  .pp-prose ul { list-style: none; margin: 0 0 14px; padding: 0; display: flex; flex-direction: column; gap: 8px; }
  .pp-prose ul li { font-size: 15px; color: #4b5e7a; line-height: 1.7; display: flex; gap: 10px; align-items: flex-start; }
  .pp-prose ul li::before { content: "•"; color: #2563eb; font-weight: 800; flex-shrink: 0; margin-top: 1px; }
  .pp-prose a { color: #2563eb; text-decoration: none; }
  .pp-prose a:hover { text-decoration: underline; }
`;

export default function PrivacyPolicyPage() {
  return (
    <div
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        background: "#f0f4fa",
        minHeight: "100vh",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      {/* ── Top Nav ── */}
      <nav
        style={{
          background: "#0d1b2e",
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <Link
          href="/"
          style={{
            fontSize: 20,
            fontWeight: 800,
            fontStyle: "italic",
            color: "#fff",
            textDecoration: "none",
            letterSpacing: "-0.02em",
          }}
        >
          Orbitle
        </Link>
        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          <Link
            href="/"
            style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}
          >
            ← Back to Home
          </Link>
          <Link
            href="/agents"
            style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}
          >
            For Agents
          </Link>
        </div>
      </nav>

      {/* ── Hero ── */}
      <div
        style={{
          background: "#0d1b2e",
          padding: "72px 24px 64px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-block",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#93c5fd",
            background: "rgba(147,197,253,0.1)",
            padding: "5px 16px",
            borderRadius: 20,
            marginBottom: 20,
          }}
        >
          Legal
        </div>
        <h1
          style={{
            fontSize: "clamp(32px,5vw,56px)",
            fontWeight: 800,
            color: "#fff",
            letterSpacing: "-0.03em",
            lineHeight: 1.08,
            marginBottom: 16,
          }}
        >
          Privacy Policy
        </h1>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", maxWidth: 520, margin: "0 auto" }}>
          Last updated: March 28, 2026 · Effective immediately upon publication.
        </p>
      </div>

      {/* ── Content ── */}
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "64px 24px 96px" }}>
        <div
          style={{
            background: "#fff",
            border: "1px solid #e2e8f0",
            borderRadius: 24,
            padding: "48px 52px",
          }}
          className="pp-prose"
        >
          <p>
            TrigrowTech ("we", "us", "our") operates the Orbitle platform, accessible at orbitle.com and
            related subdomains. This Privacy Policy applies to both of our services — <strong>Orbitle for Operators</strong>{" "}
            and <strong>Orbitle for Agents</strong> — and explains how we collect, use, disclose, and safeguard your
            information when you visit our websites or use our services. Please read this policy carefully.
            If you disagree with its terms, please discontinue use of the site.
          </p>

          <h2>Our Services</h2>
          <p>This Privacy Policy covers the following services offered by TrigrowTech under the Orbitle brand:</p>
          <ul>
            <li>
              <strong>Orbitle for Operators</strong> — A full white-label travel business platform for travel operators.
              Includes a branded marketplace website, operator admin panel, agent management, lead distribution system,
              subdomains for agents, and a complete back-office suite — all on the operator's own domain.
            </li>
            <li>
              <strong>Orbitle for Agents</strong> — A standalone travel website and admin panel for independent travel
              agents. Includes a branded package marketplace website on the agent's domain, lead management dashboard,
              enquiry pipeline, and package management — all managed by the agent independently.
            </li>
          </ul>
          <p>
            Both services are built, hosted, and maintained by TrigrowTech. References to "the platform" or
            "Orbitle" in this policy apply to both services unless specifically noted otherwise.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We collect information that you provide directly to us, including:</p>
          <ul>
            <li>Name, email address, and phone number submitted via contact or registration forms</li>
            <li>Business details such as your travel agency name, domain name, and location</li>
            <li>Payment information processed securely through third-party payment gateways (we do not store card details)</li>
            <li>Communications you send us — support tickets, demo requests, or feedback</li>
          </ul>
          <p>We also automatically collect certain information when you use the platform:</p>
          <ul>
            <li>IP address, browser type, operating system, and referring URLs</li>
            <li>Pages viewed, time spent on pages, and clickstream data</li>
            <li>Cookies and similar tracking technologies (see Section 5)</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information collected to:</p>
          <ul>
            <li>Provide, operate, and maintain Orbitle for Operators and Orbitle for Agents, and your account within the applicable service</li>
            <li>Process subscription payments and send billing-related communications</li>
            <li>Provision and configure your operator or agent website, domain, SSL, and hosting</li>
            <li>Respond to your inquiries and provide customer support via email, phone, or WhatsApp</li>
            <li>Send you service updates, security alerts, and promotional messages (you can opt-out at any time)</li>
            <li>Monitor and analyze usage trends to improve both services</li>
            <li>Comply with legal obligations and enforce our Terms of Service</li>
          </ul>

          <h2>3. Sharing of Your Information</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share your
            information with:
          </p>
          <ul>
            <li>
              <strong>Service Providers:</strong> Third-party vendors who assist us in operating the platform
              (e.g., cloud hosting, payment processing, email delivery). These providers are bound by
              confidentiality agreements.
            </li>
            <li>
              <strong>Legal Requirements:</strong> If required by law, court order, or government authority, we
              may disclose your information.
            </li>
            <li>
              <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets,
              your information may be transferred as part of that transaction.
            </li>
          </ul>

          <h2>4. Data Retention</h2>
          <p>
            We retain your personal information for as long as your account is active or as needed to provide
            services. You may request deletion of your data at any time by contacting us at{" "}
            <a href="mailto:support@trigrowtech.in">support@trigrowtech.in</a>. We will respond within 30 days.
            Note that some information may be retained for legal or audit purposes.
          </p>

          <h2>5. Cookies & Tracking Technologies</h2>
          <p>
            We use cookies and similar technologies to enhance your experience, analyze site traffic, and
            deliver relevant content. Types of cookies we use:
          </p>
          <ul>
            <li><strong>Essential cookies:</strong> Required for the platform to function correctly</li>
            <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our site</li>
            <li><strong>Preference cookies:</strong> Remember your settings and preferences</li>
          </ul>
          <p>
            You can control cookie settings through your browser. Disabling essential cookies may affect
            platform functionality.
          </p>

          <h2>6. Data Security</h2>
          <p>
            We implement industry-standard security measures including SSL/TLS encryption, access controls,
            and regular security reviews to protect your information. However, no method of transmission over
            the internet is completely secure, and we cannot guarantee absolute security.
          </p>

          <h2>7. Third-Party Links</h2>
          <p>
            Our platform may contain links to third-party websites. We are not responsible for the privacy
            practices or content of those sites. We encourage you to review the privacy policies of any
            third-party sites you visit.
          </p>

          <h2>8. Children's Privacy</h2>
          <p>
            The Orbitle platform is not directed at individuals under the age of 18. We do not knowingly
            collect personal information from minors. If we become aware that a minor has submitted personal
            information, we will take steps to delete that information promptly.
          </p>

          <h2>9. Your Rights</h2>
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate or incomplete data</li>
            <li>Request deletion of your personal data ("right to be forgotten")</li>
            <li>Object to or restrict processing of your data</li>
            <li>Data portability — receive your data in a structured, machine-readable format</li>
            <li>Withdraw consent at any time where processing is based on consent</li>
          </ul>
          <p>
            To exercise any of these rights, contact us at{" "}
            <a href="mailto:support@trigrowtech.in">support@trigrowtech.in</a>.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of significant changes by
            posting a notice on the platform or sending an email. Your continued use of the platform after
            changes take effect constitutes acceptance of the updated policy.
          </p>

          <h2>11. Contact Us</h2>
          <p>If you have questions or concerns about this Privacy Policy, please contact us:</p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:support@trigrowtech.in">support@trigrowtech.in</a></li>
            <li><strong>Phone:</strong> +91 6395163348 · +91 96961 97706</li>
            <li><strong>Company:</strong> TrigrowTech, India</li>
          </ul>
        </div>

        {/* Related link */}
        <div
          style={{
            marginTop: 32,
            padding: "20px 28px",
            background: "rgba(37,99,235,0.06)",
            border: "1px solid rgba(37,99,235,0.15)",
            borderRadius: 14,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <p style={{ fontSize: 14, color: "#4b5e7a", margin: 0 }}>
            Also review our Terms of Service to understand your rights and obligations when using Orbitle.
          </p>
          <Link
            href="/terms-of-service"
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "#2563eb",
              textDecoration: "none",
              whiteSpace: "nowrap",
              padding: "8px 20px",
              borderRadius: 50,
              border: "1.5px solid #2563eb",
              background: "#fff",
            }}
          >
            Terms of Service →
          </Link>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer
        style={{
          background: "#0d1b2e",
          padding: "40px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div
            style={{
              fontSize: 20,
              fontWeight: 800,
              fontStyle: "italic",
              color: "#fff",
              marginBottom: 12,
              letterSpacing: "-0.02em",
            }}
          >
            Orbitle
          </div>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", marginBottom: 24 }}>
            The white-label travel business SaaS platform by TrigrowTech.
          </p>
          <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/" style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>
              Home
            </Link>
            <Link href="/agents" style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>
              For Agents
            </Link>
            <Link href="/privacy-policy" style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>
              Terms of Service
            </Link>
          </div>
          <div
            style={{
              marginTop: 32,
              paddingTop: 24,
              borderTop: "1px solid rgba(255,255,255,0.07)",
              fontSize: 12,
              color: "rgba(255,255,255,0.25)",
            }}
          >
            © 2026 TrigrowTech. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
