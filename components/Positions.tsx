import { positions } from "@/lib/content";

export default function Positions() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14 border-t border-border-soft">
      <h2 className="font-display text-2xl mb-8">Positions of Responsibility</h2>
      <div className="flex flex-col gap-8">
        {positions.map((pos) => (
          <div key={pos.role}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
              <h3 className="font-display text-lg">{pos.role}</h3>
              <span className="text-sm text-text-muted">{pos.period}</span>
            </div>
            <p className="text-sm text-accent font-medium mb-3">{pos.org}</p>
            <ul className="flex flex-col gap-2">
              {pos.bullets.map((bullet, i) => (
                <li key={i} className="text-sm text-text-secondary leading-relaxed pl-4 relative">
                  <span className="absolute left-0 text-accent">–</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
