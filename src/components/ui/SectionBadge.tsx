import { Sparkles } from "lucide-react";

interface SectionBadgeProps {
  label: string;
}

export default function SectionBadge({ label }: SectionBadgeProps) {
  return (
    <div className="flex justify-center mb-6">
      <div className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full
        bg-gradient-to-r from-primary/15 via-primary/10 to-secondary/15
        border border-primary/30 backdrop-blur-md
        shadow-md shadow-primary/20">

        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-40 -z-10" />

        <Sparkles className="w-4 h-4 text-primary animate-pulse" />
        <span className="text-sm font-semibold tracking-wide uppercase text-primary">
          {label}
        </span>
      </div>
    </div>
  );
}
