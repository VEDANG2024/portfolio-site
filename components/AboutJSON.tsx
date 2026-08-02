import { aboutJson } from "@/lib/content";

function jsonSyntax(obj: Record<string, unknown>): React.ReactNode[] {
  const entries = Object.entries(obj);
  return entries.map(([key, value], i) => {
    const isLast = i === entries.length - 1;
    const rendered = Array.isArray(value) ? (
      <>
        [
        {value.map((v, j) => (
          <span key={j}>
            <span className="text-accent">&quot;{String(v)}&quot;</span>
            {j < value.length - 1 && ", "}
          </span>
        ))}
        ]
      </>
    ) : (
      <span className="text-accent">&quot;{String(value)}&quot;</span>
    );

    return (
      <div key={key} className="pl-4">
        <span className="text-text-secondary">&quot;{key}&quot;</span>
        <span className="text-text-muted">: </span>
        {rendered}
        {!isLast && <span className="text-text-muted">,</span>}
      </div>
    );
  });
}

export default function AboutJSON() {
  return (
    <div className="bg-bg-elevated border border-border-soft rounded-2xl overflow-hidden">
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border-soft">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-2 text-xs text-text-muted font-mono">about.json</span>
      </div>
      <pre className="p-4 text-xs sm:text-sm font-mono leading-relaxed overflow-x-auto">
        <code>
          {"{"}
          {jsonSyntax(aboutJson)}
          {"}"}
        </code>
      </pre>
    </div>
  );
}
