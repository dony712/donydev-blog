import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | DonyDev Blog",
  description: "Disclaimer page of DonyDev Blog.",
  alternates: {
    canonical: "https://www.donydev-blog.com/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <main className="bg-slate-50 min-h-screen py-20 px-6">
      <section className="max-w-4xl mx-auto bg-white rounded-[2rem] border border-slate-200 shadow-sm p-8 md:p-14">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-3">
          Disclaimer
        </h1>
        <p className="text-slate-500 mb-10">Last Updated: May 24, 2026</p>

        <div className="space-y-8 text-slate-600 leading-8">
          <p>
            All information on DonyDev Blog is published in good faith for
            educational and informational purposes only.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Educational Content
            </h2>
            <p>
              Technology content may change over time. Readers should validate
              implementations before production use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Advertising & Affiliate
            </h2>
            <p>
              DonyDev Blog may display Google AdSense advertisements and future
              affiliate links.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact</h2>
            <p>Email: donnyfahrudi@gmail.com</p>
          </section>
        </div>
      </section>
    </main>
  );
}
