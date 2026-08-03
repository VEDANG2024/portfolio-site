import Reveal from "@/components/Reveal";

export default function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <Reveal className="flex items-baseline gap-3 mb-8">
      <span className="font-mono text-sm text-accent-2">{index}</span>
      <h2 className="font-display text-2xl">{title}</h2>
    </Reveal>
  );
}
