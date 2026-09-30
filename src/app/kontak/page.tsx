"use client";

import { Mail, Send, MapPin, Sparkles } from "lucide-react";

export default function Kontak() {
  return (
    <section
      id="kontak"
      className="py-24 bg-slate-950 text-slate-100 px-6 relative overflow-hidden"
    >
      {/* Aksen Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Judul Bagian */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Mari Terhubung
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Hubungi <span className="text-blue-400">Saya</span>
          </h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto text-sm md:text-base">
            Punya pertanyaan, kolaborasi proyek, atau ingin berdiskusi lebih
            lanjut? Silakan kirim pesan atau hubungi melalui tautan di bawah.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Informasi Kontak & Sosmed */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-6">
                Informasi Kontak
              </h3>

              <ul className="space-y-6 text-slate-300 text-sm">
                <li className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-blue-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400 mb-0.5">
                      Email
                    </span>
                    <a
                      href="mailto:email@example.com"
                      className="font-medium text-white hover:text-blue-400 transition-colors"
                    >
                      email@example.com
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-blue-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400 mb-0.5">
                      Lokasi
                    </span>
                    <span className="font-medium text-white">
                      Jawa Timur, Indonesia
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Tautan Sosial Media & GitHub */}
            <div className="mt-8 pt-6 border-t border-slate-800">
              <span className="block text-xs text-slate-400 mb-3 font-medium uppercase tracking-wider">
                Sosial Media & GitHub
              </span>
              <div className="flex items-center gap-3">
                {/* GitHub */}
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-2 text-xs font-medium border border-slate-700"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Formulir Pesan Interaktif */}
          <div className="md:col-span-2 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-xl">
            <h3 className="text-xl font-bold text-white mb-6">Kirim Pesan</h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Terima kasih! Pesan Anda simulasi terkirim.");
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">
                    Nama Anda
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nama lengkap"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">
                    Email Anda
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alamat.email@domain.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">
                  Pesan
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tuliskan pesan atau keperluan Anda di sini..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-lg shadow-blue-600/30 transition-all duration-200"
              >
                <Send className="w-4 h-4" />
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>

        {/* Footer Kecil */}
        <div className="mt-20 pt-8 border-t border-slate-900 text-center text-slate-500 text-xs">
          &copy; {new Date().getFullYear()} Hadi Kuncoro. Dibangun menggunakan
          Next.js & Tailwind CSS.
        </div>
      </div>
    </section>
  );
}
