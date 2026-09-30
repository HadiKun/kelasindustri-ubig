import {
  Code,
  Server,
  Wrench,
  Users,
  BookOpen,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";

export default function Keahlian() {
  const technicalSkills = [
    {
      category: "Frontend & Web Development",
      icon: <Code className="w-5 h-5 text-blue-400" />,
      skills: [
        "Next.js",
        "React.js",
        "Tailwind CSS",
        "TypeScript",
        "JavaScript",
        "Shadcn UI",
      ],
    },
    {
      category: "Backend & Database",
      icon: <Server className="w-5 h-5 text-indigo-400" />,
      skills: [
        "Laravel",
        "REST API",
        "Sanctum Security",
        "MySQL",
        "PostgreSQL",
        "Database Modeling",
      ],
    },
    {
      category: "Server & DevOps Tools",
      icon: <Wrench className="w-5 h-5 text-emerald-400" />,
      skills: [
        "Debian Server",
        "PM2 Node",
        "HAProxy",
        "SSL Certificates",
        "Git & GitHub",
        "WordPress Customization",
      ],
    },
  ];

  const softSkills = [
    {
      title: "Pendidikan & Bimbingan Vokasi",
      desc: "Berpengalaman mengajar, menyusun modul pembelajaran pemrograman, serta membimbing siswa.",
      icon: <BookOpen className="w-5 h-5 text-amber-400" />,
    },
    {
      title: "Manajemen & Kepemimpinan",
      desc: "Aktif mengelola organisasi sekolah, koordinasi acara, dan manajemen kesiswaan.",
      icon: <Users className="w-5 h-5 text-blue-400" />,
    },
    {
      title: "Pemecahan Masalah (Problem Solving)",
      desc: "Terbiasa menganalisis masalah teknis sistem, optimasi alur kerja, dan perancangan arsitektur web.",
      icon: <Lightbulb className="w-5 h-5 text-purple-400" />,
    },
  ];

  return (
    <section
      id="keahlian"
      className="py-24 bg-slate-950 text-slate-100 px-6 relative overflow-hidden"
    >
      {/* Aksen Background */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Judul Bagian */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-3">
            Kompetensi & Kapabilitas
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Daftar <span className="text-blue-400">Keahlian</span>
          </h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto text-sm md:text-base">
            Kombinasi antara keahlian teknis pengembangan perangkat lunak dan
            keterampilan pendukung profesional.
          </p>
        </div>

        {/* Bagian 1: Skill Teknis */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-8 flex items-center gap-2 text-white">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
            Keahlian Teknis (Hard Skills)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {technicalSkills.map((group, idx) => (
              <div
                key={idx}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm shadow-xl flex flex-col justify-between hover:border-slate-700 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700/80">
                      {group.icon}
                    </div>
                    <h4 className="font-semibold text-white text-base">
                      {group.category}
                    </h4>
                  </div>

                  <ul className="space-y-2.5">
                    {group.skills.map((skill, sIdx) => (
                      <li
                        key={sIdx}
                        className="flex items-center gap-2 text-slate-300 text-sm"
                      >
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bagian 2: Skill Non-Teknis */}
        <div>
          <h3 className="text-xl font-bold mb-8 flex items-center gap-2 text-white">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
            Keahlian Non-Teknis (Soft Skills)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {softSkills.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm shadow-xl hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="p-2.5 w-fit rounded-xl bg-slate-800 border border-slate-700/80 mb-4">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-white text-base mb-2">
                    {item.title}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
