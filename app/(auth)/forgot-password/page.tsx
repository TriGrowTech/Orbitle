"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/axios";
import {
  Input, PasswordInput, PrimaryButton, AuthLink, ErrorBanner,
} from "@/components/auth-ui";

const H = "'Poppins', sans-serif";
const B = "'Montserrat', sans-serif";
const OTP_LENGTH = 6;

const validateEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

// ─── Shared label + error wrapper ────────────────────────────────────────────
function F({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <label style={{
        display: "block", fontSize: "10px", fontWeight: 600, color: "#475569",
        marginBottom: "4px", letterSpacing: "0.05em", textTransform: "uppercase", fontFamily: B,
      }}>
        {label}
      </label>
      {children}
      {error && <p style={{ fontSize: "10px", color: "#ef4444", margin: "3px 0 0", fontFamily: B }}>{error}</p>}
    </div>
  );
}

// ─── Step indicator ───────────────────────────────────────────────────────────
function Steps({ current }: { current: 1 | 2 }) {
  const steps = ["Email", "Reset Password"];
  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
      {steps.map((label, i) => {
        const idx = i + 1;
        const done = idx < current;
        const active = idx === current;
        return (
          <div key={label} style={{ display: "flex", alignItems: "center", flex: i < steps.length - 1 ? 1 : "none" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
              <div style={{
                width: 28, height: 28, borderRadius: "50%",
                background: done ? "#22c55e" : active ? "#2563eb" : "#e2e8f0",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.3s",
              }}>
                {done ? (
                  <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                    <path d="M1 5l3.5 3.5L12 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <span style={{ fontSize: "11px", fontWeight: 700, color: active ? "#fff" : "#94a3b8", fontFamily: B }}>
                    {idx}
                  </span>
                )}
              </div>
              <span style={{
                fontSize: "9px", fontWeight: 600, fontFamily: B, letterSpacing: "0.04em",
                color: active ? "#2563eb" : done ? "#22c55e" : "#94a3b8",
                textTransform: "uppercase", whiteSpace: "nowrap",
              }}>
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div style={{
                flex: 1, height: 2, margin: "0 6px", marginBottom: "18px",
                background: done ? "#22c55e" : "#e2e8f0",
                transition: "background 0.3s",
              }} />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Step 1: Email ────────────────────────────────────────────────────────────
function StepEmail({ onSent }: { onSent: (email: string) => void }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [globalError, setGlobalError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSend() {
    setError(""); setGlobalError("");
    if (!email) return setError("Email is required");
    if (!validateEmail(email)) return setError("Enter a valid email address");
    setLoading(true);
    try {
      await api.post("/auth/forgotpassword", { email });
      onSent(email);
    } catch (err: any) {
      setGlobalError(err.response?.data?.message ?? "Failed to send OTP. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div style={{ marginBottom: "16px" }}>
        <h1 style={{ fontSize: "18px", fontWeight: 700, color: "#0d1b2e", margin: "0 0 3px", fontFamily: H, letterSpacing: "-0.3px" }}>
          Forgot your password?
        </h1>
        <p style={{ fontSize: "11px", color: "#64748b", margin: 0, fontFamily: B, lineHeight: 1.5 }}>
          Enter your email and we'll send you a one-time code to reset your password.
        </p>
      </div>

      {globalError && <ErrorBanner message={globalError} />}

      <F label="Email address" error={error}>
        <Input
          type="email" placeholder="you@example.com" value={email}
          onChange={(e) => { setEmail(e.target.value); setError(""); }}
          hasError={!!error} autoComplete="email"
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
      </F>

      <PrimaryButton loading={loading} onClick={handleSend}>
        Send OTP
      </PrimaryButton>

      <div style={{ textAlign: "center", marginTop: "14px" }}>
        <AuthLink href="/login">← Back to Login</AuthLink>
      </div>
    </div>
  );
}

// ─── Step 2: Reset Password (OTP + Password) ──────────────────────────────────
function StepResetPassword({ email, onSuccess }: { email: string; onSuccess: () => void }) {
  const [digits, setDigits] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [globalError, setGlobalError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [cooldown, setCooldown] = useState(30);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => { inputRefs.current[0]?.focus(); }, []);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCooldown((c) => { if (c <= 1) { clearInterval(timerRef.current!); return 0; } return c - 1; });
    }, 1000);
    return () => clearInterval(timerRef.current!);
  }, []);

  function startCooldown() {
    setCooldown(30);
    timerRef.current = setInterval(() => {
      setCooldown((c) => { if (c <= 1) { clearInterval(timerRef.current!); return 0; } return c - 1; });
    }, 1000);
  }

  function handleChange(index: number, value: string) {
    const digit = value.replace(/\D/g, "").slice(-1);
    const newDigits = [...digits];
    newDigits[index] = digit;
    setDigits(newDigits);
    setGlobalError("");
    if (digit && index < OTP_LENGTH - 1) inputRefs.current[index + 1]?.focus();
  }

  function handleKeyDown(index: number, e: React.KeyboardEvent) {
    if (e.key === "Backspace" && !digits[index] && index > 0) inputRefs.current[index - 1]?.focus();
    if (e.key === "ArrowLeft" && index > 0) inputRefs.current[index - 1]?.focus();
    if (e.key === "ArrowRight" && index < OTP_LENGTH - 1) inputRefs.current[index + 1]?.focus();
  }

  function handlePaste(e: React.ClipboardEvent) {
    e.preventDefault();
    const paste = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, OTP_LENGTH);
    const newDigits = [...digits];
    paste.split("").forEach((ch, i) => { newDigits[i] = ch; });
    setDigits(newDigits);
    const nextEmpty = newDigits.findIndex((d) => !d);
    inputRefs.current[nextEmpty === -1 ? OTP_LENGTH - 1 : nextEmpty]?.focus();
  }

  function strength() {
    let s = 0;
    if (password.length >= 8) s++;
    if (password.length >= 12) s++;
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) s++;
    if (/[0-9]/.test(password)) s++;
    if (/[^A-Za-z0-9]/.test(password)) s++;
    return Math.min(s, 4);
  }
  const strengthColors = ["", "#ef4444", "#f59e0b", "#3b82f6", "#22c55e"];
  const strengthLabels = ["", "Weak", "Fair", "Good", "Strong"];
  const s = strength();

  async function handleReset() {
    setErrors({});
    setGlobalError("");
    const otp = digits.join("");
    const e: Record<string, string> = {};
    if (otp.length < OTP_LENGTH) e.otp = "Verification code is incomplete";
    if (!password) e.password = "Required";
    else if (password.length < 8) e.password = "Min. 8 characters";
    if (!confirm) e.confirm = "Required";
    else if (password !== confirm) e.confirm = "Passwords don't match";
    if (Object.keys(e).length) return setErrors(e);

    setLoading(true);
    try {
      await api.put("/auth/resetpassword", { email, otp, password });
      onSuccess();
    } catch (err: any) {
      setGlobalError(err.response?.data?.message ?? "Failed to reset password. Check your OTP.");
    } finally {
      setLoading(false);
    }
  }

  async function handleResend() {
    if (cooldown > 0) return;
    setResendLoading(true);
    setGlobalError("");
    try {
      await api.post("/auth/forgotpassword", { email });
      setDigits(Array(OTP_LENGTH).fill(""));
      inputRefs.current[0]?.focus();
      startCooldown();
    } catch (err: any) {
      setGlobalError(err.response?.data?.message ?? "Failed to resend OTP.");
    } finally {
      setResendLoading(false);
    }
  }

  const isComplete = digits.join("").length === OTP_LENGTH && password.length >= 8 && password === confirm;

  return (
    <div>
      <div style={{ marginBottom: "16px" }}>
        <h1 style={{ fontSize: "18px", fontWeight: 700, color: "#0d1b2e", margin: "0 0 3px", fontFamily: H, letterSpacing: "-0.3px" }}>
          Reset password
        </h1>
        <p style={{ fontSize: "11px", color: "#64748b", margin: 0, fontFamily: B, lineHeight: 1.5 }}>
          Enter the 6-digit code sent to <strong style={{ color: "#0d1b2e" }}>{email}</strong> and choose a new password.
        </p>
      </div>

      {globalError && <ErrorBanner message={globalError} />}

      <F label="Verification code" error={errors.otp}>
        <div style={{ display: "flex", gap: "8px", justifyContent: "center", marginBottom: "6px" }} onPaste={handlePaste}>
          {digits.map((digit, i) => (
            <input
              key={i}
              ref={(el) => { inputRefs.current[i] = el; }}
              type="text" inputMode="numeric" pattern="[0-9]*" maxLength={1}
              value={digit}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              style={{
                width: "42px", height: "48px", textAlign: "center",
                fontSize: "20px", fontWeight: 700, color: "#0d1b2e",
                background: digit ? "#eff6ff" : "#f8fafc",
                border: `2px solid ${digit ? "#2563eb" : "#e2e8f0"}`,
                borderRadius: "10px", outline: "none",
                transition: "border-color 0.15s, background 0.15s, box-shadow 0.15s",
                fontFamily: "'DM Mono', 'Courier New', monospace", cursor: "text",
              }}
              onFocus={(e) => { e.currentTarget.style.borderColor = "#2563eb"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.15)"; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = digit ? "#2563eb" : "#e2e8f0"; e.currentTarget.style.boxShadow = "none"; }}
            />
          ))}
        </div>
      </F>

      <div style={{ textAlign: "center", marginBottom: "16px" }}>
        {cooldown > 0 ? (
          <p style={{ fontSize: "11px", color: "#94a3b8", margin: 0, fontFamily: B }}>
            Resend code in{" "}
            <span style={{ color: "#2563eb", fontWeight: 600, fontVariantNumeric: "tabular-nums" }}>
              0:{String(cooldown).padStart(2, "0")}
            </span>
          </p>
        ) : (
          <button type="button" onClick={handleResend} disabled={resendLoading} style={{
            background: "none", border: "none", fontSize: "11px", color: "#2563eb",
            cursor: "pointer", fontWeight: 600, fontFamily: B, padding: 0,
          }}>
            {resendLoading ? "Sending..." : "Resend code"}
          </button>
        )}
      </div>

      <F label="New password" error={errors.password}>
        <PasswordInput placeholder="Min. 8 characters" value={password}
          onChange={(e) => setPassword(e.target.value)} hasError={!!errors.password} autoComplete="new-password" />
      </F>

      {password && (
        <div style={{ marginTop: "-6px", marginBottom: "10px" }}>
          <div style={{ display: "flex", gap: "3px", marginBottom: "3px" }}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} style={{
                flex: 1, height: "3px", borderRadius: "2px",
                background: i <= s ? strengthColors[s] : "#e2e8f0",
                transition: "background 0.2s",
              }} />
            ))}
          </div>
          {s > 0 && <p style={{ fontSize: "10px", color: strengthColors[s], margin: 0, fontWeight: 600, fontFamily: B }}>{strengthLabels[s]}</p>}
        </div>
      )}

      <F label="Confirm password" error={errors.confirm}>
        <PasswordInput placeholder="Re-enter your password" value={confirm}
          onChange={(e) => setConfirm(e.target.value)} hasError={!!errors.confirm} autoComplete="new-password" />
      </F>

      <PrimaryButton loading={loading} disabled={!isComplete} onClick={handleReset}>
        Reset password
      </PrimaryButton>
    </div>
  );
}

// ─── Success ──────────────────────────────────────────────────────────────────
function StepSuccess() {
  const router = useRouter();
  return (
    <div style={{ textAlign: "center", padding: "8px 0" }}>
      <div style={{
        width: 56, height: 56, borderRadius: "50%",
        background: "linear-gradient(135deg, #dcfce7, #bbf7d0)",
        display: "flex", alignItems: "center", justifyContent: "center",
        margin: "0 auto 14px",
      }}>
        <svg width="26" height="20" viewBox="0 0 26 20" fill="none">
          <path d="M2 10l7 7L24 2" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#0d1b2e", margin: "0 0 6px", fontFamily: H }}>
        Password updated!
      </h2>
      <p style={{ fontSize: "12px", color: "#64748b", margin: "0 0 18px", lineHeight: 1.5, fontFamily: B }}>
        Your password has been reset successfully.
      </p>
      <PrimaryButton onClick={() => router.push("/login")}>
        Continue to Login
      </PrimaryButton>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function ForgotPasswordPage() {
  const [step, setStep]   = useState<1 | 2 | 3>(1);
  const [email, setEmail] = useState("");

  return (
    <div style={{
      width: "100%", maxWidth: "400px",
      background: "#fff", borderRadius: "16px",
      boxShadow: "0 2px 24px rgba(13,27,46,0.10)",
      padding: "22px 24px",
      border: "1px solid rgba(37,99,235,0.08)",
      fontFamily: B,
    }}>
      {step < 3 && <Steps current={step as 1 | 2} />}

      {step === 1 && <StepEmail onSent={(e) => { setEmail(e); setStep(2); }} />}
      {step === 2 && <StepResetPassword email={email} onSuccess={() => setStep(3)} />}
      {step === 3 && <StepSuccess />}
    </div>
  );
}