import { ExternalLink } from "lucide-react";
import { projects } from "@/lib/content";

export default function Projects() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-4 sm:px-6 py-14 border-t border-border-soft">
      <h2 className="font-display text-2xl mb-8">Projects</h2>
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-bg-elevated border border-border-soft rounded-2xl p-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 mb-2">
              <h3 className="font-display text-lg">{project.name}</h3>
              <div className="flex items-center gap-3">
                {project.paper && (
                  <a
                    href={project.paper}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Referenced paper"
                    className="flex items-center gap-1 text-xs text-text-muted hover:text-accent transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.75} />
                    Paper
                  </a>
                )}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View on GitHub"
                  className="flex items-center gap-1 text-xs text-text-muted hover:text-accent transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.75} />
                  Code
                </a>
              </div>
            </div>
            <span className="inline-block text-xs bg-accent-soft text-accent rounded-full px-2.5 py-0.5 mb-3">
              {project.tag}
            </span>
            <p className="text-sm text-text-secondary mb-4">{project.description}</p>
            <ul className="flex flex-col gap-1.5">
              {project.highlights.map((h, i) => (
                <li key={i} className="text-sm text-text-secondary pl-4 relative">
                  <span className="absolute left-0 text-accent">–</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
