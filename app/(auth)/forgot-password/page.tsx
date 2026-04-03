"use client";

/* ──────────────────────────────────────────────────────────────
   TEMP UI MOCK — delete when backend is ready
   OTP to use: 123456
────────────────────────────────────────────────────────────── */

const USE_TEMP_MOCK = true;

// store mock in global so we can patch later
if (USE_TEMP_MOCK) {
  const wait = (ms: number) => new Promise(res => setTimeout(res, ms));

  // @ts-ignore
  globalThis.__TEMP_AUTH_PATCH__ = {
    sendOtp: async (email: string) => {
      console.log("🟡 MOCK sendOtp →", email);
      await wait(900);
    },

    verifyOtp: async (_email: string, otp: string) => {
      console.log("🟡 MOCK verifyOtp →", otp);
      await wait(900);

      if (otp !== "123456") {
        throw { message: "Invalid OTP. Use 123456" };
      }

      return { resetToken: "mock-reset-token" };
    },

    resetPassword: async (_token: string, password: string) => {
      console.log("🟡 MOCK resetPassword →", password);
      await wait(1000);
    },
  };
}

/* ────────────────────────────────────────────────────────────── */

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Input, PasswordInput, PrimaryButton, AuthLink, ErrorBanner,
} from "@/components/auth-ui";

const H = "'Poppins', sans-serif";
const B = "'Montserrat', sans-serif";
const OTP_LENGTH = 6;
const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

const validateEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

// ─── Real API — active when mock block above is deleted ───────────────────────
const api = {
  sendOtp: async (email: string): Promise<void> => {
    const res = await fetch(`${API_URL}/api/auth/forgot-password/send-otp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    if (!res.ok) {
      const data = await res.json();
      throw { message: data.message ?? "Failed to send OTP." };
    }
  },
  verifyOtp: async (email: string, otp: string): Promise<{ resetToken: string }> => {
    const res = await fetch(`${API_URL}/api/auth/forgot-password/verify-otp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp }),
    });
    const data = await res.json();
    if (!res.ok) throw { message: data.message ?? "Invalid or expired OTP." };
    return { resetToken: data.resetToken };
  },
  resetPassword: async (resetToken: string, password: string): Promise<void> => {
    const res = await fetch(`${API_URL}/api/auth/forgot-password/reset`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resetToken, password }),
    });
    if (!res.ok) {
      const data = await res.json();
      throw { message: data.message ?? "Failed to reset password." };
    }
  },
};

// ─── Patch API with mock in development (delete when connecting to backend) ─────────────────────────
if (typeof window !== "undefined") {
  // @ts-ignore
  const mock = globalThis.__TEMP_AUTH_PATCH__;
  if (mock) {
    Object.assign(api, mock);
    console.log("🟢 Using TEMP ForgotPassword mock API");
  }
}

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
function Steps({ current }: { current: 1 | 2 | 3 }) {
  const steps = ["Email", "Verify OTP", "New Password"];
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
      await api.sendOtp(email);
      onSent(email);
    } catch (err: any) {
      setGlobalError(err?.message ?? "Failed to send OTP. Try again.");
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

// ─── Step 2: Verify OTP ───────────────────────────────────────────────────────
function StepVerifyOtp({ email, onVerified }: { email: string; onVerified: (token: string) => void }) {
  const [digits, setDigits] = useState<string[]>(Array(OTP_LENGTH).fill(""));
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

  async function handleVerify() {
    const code = digits.join("");
    if (code.length < OTP_LENGTH) return setGlobalError("Enter the complete 6-digit code");
    setGlobalError("");
    setLoading(true);
    try {
      const data = await api.verifyOtp(email, code);
      onVerified(data.resetToken);
    } catch (err: any) {
      setGlobalError(err?.message ?? "Invalid or expired OTP.");
    } finally {
      setLoading(false);
    }
  }

  async function handleResend() {
    if (cooldown > 0) return;
    setResendLoading(true); setGlobalError("");
    try {
      await api.sendOtp(email);
      setDigits(Array(OTP_LENGTH).fill(""));
      inputRefs.current[0]?.focus();
      startCooldown();
    } catch (err: any) {
      setGlobalError(err?.message ?? "Failed to resend OTP.");
    } finally {
      setResendLoading(false);
    }
  }

  const isComplete = digits.join("").length === OTP_LENGTH;

  return (
    <div>
      <div style={{ marginBottom: "16px" }}>
        <h1 style={{ fontSize: "18px", fontWeight: 700, color: "#0d1b2e", margin: "0 0 3px", fontFamily: H, letterSpacing: "-0.3px" }}>
          Enter verification code
        </h1>
        <p style={{ fontSize: "11px", color: "#64748b", margin: 0, fontFamily: B, lineHeight: 1.5 }}>
          We sent a 6-digit code to <strong style={{ color: "#0d1b2e" }}>{email}</strong>
        </p>
      </div>

      {globalError && <ErrorBanner message={globalError} />}

      <div style={{ display: "flex", gap: "8px", justifyContent: "center", marginBottom: "16px" }} onPaste={handlePaste}>
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

      <PrimaryButton loading={loading} disabled={!isComplete} onClick={handleVerify}>
        Verify OTP
      </PrimaryButton>

      <div style={{ textAlign: "center", marginTop: "12px" }}>
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
    </div>
  );
}

// ─── Step 3: New Password ─────────────────────────────────────────────────────
function StepNewPassword({ resetToken, onSuccess }: { resetToken: string; onSuccess: () => void }) {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [globalError, setGlobalError] = useState("");
  const [loading, setLoading] = useState(false);

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
    setErrors({}); setGlobalError("");
    const e: Record<string, string> = {};
    if (!password) e.password = "Required";
    else if (password.length < 8) e.password = "Min. 8 characters";
    if (!confirm) e.confirm = "Required";
    else if (password !== confirm) e.confirm = "Passwords don't match";
    if (Object.keys(e).length) return setErrors(e);

    setLoading(true);
    try {
      await api.resetPassword(resetToken, password);
      onSuccess();
    } catch (err: any) {
      setGlobalError(err?.message ?? "Failed to reset password.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div style={{ marginBottom: "16px" }}>
        <h1 style={{ fontSize: "18px", fontWeight: 700, color: "#0d1b2e", margin: "0 0 3px", fontFamily: H, letterSpacing: "-0.3px" }}>
          Set new password
        </h1>
        <p style={{ fontSize: "11px", color: "#64748b", margin: 0, fontFamily: B, lineHeight: 1.5 }}>
          Choose a strong password you haven't used before.
        </p>
      </div>

      {globalError && <ErrorBanner message={globalError} />}

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

      <PrimaryButton loading={loading} onClick={handleReset}>
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
  const [step, setStep]             = useState<1 | 2 | 3 | 4>(1);
  const [email, setEmail]           = useState("");
  const [resetToken, setResetToken] = useState("");

  return (
    <>
      {process.env.NODE_ENV === "development" && (
        <div style={{
          position: "fixed", bottom: 16, right: 16, zIndex: 9999,
          background: "#1e293b", color: "#94a3b8", borderRadius: "10px",
          padding: "10px 14px", fontSize: "11px", fontFamily: B,
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)", maxWidth: 220,
        }}>
          <div style={{ color: "#f59e0b", fontWeight: 700, marginBottom: 4 }}>🧪 Mock Mode</div>
          <div>OTP code: <strong style={{ color: "#fff" }}>123456</strong></div>
          <div style={{ marginTop: 2, color: "#64748b" }}>Check console for logs</div>
        </div>
      )}

      <div style={{
        width: "100%", maxWidth: "400px",
        background: "#fff", borderRadius: "16px",
        boxShadow: "0 2px 24px rgba(13,27,46,0.10)",
        padding: "22px 24px",
        border: "1px solid rgba(37,99,235,0.08)",
        fontFamily: B,
      }}>
        {step < 4 && <Steps current={step as 1 | 2 | 3} />}

        {step === 1 && <StepEmail onSent={(e) => { setEmail(e); setStep(2); }} />}
        {step === 2 && <StepVerifyOtp email={email} onVerified={(token) => { setResetToken(token); setStep(3); }} />}
        {step === 3 && <StepNewPassword resetToken={resetToken} onSuccess={() => setStep(4)} />}
        {step === 4 && <StepSuccess />}
      </div>
    </>
  );
}