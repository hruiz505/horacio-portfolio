import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProjectSpread from "@/components/ProjectSpread";
import FilmStrip from "@/components/FilmStrip";
import TypeSpecimens from "@/components/TypeSpecimens";
import Methodology from "@/components/Methodology";
import Contact from "@/components/Contact";
import { profile, projects, specimens, certifications, tiers } from "@/data/content";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero profile={profile} />

        <section id="work">
          {projects.map((project, index) => (
            <ProjectSpread key={project.id} project={project} index={index} />
          ))}
        </section>

        <FilmStrip tiers={tiers} />
        <TypeSpecimens specimens={specimens} />
        <Methodology certifications={certifications} />
        <Contact profile={profile} />
      </main>
    </>
  );
}
