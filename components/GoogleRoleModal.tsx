"use client";

import { useState } from "react";
import api from "@/lib/axios";
import {
  Input,
  PrimaryButton,
  Field,
  ErrorBanner,
} from "./auth-ui";

type Role = "agent" | "operator" | "";

export default function GoogleRoleModal({
  sessionToken,
  onClose,
}: {
  sessionToken: string;
  onClose: () => void;
}) {
  const [role, setRole] = useState<Role>("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [globalError, setGlobalError] = useState("");
  const [loading, setLoading] = useState(false);

  const dashboardUrl = process.env.NEXT_PUBLIC_DASHBOARD_URL ?? "";

  async function handleSubmit() {
    setErrors({});
    setGlobalError("");
    const e: Record<string, string> = {};
    if (!role) e.role = "Please select a role";
    if (!companyName.trim()) e.companyName = "Company name is required";
    if (!phone.trim()) e.phone = "Phone number is required";
    else if (!/^\+?[\d\s\-()]{7,15}$/.test(phone)) e.phone = "Enter a valid phone number";

    if (Object.keys(e).length) return setErrors(e);

    setLoading(true);
    try {
      const res = await api.post("/auth/google/complete-register", {
        sessionToken,
        role,
        phone,
        businessName: companyName,
      });

      if (res.data.success) {
        // Logged in successfully, redirect to onboarding / dashboard
        window.location.href = `${dashboardUrl}/onboarding`;
      } else {
        setGlobalError(res.data.message || "Failed to complete registration.");
      }
    } catch (err: any) {
      setGlobalError(
        err?.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(13, 27, 46, 0.4)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        padding: "16px",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          borderRadius: "20px",
          boxShadow: "0 10px 40px rgba(13, 27, 46, 0.15)",
          padding: "32px",
          width: "100%",
          maxWidth: "440px",
          border: "1px solid rgba(37, 99, 235, 0.08)",
          fontFamily: "'Montserrat', sans-serif",
          position: "relative",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            background: "none",
            border: "none",
            fontSize: "20px",
            cursor: "pointer",
            color: "#94a3b8",
          }}
        >
          ×
        </button>

        <h2
          style={{
            fontSize: "20px",
            fontWeight: "700",
            color: "#0d1b2e",
            marginBottom: "6px",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Complete your profile
        </h2>
        <p
          style={{
            fontSize: "13px",
            color: "#64748b",
            marginBottom: "20px",
            lineHeight: "1.4",
          }}
        >
          Just a few details to finalize your Orbitle account.
        </p>

        {globalError && <ErrorBanner message={globalError} />}

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* Role select */}
          <Field label="I am a" error={errors.role}>
            <div style={{ position: "relative" }}>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value as Role)}
                style={{
                  width: "100%",
                  padding: "10px 13px",
                  fontSize: "14px",
                  color: role ? "#0d1b2e" : "#94a3b8",
                  background: "#f8fafc",
                  border: `1.5px solid ${errors.role ? "#ef4444" : "#e2e8f0"}`,
                  borderRadius: "10px",
                  outline: "none",
                  appearance: "none",
                  cursor: "pointer",
                }}
              >
                <option value="" disabled>
                  Select your role
                </option>
                <option value="agent">Travel Agent</option>
                <option value="operator">Tour Operator</option>
              </select>
              <div
                style={{
                  position: "absolute",
                  right: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2.5 4.5L6 8l3.5-3.5"
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </Field>

          {/* Company Name */}
          <Field label="Company name" error={errors.companyName}>
            <Input
              type="text"
              placeholder="e.g. Acme Travels"
              value={companyName}
              onChange={(e) => {
                setCompanyName(e.target.value);
                setErrors((prev) => ({ ...prev, companyName: "" }));
              }}
              hasError={!!errors.companyName}
            />
          </Field>

          {/* Phone Number */}
          <Field label="Phone number" error={errors.phone}>
            <Input
              type="tel"
              placeholder="e.g. +91 98765 43210"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                setErrors((prev) => ({ ...prev, phone: "" }));
              }}
              hasError={!!errors.phone}
            />
          </Field>

          <div style={{ marginTop: "8px" }}>
            <PrimaryButton loading={loading} onClick={handleSubmit}>
              Complete setup
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
