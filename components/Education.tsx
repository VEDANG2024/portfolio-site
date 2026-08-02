import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { education } from "@/lib/content";

export default function Education() {
  return (
    <section id="education" className="max-w-4xl mx-auto px-4 sm:px-6 py-14 border-t border-border-soft">
      <SectionHeading index="04" title="Education" />
      <div className="flex flex-col gap-3">
        {education.map((item, i) => (
          <Reveal key={item.degree} delay={i * 0.05}>
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 bg-bg-elevated border border-border-soft rounded-xl px-4 py-3 transition-colors hover:border-accent/40">
              <div>
                <div className="text-sm font-medium">{item.degree}</div>
                <div className="text-xs text-text-muted">{item.institute}</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-text-muted">{item.year}</div>
                <div className="text-sm text-accent font-medium">{item.score}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
