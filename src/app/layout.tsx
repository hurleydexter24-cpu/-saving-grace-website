import React from "react";

export const metadata = {
  title: "Saving Grace",
  description:
    "Supporting students, strengthening schools — a simple, trust-first hub for coordinated support.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, -apple-system, Roboto, sans-serif", margin: 0 }}>
        <header
          style={{
            padding: "1rem 2rem",
            borderBottom: "1px solid #eee",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#fff",
          }}
        >
          <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
            <h1 style={{ margin: 0, fontSize: "1.125rem" }}>Saving Grace</h1>
          </a>

          <nav>
            <a href="/app" style={{ marginRight: 16 }}>
              Open the App
            </a>
            <a href="/get-support">Get Support</a>
          </nav>
        </header>

        <main style={{ padding: "2rem", maxWidth: 1100, margin: "0 auto" }}>{children}</main>

        <footer
          style={{
            padding: "1.5rem 2rem",
            borderTop: "1px solid #eee",
            marginTop: 48,
            textAlign: "center",
            color: "#666",
            background: "#fafafa",
          }}
        >
          <div>© {new Date().getFullYear()} Saving Grace</div>
          <div style={{ marginTop: 8 }}>
            <a href="/schools" style={{ marginRight: 12 }}>
              For Schools
            </a>
            <a href="/app">Open the App</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
