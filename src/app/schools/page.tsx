'use client';

import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For School Districts | Saving Grace',
  description: 'A safety and support platform designed for superintendents, principals, and school safety teams. Streamline reporting, case management, and student wellness.',
};

export default function SchoolsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section className="px-6 py-20 sm:py-28 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6">
          A Safety & Support Platform Built for Schools
        </h1>
        <p className="text-xl text-slate-600 mb-8">
          Reduce response time. Strengthen communication. Empower your district to support every student.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/get-support" className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
            See It In Action
          </Link>
          <Link href="/" className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition">
            Learn More
          </Link>
        </div>
      </section>

      {/* The Problem */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">The Challenge Every District Faces</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-red-50 rounded-lg">
            <h3 className="text-lg font-semibold text-red-900 mb-3">Fragmented Reporting</h3>
            <p className="text-red-700">
              Students, parents, and teachers report concerns through different channels—emails, phone calls, forms. Nothing connects.
            </p>
          </div>
          <div className="p-6 bg-orange-50 rounded-lg">
            <h3 className="text-lg font-semibold text-orange-900 mb-3">Slow Response</h3>
            <p className="text-orange-700">
              Delays in identifying, escalating, and supporting students who need help most.
            </p>
          </div>
          <div className="p-6 bg-yellow-50 rounded-lg">
            <h3 className="text-lg font-semibold text-yellow-900 mb-3">Workload Burden</h3>
            <p className="text-yellow-700">
              Counselors and safety teams spend hours on coordination instead of direct student support.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-16 bg-slate-900 text-white max-w-4xl mx-auto rounded-lg my-12">
        <h2 className="text-3xl font-bold mb-12 text-center">How Saving Grace Works</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full mr-3">1</span>
              Students & Families Report
            </h3>
            <p className="text-slate-300 mb-6">
              A simple, safe way for students to ask for help. Parents and teachers can report concerns through a guided interface.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full mr-3">2</span>
              Automatic Routing & Escalation
            </h3>
            <p className="text-slate-300 mb-6">
              Reports are immediately categorized and routed to the right team—counselors, safety officers, or administrators.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full mr-3">3</span>
              Coordinated Case Management
            </h3>
            <p className="text-slate-300 mb-6">
              Your team has a single source of truth. Track outcomes, communicate securely, and document everything.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full mr-3">4</span>
              Guided Resources & Follow-Up
            </h3>
            <p className="text-slate-300 mb-6">
              The platform suggests resources, tracks intervention effectiveness, and closes the loop on every case.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Built For Your District</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 border border-slate-200 rounded-lg">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">✓ Role-Based Access</h3>
            <p className="text-slate-600">
              Students, parents, teachers, counselors, SROs, and administrators see only what they need to.
            </p>
          </div>
          <div className="p-6 border border-slate-200 rounded-lg">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">✓ FERPA & HIPAA Compliant</h3>
            <p className="text-slate-600">
              Built with privacy, security, and legal compliance at the core.
            </p>
          </div>
          <div className="p-6 border border-slate-200 rounded-lg">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">✓ No Extra Burden</h3>
            <p className="text-slate-600">
              Replaces fragmented workflows. Your team works faster, not harder.
            </p>
          </div>
          <div className="p-6 border border-slate-200 rounded-lg">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">✓ Data & Outcomes</h3>
            <p className="text-slate-600">
              Track trends, demonstrate impact, and show funders & boards what's working.
            </p>
          </div>
          <div className="p-6 border border-slate-200 rounded-lg">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">✓ Mobile-First</h3>
            <p className="text-slate-600">
              Students can report from anywhere—in class, at home, or on the bus.
            </p>
          </div>
          <div className="p-6 border border-slate-200 rounded-lg">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">✓ Guided Pathways</h3>
            <p className="text-slate-600">
              Questions adapt based on student responses. No jargon. Simple, supportive language.
            </p>
          </div>
        </div>
      </section>

      {/* Who Benefits */}
      <section className="px-6 py-16 bg-blue-50 rounded-lg max-w-4xl mx-auto my-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">For Your Team</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Superintendents & Principals</h3>
            <ul className="text-blue-800 space-y-2">
              <li>• Dashboard of all active cases and outcomes</li>
              <li>• Compliance documentation automated</li>
              <li>• Data for grant applications & board reports</li>
              <li>• Reduces liability through systematic response</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-3">School Counselors</h3>
            <ul className="text-blue-800 space-y-2">
              <li>• One place to manage all student cases</li>
              <li>• Secure messaging with families</li>
              <li>• Automated resource recommendations</li>
              <li>• More time for direct student support</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Teachers & Staff</h3>
            <ul className="text-blue-800 space-y-2">
              <li>• Easy way to report student concerns</li>
              <li>• Know students got help (read-only outcomes)</li>
              <li>• Peace of mind that system is tracking follow-up</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Safety Teams & SROs</h3>
            <ul className="text-blue-800 space-y-2">
              <li>• High-severity threat alerts</li>
              <li>• Coordinated response protocols</li>
              <li>• Documentation for incident review</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Why Districts Choose Saving Grace</h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">✓</div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Designed by educators & counselors</h3>
              <p className="text-slate-600">Not imposed by tech—shaped by people who know school safety.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">✓</div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Proof of impact</h3>
              <p className="text-slate-600">Early adopters report 40% faster response times and stronger family trust.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">✓</div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Grant-eligible</h3>
              <p className="text-slate-600">Qualifies for school safety, mental health, and community resilience funding.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">✓</div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Real support, not just software</h3>
              <p className="text-slate-600">Implementation, training, and ongoing guidance included.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to transform how your district supports students?</h2>
        <p className="text-lg text-slate-600 mb-8">
          See Saving Grace in action. Talk to your leadership team. Let's build a safer, more connected school community together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/get-support" className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
            Schedule a Demo
          </Link>
          <a href="mailto:hello@savinggrace.school" className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition">
            Contact Leadership
          </a>
        </div>
      </section>
    </main>
  );
}
