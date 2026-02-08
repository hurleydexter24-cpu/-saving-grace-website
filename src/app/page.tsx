'use client';

import Link from 'next/link';
import { theme, styles } from '@/styles/theme';

export default function HomePage() {
  return (
    <main style={{ minHeight: '100vh', background: '#FFFFFF' }}>
      {/* Hero */}
      <section style={{ ...styles.heroSection, marginTop: theme.spacing.xl }} className="max-w-4xl mx-auto px-6">
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ ...styles.heading1, marginBottom: theme.spacing.lg }}>
            Supporting Students. Strengthening Schools. Working Together as a Community.
          </h1>
          <p style={{ ...styles.body, fontSize: '1.25rem', marginBottom: theme.spacing.xl, maxWidth: '700px', margin: '0 auto 2rem' }}>
            Saving Grace is a safe, guided platform that helps students ask for help, educators respond early, and communities stay connected.
          </p>
          <div style={{ display: 'flex', gap: theme.spacing.md, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/get-support" style={{ ...styles.primaryButton, textDecoration: 'none', display: 'inline-block' }}>
              Get Support
            </Link>
            <Link href="/schools" style={{ ...styles.secondaryButton, textDecoration: 'none', display: 'inline-block' }}>
              For Schools
            </Link>
            <Link href="/churches" style={{ ...styles.secondaryButton, textDecoration: 'none', display: 'inline-block' }}>
              For Communities
            </Link>
          </div>
        </div>
      </section>

      {/* What This Is */}
      <section style={{ maxWidth: '900px', margin: `0 auto ${theme.spacing.xl}`, padding: `0 ${theme.spacing.lg}` }}>
        <div style={{ ...styles.sectionCard, marginBottom: theme.spacing.lg }}>
          <h2 style={{ ...styles.heading2, marginBottom: theme.spacing.md }}>What This Is</h2>
          <p style={styles.body}>
            A coordinated way for students to ask for help, educators to collaborate, and families to stay informed — without adding burden or confusion.
          </p>
        </div>

        <div style={{ ...styles.sectionCard }}>
          <h2 style={{ ...styles.heading2, marginBottom: theme.spacing.md }}>What This Is Not</h2>
          <ul style={{ ...styles.body, marginLeft: theme.spacing.lg, lineHeight: '2' }}>
            <li>✓ Not surveillance</li>
            <li>✓ Not discipline or punishment</li>
            <li>✓ Not a replacement for counselors, parents, or community care</li>
            <li>✓ Not medical or mental health advice</li>
          </ul>
        </div>
      </section>

      {/* Core Benefits */}
      <section style={{ background: theme.colors.lightBg, padding: `${theme.spacing.xl} ${theme.spacing.lg}`, marginTop: theme.spacing.xl }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ ...styles.heading2, textAlign: 'center', marginBottom: theme.spacing.xl }}>How It Works</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: theme.spacing.lg }}>
            <div style={{ ...styles.sectionCard }}>
              <h3 style={{ ...styles.heading3, marginBottom: theme.spacing.md, color: theme.colors.primary }}>1. Students Report</h3>
              <p style={styles.body}>A simple, safe way for students to ask for help about anything on their mind.</p>
            </div>
            <div style={{ ...styles.sectionCard }}>
              <h3 style={{ ...styles.heading3, marginBottom: theme.spacing.md, color: theme.colors.primary }}>2. Educators Respond</h3>
              <p style={styles.body}>Counselors and teachers get alerts and coordinate an appropriate response quickly.</p>
            </div>
            <div style={{ ...styles.sectionCard }}>
              <h3 style={{ ...styles.heading3, marginBottom: theme.spacing.md, color: theme.colors.primary }}>3. Community Supports</h3>
              <p style={styles.body}>Families and community resources connect to help students thrive together.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: '900px', margin: `${theme.spacing.xl} auto`, padding: `${theme.spacing.xl} ${theme.spacing.lg}`, textAlign: 'center' }}>
        <h2 style={{ ...styles.heading2, marginBottom: theme.spacing.lg }}>Ready to support your community?</h2>
        <div style={{ display: 'flex', gap: theme.spacing.md, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/get-support" style={{ ...styles.primaryButton, textDecoration: 'none', display: 'inline-block' }}>
            Get Support
          </Link>
          <Link href="/schools" style={{ ...styles.secondaryButton, textDecoration: 'none', display: 'inline-block' }}>
            Explore for Schools
          </Link>
        </div>
      </section>
    </main>
  );
}
