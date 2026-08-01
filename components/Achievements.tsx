import { Award } from "lucide-react";
import { achievements } from "@/lib/content";

export default function Achievements() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14 border-t border-border-soft">
      <h2 className="font-display text-2xl mb-8">Achievements</h2>
      <ul className="flex flex-col gap-3">
        {achievements.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
            <Award className="w-4 h-4 text-accent mt-0.5 shrink-0" strokeWidth={1.75} />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
