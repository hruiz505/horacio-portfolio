import type { Certification } from "@/data/content";
import { methodology, sectionTitles } from "@/data/content";

interface MethodologyProps {
  certifications: Certification[];
}

export default function Methodology({ certifications }: MethodologyProps) {
  return (
    <section id="methodology" className="border-t border-white px-6 py-24 sm:px-10">
      <h2
        className="mb-12 font-black leading-none tracking-tight"
        style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
      >
        {sectionTitles.methodology}
      </h2>

      <div className="grid gap-16 md:grid-cols-2">
        <p className="max-w-[65ch] font-serif text-lg leading-[1.8] text-white/85">
          {methodology.body}
        </p>

        <div className="aspect-video w-full border border-white">
          <iframe
            className="h-full w-full"
            src={methodology.videoUrl}
            title={methodology.videoTitle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      <div className="mt-20 grid gap-x-10 gap-y-8 border-t border-white pt-10 sm:grid-cols-3">
        {certifications.map((cert) => (
          <div key={cert.name} className="flex flex-col gap-2">
            <span className="font-bold uppercase tracking-tight">
              {cert.name}
            </span>
            <span className="font-serif text-sm italic text-white/60">
              {cert.date}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
