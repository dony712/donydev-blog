import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import {
  User,
  Heart,
  BookOpen,
  Mail,
  MessageCircle,
  Sparkles,
  Globe,
  Code2,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* HERO */}
        <section className="max-w-6xl mx-auto px-4 mb-20">
          <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 p-10 md:p-16 text-white">
            <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full"></div>

            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur mb-8">
                <Sparkles size={16} className="text-indigo-300" />
                <span className="text-sm text-slate-200">
                  Welcome to DonyDev Blog
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
                Assalamu&apos;alaikum,
                <br />
                Saya <span className="text-indigo-400">Dony Fahrudy</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                Selamat datang dan terima kasih telah berkunjung ke blog pribadi
                ini. Sebuah tempat untuk berbagi perjalanan belajar, pengalaman,
                dan wawasan di dunia teknologi, ilmu komputer, serta kehidupan.
              </p>
            </div>
          </div>
        </section>

        {/* GRID CONTENT */}
        <section className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tentang Blog */}
            <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-10 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                <Globe size={28} />
              </div>

              <h2 className="text-3xl font-black mb-5">
                Tentang <span className="text-indigo-600">donydev-blog.com</span>
              </h2>

              <div className="space-y-5 text-slate-600 leading-relaxed text-[17px]">
                <p>
                  <span className="font-semibold text-slate-900">
                    donydev-blog.com
                  </span>{" "}
                  adalah sebuah blog pribadi yang berisi materi-materi ilmu
                  komputer, teknologi, informasi dan komunikasi, serta berbagai
                  topik lainnya yang diharapkan dapat menambah wawasan dan
                  membantu rekan-rekan semua.
                </p>

                <p>
                  Blog ini juga menjadi tempat saya mendokumentasikan cerita,
                  pengalaman, dan perjalanan hidup sebagai seorang manusia biasa
                  yang terus belajar dan berkembang.
                </p>
              </div>
            </div>

            {/* Siapa Saya */}
            <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-10 text-white relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-500/20 blur-3xl rounded-full"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/10 text-indigo-300 flex items-center justify-center mb-6">
                  <User size={28} />
                </div>

                <h2 className="text-3xl font-black mb-5">
                  Siapa di balik website ini?
                </h2>

                <p className="text-slate-300 leading-relaxed text-[17px]">
                  Perkenalkan, saya bernama{" "}
                  <span className="text-white font-semibold">
                    Dony Fahrudy
                  </span>
                  . Saya memiliki latar belakang pendidikan ilmu komputer dan
                  beragama Islam.
                </p>

                <p className="text-slate-400 leading-relaxed text-[17px] mt-4">
                  Saya percaya bahwa belajar adalah perjalanan seumur hidup.
                  Karena itu saya terus mengembangkan kemampuan di bidang
                  teknologi, software development, AI, dan dunia digital.
                </p>
              </div>
            </div>

            {/* Mengapa Membuat Blog */}
            <div className="bg-slate-50 border border-slate-200 rounded-[2.5rem] p-8 md:p-10">
              <div className="w-14 h-14 rounded-2xl bg-pink-50 text-pink-500 flex items-center justify-center mb-6">
                <Heart size={28} />
              </div>

              <h2 className="text-3xl font-black mb-6">
                Mengapa membuat website ini?
              </h2>

              <div className="space-y-5 text-slate-600 leading-relaxed text-[17px]">
                <p>
                  Blog pribadi ini merupakan buku catatan saya dalam mempelajari
                  ilmu komputer. Saya mengembangkan kemampuan dalam dunia
                  teknologi dan ilmu komputer yang dulu pernah saya pelajari di
                  bangku kuliah maupun hingga sekarang dunia kerja.
                </p>

                <p>
                  Tujuannya sederhana: agar ilmu dan pengalaman tersebut tidak
                  hilang begitu saja, sekaligus menjadi tempat untuk terus
                  belajar hal-hal baru yang mungkin belum pernah saya dapatkan
                  sebelumnya.
                </p>

                <p>
                  Melalui blog ini saya juga ingin berbagi apa yang saya pelajari
                  kepada siapa saja yang membutuhkan.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-6">
            {/* Tech Stack */}
            <div className="bg-gradient-to-br from-indigo-600 to-blue-500 rounded-[2.5rem] p-8 text-white">
              <Code2 size={34} className="mb-6 opacity-80" />

              <h3 className="text-2xl font-black mb-4">
                Grow & Share
              </h3>

              <p className="text-indigo-100 leading-relaxed">
                Misi saya sederhana: terus belajar, berkembang, dan membagikan
                pengetahuan agar bisa tumbuh bersama melalui teknologi.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm">
              <BookOpen
                size={30}
                className="text-indigo-600 mb-6"
              />

              <h3 className="text-2xl font-black mb-6">
                Hubungi Penulis
              </h3>

              <div className="space-y-4">
                <a
                  href="mailto:donnyfahrudi@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Mail size={22} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                      Email
                    </p>
                    <p className="text-sm font-semibold text-slate-700">
                      donnyfahrudi@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/6282384340599"
                  target="_blank"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-slate-200 hover:border-green-300 hover:bg-green-50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <MessageCircle size={22} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                      WhatsApp
                    </p>
                    <p className="text-sm font-semibold text-slate-700">
                      +62 823-8434-0599
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Closing */}
            <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white">
              <h3 className="text-2xl font-black mb-4">
                Wassalamu&apos;alaikum
              </h3>

              <p className="text-slate-400 leading-relaxed">
                Terima kasih telah berkunjung ke blog ini. Semoga setiap tulisan
                yang dibagikan dapat memberikan manfaat dan inspirasi.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer pageId="tentang" />
    </div>
  );
}