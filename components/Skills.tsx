import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { skillGroups, softSkills } from "@/lib/content";

export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-4 sm:px-6 py-14 border-t border-border-soft">
      <SectionHeading index="01" title="Skills" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        {skillGroups.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.05}>
            <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wide mb-3">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-sm bg-accent-soft text-accent rounded-full px-3 py-1 transition-transform hover:scale-105"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.15}>
        <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wide mb-3">
          Soft Skills
        </h3>
        <div className="flex flex-wrap gap-2">
          {softSkills.map((item) => (
            <span
              key={item}
              className="text-sm border border-border text-text-secondary rounded-full px-3 py-1 transition-transform hover:scale-105"
            >
              {item}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
