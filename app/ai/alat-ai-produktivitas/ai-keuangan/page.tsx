import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Wallet,
  PiggyBank,
  TrendingUp,
  BadgeDollarSign,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowLeft,
  ChevronRight,
  Clock3,
  BrainCircuit,
  CreditCard,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI untuk Keuangan Pribadi & Budgeting Terbaik 2026 | Panduan Lengkap",

  description:
    "Pelajari bagaimana AI membantu budgeting, mengelola cashflow, investasi mikro, pengeluaran harian, dan perencanaan keuangan pribadi dengan lebih cerdas di tahun 2026.",

  keywords: [
    "AI keuangan",
    "AI budgeting",
    "AI investasi",
    "AI keuangan pribadi",
    "Artificial Intelligence finance",
    "AI cashflow",
    "AI personal finance",
    "alat AI produktivitas",
    "AI finansial 2026",
  ],

  alternates: {
    canonical: "/ai/alat-ai-produktivitas/ai-keuangan",
  },

  openGraph: {
    title: "AI untuk Keuangan Pribadi & Budgeting Terbaik 2026",

    description:
      "Panduan lengkap penggunaan AI untuk budgeting, investasi, cashflow, dan pengelolaan keuangan pribadi.",

    url: "/ai/alat-ai-produktivitas/ai-keuangan",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Keuangan Pribadi",
      },
    ],
  },
};

const features = [
  {
    title: "Budgeting Otomatis",
    icon: <Wallet className="w-6 h-6 text-blue-600" />,
    description:
      "AI membantu membagi anggaran bulanan berdasarkan pola pengeluaran dan target finansial Anda.",
  },
  {
    title: "Prediksi Cashflow",
    icon: <TrendingUp className="w-6 h-6 text-emerald-600" />,
    description:
      "Machine Learning memprediksi arus kas bulanan berdasarkan riwayat transaksi sebelumnya.",
  },
  {
    title: "Deteksi Pengeluaran Boros",
    icon: <CreditCard className="w-6 h-6 text-red-500" />,
    description:
      "AI mengenali pola pengeluaran tidak sehat dan memberi peringatan lebih awal.",
  },
];

const faqs = [
  {
    question: "Apa itu AI keuangan?",
    answer:
      "AI keuangan adalah teknologi Artificial Intelligence yang membantu pengguna mengelola pengeluaran, budgeting, investasi, hingga perencanaan keuangan pribadi secara lebih efisien.",
  },
  {
    question: "Apakah AI bisa membantu budgeting?",
    answer:
      "Ya. AI mampu menganalisis pola transaksi lalu membantu menyusun budget otomatis agar pengeluaran tetap terkendali.",
  },
  {
    question: "Apakah AI keuangan aman digunakan?",
    answer:
      "Keamanan tergantung platform yang digunakan. Pilih aplikasi terpercaya dengan enkripsi data dan autentikasi keamanan yang baik.",
  },
];

export const dynamic = "force-static";

export default function AIKeuanganPage() {
  const currentYear = new Date().getFullYear();

  const faqSchema = {
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
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-blue-100 selection:text-blue-700">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Background */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100/50 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-100/50 blur-[120px] rounded-full" />
      </div>

      <main className="max-w-6xl mx-auto px-6 pt-28 pb-32">
        {/* Back */}
        <div className="mb-10">
          <Link
            href="/ai/alat-ai-produktivitas"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors text-sm font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke AI Productivity
          </Link>
        </div>

        {/* Hero */}
        <section className="text-center mb-28">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold mb-8">
            <ShieldCheck className="w-4 h-4" />
            Smart Finance Guide {currentYear}
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight mb-8">
            AI untuk <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Keuangan Pribadi
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
            Kelola uang lebih pintar menggunakan Artificial Intelligence. Dari
            budgeting otomatis, analisis pengeluaran, hingga prediksi cashflow
            untuk masa depan finansial yang lebih stabil.
          </p>
        </section>

        {/* Intro */}
        <section className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700 mb-6">
              <Sparkles className="w-4 h-4 text-blue-600" />
              Financial Technology 2026
            </span>

            <h2 className="text-4xl font-extrabold mb-8 leading-tight">
              Mengapa AI Penting untuk Keuangan?
            </h2>

            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Banyak orang kesulitan mengatur pengeluaran bulanan karena tidak
                memiliki sistem budgeting yang jelas. Artificial Intelligence
                membantu menyederhanakan proses tersebut dengan otomatisasi dan
                analisis data.
              </p>

              <p>
                AI modern mampu membaca pola transaksi, mengelompokkan
                pengeluaran, bahkan mendeteksi kebiasaan finansial yang dapat
                merugikan dalam jangka panjang.
              </p>

              <p>
                Dengan bantuan predictive analytics, beberapa aplikasi bahkan
                bisa memperkirakan kondisi cashflow hingga beberapa bulan ke
                depan berdasarkan perilaku finansial Anda.
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-[2rem] p-10 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <PiggyBank className="w-8 h-8 text-blue-600" />
              <h3 className="font-bold text-2xl">Manfaat AI Keuangan</h3>
            </div>

            <div className="space-y-4">
              {[
                "Budget otomatis lebih disiplin",
                "Deteksi pengeluaran tidak penting",
                "Membantu menabung lebih konsisten",
                "Prediksi cashflow lebih akurat",
                "Membantu investasi mikro",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
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
              Fitur AI untuk Keuangan Modern
            </h2>

            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Teknologi AI kini digunakan untuk membantu pengguna membuat
              keputusan finansial lebih baik.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>

                <h3 className="font-bold text-xl mb-4">{feature.title}</h3>

                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Deep Article */}
        <section className="bg-white rounded-[2.5rem] border border-slate-200 p-10 md:p-16 shadow-sm mb-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-xs font-bold">
              <BrainCircuit className="w-4 h-4" />
              Financial Intelligence
            </div>

            <h2 className="text-4xl font-extrabold mb-8">
              Apakah AI Bisa Menggantikan Financial Planner?
            </h2>

            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                AI dapat menjadi asisten finansial yang sangat membantu, tetapi
                belum sepenuhnya menggantikan peran financial planner.
              </p>

              <p>
                Teknologi ini unggul dalam membaca data transaksi, membuat
                simulasi budgeting, serta memberikan insight berbasis pola
                pengeluaran.
              </p>

              <p>
                Namun keputusan finansial besar seperti investasi jangka
                panjang, perencanaan pensiun, atau manajemen aset tetap
                membutuhkan pertimbangan manusia dan ahli profesional.
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

        {/* Related */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] p-10 md:p-14 text-white">
          <div className="flex flex-col lg:flex-row justify-between gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-blue-100 text-sm font-semibold mb-4">
                <Clock3 className="w-4 h-4" />
                Artikel terkait
              </div>

              <h2 className="text-4xl font-extrabold mb-4">
                Eksplorasi AI Produktivitas Lainnya
              </h2>

              <p className="text-blue-100 max-w-2xl">
                Pelajari bagaimana AI membantu nutrisi harian dan kreativitas
                digital.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href="/ai/alat-ai-produktivitas/ai-nutrisi"
                className="bg-white text-blue-700 px-6 py-4 rounded-2xl font-bold inline-flex items-center gap-2 hover:scale-[1.02] transition-transform"
              >
                AI Nutrisi
                <ChevronRight className="w-5 h-5" />
              </Link>

              <Link
                href="/ai/alat-ai-produktivitas/ai-kreatif"
                className="bg-white text-blue-700 px-6 py-4 rounded-2xl font-bold inline-flex items-center gap-2 hover:scale-[1.02] transition-transform"
              >
                AI Kreatif
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer pageId="ai-keuangan" />
    </div>
  );
}
