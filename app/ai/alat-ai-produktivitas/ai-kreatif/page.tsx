import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Camera,
  Music4,
  Wand2,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowLeft,
  ChevronRight,
  Clock3,
  ImagePlus,
  Mic2,
  BrainCircuit,
  Palette,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "AI Kreatif untuk Fotografi, Musik & Konten Digital 2026 | Panduan Lengkap",

  description:
    "Pelajari bagaimana AI kreatif membantu editing foto, fotografi, musik, audio, desain visual, dan workflow kreator digital dengan lebih cepat dan efisien di tahun 2026.",

  keywords: [
    "AI kreatif",
    "AI fotografi",
    "AI musik",
    "AI creator tools",
    "AI editing foto",
    "Generative AI kreatif",
    "AI desain",
    "AI content creator",
    "alat AI kreatif terbaik",
    "AI kreatif 2026",
  ],

  alternates: {
    canonical: "/ai/alat-ai-produktivitas/ai-kreatif",
  },

  openGraph: {
    title: "AI Kreatif untuk Fotografi, Musik & Konten Digital 2026",

    description:
      "Panduan lengkap penggunaan AI kreatif untuk fotografi, musik, editing, dan content creator modern.",

    url: "/ai/alat-ai-produktivitas/ai-kreatif",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Kreatif untuk Fotografi dan Musik",
      },
    ],
  },
};

const features = [
  {
    title: "AI Editing Foto",
    icon: <Camera className="w-6 h-6 text-purple-600" />,
    description:
      "AI membantu meningkatkan kualitas foto, menghapus objek, memperbaiki lighting, dan menghasilkan hasil visual lebih profesional.",
  },
  {
    title: "AI Musik & Audio",
    icon: <Music4 className="w-6 h-6 text-pink-600" />,
    description:
      "Teknologi AI dapat membantu mixing, stem separation, mastering audio, hingga eksplorasi ide musik baru.",
  },
  {
    title: "Workflow Kreatif Lebih Cepat",
    icon: <Wand2 className="w-6 h-6 text-blue-600" />,
    description:
      "AI mengurangi hambatan teknis agar kreator dapat fokus pada ide dan kualitas karya.",
  },
];

const faqs = [
  {
    question: "Apa itu AI kreatif?",
    answer:
      "AI kreatif adalah teknologi Artificial Intelligence yang membantu proses kreatif seperti editing foto, desain, musik, video, dan pembuatan konten digital.",
  },
  {
    question: "Apakah AI akan menggantikan kreator manusia?",
    answer:
      "Tidak sepenuhnya. AI lebih tepat disebut sebagai alat bantu kreatif atau co-creator yang membantu mempercepat workflow, sementara ide dan kreativitas utama tetap berasal dari manusia.",
  },
  {
    question: "Apa manfaat AI untuk fotografi?",
    answer:
      "AI membantu peningkatan kualitas gambar, noise reduction, generative fill, object removal, hingga color enhancement secara otomatis.",
  },
];

export const dynamic = "force-static";

export default function AIKreatifPage() {
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
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-purple-100 selection:text-purple-700">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Background */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-100/50 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-pink-100/50 blur-[120px] rounded-full" />
      </div>

      <main className="max-w-6xl mx-auto px-6 pt-28 pb-32">
        {/* Back */}
        <div className="mb-10">
          <Link
            href="/ai/alat-ai-produktivitas"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-purple-600 transition-colors text-sm font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke AI Productivity
          </Link>
        </div>

        {/* Hero */}
        <section className="text-center mb-28">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-xs font-bold mb-8">
            <ShieldCheck className="w-4 h-4" />
            Creative AI Guide {currentYear}
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight mb-8">
            AI untuk <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Kreativitas Tanpa Batas
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
            Optimalkan proses kreatif Anda dengan bantuan Artificial
            Intelligence untuk fotografi, editing, musik, audio, dan konten
            digital modern.
          </p>
        </section>

        {/* Intro */}
        <section className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700 mb-6">
              <Sparkles className="w-4 h-4 text-purple-600" />
              Creative Technology 2026
            </span>

            <h2 className="text-4xl font-extrabold mb-8 leading-tight">
              Bagaimana AI Membantu Kreator Modern?
            </h2>

            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Dunia kreatif berkembang sangat cepat. Fotografer, editor,
                content creator, dan musisi kini mulai memanfaatkan Artificial
                Intelligence untuk mempercepat workflow mereka.
              </p>

              <p>
                AI dapat membantu meningkatkan kualitas gambar, memperbaiki
                pencahayaan, menghapus objek, bahkan memperluas area foto
                menggunakan teknologi generative fill.
              </p>

              <p>
                Dalam dunia musik, AI memungkinkan kreator melakukan mastering
                audio, stem separation, hingga eksplorasi komposisi musik secara
                lebih efisien tanpa kehilangan sentuhan personal.
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-[2rem] p-10 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <Palette className="w-8 h-8 text-purple-600" />
              <h3 className="font-bold text-2xl">Manfaat AI Kreatif</h3>
            </div>

            <div className="space-y-4">
              {[
                "Editing visual lebih cepat",
                "Meningkatkan kualitas foto otomatis",
                "Membantu eksplorasi ide kreatif",
                "Produksi audio lebih efisien",
                "Menghemat waktu editing",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100"
                >
                  <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0" />
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
              Fitur AI Kreatif Modern
            </h2>

            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Berikut beberapa area kreatif yang saat ini sangat terbantu dengan
              perkembangan teknologi AI.
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
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-xs font-bold">
              <BrainCircuit className="w-4 h-4" />
              Creative Intelligence
            </div>

            <h2 className="text-4xl font-extrabold mb-8">
              Apakah AI Mengurangi Kreativitas Manusia?
            </h2>

            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Banyak orang khawatir bahwa AI akan menggantikan peran kreator
                manusia. Namun pada praktiknya, AI justru lebih sering digunakan
                sebagai alat bantu.
              </p>

              <p>
                Artificial Intelligence membantu mempercepat proses teknis
                seperti editing, enhancement, atau ide awal, sehingga kreator
                dapat fokus pada konsep dan kualitas karya.
              </p>

              <p>
                Kreativitas manusia tetap menjadi elemen utama, sedangkan AI
                berfungsi sebagai partner produktivitas dalam proses kreatif
                modern.
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
        <section className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-[2.5rem] p-10 md:p-14 text-white">
          <div className="flex flex-col lg:flex-row justify-between gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-purple-100 text-sm font-semibold mb-4">
                <Clock3 className="w-4 h-4" />
                Artikel terkait
              </div>

              <h2 className="text-4xl font-extrabold mb-4">
                Eksplorasi AI Produktivitas Lainnya
              </h2>

              <p className="text-purple-100 max-w-2xl">
                Pelajari bagaimana AI membantu nutrisi harian dan pengelolaan
                keuangan pribadi.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href="/ai/alat-ai-produktivitas/ai-nutrisi"
                className="bg-white text-purple-700 px-6 py-4 rounded-2xl font-bold inline-flex items-center gap-2 hover:scale-[1.02] transition-transform"
              >
                AI Nutrisi
                <ChevronRight className="w-5 h-5" />
              </Link>

              <Link
                href="/ai/alat-ai-produktivitas/ai-keuangan"
                className="bg-white text-purple-700 px-6 py-4 rounded-2xl font-bold inline-flex items-center gap-2 hover:scale-[1.02] transition-transform"
              >
                AI Keuangan
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer pageId="ai-kreatif" />
    </div>
  );
}
