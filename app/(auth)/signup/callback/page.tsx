// app/(auth)/signup/callback/page.tsx
"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import GoogleRoleModal from "@/components/GoogleRoleModal";

function CallbackContent() {
  const token = useSearchParams().get("session") ?? "";
  return <GoogleRoleModal sessionToken={token} onClose={() => window.location.href = "/"} />;
}

export default function CallbackPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CallbackContent />
    </Suspense>
  );
}