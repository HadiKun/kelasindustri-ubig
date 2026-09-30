import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import { blogPosts } from "../page";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  // Jika artikel tidak ditemukan, kembalikan 404
  if (!post) {
    notFound();
  }

  return (
    <div className="py-24 bg-slate-950 text-slate-100 px-6 min-h-screen">
      <article className="max-w-3xl mx-auto">
        {/* Tombol Kembali */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Daftar Artikel
        </Link>

        {/* Kategori & Metadata */}
        <div className="flex items-center gap-3 text-xs text-slate-400 mb-4">
          <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium">
            {post.category}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {post.date}
          </span>
        </div>

        {/* Judul Artikel */}
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-white leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-2 pb-8 mb-8 border-b border-slate-800 text-sm text-slate-400">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
            HK
          </div>
          <span>
            Oleh <strong className="text-slate-200">Hadi Kuncoro</strong>
          </span>
        </div>

        {/* Konten Artikel */}
        <div className="space-y-6 text-slate-300 leading-relaxed text-base md:text-lg">
          <p className="font-medium text-slate-200">{post.excerpt}</p>
          <p>
            Di era perkembangan teknologi informasi yang sangat cepat, pemahaman
            mendalam mengenai arsitektur web modern menjadi landasan penting
            bagi setiap pengembang maupun siswa vokasi yang ingin terjun
            langsung ke industri perangkat lunak.
          </p>
          <h2 className="text-2xl font-bold text-white pt-4">
            Poin Penting Pembelajaran
          </h2>
          <p>
            Melalui pendekatan praktik langsung dan pemanfaatan perangkat modern
            seperti Next.js, pengelolaan kode menjadi jauh lebih terstruktur,
            efisien, dan ramah terhadap optimasi mesin pencari (SEO).
          </p>
          <p>
            Teruslah mengeksplorasi kode, bangun portofolio nyata, dan jangan
            ragu untuk menghadapi tantangan teknis baru setiap harinya.
          </p>
        </div>
      </article>
    </div>
  );
}
