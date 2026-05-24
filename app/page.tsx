// src/app/page.tsx
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
    { name: "AI Productivity", slug: "alat-ai-produktivitas", icon: "🚀" },
  ];

  // Artikel Terbaru (Hanya berkaitan dengan AI Productivity) [cite: 82, 277]
  const featuredPosts = [
    {
      title: "Cara AI Mengatur Jadwal Makan Otomatis",
      slug: "ai-jadwal-makan",
      category: "AI Productivity",
    },
    {
      title: "5 Alat AI Gratis untuk Manajemen Proyek",
      slug: "ai-project-management",
      category: "AI Productivity",
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
                <button className="bg-indigo-600 text-white px-10 py-5 rounded-2xl font-bold hover:bg-indigo-700 transition-all hover:scale-105 shadow-xl shadow-indigo-200 flex items-center gap-2 text-lg">
                  Mulai Sekarang <ArrowRight className="w-5 h-5" />
                </button>
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
            <button className="text-blue-600 font-semibold hover:underline">
              Lihat Semua
            </button>
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
              <h2 className="text-3xl font-bold tracking-tight">
                Artikel Terpopuler
              </h2>
              <button className="text-indigo-600 font-bold hover:text-indigo-800 flex items-center gap-1 transition">
                Lihat Semua <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <div
                  key={post.slug}
                  className="group p-8 bg-white border border-slate-200 rounded-[2.5rem] hover:shadow-2xl hover:shadow-indigo-100 hover:border-indigo-200 transition-all duration-500"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-full uppercase tracking-widest">
                      {post.category}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-400 text-sm">5 Menit Baca</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 leading-tight group-hover:text-indigo-600 transition-colors">
                    {post.title}
                  </h3>
                  <button className="text-slate-900 font-bold flex items-center gap-2 group/btn">
                    Baca Artikel{" "}
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer pageId="home" />
    </div>
  );
}
