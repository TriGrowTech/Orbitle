"use client";

export default function TrigrowLink() {
  return (
    <p style={{
      marginTop: "14px",
      fontSize: "11px",
      color: "#94a3b8",
      letterSpacing: "0.02em",
      fontFamily: "'Montserrat', sans-serif",
      textAlign: "center",
    }}>
      A product by{" "}
      <a
        href="https://trigrowtech.in"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#94a3b8", textDecoration: "none", fontWeight: "600" }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#64748b")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
      >
        TrigrowTech
      </a>
    </p>
  );
}