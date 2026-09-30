import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hadi Kuncoro - Portfolio",
  description: "Website portfolio profesional, pendidik dan pengembang web.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/tentang", label: "Tentang" },
    { href: "/keahlian", label: "Keahlian" },
    { href: "/proyek", label: "Proyek" },
    { href: "/blog", label: "Blog" },
    { href: "/kontak", label: "Kontak" },
  ];

  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-blue-500 selection:text-white">
        {/* Navbar Modern dengan Efek Glassmorphism */}
        <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            {/* Logo / Nama Branding */}
            <Link
              href="/"
              className="text-lg font-extrabold tracking-tight bg-linear-to-r from-white via-slate-200 to-blue-400 bg-clip-text text-transparent hover:opacity-90 transition-opacity"
            >
              Hadi Kuncoro<span className="text-blue-500">.</span>
            </Link>

            {/* Menu Navigasi */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Tombol Aksi Cepat / Mobile Sederhana */}
            <div className="flex items-center gap-3 md:hidden">
              <Link
                href="/kontak"
                className="px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-medium shadow-md shadow-blue-600/20"
              >
                Kontak
              </Link>
            </div>
          </div>
        </header>

        {/* Konten Utama */}
        <main>{children}</main>

        {/* Footer Global Sederhana */}
        <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center text-slate-500 text-xs">
          <p>
            &copy; {new Date().getFullYear()} Hadi Kuncoro. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
