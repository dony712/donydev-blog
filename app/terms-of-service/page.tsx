import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | DonyDev Blog",
  description: "Terms of Service for using DonyDev Blog.",
  alternates: {
    canonical: "https://www.donydev-blog.com/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="bg-slate-50 min-h-screen py-20 px-6">
      <section className="max-w-4xl mx-auto bg-white rounded-[2rem] border border-slate-200 shadow-sm p-8 md:p-14">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-3">
          Terms of Service
        </h1>
        <p className="text-slate-500 mb-10">Last Updated: May 24, 2026</p>

        <div className="space-y-8 text-slate-600 leading-8">
          <p>By using DonyDev Blog, you agree to these Terms of Service.</p>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              1. Website Purpose
            </h2>
            <p>
              DonyDev Blog shares educational content related to technology,
              software development, tutorials, and personal learning
              experiences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              2. Acceptable Use
            </h2>
            <p>
              Users may not misuse, scrape, disrupt, or illegally exploit
              website content or infrastructure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              3. Intellectual Property
            </h2>
            <p>
              All original content belongs to DonyDev Blog unless otherwise
              stated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              4. Limitation of Liability
            </h2>
            <p>
              Information is provided for educational purposes. Users remain
              responsible for decisions based on published content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              5. Contact
            </h2>
            <p>Email: donnyfahrudi@gmail.com</p>
          </section>
        </div>
      </section>
    </main>
  );
}
