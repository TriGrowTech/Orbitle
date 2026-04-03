"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/axios";
import {
  AuthCard,
  AuthHeading,
  Field,
  Input,
  PasswordInput,
  PrimaryButton,
  OutlineButton,
  Divider,
  AuthLink,
  BottomNav,
  ErrorBanner,
} from "@/components/auth-ui";

type LoginMode = "password" | "otp-email" | "otp-code";

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function LoginPage() {
  const router = useRouter();
  const dashboardUrl = process.env.NEXT_PUBLIC_DASHBOARD_URL ?? "";

  const [mode, setMode] = useState<LoginMode>("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [globalError, setGlobalError] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  function clearErrors() {
    setErrors({});
    setGlobalError("");
  }

  // ── Google OAuth ──────────────────────────────────────────────────────────
  async function handleGoogle() {
    setGoogleLoading(true);
    try {
      const res = await api.get('/auth/google');
      if (res.data.url) window.location.href = res.data.url;
      else setGlobalError("Could not initiate Google login.");
    } catch {
      setGlobalError("Google login failed. Please try again.");
    } finally {
      setGoogleLoading(false);
    }
  }

  // ── Email / Password ──────────────────────────────────────────────────────
  async function handlePasswordLogin() {
    clearErrors();
    const newErrors: Record<string, string> = {};
    if (!email) newErrors.email = "Email is required";
    else if (!validateEmail(email)) newErrors.email = "Enter a valid email address";
    if (!password) newErrors.password = "Password is required";
    if (Object.keys(newErrors).length) return setErrors(newErrors);

    setLoading(true);
    try {
      const res = await api.post('/auth/login', { email, password });

      if (res.data.success) {
        // Redirect to dashboard
        window.location.href = `${dashboardUrl}/dashboard`;
      } else {
        setGlobalError(res.data.message ?? "Invalid email or password.");
      }
    } catch (err: any) {
      setGlobalError(err.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  // ── OTP: send ─────────────────────────────────────────────────────────────
  async function handleSendOtp() {
    clearErrors();
    if (!email) return setErrors({ email: "Email is required" });
    if (!validateEmail(email)) return setErrors({ email: "Enter a valid email address" });

    setLoading(true);
    try {
      const res = await api.post('/auth/send-otp', { email });
      if (res.data.success) {
        // Navigate to verify-otp page with email
        router.push(`/verify-otp?email=${encodeURIComponent(email)}`);
      } else setGlobalError(res.data.message ?? "Failed to send OTP.");
    } catch (err: any) {
      setGlobalError(err.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthCard>
      <AuthHeading
        title="Welcome back"
        subtitle="Sign in to your Orbitle account"
      />

      {globalError && <ErrorBanner message={globalError} />}

      {/* Google */}
      <OutlineButton loading={googleLoading} onClick={handleGoogle}>
        Continue with Google
      </OutlineButton>

      <Divider />

      {/* Email field — shared across both modes */}
      <Field label="Email address" error={errors.email}>
        <Input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          hasError={!!errors.email}
          autoComplete="email"
        />
      </Field>

      {/* Password mode */}
      {mode === "password" && (
        <>
          <Field label="Password" error={errors.password}>
            <PasswordInput
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              hasError={!!errors.password}
              autoComplete="current-password"
            />
          </Field>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "-8px",
              marginBottom: "20px",
            }}
          >
            <AuthLink href="/forgot-password">Forgot password?</AuthLink>
          </div>
          <PrimaryButton loading={loading} onClick={handlePasswordLogin}>
            Login
          </PrimaryButton>
        </>
      )}

      {/* OTP email mode */}
      {mode === "otp-email" && (
        <div style={{ marginTop: "4px" }}>
          <PrimaryButton loading={loading} onClick={handleSendOtp}>
            Send OTP
          </PrimaryButton>
        </div>
      )}

      {/* Toggle */}
      <div style={{ marginTop: "16px", textAlign: "center" }}>
        <button
          type="button"
          onClick={() => {
            clearErrors();
            setMode(mode === "password" ? "otp-email" : "password");
          }}
          style={{
            background: "none",
            border: "none",
            fontSize: "13px",
            color: "#2563eb",
            cursor: "pointer",
            fontWeight: "600",
            fontFamily: "inherit",
            padding: 0,
          }}
        >
          {mode === "password" ? "Login with OTP instead" : "Login with password instead"}
        </button>
      </div>

      <BottomNav
        text="Don't have an account?"
        linkText="Sign up"
        href="/signup"
      />
    </AuthCard>
  );
}