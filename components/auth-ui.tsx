"use client";

import React, { useState } from "react";

const HEADING = "'Poppins', sans-serif";
const BODY    = "'Montserrat', sans-serif";

// ─── Card ────────────────────────────────────────────────────────────────────
export function AuthCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "20px",
        boxShadow: "0 1px 3px rgba(13,27,46,0.06), 0 8px 32px rgba(13,27,46,0.08)",
        padding: "28px 32px",
        width: "100%",
        maxWidth: "420px",
        border: "1px solid rgba(37,99,235,0.08)",
        fontFamily: BODY,
      }}
    >
      {children}
    </div>
  );
}

// ─── Heading ─────────────────────────────────────────────────────────────────
export function AuthHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h1 style={{
        fontSize: "22px", fontWeight: "700", color: "#0d1b2e",
        margin: "0 0 5px 0", letterSpacing: "-0.3px",
        fontFamily: HEADING,
      }}>
        {title}
      </h1>
      {subtitle && (
        <p style={{ fontSize: "13px", color: "#64748b", margin: 0, fontFamily: BODY, fontWeight: 400 }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ─── Field ───────────────────────────────────────────────────────────────────
export function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "12px" }}>
      <label style={{
        display: "block", fontSize: "11px", fontWeight: "600", color: "#334155",
        marginBottom: "5px", letterSpacing: "0.05em", textTransform: "uppercase",
        fontFamily: BODY,
      }}>
        {label}
      </label>
      {children}
      {error && (
        <p style={{
          fontSize: "12px", color: "#ef4444", margin: "4px 0 0 0",
          display: "flex", alignItems: "center", gap: "4px", fontFamily: BODY,
        }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
            <circle cx="6" cy="6" r="5.5" stroke="#ef4444" />
            <path d="M6 3.5V6.5" stroke="#ef4444" strokeWidth="1.2" strokeLinecap="round" />
            <circle cx="6" cy="8.5" r="0.6" fill="#ef4444" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}

// ─── Input ───────────────────────────────────────────────────────────────────
const inputBase: React.CSSProperties = {
  width: "100%",
  padding: "10px 13px",
  fontSize: "14px",
  color: "#0d1b2e",
  background: "#f8fafc",
  border: "1.5px solid #e2e8f0",
  borderRadius: "10px",
  outline: "none",
  transition: "border-color 0.15s, box-shadow 0.15s",
  boxSizing: "border-box",
  fontFamily: BODY,
};

export function Input(props: React.InputHTMLAttributes<HTMLInputElement> & { hasError?: boolean }) {
  const { hasError, style, ...rest } = props;
  const [focused, setFocused] = useState(false);
  return (
    <input
      {...rest}
      style={{
        ...inputBase,
        borderColor: hasError ? "#ef4444" : focused ? "#2563eb" : "#e2e8f0",
        boxShadow: focused && !hasError ? "0 0 0 3px rgba(37,99,235,0.12)" : "none",
        ...style,
      }}
      onFocus={(e) => { setFocused(true); props.onFocus?.(e); }}
      onBlur={(e) => { setFocused(false); props.onBlur?.(e); }}
    />
  );
}

// ─── Primary Button ───────────────────────────────────────────────────────────
export function PrimaryButton({
  children, loading, disabled, onClick, type = "button", fullWidth = true,
}: {
  children: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  fullWidth?: boolean;
}) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      style={{
        width: fullWidth ? "100%" : "auto",
        padding: "11px 20px",
        background: disabled || loading
          ? "#93c5fd"
          : "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
        color: "#ffffff",
        border: "none",
        borderRadius: "10px",
        fontSize: "14px",
        fontWeight: "600",
        cursor: disabled || loading ? "not-allowed" : "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        transition: "opacity 0.15s",
        letterSpacing: "0.02em",
        fontFamily: BODY,
        boxShadow: disabled || loading ? "none" : "0 2px 8px rgba(37,99,235,0.3)",
      }}
      onMouseEnter={(e) => { if (!disabled && !loading) (e.currentTarget as HTMLButtonElement).style.opacity = "0.92"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = "1"; }}
    >
      {loading && <Spinner />}
      {children}
    </button>
  );
}

// ─── Outline Button ───────────────────────────────────────────────────────────
export function OutlineButton({
  children, loading, onClick, type = "button",
}: {
  children: React.ReactNode;
  loading?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  return (
    <button
      type={type}
      disabled={loading}
      onClick={onClick}
      style={{
        width: "100%", padding: "10px 20px", background: "#ffffff",
        color: "#0d1b2e", border: "1.5px solid #e2e8f0", borderRadius: "10px",
        fontSize: "14px", fontWeight: "500", cursor: loading ? "not-allowed" : "pointer",
        display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
        transition: "border-color 0.15s, background 0.15s", fontFamily: BODY,
      }}
      onMouseEnter={(e) => {
        if (!loading) {
          (e.currentTarget as HTMLButtonElement).style.borderColor = "#2563eb";
          (e.currentTarget as HTMLButtonElement).style.background = "#f8faff";
        }
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.borderColor = "#e2e8f0";
        (e.currentTarget as HTMLButtonElement).style.background = "#ffffff";
      }}
    >
      {loading ? <Spinner dark /> : (
        <svg width="18" height="18" viewBox="0 0 18 18">
          <path d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.614z" fill="#4285F4" />
          <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853" />
          <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05" />
          <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335" />
        </svg>
      )}
      Continue with Google
    </button>
  );
}

// ─── Spinner ─────────────────────────────────────────────────────────────────
export function Spinner({ dark }: { dark?: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" style={{ animation: "spin 0.7s linear infinite" }}>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      <circle cx="8" cy="8" r="6" fill="none" stroke={dark ? "#2563eb" : "rgba(255,255,255,0.4)"} strokeWidth="2" />
      <path d="M14 8a6 6 0 0 0-6-6" fill="none" stroke={dark ? "#2563eb" : "white"} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// ─── Divider ─────────────────────────────────────────────────────────────────
export function Divider({ text = "or" }: { text?: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", margin: "16px 0" }}>
      <div style={{ flex: 1, height: "1px", background: "#e2e8f0" }} />
      <span style={{ fontSize: "12px", color: "#94a3b8", fontWeight: "500", fontFamily: BODY }}>{text}</span>
      <div style={{ flex: 1, height: "1px", background: "#e2e8f0" }} />
    </div>
  );
}

// ─── Auth Link ────────────────────────────────────────────────────────────────
export function AuthLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      style={{ color: "#2563eb", textDecoration: "none", fontWeight: "600", fontSize: "13px", fontFamily: BODY }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.textDecoration = "underline")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.textDecoration = "none")}
    >
      {children}
    </a>
  );
}

// ─── Bottom Nav ──────────────────────────────────────────────────────────────
export function BottomNav({ text, linkText, href }: { text: string; linkText: string; href: string }) {
  return (
    <p style={{ textAlign: "center", fontSize: "13px", color: "#64748b", marginTop: "16px", marginBottom: 0, fontFamily: BODY }}>
      {text} <AuthLink href={href}>{linkText} →</AuthLink>
    </p>
  );
}

// ─── Password Input ──────────────────────────────────────────────────────────
export function PasswordInput(props: React.InputHTMLAttributes<HTMLInputElement> & { hasError?: boolean }) {
  const [show, setShow] = useState(false);
  const { hasError, ...rest } = props;
  return (
    <div style={{ position: "relative" }}>
      <Input {...rest} type={show ? "text" : "password"} hasError={hasError} />
      <button
        type="button"
        onClick={() => setShow((s) => !s)}
        style={{
          position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)",
          background: "none", border: "none", cursor: "pointer", padding: "2px",
          color: "#94a3b8", display: "flex",
        }}
        tabIndex={-1}
      >
        {show ? (
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
            <line x1="1" y1="1" x2="23" y2="23" />
          </svg>
        ) : (
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        )}
      </button>
    </div>
  );
}

// ─── Error Banner ─────────────────────────────────────────────────────────────
export function ErrorBanner({ message }: { message: string }) {
  return (
    <div style={{
      background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "10px",
      padding: "10px 14px", fontSize: "13px", color: "#dc2626", marginBottom: "12px",
      display: "flex", alignItems: "flex-start", gap: "8px", fontFamily: BODY,
    }}>
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ flexShrink: 0, marginTop: "1px" }}>
        <circle cx="7.5" cy="7.5" r="7" stroke="#dc2626" />
        <path d="M7.5 4v4" stroke="#dc2626" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="7.5" cy="10.5" r="0.7" fill="#dc2626" />
      </svg>
      {message}
    </div>
  );
}

// ─── Success State ────────────────────────────────────────────────────────────
export function SuccessState({
  icon, title, subtitle, children,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}) {
  return (
    <div style={{ textAlign: "center", padding: "8px 0" }}>
      <div style={{
        width: "60px", height: "60px",
        background: "linear-gradient(135deg, #dcfce7, #bbf7d0)",
        borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
        margin: "0 auto 16px",
      }}>
        {icon}
      </div>
      <h2 style={{
        fontSize: "20px", fontWeight: "700", color: "#0d1b2e",
        margin: "0 0 8px 0", letterSpacing: "-0.3px", fontFamily: HEADING,
      }}>
        {title}
      </h2>
      <p style={{ fontSize: "14px", color: "#64748b", margin: "0 0 20px 0", lineHeight: "1.5", fontFamily: BODY }}>
        {subtitle}
      </p>
      {children}
    </div>
  );
}