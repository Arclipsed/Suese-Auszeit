import { Sparkles } from "lucide-react";

interface MenuHeroSectionProps {
  headline: string;
  subheadline: string;
}

export default function MenuHeroSection({ headline, subheadline }: MenuHeroSectionProps) {
  return (
    <div className="relative py-12 sm:py-16 text-center max-w-3xl mx-auto px-4">
      <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-1.5 text-xs font-semibold text-pink-300 mb-4 shadow-[0_0_15px_rgba(255,77,148,0.2)]">
        <Sparkles className="size-3.5 text-pink-400" />
        <span>Tagesfrische Kreationen & Kaffeekunst</span>
      </div>

      <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white">
        {headline}
      </h1>

      <p className="mt-3 text-base sm:text-lg text-stone-400 leading-relaxed">
        {subheadline}
      </p>
    </div>
  );
}
