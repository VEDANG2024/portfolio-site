import { Download, ExternalLink, Mail } from "lucide-react";
import { profile } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="max-w-4xl mx-auto px-4 sm:px-6 pt-16 pb-14">
      <p className="text-sm text-accent font-medium tracking-wide uppercase mb-4">
        {profile.location}
      </p>
      <h1 className="font-display text-4xl sm:text-5xl leading-tight mb-4">
        {profile.name}
      </h1>
      <p className="text-lg text-text-secondary mb-2">{profile.title}</p>
      <p className="text-text-secondary max-w-xl mb-8">{profile.tagline}</p>
      <div className="flex flex-wrap gap-3">
        <a
          href={profile.resumeFile}
          download
          className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-on-accent font-medium rounded-lg px-5 py-2.5 text-sm transition-colors"
        >
          <Download className="w-4 h-4" strokeWidth={2} />
          Download Resume
        </a>
        <a
          href="#contact"
          className="flex items-center gap-2 border border-border hover:border-text-secondary rounded-lg px-5 py-2.5 text-sm text-text-secondary hover:text-text-primary transition-colors"
        >
          <Mail className="w-4 h-4" strokeWidth={2} />
          Get in touch
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-border hover:border-text-secondary rounded-lg px-5 py-2.5 text-sm text-text-secondary hover:text-text-primary transition-colors"
        >
          <ExternalLink className="w-4 h-4" strokeWidth={2} />
          GitHub
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-border hover:border-text-secondary rounded-lg px-5 py-2.5 text-sm text-text-secondary hover:text-text-primary transition-colors"
        >
          <ExternalLink className="w-4 h-4" strokeWidth={2} />
          LinkedIn
        </a>
      </div>
    </section>
  );
}
