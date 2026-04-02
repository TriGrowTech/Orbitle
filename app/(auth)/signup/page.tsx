"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Input, PasswordInput, PrimaryButton, OutlineButton,
  Divider, AuthLink, BottomNav, ErrorBanner,
} from "@/components/auth-ui";

const H = "'Poppins', sans-serif";
const B = "'Montserrat', sans-serif";

type Role = "agent" | "operator" | "";

const validateEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
const validatePhone = (p: string) => /^\+?[\d\s\-()]{7,15}$/.test(p);

function Field({
  label, error, children,
}: {
  label: string; error?: string; children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
      <label style={{
        fontSize: "10px", fontWeight: 700, color: "#64748b",
        letterSpacing: "0.06em", textTransform: "uppercase", fontFamily: B,
      }}>
        {label}
      </label>
      {children}
      {error && (
        <span style={{
          fontSize: "10px", color: "#ef4444", fontFamily: B,
          display: "flex", alignItems: "center", gap: "3px",
        }}>
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
            <circle cx="4.5" cy="4.5" r="4" stroke="#ef4444" strokeWidth="1" />
            <path d="M4.5 2.5v2.5" stroke="#ef4444" strokeWidth="1" strokeLinecap="round" />
            <circle cx="4.5" cy="6.5" r="0.5" fill="#ef4444" />
          </svg>
          {error}
        </span>
      )}
    </div>
  );
}

function RoleSelect({
  value, onChange, error,
}: {
  value: Role; onChange: (r: Role) => void; error?: string;
}) {
  return (
    <Field label="I am a" error={error}>
      <div style={{ position: "relative" }}>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value as Role)}
          style={{
            width: "100%",
            padding: "7px 28px 7px 10px",
            fontSize: "12px",
            color: value ? "#0d1b2e" : "#94a3b8",
            background: "#f8fafc",
            border: `1.5px solid ${error ? "#ef4444" : "#e2e8f0"}`,
            borderRadius: "7px",
            outline: "none",
            fontFamily: B,
            appearance: "none",
            cursor: "pointer",
            transition: "border-color 0.15s",
            boxSizing: "border-box",
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "#2563eb")}
          onBlur={(e) => (e.currentTarget.style.borderColor = error ? "#ef4444" : "#e2e8f0")}
        >
          <option value="" disabled>Select your role</option>
          <option value="agent">Travel Agent</option>
          <option value="operator">Tour Operator</option>
        </select>
        <div style={{
          position: "absolute", right: "9px", top: "50%",
          transform: "translateY(-50%)", pointerEvents: "none",
        }}>
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 4.5L6 8l3.5-3.5" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </Field>
  );
}

export default function SignupPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "";

  const fromParam = searchParams.get("from");
  const defaultRole: Role =
    fromParam === "operators" ? "operator" :
    fromParam === "agents"    ? "agent"    : "";

  const [form, setForm] = useState({
    fullName: "", email: "", phone: "",
    companyName: "", password: "", confirmPassword: "",
  });
  const [role, setRole]                   = useState<Role>(defaultRole);
  const [agreed, setAgreed]               = useState(false);
  const [errors, setErrors]               = useState<Record<string, string>>({});
  const [globalError, setGlobalError]     = useState("");
  const [loading, setLoading]             = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [mounted, setMounted]             = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!fromParam) {
      const ref = document.referrer;
      if (ref.includes("/operators"))   setRole("operator");
      else if (ref.includes("/agents")) setRole("agent");
    }
  }, [fromParam]);

  function set(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: "" }));
  }

  async function handleGoogle() {
    setGoogleLoading(true);
    try {
      const res  = await fetch(`${apiUrl}/api/auth/google`);
      const data = await res.json();
      if (data.url) window.location.href = data.url;
      else setGlobalError("Could not initiate Google login.");
    } catch { setGlobalError("Google login failed."); }
    finally { setGoogleLoading(false); }
  }

  async function handleSignup() {
    setErrors({}); setGlobalError("");
    const e: Record<string, string> = {};
    if (!form.fullName.trim())                       e.fullName        = "Required";
    if (!form.email)                                 e.email           = "Required";
    else if (!validateEmail(form.email))             e.email           = "Invalid email";
    if (!form.phone)                                 e.phone           = "Required";
    else if (!validatePhone(form.phone))             e.phone           = "Invalid number";
    if (!form.companyName.trim())                    e.companyName     = "Required";
    if (!role)                                       e.role            = "Please select a role";
    if (!form.password)                              e.password        = "Required";
    else if (form.password.length < 8)               e.password        = "Min. 8 characters";
    if (!form.confirmPassword)                       e.confirmPassword = "Required";
    else if (form.password !== form.confirmPassword) e.confirmPassword = "Passwords don't match";
    if (!agreed)                                     e.terms           = "Please accept to continue";
    if (Object.keys(e).length) return setErrors(e);

    setLoading(true);
    try {
      const res  = await fetch(`${apiUrl}/api/auth/register`, {
        method: "POST", credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, role }),
      });
      const data = await res.json();
      if (res.ok) router.push("/dashboard");
      else setGlobalError(data.message ?? "Registration failed.");
    } catch { setGlobalError("Something went wrong. Please try again."); }
    finally { setLoading(false); }
  }

  const inp = { padding: "7px 10px", fontSize: "12px" };

  return (
    <>
      <style>{`
        .signup-card {
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.35s ease, transform 0.35s ease;
        }
        .signup-card.mounted {
          opacity: 1;
          transform: translateY(0);
        }
        .sg {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-bottom: 8px;
        }
        .sg-full {
          grid-column: 1 / -1;
        }
        @media (max-width: 768px) {
          .sg {
            grid-template-columns: 1fr;
          }
          .sg-full {
            grid-column: 1;
          }
        }
      `}</style>

      <div
        className={`signup-card${mounted ? " mounted" : ""}`}
        style={{
          width: "100%",
          maxWidth: "480px",
          background: "#ffffff",
          borderRadius: "16px",
          boxShadow: "0 4px 6px rgba(13,27,46,0.04), 0 12px 40px rgba(13,27,46,0.10)",
          border: "1px solid rgba(37,99,235,0.07)",
          fontFamily: B,
        }}
      >
        <div style={{ padding: "16px 20px 14px" }}>

          {/* Header */}
          <div style={{ marginBottom: "10px" }}>
            <h1 style={{
              fontSize: "18px", fontWeight: 800, color: "#0d1b2e",
              margin: "0 0 2px", fontFamily: H, letterSpacing: "-0.4px", lineHeight: 1.2,
            }}>
              Create your account
            </h1>
            <p style={{ fontSize: "11px", color: "#94a3b8", margin: 0, fontFamily: B }}>
              Join Orbitle — your travel business, structured.
            </p>
          </div>

          {globalError && <ErrorBanner message={globalError} />}

          {/* Google — slim */}
          <OutlineButton loading={googleLoading} onClick={handleGoogle} style={{ padding: "7px 12px", fontSize: "12px", marginBottom: "10px" }}>
            Continue with Google
          </OutlineButton>

          <Divider text="or fill in your details" />

          {/* Row 1 — Role + Full Name */}
          <div className="sg">
            <RoleSelect
              value={role}
              onChange={(r) => { setRole(r); setErrors((e) => ({ ...e, role: "" })); }}
              error={errors.role}
            />
            <Field label="Full name" error={errors.fullName}>
              <Input type="text" placeholder="Jane Smith" value={form.fullName}
                onChange={(e) => set("fullName", e.target.value)}
                hasError={!!errors.fullName} autoComplete="name" style={inp} />
            </Field>
          </div>

          {/* Row 2 — Phone + Email */}
          <div className="sg">
            <Field label="Phone number" error={errors.phone}>
              <Input type="tel" placeholder="+91 98765 43210" value={form.phone}
                onChange={(e) => set("phone", e.target.value)}
                hasError={!!errors.phone} autoComplete="tel" style={inp} />
            </Field>
            <Field label="Email address" error={errors.email}>
              <Input type="email" placeholder="you@example.com" value={form.email}
                onChange={(e) => set("email", e.target.value)}
                hasError={!!errors.email} autoComplete="email" style={inp} />
            </Field>
          </div>

          {/* Row 3 — Password + Confirm Password */}
          <div className="sg">
            <Field label="Password" error={errors.password}>
              <PasswordInput placeholder="Min. 8 characters" value={form.password}
                onChange={(e) => set("password", e.target.value)}
                hasError={!!errors.password} autoComplete="new-password" style={inp} />
            </Field>
            <Field label="Confirm Password" error={errors.confirmPassword}>
              <PasswordInput placeholder="Repeat password" value={form.confirmPassword}
                onChange={(e) => set("confirmPassword", e.target.value)}
                hasError={!!errors.confirmPassword} autoComplete="new-password" style={inp} />
            </Field>
          </div>

          {/* Row 4 — Company name full width */}
          <div className="sg">
            <div className="sg-full">
              <Field label="Company name" error={errors.companyName}>
                <Input type="text" placeholder="Acme Travels" value={form.companyName}
                  onChange={(e) => set("companyName", e.target.value)}
                  hasError={!!errors.companyName} autoComplete="organization" style={inp} />
              </Field>
            </div>
          </div>

          {/* Terms */}
          <div style={{ marginBottom: "10px" }}>
            <label style={{ display: "flex", alignItems: "flex-start", gap: "8px", cursor: "pointer" }}>
              <div style={{ position: "relative", flexShrink: 0, marginTop: "1px" }}>
                <input
                  type="checkbox" checked={agreed}
                  onChange={(e) => { setAgreed(e.target.checked); setErrors((err) => ({ ...err, terms: "" })); }}
                  style={{ opacity: 0, position: "absolute", inset: 0, cursor: "pointer", margin: 0, width: "100%", height: "100%" }}
                />
                <div style={{
                  width: 14, height: 14,
                  border: `2px solid ${errors.terms ? "#ef4444" : agreed ? "#2563eb" : "#cbd5e1"}`,
                  borderRadius: "4px",
                  background: agreed ? "linear-gradient(135deg, #2563eb, #1d4ed8)" : "#fff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 0.15s",
                  boxShadow: agreed ? "0 1px 6px rgba(37,99,235,0.3)" : "none",
                }}>
                  {agreed && (
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                      <path d="M1 3l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
              </div>
              <span style={{ fontSize: "10.5px", color: "#64748b", fontFamily: B, lineHeight: 1.5 }}>
                I agree to Orbitle's{" "}
                <AuthLink href="/terms-of-service">Terms of Service</AuthLink>
                {" "}and{" "}
                <AuthLink href="/privacy-policy">Privacy Policy</AuthLink>
              </span>
            </label>
            {errors.terms && (
              <p style={{ fontSize: "10px", color: "#ef4444", margin: "3px 0 0 22px", fontFamily: B }}>
                {errors.terms}
              </p>
            )}
          </div>

          {/* Submit */}
          <PrimaryButton loading={loading} onClick={handleSignup}>
            Create account →
          </PrimaryButton>

          <BottomNav text="Already have an account?" linkText="Log in" href="/login" />

        </div>
      </div>
    </>
  );
}