// src/components/Footer.tsx
import Link from "next/link";
import {
  Monitor,
  Mail,
  MessageCircle,
  ChevronRight,
  Globe,
  Eye, // Tambahkan icon Eye untuk counter
} from "lucide-react";
import PostViewsCounter from "./PostViewsCounter";

interface FooterProps {
  pageId: string;
}

export default function Footer({
  pageId,
}: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  // Simulasi data views (Nantinya bisa dihubungkan ke API GA4 atau Database)
  // const totalViews = "1,240"; 

  return (
    <footer className="bg-white border-t border-slate-200 pt-20 pb-10 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        {/* --- MAIN FOOTER CONTENT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Kolom Brand */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="bg-gradient-to-br from-indigo-600 to-blue-500 p-2.5 rounded-2xl text-white shadow-lg shadow-indigo-200 group-hover:scale-110 transition-transform duration-300">
                <Monitor size={24} strokeWidth={2.5} />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-slate-900">
                DonyDev <span className="text-indigo-600">.</span>
              </span>
            </Link>
            <p className="text-base text-slate-500 leading-relaxed max-w-md">
              Misi saya sederhana:{" "}
              <span className="text-slate-900 font-medium">Grow & Share.</span>{" "}
              Saya mendokumentasikan perjalanan belajar dan membagikannya agar
              kita bisa tumbuh bersama melalui konten web-blog yang berkualitas.
            </p>
            <div className="flex items-center gap-2 text-indigo-600 font-semibold text-sm">
              <Globe size={16} />
              <span>Nice to Share from Indonesia</span>
            </div>
          </div>

          {/* Kolom Topik Populer */}
          <div className="lg:col-span-3">
            <h4 className="text-slate-900 font-bold text-lg mb-7 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-indigo-600 rounded-full"></div>
              Topik Populer
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/ai/alat-ai-produktivitas"
                  className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-all group"
                >
                  <ChevronRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                  <span className="text-sm font-medium">AI Productivity</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom Hubungi Kami */}
          <div className="lg:col-span-4 bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h4 className="text-slate-900 font-bold text-lg mb-6">
              Let's Connect!
            </h4>
            <div className="space-y-5">
              <a
                href="mailto:hello@donydev.com"
                className="flex items-center gap-4 p-3 bg-white border border-slate-200 rounded-2xl hover:border-indigo-300 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-indigo-50 text-indigo-600 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Email Me</span>
                  <span className="text-sm font-semibold text-slate-700">donnyfahrudi@gmail.com</span>
                </div>
              </a>

              <a
                href="https://wa.me/6282384340599"
                className="flex items-center gap-4 p-3 bg-white border border-slate-200 rounded-2xl hover:border-green-300 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-green-50 text-green-600 rounded-xl group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <MessageCircle size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Quick Chat</span>
                  <span className="text-sm font-semibold text-slate-700">WhatsApp Me</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
            <div className="relative px-4 py-2 bg-white border border-slate-100 rounded-lg shadow-sm">
              <p className="text-sm font-bold tracking-tight bg-gradient-to-r from-slate-900 via-indigo-800 to-slate-900 bg-clip-text text-transparent">
                © {currentYear} <span className="text-indigo-600">All Right Reserved.</span> DonyDev.
              </p>
            </div>
          </div>

          {/* Legal Links & Post Views Counter */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            {/* FITUR POST VIEWS COUNTER (Desain Faded/Abu-abu) */}
            {/* <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-full border border-slate-100 opacity-60 hover:opacity-100 transition-opacity duration-300">
              <Eye size={14} className="text-slate-400" />
              <span className="text-[11px] font-medium text-slate-500 tracking-wide uppercase">
                {totalViews} <span className="ml-0.5">Views</span>
              </span>
            </div> */}
            <PostViewsCounter pageId={pageId} />

            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-xs font-bold text-slate-400 hover:text-indigo-600 uppercase tracking-widest transition-colors"
              >
                Privacy Policy
              </Link>
              <div className="hidden md:block w-1 h-1 bg-slate-300 rounded-full"></div>
              <Link
                href="/terms"
                className="text-xs font-bold text-slate-400 hover:text-indigo-600 uppercase tracking-widest transition-colors"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}