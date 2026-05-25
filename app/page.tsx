// src/app/page.tsx
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CategoryCard from "@/components/CategoryCard";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import { Monitor, ArrowRight, Sparkles } from "lucide-react"; // Pastikan lucide-react terinstall

export const metadata: Metadata = {
  title: "DonyDev Blog - Teknologi, AI Productivity & Software Development",

  description:
    "Blog pribadi Dony Fahrudy tentang teknologi, AI productivity, software development, React Native, Next.js, ilmu komputer, dan pengalaman dunia digital.",

  keywords: [
    "dony dev",
    "donydev blog",
    "blog teknologi",
    "AI productivity",
    "software development",
    "React Native Indonesia",
    "Next.js Indonesia",
    "teknologi AI",
    "blog programmer Indonesia",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "DonyDev Blog - Teknologi, AI Productivity & Software Development",
    description:
      "Belajar AI, programming, software development, dan teknologi terbaru bersama DonyDev Blog.",
    url: "/",
    siteName: "DonyDev Blog",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DonyDev Blog Homepage",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "DonyDev Blog - Teknologi, AI Productivity & Software Development",
    description:
      "Blog teknologi Indonesia tentang AI, programming, Next.js, React Native dan software development.",
    images: ["/og-image.png"],
  },
};

export default function HomePage() {
  const currentYear = new Date().getFullYear();

  // Kategori sesuai permintaan (Single Category)
  const categories = [
    { name: "AI Productivity", slug: "alat-ai-produktivitas", icon: "🤖" },
  ];

  // Artikel Terbaru (Hanya berkaitan dengan AI Productivity) [cite: 82, 277]
  const featuredPosts = [
    {
      title: "AI untuk Mengatur Jadwal Makan & Nutrisi Lebih Cerdas",
      slug: "ai-nutrisi",
      category: "Health Tech",
      readTime: "6 Menit Baca",
      description:
        "Pelajari bagaimana Artificial Intelligence membantu meal planning, tracking kalori, hingga rekomendasi nutrisi personal.",
    },
    {
      title: "AI untuk Keuangan Pribadi & Budgeting Otomatis",
      slug: "ai-keuangan",
      category: "Fintech",
      readTime: "7 Menit Baca",
      description:
        "Gunakan AI untuk budgeting, prediksi cashflow, investasi mikro, dan pengelolaan finansial lebih pintar.",
    },
    {
      title: "AI Kreatif untuk Fotografi, Musik & Konten Digital",
      slug: "ai-kreatif",
      category: "Creative",
      readTime: "8 Menit Baca",
      description:
        "Eksplorasi bagaimana Generative AI membantu editing foto, musik, dan workflow kreatif modern.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-indigo-100 selection:text-indigo-700">
      <Navbar />

      <main className="flex-grow">
        {/* --- MODERN BANNER SECTION --- */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-slate-50">
          {/* Elemen Dekoratif (Glassmorphism effect) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent opacity-70"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200 mb-8 animate-fade-in">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span className="text-sm font-semibold tracking-wide text-slate-600 uppercase">
                  Eksplorasi AI {currentYear}
                </span>
              </div>

              <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
                Kuasai{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
                  AI Productivity
                </span>{" "}
                <br />
                Tanpa Ribet.
              </h1>

              <p className="max-w-2xl text-xl text-slate-500 mb-12 leading-relaxed">
                Temukan kurasi alat kecerdasan buatan terbaik yang dirancang
                khusus untuk memangkas waktu kerja Anda hingga 50%.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/ai/alat-ai-produktivitas"
                  className="bg-indigo-600 text-white px-10 py-5 rounded-2xl font-bold hover:bg-indigo-700 transition-all hover:scale-105 shadow-xl shadow-indigo-200 flex items-center gap-2 text-lg"
                >
                  Mulai Sekarang
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* --- CATEGORIES SECTION --- */}
        <section id="categories" className="py-20 px-4 max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Jelajahi Kategori</h2>
              <p className="text-slate-500">
                Pilih topik yang sesuai dengan kebutuhan Anda
              </p>
            </div>
            {/* <button className="text-blue-600 font-semibold hover:underline">
              Lihat Semua
            </button> */}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat) => (
              <CategoryCard key={cat.slug} {...cat} />
            ))}
          </div>
        </section>

        {/* --- LATEST ARTICLES SECTION --- */}
        <section className="py-24 px-4 bg-slate-50/50">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-2">
                  Artikel Terpopuler
                </h2>
                <p className="text-slate-500">
                  Panduan AI productivity paling banyak dibaca
                </p>
              </div>

              <Link
                href="/ai/alat-ai-produktivitas"
                className="text-indigo-600 font-bold hover:text-indigo-800 flex items-center gap-1 transition"
              >
                Lihat Semua
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <article
                  key={post.slug}
                  className="group relative overflow-hidden p-8 bg-white border border-slate-200 rounded-[2.5rem] hover:shadow-2xl hover:shadow-indigo-100 hover:border-indigo-200 transition-all duration-500"
                >
                  {/* Decorative Gradient */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-indigo-100/60 to-transparent blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-5 flex-wrap">
                      <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-full uppercase tracking-widest">
                        {post.category}
                      </span>

                      <span className="text-slate-300">•</span>

                      <span className="text-slate-400 text-sm">
                        {post.readTime}
                      </span>
                    </div>

                    <div className="mb-5">
                      <span className="text-5xl font-black text-slate-100">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 leading-tight group-hover:text-indigo-600 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-slate-500 leading-relaxed mb-8">
                      {post.description}
                    </p>

                    <Link
                      href={`/ai/alat-ai-produktivitas/${post.slug}`}
                      className="inline-flex items-center gap-2 text-slate-900 font-bold group/btn hover:text-indigo-600 transition-colors"
                    >
                      Baca Artikel
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 text-center">
              <Link
                href="/ai/alat-ai-produktivitas"
                className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all hover:scale-[1.02] shadow-lg shadow-indigo-200"
              >
                Jelajahi Semua Artikel AI
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer pageId="home" />
    </div>
  );
}
