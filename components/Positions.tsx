import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { positions } from "@/lib/content";

export default function Positions() {
  return (
    <section id="positions" className="max-w-4xl mx-auto px-4 sm:px-6 py-14 border-t border-border-soft">
      <SectionHeading index="05" title="Positions of Responsibility" />
      <div className="flex flex-col gap-8">
        {positions.map((pos, i) => (
          <Reveal key={pos.role} delay={i * 0.06}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
              <h3 className="font-display text-lg">{pos.role}</h3>
              <span className="text-sm text-text-muted">{pos.period}</span>
            </div>
            <p className="text-sm text-accent font-medium mb-3">{pos.org}</p>
            <ul className="flex flex-col gap-2">
              {pos.bullets.map((bullet, j) => (
                <li key={j} className="text-sm text-text-secondary leading-relaxed pl-4 relative">
                  <span className="absolute left-0 text-accent">–</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
