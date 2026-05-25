import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Utensils,
  Brain,
  Salad,
  Activity,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  ArrowLeft,
  Clock3,
  HeartPulse,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI untuk Nutrisi & Meal Planning Terbaik 2026 | Panduan Lengkap",

  description:
    "Pelajari bagaimana AI membantu mengatur nutrisi, meal planning, diet sehat, penghitungan kalori, hingga rekomendasi makanan personal secara otomatis di tahun 2026.",

  keywords: [
    "AI nutrisi",
    "AI meal planning",
    "AI diet sehat",
    "AI kesehatan",
    "Artificial Intelligence nutrisi",
    "AI penghitung kalori",
    "AI meal planner terbaik",
    "alat AI produktivitas",
    "AI kesehatan 2026",
  ],

  alternates: {
    canonical: "/ai/alat-ai-produktivitas/ai-nutrisi",
  },

  openGraph: {
    title: "AI untuk Nutrisi & Meal Planning Terbaik 2026",

    description:
      "Panduan lengkap penggunaan AI untuk mengatur pola makan, nutrisi, diet, dan meal planning secara otomatis.",

    url: "/ai/alat-ai-produktivitas/ai-nutrisi",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Nutrisi dan Meal Planning",
      },
    ],
  },
};

const features = [
  {
    title: "Meal Planning Otomatis",
    icon: <Utensils className="w-6 h-6 text-emerald-600" />,
    description:
      "AI membantu membuat jadwal makan otomatis berdasarkan target kesehatan, berat badan, dan aktivitas harian.",
  },
  {
    title: "Analisis Kalori Pintar",
    icon: <Activity className="w-6 h-6 text-blue-600" />,
    description:
      "Computer Vision dapat mengenali makanan melalui kamera lalu memperkirakan kandungan nutrisi dan kalori.",
  },
  {
    title: "Rekomendasi Nutrisi Personal",
    icon: <Brain className="w-6 h-6 text-purple-600" />,
    description:
      "AI menganalisis kebiasaan makan dan memberikan saran personal yang lebih sesuai dengan kebutuhan tubuh.",
  },
];

const faqs = [
  {
    question: "Apa itu AI nutrisi?",
    answer:
      "AI nutrisi adalah teknologi Artificial Intelligence yang membantu pengguna mengatur pola makan, menghitung kebutuhan kalori, serta memberikan rekomendasi makanan berdasarkan kondisi tubuh dan target kesehatan.",
  },
  {
    question: "Apakah AI bisa membantu diet?",
    answer:
      "Ya. AI dapat membantu membuat meal plan otomatis, menghitung asupan kalori, memonitor progres diet, dan memberikan rekomendasi makanan sehat.",
  },
  {
    question: "Apakah AI nutrisi akurat?",
    answer:
      "Akurasi tergantung kualitas data yang digunakan. AI modern cukup akurat untuk kebutuhan harian, namun tetap disarankan berkonsultasi dengan ahli gizi untuk kondisi medis tertentu.",
  },
];

export default function AINutrisiPage() {
  const currentYear = new Date().getFullYear();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-emerald-100 selection:text-emerald-700">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      {/* Background */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-100/50 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-green-100/50 blur-[120px] rounded-full" />
      </div>

      <main className="max-w-6xl mx-auto px-6 pt-28 pb-32">
        {/* Breadcrumb */}
        <div className="mb-10">
          <Link
            href="/ai/alat-ai-produktivitas"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-emerald-600 transition-colors text-sm font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke AI Productivity
          </Link>
        </div>

        {/* Hero */}
        <section className="mb-28 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold mb-8">
            <ShieldCheck className="w-4 h-4" />
            Panduan Nutrisi Berbasis AI {currentYear}
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight mb-8">
            AI untuk <br />
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Nutrisi & Meal Planning
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
            Teknologi AI membantu Anda mengatur pola makan, menghitung kalori,
            menyusun meal plan, hingga memilih makanan sehat berdasarkan
            kebutuhan tubuh secara lebih personal dan efisien.
          </p>
        </section>

        {/* Intro */}
        <section className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700 mb-6">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              Health Technology 2026
            </span>

            <h2 className="text-4xl font-extrabold mb-8 leading-tight">
              Mengapa AI Nutrisi Semakin Populer?
            </h2>

            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Banyak orang mengalami kesulitan menjaga pola makan sehat karena
                keterbatasan waktu, kebingungan memilih menu, hingga sulit
                menghitung kebutuhan nutrisi. Di sinilah Artificial Intelligence
                mulai memainkan peran penting.
              </p>

              <p>
                Dengan bantuan AI, pengguna dapat memperoleh rekomendasi makanan
                berdasarkan usia, berat badan, target kesehatan, aktivitas
                harian, hingga preferensi makanan tertentu seperti vegetarian
                atau diet rendah gula.
              </p>

              <p>
                Bahkan beberapa aplikasi modern kini mampu mengenali makanan
                melalui kamera smartphone untuk memperkirakan kandungan nutrisi
                secara otomatis.
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-[2rem] p-10 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <HeartPulse className="w-8 h-8 text-emerald-600" />
              <h3 className="font-bold text-2xl">Manfaat AI untuk Nutrisi</h3>
            </div>

            <div className="space-y-4">
              {[
                "Membantu membuat meal planning otomatis",
                "Mengurangi konsumsi makanan berlebihan",
                "Mempermudah tracking nutrisi harian",
                "Membantu diet sehat lebih konsisten",
                "Meningkatkan efisiensi belanja makanan",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-5">
              Cara AI Membantu Pola Makan Anda
            </h2>

            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Berikut beberapa fitur utama AI nutrisi modern yang membantu
              pengguna menjalani hidup lebih sehat.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6">
                  {item.icon}
                </div>

                <h3 className="font-bold text-xl mb-4">{item.title}</h3>

                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Deep Content */}
        <section className="bg-white rounded-[2.5rem] border border-slate-200 p-10 md:p-16 shadow-sm mb-32">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-extrabold mb-8">
              Apakah AI Akan Menggantikan Ahli Gizi?
            </h2>

            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Jawabannya: tidak sepenuhnya. AI lebih tepat digunakan sebagai
                alat bantu produktivitas kesehatan.
              </p>

              <p>
                Teknologi ini dapat mempercepat proses analisis makanan,
                memberikan saran pola makan, dan membantu tracking nutrisi
                secara konsisten. Namun, untuk kondisi kesehatan tertentu tetap
                diperlukan konsultasi profesional.
              </p>

              <p>
                Fokus utama AI adalah membantu pengguna mengambil keputusan
                lebih baik terkait kesehatan sehari-hari.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-32">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold">Pertanyaan Umum</h2>
          </div>

          <div className="space-y-5">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-white rounded-[2rem] border border-slate-200 p-8"
              >
                <h3 className="font-bold text-xl mb-4">{faq.question}</h3>

                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Articles */}
        <section className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-[2.5rem] p-10 md:p-14 text-white">
          <div className="flex flex-col lg:flex-row justify-between gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-emerald-100 text-sm font-semibold mb-4">
                <Clock3 className="w-4 h-4" />
                Pelajari kategori lainnya
              </div>

              <h2 className="text-4xl font-extrabold mb-4">
                Eksplorasi Alat AI Produktivitas Lainnya
              </h2>

              <p className="text-emerald-50 max-w-2xl">
                Pelajari bagaimana AI membantu pengelolaan keuangan dan
                meningkatkan kreativitas digital.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href="/ai/alat-ai-produktivitas/ai-keuangan"
                className="bg-white text-emerald-700 px-6 py-4 rounded-2xl font-bold inline-flex items-center gap-2 hover:scale-[1.02] transition-transform"
              >
                AI Keuangan
                <ChevronRight className="w-5 h-5" />
              </Link>

              <Link
                href="/ai/alat-ai-produktivitas/ai-kreatif"
                className="bg-white text-emerald-700 px-6 py-4 rounded-2xl font-bold inline-flex items-center gap-2 hover:scale-[1.02] transition-transform"
              >
                AI Kreatif
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer pageId="ai-nutrisi" />
    </div>
  );
}
