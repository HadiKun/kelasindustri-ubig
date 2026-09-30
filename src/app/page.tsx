import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function Beranda() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 text-white px-6 py-20 overflow-hidden"
    >
      {/* Efek Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Foto / Avatar dengan Border Animasi / Ring */}
        <div className="relative mb-8 group">
          <div className="absolute -inset-1 bg-linear-to-r from-blue-500 to-indigo-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
          <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-slate-800 bg-slate-700 shadow-xl">
            <Image
              src="/avatar.jpg"
              alt="Hadi Kuncoro"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        {/* Sambutan & Tagline */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
          Halo, Apa kabar semua?! 👋
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 bg-linear-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
          Saya <span className="text-blue-400">Hadi Kuncoro</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-300 max-w-2xl font-light leading-relaxed mb-8">
          Seorang pengajar dan pengembang web yang berfokus membangun solusi
          digital modern, aplikasi web interaktif, dan sistem yang andal.
        </p>

        {/* Tombol Aksi (CTA) */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Link
            href="#proyek"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-lg shadow-blue-600/30 transition-all duration-200 hover:-translate-y-0.5"
          >
            Lihat Proyek
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="#kontak"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium transition-all duration-200 hover:-translate-y-0.5"
          >
            Hubungi Saya
          </Link>
        </div>

        {/* Tautan Media Sosial / Platform */}
        <div className="flex items-center gap-4 text-slate-400">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-slate-800/50 hover:bg-slate-800 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
          >
            {/* SVG sederhana untuk GitHub */}
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a
            href="mailto:email@example.com"
            className="p-2.5 rounded-lg bg-slate-800/50 hover:bg-slate-800 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
          >
            <Mail className="w-5 h-5" />
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
