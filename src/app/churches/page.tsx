'use client';

import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Churches & Community | Saving Grace',
  description: 'How churches and community partners can support student safety and family wellness without overstepping. Education, awareness, partnership.',
};

export default function ChurchesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section className="px-6 py-20 sm:py-28 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6">
          Supporting Students & Families, Together
        </h1>
        <p className="text-xl text-slate-600 mb-8">
          Churches and community organizations play a vital role in student safety and wellness. Saving Grace helps you partner with schools in a clear, appropriate, and impactful way.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/get-support" className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
            Learn More
          </Link>
          <Link href="/" className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition">
            Home
          </Link>
        </div>
      </section>

      {/* The Vision */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Why This Matters</h2>
        <p className="text-lg text-slate-600 mb-8 text-center">
          Students today face unprecedented stress: bullying, isolation, family instability, mental health challenges. Schools work hard, but they cannot do it alone.
        </p>
        <p className="text-lg text-slate-600 mb-8 text-center">
          Churches and community organizations have something schools don't: deep relationships with families, spiritual care, and long-term presence in the community.
        </p>
        <p className="text-lg text-slate-600 text-center font-semibold text-blue-700">
          Saving Grace creates a safe way for these two institutions to work together—without blurring lines or overstepping roles.
        </p>
      </section>

      {/* What We're NOT */}
      <section className="px-6 py-16 bg-amber-50 rounded-lg max-w-4xl mx-auto my-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Clear Boundaries (This Matters)</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-lg border-2 border-amber-300">
            <h3 className="text-lg font-semibold text-red-700 mb-4">❌ We are NOT</h3>
            <ul className="space-y-2 text-slate-700">
              <li>• Replacing school counselors or therapists</li>
              <li>• Providing medical or mental health treatment</li>
              <li>• Bypassing parental consent</li>
              <li>• Operating outside legal/FERPA frameworks</li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-lg border-2 border-green-300">
            <h3 className="text-lg font-semibold text-green-700 mb-4">✓ We ARE</h3>
            <ul className="space-y-2 text-slate-700">
              <li>• A bridge between schools and families</li>
              <li>• A resource referral & awareness system</li>
              <li>• Education and outreach partners</li>
              <li>• Supporting preventive wellness, not crisis intervention</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How Churches Partner */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">How Churches Can Partner</h2>
        
        <div className="space-y-12">
          {/* Strategy 1 */}
          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">1. Awareness & Education</h3>
            <p className="text-slate-600 mb-4">
              Host community workshops on bullying, mental health, family stress, and how students can get help safely.
            </p>
            <ul className="space-y-2 text-slate-600 ml-4">
              <li>• "Recognizing signs of student distress"</li>
              <li>• "How families can support wellness"</li>
              <li>• "The role of community in school safety"</li>
              <li>• Feature Saving Grace as one trusted resource</li>
            </ul>
          </div>

          {/* Strategy 2 */}
          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">2. Resource Connection</h3>
            <p className="text-slate-600 mb-4">
              Your church becomes a trusted community resource within the Saving Grace network.
            </p>
            <ul className="space-y-2 text-slate-600 ml-4">
              <li>• Families see your church as a support option</li>
              <li>• Counselors can refer students/families to your programs</li>
              <li>• You help students connect to real support, safely</li>
              <li>• No crisis counseling—just community care & resources</li>
            </ul>
          </div>

          {/* Strategy 3 */}
          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">3. Family Support Programs</h3>
            <p className="text-slate-600 mb-4">
              Offer programs that complement school efforts (no duplication, no overreach).
            </p>
            <ul className="space-y-2 text-slate-600 ml-4">
              <li>• Youth mentorship and spiritual formation</li>
              <li>• Parent support groups & family nights</li>
              <li>• Safe spaces for students to process stress</li>
              <li>• Basic financial or material assistance for families in crisis</li>
            </ul>
          </div>

          {/* Strategy 4 */}
          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">4. QR Code & Handouts</h3>
            <p className="text-slate-600 mb-4">
              Share Saving Grace materials in your community—church bulletins, youth groups, family events.
            </p>
            <ul className="space-y-2 text-slate-600 ml-4">
              <li>• Print QR codes for "Get Support" page</li>
              <li>• Include in youth ministry materials</li>
              <li>• Feature in parent newsletters and events</li>
              <li>• Help normalize asking for help</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Real-World Example */}
      <section className="px-6 py-16 bg-blue-50 rounded-lg max-w-4xl mx-auto my-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">A Real Example</h2>
        <div className="bg-white p-8 rounded-lg border border-blue-200">
          <p className="text-slate-700 mb-4">
            <strong>Sarah</strong> is a 7th-grade student dealing with family conflict at home. She doesn't want to burden her parents, and she's embarrassed to tell her school counselor directly.
          </p>
          <p className="text-slate-700 mb-4">
            She sees a QR code at youth group (placed by her church) that says "You're Not Alone." She scans it, sees the Saving Grace app, and makes a simple report about what's going on at home.
          </p>
          <p className="text-slate-700 mb-4">
            The school counselor gets an alert, reaches out carefully to Sarah and her parents, and connects them with:
          </p>
          <ul className="space-y-2 text-slate-600 ml-6 mb-4">
            <li>• A school-based support program</li>
            <li>• Her church's family counseling network</li>
            <li>• Community resources for financial/material help</li>
          </ul>
          <p className="text-slate-700 font-semibold text-blue-700">
            Result: Sarah gets help. Her parents feel supported, not judged. The school and church work together. No one overstepped.
          </p>
        </div>
      </section>

      {/* Why This Works */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Why This Model Works</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 border border-slate-200 rounded-lg">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">For Schools</h3>
            <p className="text-slate-600">
              More eyes on student wellness. Clearer pathways to family support. Less burden on counselors. Faith communities as trusted partners, not competitors.
            </p>
          </div>
          <div className="p-6 border border-slate-200 rounded-lg">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">For Families</h3>
            <p className="text-slate-600">
              Access to support from places they already trust. School + church + community working together. No silos. Whole-family care.
            </p>
          </div>
          <div className="p-6 border border-slate-200 rounded-lg">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">For Students</h3>
            <p className="text-slate-600">
              More resources, more trusted adults, clearer pathways to help. Normalized help-seeking. Safety net, not judgment.
            </p>
          </div>
          <div className="p-6 border border-slate-200 rounded-lg">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">For Churches</h3>
            <p className="text-slate-600">
              Concrete way to live out mission. Deep partnership with schools. Trust built through collaboration. Students & families feel supported.
            </p>
          </div>
        </div>
      </section>

      {/* What Churches Provide */}
      <section className="px-6 py-16 bg-slate-100 rounded-lg max-w-4xl mx-auto my-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">What Your Church Can Offer</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-semibold text-slate-900 mb-2">Spiritual Care</h4>
            <p className="text-slate-600 text-sm">
              Mentorship, faith formation, belonging in a faith community.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-semibold text-slate-900 mb-2">Family Support</h4>
            <p className="text-slate-600 text-sm">
              Parenting classes, family events, crisis assistance (meals, financial help).
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-semibold text-slate-900 mb-2">Youth Programs</h4>
            <p className="text-slate-600 text-sm">
              Safe spaces, mentorship, community service, skill-building.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-semibold text-slate-900 mb-2">Awareness & Education</h4>
            <p className="text-slate-600 text-sm">
              Host workshops, share resources, normalize conversation about wellness.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-semibold text-slate-900 mb-2">Referral Network</h4>
            <p className="text-slate-600 text-sm">
              Professional counseling, medical services, social services partnerships.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-semibold text-slate-900 mb-2">Long-term Presence</h4>
            <p className="text-slate-600 text-sm">
              Walk alongside families for years, not just during crisis.
            </p>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Getting Started</h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Reach out to us</h3>
              <p className="text-slate-600">
                Tell us about your church's mission and how you want to support student wellness in your community.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Learn the platform</h3>
              <p className="text-slate-600">
                We'll walk you through Saving Grace, show you where you fit, and discuss partnership agreements.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Connect with your local school</h3>
              <p className="text-slate-600">
                We facilitate introductions and help establish clear, respectful partnerships.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Launch together</h3>
              <p className="text-slate-600">
                Start with awareness efforts, QR codes, and training. Build trust step by step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to support your community?</h2>
        <p className="text-lg text-slate-600 mb-8">
          Let's talk about what partnership looks like for your church.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:hello@savinggrace.school" className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
            Get in Touch
          </a>
          <Link href="/" className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition">
            Back Home
          </Link>
        </div>
      </section>
    </main>
  );
}
