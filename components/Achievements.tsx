import { Award } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { achievements } from "@/lib/content";

export default function Achievements() {
  return (
    <section id="achievements" className="max-w-4xl mx-auto px-4 sm:px-6 py-14 border-t border-border-soft">
      <SectionHeading index="06" title="Achievements" />
      <ul className="flex flex-col gap-3">
        {achievements.map((item, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <li className="flex items-start gap-3 text-sm text-text-secondary">
              <Award className="w-4 h-4 text-accent mt-0.5 shrink-0" strokeWidth={1.75} />
              {item}
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
