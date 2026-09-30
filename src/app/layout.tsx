import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "[Nama Kamu] - Portfolio",
  description:
    "Website portfolio [Nama Kamu], siswa SMK RPL yang belajar Next.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <nav className="bg-blue-900 text-white px-8 py-4 flex gap-6">
          <Link href="/" className="hover:underline font-semibold">
            Beranda
          </Link>
          <Link href="/tentang" className="hover:underline">
            Tentang Saya
          </Link>
          <Link href="/keahlian" className="hover:underline">
            Keahlian
          </Link>
          <Link href="/proyek" className="hover:underline">
            Proyek
          </Link>
          <Link href="/kontak" className="hover:underline">
            Kontak
          </Link>
          <Link href="/profil" className="hover:underline">
            Profil
          </Link>
          <Link href="/kelas" className="hover:underline">
            Kelas
          </Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
