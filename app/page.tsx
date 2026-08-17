"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProjectSpread from "@/components/ProjectSpread";
import FilmStrip from "@/components/FilmStrip";
import TypeSpecimens from "@/components/TypeSpecimens";
import Methodology from "@/components/Methodology";
import Contact from "@/components/Contact";
import { content, type Language } from "@/data/content";

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const t = content[language];

  return (
    <>
      <span className="fixed bottom-3 right-4 z-10 font-serif text-xs italic text-white/40">
        {t.spaceImage.credit}
      </span>
      <Nav
        navLinks={t.navLinks}
        language={language}
        onToggleLanguage={() => setLanguage((prev) => (prev === "en" ? "es" : "en"))}
      />
      <main>
        <Hero profile={t.profile} scrollLabel={t.ui.scroll} />

        <section id="work">
          {t.projects.map((project, index) => (
            <ProjectSpread
              key={project.id}
              project={project}
              index={index}
              toolsLabel={t.ui.toolsLabel}
            />
          ))}
        </section>

        <FilmStrip frameworks={t.frameworks} focusLabel={t.ui.focusLabel} />
        <TypeSpecimens
          specimens={t.specimens}
          title={t.sectionTitles.frameworks}
          downloadLabel={t.ui.downloadResume}
        />
        <Methodology
          certifications={t.certifications}
          education={t.education}
          methodology={t.methodology}
          title={t.sectionTitles.methodology}
          educationLabel={t.ui.educationLabel}
          certificationsLabel={t.ui.certificationsLabel}
        />
        <Contact profile={t.profile} title={t.sectionTitles.contact} />
      </main>
    </>
  );
}
