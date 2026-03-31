"use client";

import React from "react";
import Link from "next/link";

const STYLES = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Plus Jakarta Sans', sans-serif; }

  .tos-prose h2 {
    font-size: 22px;
    font-weight: 800;
    color: #0d1b2e;
    letter-spacing: -0.02em;
    margin: 48px 0 14px;
    padding-top: 8px;
    border-top: 1px solid #e2e8f0;
  }
  .tos-prose h2:first-of-type { border-top: none; margin-top: 0; }
  .tos-prose p { font-size: 15px; color: #4b5e7a; line-height: 1.8; margin-bottom: 14px; }
  .tos-prose ul { list-style: none; margin: 0 0 14px; padding: 0; display: flex; flex-direction: column; gap: 8px; }
  .tos-prose ul li { font-size: 15px; color: #4b5e7a; line-height: 1.7; display: flex; gap: 10px; align-items: flex-start; }
  .tos-prose ul li::before { content: "•"; color: #2563eb; font-weight: 800; flex-shrink: 0; margin-top: 1px; }
  .tos-prose a { color: #2563eb; text-decoration: none; }
  .tos-prose a:hover { text-decoration: underline; }
`;

export default function TermsOfServicePage() {
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
          Terms of Service
        </h1>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", maxWidth: 520, margin: "0 auto" }}>
          Last updated: March 28, 2026 · Please read these terms carefully before using Orbitle.
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
          className="tos-prose"
        >
          <p>
            These Terms of Service ("Terms") govern your access to and use of the Orbitle platform
            operated by TrigrowTech ("Company", "we", "us", "our"). These Terms apply to both{" "}
            <strong>Orbitle for Operators</strong> and <strong>Orbitle for Agents</strong>. By accessing
            or using either service, you agree to be bound by these Terms. If you do not agree to these
            Terms, you may not access or use the platform.
          </p>

          <h2>1. Eligibility</h2>
          <p>
            By using Orbitle for Operators or Orbitle for Agents, you represent that you are at least
            18 years of age, have the legal authority to enter into these Terms, and are using the platform
            for lawful business purposes related to travel operations or travel agency activities.
          </p>

          <h2>2. Description of Services</h2>
          <p>
            TrigrowTech offers two distinct services under the Orbitle brand:
          </p>
          <ul>
            <li>
              <strong>Orbitle for Operators</strong> — A full white-label travel business platform for travel operators,
              including: branded marketplace website on the operator's domain, operator admin panel, multi-agent
              management, lead distribution to agents, agent subdomain websites, sub-admin access for agents,
              a complete back-office suite, and financial reporting tools.
            </li>
            <li>
              <strong>Orbitle for Agents</strong> — A standalone travel website and admin panel for independent travel
              agents, including: branded package marketplace website on the agent's own domain, full admin panel,
              enquiry and lead management pipeline, package management, follow-up reminders, and direct customer
              enquiry capture.
            </li>
          </ul>
          <p>
            Both services include domain provisioning (on eligible plans), SSL certificate, hosting
            infrastructure, and ongoing platform maintenance by TrigrowTech. We reserve the right to
            modify, suspend, or discontinue any feature of either service at any time with reasonable notice.
          </p>

          <h2>3. Account Registration & Security</h2>
          <p>
            To access the platform, you must register for an account. You agree to:
          </p>
          <ul>
            <li>Provide accurate, current, and complete information during registration</li>
            <li>Maintain and promptly update your account information</li>
            <li>Keep your login credentials confidential and secure</li>
            <li>Notify us immediately at <a href="mailto:support@trigrowtech.in">support@trigrowtech.in</a> if you suspect unauthorized account access</li>
            <li>Accept responsibility for all activities that occur under your account</li>
          </ul>

          <h2>4. Subscription Plans & Billing</h2>
          <p>
            Both Orbitle for Operators and Orbitle for Agents are offered on a subscription basis with
            their respective pricing plans. By subscribing to either service, you agree to:
          </p>
          <ul>
            <li>Pay the applicable subscription fees as described in the pricing at the time of purchase</li>
            <li>Authorize recurring charges for monthly, 6-month, or yearly plans as selected</li>
            <li>Understand that the Lifetime plan (where available) is a one-time, non-recurring subscription charge</li>
            <li>
              <strong>Domain Renewal Charges:</strong> If your domain is provisioned by TrigrowTech as part of
              the service, annual domain renewal charges will be applicable and billed separately at the time
              of renewal. These charges reflect the actual domain registrar cost and may vary by domain extension
              (.com, .in, .co.in, etc.). We will notify you in advance before renewal. Non-payment of domain
              renewal charges may result in domain expiry and disruption to your website.
            </li>
          </ul>
          <p>
            All fees are stated in Indian Rupees (INR) and are inclusive of applicable taxes unless stated
            otherwise. We reserve the right to modify pricing with 30 days' notice.
          </p>

          <h2>5. Free Trial</h2>
          <p>
            We offer a 1-week free trial on all plans. No credit card is required during the trial period.
            At the end of the trial, your account will either be converted to a paid plan or deactivated.
            We reserve the right to modify or terminate the free trial offering at any time.
          </p>

          <h2>6. Cancellation & Refunds</h2>
          <p>
            You may cancel your subscription at any time. Upon cancellation:
          </p>
          <ul>
            <li>Your account will remain active until the end of the current billing period</li>
            <li>No partial refunds are issued for unused days in an active billing period</li>
            <li>Lifetime plans are non-refundable after the 7-day free trial period</li>
            <li>Refund requests for exceptional circumstances may be reviewed on a case-by-case basis</li>
          </ul>
          <p>
            To cancel or request a refund, contact us at{" "}
            <a href="mailto:support@trigrowtech.in">support@trigrowtech.in</a>.
          </p>

          <h2>7. Acceptable Use Policy</h2>
          <p>You agree not to use Orbitle to:</p>
          <ul>
            <li>Violate any applicable local, national, or international laws or regulations</li>
            <li>Publish false, misleading, or fraudulent travel packages or pricing</li>
            <li>Upload or transmit malicious code, viruses, or harmful content</li>
            <li>Engage in spamming, phishing, or unauthorized data collection</li>
            <li>Attempt to gain unauthorized access to any part of the platform or its infrastructure</li>
            <li>Resell, sublicense, or redistribute access to the Orbitle platform without written consent</li>
          </ul>
          <p>
            Violation of this policy may result in immediate suspension or termination of your account
            without refund.
          </p>

          <h2>8. Intellectual Property</h2>
          <p>
            The Orbitle platform, including its codebase, design, branding, and documentation, is owned
            by TrigrowTech and protected by intellectual property laws. Your subscription grants you a
            limited, non-exclusive, non-transferable license to use the platform for your travel business.
          </p>
          <p>
            Content you upload to the platform (packages, photos, descriptions) remains your intellectual
            property. By uploading content, you grant TrigrowTech a limited license to display and serve
            that content for the purpose of operating your website.
          </p>

          <h2>9. Domain & Hosting</h2>
          <p>
            For plans on either Orbitle for Operators or Orbitle for Agents that include domain provisioning,
            TrigrowTech will register and configure a domain on your behalf. Key terms:
          </p>
          <ul>
            <li>Domains provisioned by us are registered in our name as part of the service delivery</li>
            <li>Domain provisioning requires a minimum 6-month subscription commitment</li>
            <li>You may bring your own domain on any plan; you retain full ownership of self-provided domains</li>
            <li>
              <strong>Domain Renewal Charges:</strong> Domains provisioned by TrigrowTech are subject to annual
              renewal fees charged at cost. These renewal charges are applicable regardless of your subscription
              plan type and are billed separately from your platform subscription. We will notify you at least
              30 days before your domain renewal date. Failure to pay renewal charges may result in domain
              expiry, during which your website will become inaccessible until the domain is renewed.
            </li>
            <li>Upon account termination or cancellation, we will assist with domain transfer where applicable</li>
            <li>Hosting infrastructure is maintained by TrigrowTech and included in the subscription fee</li>
          </ul>

          <h2>10. Data Ownership</h2>
          <p>
            You retain full ownership of all data you input into the platform — enquiries, lead information,
            package data, and customer records. We will not sell or share your business data with third parties.
            You may export your data at any time from the admin panel.
          </p>

          <h2>11. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, TrigrowTech shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages, including but not limited to
            lost profits, business interruption, or data loss, arising from your use of or inability to use
            the platform.
          </p>
          <p>
            Our total liability to you for any claim arising out of or relating to these Terms or the platform
            shall not exceed the amount paid by you for the subscription in the three months preceding the claim.
          </p>

          <h2>12. Warranty Disclaimer</h2>
          <p>
            Orbitle is provided "as is" and "as available" without any warranties of any kind, expressed or
            implied. We do not warrant that the platform will be uninterrupted, error-free, or free of
            security vulnerabilities. We strive for 99%+ uptime but do not guarantee it.
          </p>

          <h2>13. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless TrigrowTech, its officers, directors, employees, and
            agents from and against any claims, liabilities, damages, losses, or expenses (including legal
            fees) arising out of your use of the platform, your violation of these Terms, or your violation
            of any rights of a third party.
          </p>

          <h2>14. Termination</h2>
          <p>
            We may terminate or suspend your account immediately, without prior notice or liability, if you
            breach these Terms. Upon termination, your right to use the platform ceases immediately. You may
            request a data export within 30 days of termination; after that, your data may be deleted.
          </p>

          <h2>15. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of India, without
            regard to its conflict of law provisions. Any disputes arising from these Terms shall be subject
            to the exclusive jurisdiction of the courts located in India.
          </p>

          <h2>16. Changes to These Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will provide notice of significant
            changes by posting a notice on the platform or via email. Your continued use of Orbitle after
            changes take effect constitutes acceptance of the revised Terms.
          </p>

          <h2>17. Contact Us</h2>
          <p>If you have questions about these Terms of Service, please contact us:</p>
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
            Also review our Privacy Policy to understand how we collect and handle your data.
          </p>
          <Link
            href="/privacy-policy"
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
            Privacy Policy →
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
            <Link href="/privacy-policy" style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>
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
