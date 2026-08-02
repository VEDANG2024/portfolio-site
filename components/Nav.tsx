"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { profile } from "@/lib/content";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/BrandIcons";

const LINKS = [
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.href.slice(1))).filter(
      (el): el is HTMLElement => el !== null
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-10 bg-bg/90 backdrop-blur border-b border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-3">
        <a href="#top" className="font-display text-lg">
          {profile.name}
        </a>
        <nav className="flex flex-wrap items-center gap-4 sm:gap-5 text-sm text-text-secondary">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`hidden sm:inline transition-colors relative ${
                active === link.href ? "text-accent" : "hover:text-text-primary"
              }`}
            >
              {link.label}
              {active === link.href && (
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-accent" />
              )}
            </a>
          ))}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="text-text-muted hover:text-text-primary transition-colors"
          >
            <GitHubIcon className="w-4 h-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="text-text-muted hover:text-text-primary transition-colors"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>
          <a
            href={profile.resumeFile}
            download
            className="flex items-center gap-1.5 bg-accent hover:bg-accent-hover text-on-accent font-medium rounded-lg px-3.5 py-2 transition-colors"
          >
            <Download className="w-3.5 h-3.5" strokeWidth={2} />
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
