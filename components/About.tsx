import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import AboutJSON from "@/components/AboutJSON";
import StatCounter from "@/components/StatCounter";
import { aboutBlurb, experience, projects, positions, achievements } from "@/lib/content";

export default function About() {
  const stats = [
    { value: experience.length, label: "Experiences" },
    { value: projects.length, label: "Projects" },
    { value: positions.length, label: "Leadership Roles" },
    { value: achievements.length, label: "Achievements" },
  ];

  return (
    <section id="about" className="max-w-4xl mx-auto px-4 sm:px-6 py-14 border-t border-border-soft">
      <SectionHeading index="00" title="About" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <Reveal>
          <p className="text-text-secondary leading-relaxed mb-8">{aboutBlurb}</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((s) => (
              <StatCounter key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <AboutJSON />
        </Reveal>
      </div>
    </section>
  );
}
