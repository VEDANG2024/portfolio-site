"use client";

import { useEffect, useState } from "react";

// Cycles through phrases with a typing/deleting effect. Pure CSS/JS,
// no dependency on the animation library — this one runs on a timer
// loop rather than a mount/scroll trigger, so it's simpler to keep
// self-contained and bulletproof.
export default function TypewriterText({ phrases }: { phrases: string[] }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex % phrases.length];
    const typingSpeed = deleting ? 30 : 55;

    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), 1400);
    } else if (deleting && text === "") {
      timeout = setTimeout(() => {
        setDeleting(false);
        setPhraseIndex((i) => i + 1);
      }, 0);
    } else {
      timeout = setTimeout(() => {
        setText((t) =>
          deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIndex, phrases]);

  return (
    <span className="inline-flex items-center">
      {text}
      <span className="w-[2px] h-[1em] bg-accent ml-1 animate-pulse" aria-hidden="true" />
    </span>
  );
}
