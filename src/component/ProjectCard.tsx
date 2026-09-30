import { ExternalLink, FolderGit2 } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  techStack: string[];
  demoUrl: string;
  githubUrl: string;
}

export default function ProjectCard({
  title,
  category,
  description,
  techStack,
  demoUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-xl flex flex-col justify-between hover:border-indigo-500/50 transition-all duration-300 group">
      <div>
        {/* Header Kartu */}
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
            <FolderGit2 className="w-6 h-6" />
          </div>
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
            {category}
          </span>
        </div>

        {/* Judul & Deskripsi */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
          {title}
        </h3>

        <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
          {description}
        </p>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-md bg-slate-950/60 border border-slate-800 text-slate-300 text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Tombol Tautan Aksi */}
      <div className="pt-4 border-t border-slate-800 flex items-center gap-4">
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          Lihat Demo
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors ml-auto"
        >
          {/* SVG GitHub */}
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          Kode
        </a>
      </div>
    </div>
  );
}
