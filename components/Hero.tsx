"use client";

import { motion } from "motion/react";
import { ChevronDown, Download, Mail } from "lucide-react";
import { profile, roles } from "@/lib/content";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/BrandIcons";
import TypewriterText from "@/components/TypewriterText";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
// Never drops below 60% opacity — worst case (animation doesn't run
// for some reason) the hero text is still fully readable, just
// slightly offset, rather than invisible.
const item = {
  hidden: { opacity: 0.6, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative max-w-4xl mx-auto px-4 sm:px-6 pt-16 pb-20 overflow-hidden min-h-[90vh] flex flex-col justify-center"
    >
      {/* Decorative background — purely cosmetic, sits behind the text */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 top-[-120px] right-[-100px] w-80 h-80 rounded-full blob-a"
        style={{ background: "radial-gradient(circle, var(--accent-soft), transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 top-[80px] left-[-140px] w-96 h-96 rounded-full blob-b"
        style={{ background: "radial-gradient(circle, var(--accent-soft), transparent 70%)" }}
      />

      <motion.div variants={container} initial="hidden" animate="show">
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 text-xs bg-accent-2-soft text-accent-2 rounded-full px-3 py-1.5 mb-6"
        >
          <span className="relative flex w-2 h-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-2 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-2" />
          </span>
          {profile.availability}
        </motion.div>

        <motion.p variants={item} className="text-sm text-accent font-medium tracking-wide uppercase mb-4">
          {profile.location}
        </motion.p>
        <motion.h1 variants={item} className="font-display text-4xl sm:text-5xl leading-tight mb-4">
          {profile.name}
        </motion.h1>
        <motion.p variants={item} className="text-lg text-text-secondary mb-2 h-7">
          <TypewriterText phrases={roles} />
        </motion.p>
        <motion.p variants={item} className="text-text-secondary max-w-xl mb-8">
          {profile.tagline}
        </motion.p>
        <motion.div variants={item} className="flex flex-wrap gap-3">
          <a
            href={profile.resumeFile}
            download
            className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-on-accent font-medium rounded-lg px-5 py-2.5 text-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <Download className="w-4 h-4" strokeWidth={2} />
            Download Resume
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 border border-border hover:border-text-secondary rounded-lg px-5 py-2.5 text-sm text-text-secondary hover:text-text-primary transition-all hover:-translate-y-0.5"
          >
            <Mail className="w-4 h-4" strokeWidth={2} />
            Get in touch
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-border hover:border-text-secondary rounded-lg px-5 py-2.5 text-sm text-text-secondary hover:text-text-primary transition-all hover:-translate-y-0.5"
          >
            <GitHubIcon className="w-4 h-4" />
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-border hover:border-text-secondary rounded-lg px-5 py-2.5 text-sm text-text-secondary hover:text-text-primary transition-all hover:-translate-y-0.5"
          >
            <LinkedInIcon className="w-4 h-4" />
            LinkedIn
          </a>
        </motion.div>
      </motion.div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-text-muted hover:text-accent transition-colors animate-bounce"
      >
        <ChevronDown className="w-5 h-5" strokeWidth={1.75} />
      </a>
    </section>
  );
}
