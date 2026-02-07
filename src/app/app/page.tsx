export default function AppRedirectPage() {
  return (
    <main style={{ padding: "3rem", maxWidth: "700px", margin: "0 auto" }}>
      <h1>Open the Saving Grace App</h1>

      <p>
        This platform is used by schools and families to support students
        and coordinate care.
      </p>

      <div style={{ marginTop: "2rem" }}>
        <a href="https://expo.dev/@your-project-link">
          <button>Open Web App</button>
        </a>
      </div>

      <p style={{ marginTop: "2rem", fontSize: "0.9rem" }}>
        Mobile app store links will be available when published.
      </p>
    </main>
  );
}
