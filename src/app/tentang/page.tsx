import { User, BookOpen, Code2, Sparkles } from "lucide-react";

export default function Tentang() {
  return (
    <section
      id="tentang"
      className="py-24 bg-slate-900 text-slate-100 px-6 relative overflow-hidden"
    >
      {/* Aksen Background */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Judul Bagian */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Mengenal Lebih Dekat
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Tentang <span className="text-indigo-400">Saya</span>
          </h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto text-sm md:text-base">
            Perjalanan, latar belakang, dan hal-hal yang memotivasi saya di
            dunia pendidikan serta teknologi.
          </p>
        </div>

        {/* Grid Konten Utama */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Biografi */}
          <div className="md:col-span-2 bg-slate-800/50 border border-slate-700/60 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 text-indigo-400">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                  <User className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Biografi Singkat
                </h3>
              </div>
              <p className="text-slate-300 leading-relaxed mb-4 text-sm md:text-base">
                Halo! Saya berdedikasi tinggi di dunia pendidikan vokasi sebagai
                pengajar sekaligus pengembang teknologi. Keseharian saya
                berputar di sekitar dunia pemrograman perangkat lunak,
                membimbing siswa, serta merancang arsitektur sistem digital yang
                fungsional dan bersih.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                Bagi saya, teknologi bukan hanya soal menulis baris kode, tetapi
                tentang bagaimana menciptakan solusi nyata yang berdampak
                positif bagi efisiensi operasional dan proses pembelajaran di
                sekolah.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-700/60 flex flex-wrap gap-4 text-xs text-slate-400">
              <div>
                📍 Lokasi:{" "}
                <span className="text-slate-200 font-medium">
                  Jawa Timur, Indonesia
                </span>
              </div>
              <div>
                💼 Status:{" "}
                <span className="text-slate-200 font-medium">
                  Pendidik & Developer
                </span>
              </div>
            </div>
          </div>

          {/* Kartu Samping: Latar Belakang & Peran */}
          <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 text-blue-400">
                <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Latar Belakang</h3>
              </div>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"></span>
                  <span>
                    Aktif mendidik di bidang Rekayasa Perangkat Lunak (RPL).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"></span>
                  <span>
                    Berpengalaman mengelola manajemen kesiswaan dan pengembangan
                    sistem informasi sekolah.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"></span>
                  <span>
                    Fokus pada modernisasi infrastruktur web dan kurikulum
                    vokasi berbasis industri.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Baris Bawah: Minat & Fokus Teknologi */}
        <div className="mt-8 bg-linear-to-r from-indigo-950/40 via-slate-800/50 to-blue-950/40 border border-slate-700/60 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-xl">
          <div className="flex items-center gap-3 mb-4 text-indigo-400">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">
              Minat & Ketertarikan
            </h3>
          </div>
          <p className="text-slate-300 text-sm md:text-base mb-6 leading-relaxed">
            Saya memiliki ketertarikan mendalam pada pengembangan aplikasi web
            modern, pemanfaatan ekosistem JavaScript (Next.js, React), backend
            robust dengan Laravel, pengelolaan server berbasis Debian, hingga
            integrasi sistem POS dan otomasi berbasis web.
          </p>

          <div className="flex flex-wrap gap-2">
            {[
              "Web Development",
              "Next.js & React",
              "Laravel REST API",
              "Debian Server & DevOps",
              "Pendidikan Vokasi",
              "UI/UX Design",
            ].map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-slate-700/50 border border-slate-600/50 text-slate-200 text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
