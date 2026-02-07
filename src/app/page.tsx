export default function HomePage() {
  return (
    <main style={{ padding: "3rem", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        Supporting Students. Strengthening Schools.  
        Working Together as a Community.
      </h1>

      <p style={{ fontSize: "1.1rem", lineHeight: 1.6 }}>
        Saving Grace is a community-supported platform that helps schools,
        families, and caring adults notice concerns early, respond calmly,
        and support students with clear roles and trusted boundaries.
      </p>

      <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
        <a href="/app">
          <button>Open the App</button>
        </a>
        <a href="/schools">
          <button>For Schools & Communities</button>
        </a>
      </div>

      <section style={{ marginTop: "4rem" }}>
        <h2>What This Is</h2>
        <p>
          A coordinated way for students to ask for help, educators to
          collaborate, and families to stay informed — without adding
          burden or confusion.
        </p>

        <h2 style={{ marginTop: "2rem" }}>What This Is Not</h2>
        <ul>
          <li>Not surveillance</li>
          <li>Not discipline or punishment</li>
          <li>Not a replacement for counselors, parents, or community care</li>
          <li>Not medical or mental health advice</li>
        </ul>
      </section>
    </main>
  );
}
