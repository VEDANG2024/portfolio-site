import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-4 sm:px-6 py-14 border-t border-border-soft">
      <h2 className="font-display text-2xl mb-8">Experience</h2>
      <div className="flex flex-col gap-10">
        {experience.map((job) => (
          <div key={job.role}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
              <h3 className="font-display text-lg">{job.role}</h3>
              <span className="text-sm text-text-muted">{job.period}</span>
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 mb-3">
              <p className="text-sm text-accent font-medium">{job.company}</p>
              <p className="text-xs text-text-muted">{job.location}</p>
            </div>
            <ul className="flex flex-col gap-2">
              {job.bullets.map((bullet, i) => (
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
