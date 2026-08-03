"use client";

import { Moon, Sun } from "lucide-react";

// No React state here on purpose: which icon shows is driven purely by
// CSS reacting to the data-theme attribute (see .theme-icon-* rules in
// globals.css), which the inline script in layout.tsx already set
// before the page painted. That sidesteps any hydration mismatch.
export default function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("portfolio-theme", next);
    } catch {
      // Private browsing etc. — theme just won't persist, not worth failing over.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      title="Toggle light / dark theme"
      className="p-1.5 rounded-md text-text-muted hover:text-text-primary transition-colors"
    >
      <Sun className="theme-icon-sun w-4 h-4" strokeWidth={1.75} />
      <Moon className="theme-icon-moon w-4 h-4" strokeWidth={1.75} />
    </button>
  );
}
