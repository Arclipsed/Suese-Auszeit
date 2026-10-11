import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight, CalendarHeart } from "lucide-react";

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
}

export default function HeroSection({
  headline,
  subheadline,
  description,
  primaryCta,
  secondaryCta,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      {/* Background ambient glowing neon blobs - reduced intensity */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 size-[500px] bg-pink-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 size-[380px] bg-purple-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-1.5 text-xs font-semibold text-pink-300">
              <Sparkles className="size-3.5 text-pink-400" />
              <span>Café & Lounge Erlebnis direkt am Wasser</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              {headline}
            </h1>

            <p className="text-lg sm:text-xl font-medium text-pink-300/90 max-w-2xl">
              {subheadline}
            </p>

            <p className="text-base text-stone-400 max-w-xl leading-relaxed">
              {description}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#karte"
                className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-pink-600 to-pink-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg hover:from-pink-500 hover:to-pink-400 transition-all active:scale-95"
              >
                <span>{primaryCta}</span>
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="#reservierung"
                className="inline-flex items-center gap-2 rounded-full border border-stone-800 bg-white/5 px-6 py-3.5 text-sm font-semibold text-stone-200 hover:bg-white/10 hover:border-pink-500/40 transition-all"
              >
                <CalendarHeart className="size-4 text-pink-400" />
                <span>{secondaryCta}</span>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-stone-800/80 w-full max-w-lg text-stone-300">
              <div>
                <span className="block font-serif text-2xl font-bold text-white">Wasserblick</span>
                <span className="text-xs text-stone-500">Herrliche Terrasse</span>
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold text-pink-400">100%</span>
                <span className="text-xs text-stone-500">Handgemacht & Bio</span>
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold text-white">Lounge</span>
                <span className="text-xs text-stone-500">Stimmungsvoll</span>
              </div>
            </div>
          </div>

          {/* Visual Showcase Card with Real Cafe Photo */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-lg rounded-3xl overflow-hidden border border-white/10 bg-[#121016] shadow-xl group">
              <div className="relative h-[430px] w-full">
                <Image
                  src="/cafe-exterior.jpg"
                  alt="Café Süße Auszeit Außenbereich am Wasser bei Dämmerung"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                
                {/* Floating Subtle Logo Watermark Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full bg-black/65 backdrop-blur-md px-3 py-1.5 border border-pink-500/30">
                  <div className="relative size-6 rounded-full overflow-hidden">
                    <Image src="/logo.jpg" alt="Logo" fill className="object-cover" />
                  </div>
                  <span className="text-xs font-semibold text-white">Süße Auszeit</span>
                </div>
              </div>

              {/* Subtitle / Bottom Info with Clean Non-Heavy Styling */}
              <div className="p-6 bg-[#121016] border-t border-white/5">
                <span className="text-[11px] uppercase font-bold tracking-widest text-pink-400">
                  Willkommen in der Auszeit
                </span>
                <h3 className="font-serif text-xl font-bold text-white mt-1">
                  Kaffee, Genuss & Wohlfühlmomente
                </h3>
                <p className="text-xs text-stone-400 mt-1.5 leading-relaxed">
                  Täglich frisch gerösteter Spezialitätenkaffee und feine Törtchen auf unserer idyllischen Seeterrasse in entspanntem Lounge-Flair.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
