import Link from "next/link";
import { Calendar, ArrowRight, Sparkles } from "lucide-react";

// Data artikel contoh (bisa disimpan di file terpisah jika nanti makin banyak)
export const blogPosts = [
  {
    slug: "mengenal-nextjs-app-router",
    title: "Mengenal Next.js App Router untuk Pemula Vokasi",
    excerpt:
      "Pelajari konsep dasar Server Components, Client Components, dan cara kerja routing modern di dalam framework Next.js.",
    date: "15 September 2026",
    category: "Web Development",
    readTime: "4 menit baca",
  },
  {
    slug: "implementasi-rest-api-laravel",
    title: "Membangun REST API yang Aman dengan Laravel Sanctum",
    excerpt:
      "Panduan langkah demi langkah merancang endpoint backend yang aman menggunakan Laravel Sanctum, migrasi UUID, dan kontrol akses.",
    date: "22 September 2026",
    category: "Backend & Security",
    readTime: "6 menit baca",
  },
];

export default function BlogPage() {
  return (
    <div className="py-24 bg-slate-950 text-slate-100 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header Blog */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Catatan & Artikel
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Blog & <span className="text-blue-400">Artikel</span>
          </h1>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto text-sm md:text-base">
            Berbagi seputar pengalaman mengajar, catatan teknis pengembangan
            web, dan dunia pemrograman vokasi.
          </p>
        </div>

        {/* Daftar Artikel */}
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-xl hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4 text-xs text-slate-400">
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span>• {post.readTime}</span>
                  </div>
                </div>

                <h2 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Baca Selengkapnya
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
