import { skillGroups, softSkills } from "@/lib/content";

export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-4 sm:px-6 py-14 border-t border-border-soft">
      <h2 className="font-display text-2xl mb-8">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wide mb-3">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-sm bg-accent-soft text-accent rounded-full px-3 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div>
        <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wide mb-3">
          Soft Skills
        </h3>
        <div className="flex flex-wrap gap-2">
          {softSkills.map((item) => (
            <span
              key={item}
              className="text-sm border border-border text-text-secondary rounded-full px-3 py-1"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
