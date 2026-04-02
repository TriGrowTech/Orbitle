// app/(auth)/signup/callback/page.tsx
"use client";
import { useSearchParams } from "next/navigation";
import GoogleRoleModal from "@/components/GoogleRoleModal";

export default function CallbackPage() {
  const token = useSearchParams().get("session") ?? "";
  return <GoogleRoleModal sessionToken={token} onClose={() => window.location.href = "/"} />;
}