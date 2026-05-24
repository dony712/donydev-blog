import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | DonyDev Blog",
  description:
    "Privacy Policy of DonyDev Blog regarding cookies, Google AdSense, Firebase, and website usage.",
  alternates: {
    canonical: "https://www.donydev-blog.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-slate-50 min-h-screen py-20 px-6">
      <section className="max-w-4xl mx-auto bg-white rounded-[2rem] border border-slate-200 shadow-sm p-8 md:p-14">
        <span className="inline-flex px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-sm mb-6">
          Legal Information
        </span>

        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
          Privacy Policy
        </h1>

        <p className="text-slate-500 mb-10">Last Updated: May 24, 2026</p>

        <div className="space-y-8 text-slate-600 leading-8">
          <p>
            Welcome to <strong>DonyDev Blog</strong>. Your privacy matters to
            us. This Privacy Policy explains how information may be collected,
            used, and protected when you visit our website.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              1. Information We Collect
            </h2>
            <p>
              We do not require account registration. However, limited
              non-personal information may be collected automatically such as
              browser type, device information, visited pages, duration of
              visit, and technical performance data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              2. Cookies
            </h2>
            <p>
              DonyDev Blog may use cookies and similar technologies to improve
              website functionality, user experience, analytics, and advertising
              performance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              3. Google AdSense
            </h2>
            <p>
              We use Google AdSense to display advertisements. Third-party
              vendors including Google may use cookies to personalize
              advertisements and measure ad performance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              4. Firebase Services
            </h2>
            <p>
              Firebase may be used for post view counters, database operations,
              and website-related functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              5. Hosting
            </h2>
            <p>
              DonyDev Blog may be hosted using Vercel and/or Hostinger for
              website delivery and infrastructure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              6. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for external privacy practices or content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              7. Affiliate Disclosure
            </h2>
            <p>
              In the future, some content may contain affiliate links that
              generate commissions at no additional cost to users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              8. Contact
            </h2>
            <p>Email: donnyfahrudi@gmail.com</p>
            <p>Website: https://www.donydev-blog.com/</p>
          </section>
        </div>
      </section>
    </main>
  );
}
