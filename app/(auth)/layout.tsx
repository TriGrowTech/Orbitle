import type { Metadata } from "next";
import Image from "next/image";
import AuthCarousel from "./AuthCarousel";
import TrigrowLink from "./Trigrowlink";

export const metadata: Metadata = {
  title: "Orbitle — Auth",
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Montserrat:wght@400;500;600;700&display=swap');

        html, body {
          margin: 0;
          padding: 0;
          height: 100%;
          overflow: hidden;
        }

        .auth-mobile-logo { display: none; }

        @media (max-width: 768px) {
          html, body {
            overflow: auto;
            height: auto;
          }
          .auth-wrapper {
            height: auto !important;
            min-height: 100vh;
            overflow: visible !important;
          }
          .auth-left-panel {
            display: none !important;
          }
          .auth-right-panel {
            width: 100% !important;
            height: auto !important;
            min-height: 100vh;
            padding: 32px 18px 40px !important;
            justify-content: flex-start !important;
            overflow-y: visible !important;
          }
          .auth-mobile-logo {
            display: flex !important;
          }
        }
      `}</style>

      <div
        className="auth-wrapper"
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          overflow: "hidden",
          fontFamily: "'Montserrat', sans-serif",
          backgroundColor: "#e2e8f0",
        }}
      >
        {/* ── Left: Carousel ── */}
        <div className="auth-left-panel" style={{
          width: "50%",
          height: "100%",
          flexShrink: 0,
          overflow: "hidden",
        }}>
          <AuthCarousel />
        </div>

        {/* ── Right: Auth card ── */}
        <div
          className="auth-right-panel"
          style={{
            width: "50%",
            height: "100%",
            boxSizing: "border-box",
            padding: "20px 36px",
            backgroundColor: "#e2e8f0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            gap: 0,
          }}
        >
          {/* Mobile-only logo */}
          <div
            className="auth-mobile-logo"
            style={{
              alignItems: "center",
              gap: "9px",
              marginBottom: "24px",
              alignSelf: "center",
            }}
          >
            <Image
              src="/images/orbitle-logo.png"
              alt="Orbitle"
              width={30}
              height={30}
              style={{ objectFit: "contain", borderRadius: "7px" }}
              priority
            />
            <span style={{
              fontSize: "19px",
              fontWeight: "800",
              color: "#0d1b2e",
              fontStyle: "italic",
              letterSpacing: "-0.4px",
              fontFamily: "'Montserrat', sans-serif",
            }}>
              Orbitle
            </span>
          </div>

          {/* Auth card */}
          {children}

          {/* TrigrowTech branding */}
          <TrigrowLink />
        </div>
      </div>
    </>
  );
}