import { Sparkles } from "lucide-react";
import type { InnovationProject } from "@/data/content";

interface InnovationProps {
  projects: InnovationProject[];
  title: string;
}

export default function Innovation({ projects, title }: InnovationProps) {
  return (
    <section id="innovation" className="border-t border-white px-6 py-24 sm:px-10">
      <h2
        className="mb-12 flex items-center gap-4 font-black leading-none tracking-tight"
        style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
      >
        <Sparkles
          aria-hidden="true"
          className="h-8 w-8 shrink-0 text-[#D4AF37] sm:h-12 sm:w-12"
          strokeWidth={1.5}
        />
        {title}
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <article key={project.title} className="border border-white/40 p-6 sm:p-8">
            <span className="font-serif text-sm italic text-white/45">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-8 text-2xl font-bold tracking-tight sm:text-3xl">
              {project.title}
            </h3>
            <p className="mt-5 max-w-[65ch] font-serif text-lg leading-[1.8] text-white/75">
              {project.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
