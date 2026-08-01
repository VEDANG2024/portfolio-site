import { education } from "@/lib/content";

export default function Education() {
  return (
    <section id="education" className="max-w-4xl mx-auto px-4 sm:px-6 py-14 border-t border-border-soft">
      <h2 className="font-display text-2xl mb-8">Education</h2>
      <div className="flex flex-col gap-3">
        {education.map((item) => (
          <div
            key={item.degree}
            className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 bg-bg-elevated border border-border-soft rounded-xl px-4 py-3"
          >
            <div>
              <div className="text-sm font-medium">{item.degree}</div>
              <div className="text-xs text-text-muted">{item.institute}</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-text-muted">{item.year}</div>
              <div className="text-sm text-accent font-medium">{item.score}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
