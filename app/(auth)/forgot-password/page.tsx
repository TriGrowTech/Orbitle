"use client";

import { useState } from "react";
import {
  AuthCard,
  AuthHeading,
  Field,
  Input,
  PrimaryButton,
  AuthLink,
  ErrorBanner,
  SuccessState,
} from "@/components/auth-ui";

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ForgotPasswordPage() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "";
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [globalError, setGlobalError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit() {
    setError("");
    setGlobalError("");
    if (!email) return setError("Email is required");
    if (!validateEmail(email)) return setError("Enter a valid email address");

    setLoading(true);
    try {
      const res = await fetch(`${apiUrl}/api/auth/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) setSent(true);
      else setGlobalError(data.message ?? "Something went wrong. Please try again.");
    } catch {
      setGlobalError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <AuthCard>
        <SuccessState
          icon={
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"
                stroke="#16a34a"
                strokeWidth="1.8"
              />
              <polyline
                points="22,6 12,13 2,6"
                stroke="#16a34a"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          }
          title="Check your email"
          subtitle={`We've sent a password reset link to ${email}. It expires in 15 minutes.`}
        >
          <p style={{ fontSize: "13px", color: "#94a3b8", marginBottom: "20px" }}>
            Didn't receive the email? Check your spam folder or{" "}
            <button
              type="button"
              onClick={() => setSent(false)}
              style={{
                background: "none",
                border: "none",
                color: "#2563eb",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "13px",
                padding: 0,
                fontFamily: "inherit",
              }}
            >
              try again
            </button>
            .
          </p>
          <div style={{ textAlign: "center" }}>
            <AuthLink href="/login">← Back to Login</AuthLink>
          </div>
        </SuccessState>
      </AuthCard>
    );
  }

  return (
    <AuthCard>
      <div
        style={{
          width: "48px",
          height: "48px",
          background: "#eff6ff",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="11" width="18" height="11" rx="2" stroke="#2563eb" strokeWidth="1.8" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </div>
      <AuthHeading
        title="Reset your password"
        subtitle="Enter your email and we'll send you a reset link"
      />

      {globalError && <ErrorBanner message={globalError} />}

      <Field label="Email address" error={error}>
        <Input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          hasError={!!error}
          autoComplete="email"
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        />
      </Field>

      <PrimaryButton loading={loading} onClick={handleSubmit}>
        Send reset link
      </PrimaryButton>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <AuthLink href="/login">← Back to Login</AuthLink>
      </div>
    </AuthCard>
  );
}