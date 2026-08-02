"use client";

import { useMemo, useState } from "react";
import { ExternalLink } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { GitHubIcon } from "@/components/icons/BrandIcons";
import { projects } from "@/lib/content";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const tags = useMemo(() => ["All", ...Array.from(new Set(projects.map((p) => p.tag)))], []);
  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.tag === filter)),
    [filter]
  );

  return (
    <section id="projects" className="max-w-4xl mx-auto px-4 sm:px-6 py-14 border-t border-border-soft">
      <SectionHeading index="03" title="Projects" />

      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setFilter(tag)}
            className="text-xs rounded-full px-3 py-1.5 transition-colors"
            style={{
              background: filter === tag ? "var(--accent)" : "var(--bg-elevated)",
              color: filter === tag ? "var(--on-accent)" : "var(--text-secondary)",
              border: `1px solid ${filter === tag ? "var(--accent)" : "var(--border)"}`,
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-6">
        {visible.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.06}>
            <div className="group bg-bg-elevated border border-border-soft rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-accent/30">
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
                    <GitHubIcon className="w-3.5 h-3.5" />
                    Code
                  </a>
                </div>
              </div>
              <span className="inline-block text-xs bg-accent-soft text-accent rounded-full px-2.5 py-0.5 mb-3">
                {project.tag}
              </span>
              <p className="text-sm text-text-secondary mb-4">{project.description}</p>
              <ul className="flex flex-col gap-1.5">
                {project.highlights.map((h, j) => (
                  <li key={j} className="text-sm text-text-secondary pl-4 relative">
                    <span className="absolute left-0 text-accent">–</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
