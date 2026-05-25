import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Rocket,
  Utensils,
  Wallet,
  Camera,
  ExternalLink,
  BookOpen,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Alat AI Productivity Terbaik 2026 untuk Kerja & Produktivitas",

  description:
    "Daftar alat AI productivity terbaik untuk meningkatkan efisiensi kerja, manajemen keuangan, meal planning, kreativitas, dan produktivitas sehari-hari.",

  keywords: [
    "AI productivity",
    "alat AI terbaik",
    "AI untuk produktivitas",
    "AI kerja",
    "AI manajemen keuangan",
    "AI meal planning",
    "AI kreatif",
    "Artificial Intelligence",
    "produktif dengan AI",
  ],

  alternates: {
    canonical: "/ai/alat-ai-produktivitas",
  },

  openGraph: {
    title: "Alat AI Productivity Terbaik 2026 untuk Kerja & Produktivitas",

    description:
      "Panduan lengkap alat AI terbaik untuk produktivitas, keuangan, kesehatan, dan kreativitas.",

    url: "/ai/alat-ai-produktivitas",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Productivity Tools",
      },
    ],
  },
};

const blogPosts = [
  {
    id: 1,
    slug: "ai-nutrisi",
    title: "AI untuk Mengatur Jadwal Makan & Nutrisi",
    category: "Health Tech",
    icon: <Utensils className="w-6 h-6 text-emerald-600" />,
    description:
      "Bagaimana algoritma LLM dan Computer Vision membantu Anda mencapai target diet tanpa rasa pusing.",
    longDescription:
      "Di tahun 2026, diet bukan lagi soal menebak kalori. Integrasi AI dengan alat seperti meal planner berbasis machine learning memungkinkan pembuatan pola makan personal berdasarkan kebutuhan tubuh, target kesehatan, hingga preferensi makanan harian.",
    points: [
      "Penyusunan menu berbasis profil biometrik",
      "Analisis bahan makanan via Computer Vision",
      "Integrasi meal planning otomatis",
    ],
    sources: [
      {
        name: "Nature Medicine: AI in Nutrition",
        url: "https://www.nature.com/nm/",
      },
      { name: "Zoe Health Study", url: "https://zoe.com/science" },
    ],
  },
  {
    id: 2,
    slug: "ai-keuangan",
    title: "Otomatisasi Keuangan & Mikro-Investasi",
    category: "Fintech",
    icon: <Wallet className="w-6 h-6 text-blue-600" />,
    description:
      "Gunakan AI untuk mengelola cashflow, budgeting, dan investasi mikro dengan lebih efisien.",
    longDescription:
      "AI kini membantu pengguna mengatur keuangan pribadi dengan sistem budgeting otomatis, analisis pengeluaran, hingga rekomendasi investasi berbasis profil risiko.",
    points: [
      "Deteksi biaya langganan tersembunyi",
      "Strategi alokasi gaji otomatis",
      "Prediksi cashflow bulanan",
    ],
    sources: [
      {
        name: "Forbes Advisor: AI Finance",
        url: "https://www.forbes.com/advisor/investing/ai-in-finance/",
      },
      { name: "NerdWallet Tech Trends", url: "https://www.nerdwallet.com" },
    ],
  },
  {
    id: 3,
    slug: "ai-kreatif",
    title: "AI Kreatif: Fotografi & Musik Tanpa Batas",
    category: "Creative",
    icon: <Camera className="w-6 h-6 text-purple-600" />,
    description:
      "Memanfaatkan Generative AI sebagai partner kreatif untuk fotografi, editing, dan musik.",
    longDescription:
      "AI kreatif bukan pengganti kreativitas manusia, tetapi alat bantu yang mempercepat workflow editing foto, pembuatan musik, hingga eksplorasi ide visual.",
    points: [
      "Generative Fill & Expand",
      "AI music separation",
      "Kurasi foto otomatis berbasis estetika",
    ],
    sources: [
      {
        name: "Adobe Blog: Future of Creativity",
        url: "https://blog.adobe.com/",
      },
      {
        name: "Wired: AI Creative Revolution",
        url: "https://www.wired.com/tag/artificial-intelligence/",
      },
    ],
  },
];

export default function BlogPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-blue-100 selection:text-blue-700">
      <Navbar />

      {/* Decorative Background Elements */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100/50 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-100/50 blur-[120px] rounded-full" />
      </div>

      <main className="max-w-6xl mx-auto px-6 pt-28 pb-32">
        {/* Header Section */}
        <header className="text-center mb-28">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50 text-blue-700 text-xs font-semibold mb-8 animate-fade-in">
            <ShieldCheck className="w-4 h-4" />
            Panduan Terverifikasi {currentYear}
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
            Optimasi Hidup dengan <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Kekuatan AI Sehari-hari
            </span>
          </h1>
          <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            Bukan sekadar tren, AI adalah asisten pribadi Anda. Pelajari cara
            mengintegrasikan teknologi cerdas ke dalam rutinitas untuk hasil
            maksimal.
          </p>
        </header>

        {/* Article Cards Loop */}
        <div className="space-y-40">
          {blogPosts.map((post, index) => (
            <section
              key={post.id}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 lg:gap-20 items-center`}
            >
              {/* Card UI */}
              <div className="flex-1 w-full group">
                <div className="relative p-1 rounded-[2.5rem] bg-gradient-to-br from-blue-200 to-transparent group-hover:from-blue-400 transition-all duration-500 shadow-xl shadow-blue-900/5">
                  <div className="bg-white p-8 md:p-10 rounded-[2.4rem]">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 group-hover:scale-110 transition-transform">
                        {post.icon}
                      </div>
                      <span className="font-bold tracking-[0.2em] text-[10px] uppercase text-slate-400">
                        {post.category}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold mb-6 text-slate-800">
                      {post.title}
                    </h2>
                    <p className="text-slate-500 leading-relaxed mb-8 font-medium">
                      {post.description}
                    </p>

                    <div className="grid grid-cols-1 gap-3">
                      {post.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-center gap-3 text-sm text-slate-600 font-semibold bg-slate-50 p-3 rounded-xl border border-slate-100"
                        >
                          <CheckCircle2 className="w-5 h-5 text-blue-500" />
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Description */}
              <div className="flex-1 space-y-8">
                <div className="space-y-6">
                  <h3 className="text-blue-600 font-bold uppercase text-xs tracking-[0.25em] flex items-center gap-2">
                    <BookOpen className="w-5 h-5" /> Analisis Strategis
                  </h3>
                  <div className="relative">
                    <p className="text-slate-700 text-xl font-medium leading-relaxed border-l-4 border-blue-200 pl-8 py-2">
                      {post.longDescription}
                    </p>
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-200">
                  <h4 className="text-[11px] font-black text-slate-400 uppercase mb-5 tracking-widest flex items-center gap-2">
                    Referensi & Sumber Valid:
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {post.sources.map((source) => (
                      <a
                        key={source.name}
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 hover:border-blue-300 hover:text-blue-600 hover:shadow-md transition-all text-xs font-bold text-slate-600 shadow-sm"
                      >
                        {source.name}{" "}
                        <ExternalLink className="w-3.5 h-3.5 opacity-50" />
                      </a>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/ai/alat-ai-produktivitas/${post.slug}`}
                  className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm group hover:text-indigo-600 transition-colors"
                >
                  Baca Selengkapnya
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </section>
          ))}
        </div>

        <section className="mt-40 bg-white rounded-[2rem] border border-slate-200 p-10 md:p-16 shadow-sm">
          <div className="max-w-4xl">
            <span className="inline-flex px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-6">
              AI Productivity 2026
            </span>

            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-8">
              Mengapa Alat AI Produktivitas Semakin Penting?
            </h2>

            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>
                Artificial Intelligence kini menjadi bagian penting dalam
                kehidupan sehari-hari. Mulai dari mengatur pola makan, membantu
                pengelolaan keuangan, hingga meningkatkan kreativitas digital,
                teknologi AI mampu membantu manusia bekerja lebih cepat dan
                lebih efisien.
              </p>

              <p>
                Dengan memilih alat AI yang tepat, Anda dapat menghemat waktu,
                mengurangi pekerjaan repetitif, serta meningkatkan kualitas
                keputusan berdasarkan analisis data yang lebih akurat.
              </p>

              <p>
                Pada halaman ini, Anda dapat mempelajari lebih dalam mengenai{" "}
                <Link
                  href="/ai/alat-ai-produktivitas/ai-nutrisi"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  AI untuk nutrisi
                </Link>
                ,{" "}
                <Link
                  href="/ai/alat-ai-produktivitas/ai-keuangan"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  AI keuangan pribadi
                </Link>
                , dan{" "}
                <Link
                  href="/ai/alat-ai-produktivitas/ai-kreatif"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  AI kreatif untuk fotografi & musik
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer pageId="alat-ai-produktivitas" />
    </div>
  );
}
