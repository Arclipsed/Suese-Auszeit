import Link from "next/link";
import { Sparkles, ArrowRight, HeartHandshake } from "lucide-react";

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
      {/* Background subtle glowing radial highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] bg-amber-200/25 blur-3xl rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/60 bg-amber-50/70 px-3.5 py-1 text-xs font-semibold text-amber-900 shadow-sm">
              <Sparkles className="size-3.5 text-amber-700" />
              <span>Neu eröffnet in gemütlicher Atmosphäre</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-stone-900 leading-[1.15]">
              {headline}
            </h1>

            <p className="text-lg sm:text-xl font-medium text-amber-900/90 max-w-2xl">
              {subheadline}
            </p>

            <p className="text-base text-stone-600 max-w-xl leading-relaxed">
              {description}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#karte"
                className="inline-flex items-center gap-2.5 rounded-full bg-stone-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-stone-900/20 hover:bg-amber-900 transition-all active:scale-95"
              >
                <span>{primaryCta}</span>
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="#reservierung"
                className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white/80 px-6 py-3.5 text-sm font-semibold text-stone-800 hover:bg-stone-50 hover:border-stone-400 transition-all shadow-sm"
              >
                <HeartHandshake className="size-4 text-stone-600" />
                <span>{secondaryCta}</span>
              </Link>
            </div>

            {/* Quick trust indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-stone-200/80 w-full max-w-lg text-stone-700">
              <div>
                <span className="block font-serif text-2xl font-bold text-stone-900">100%</span>
                <span className="text-xs text-stone-500">Handgemacht</span>
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold text-stone-900">Bio</span>
                <span className="text-xs text-stone-500">Kaffeebohnen</span>
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold text-stone-900">Täglich</span>
                <span className="text-xs text-stone-500">Frisch gebacken</span>
              </div>
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-stone-100">
              <img
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80"
                alt="Café Süße Auszeit Ambiente und Kaffeespezialitäten"
                className="h-[460px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs uppercase font-semibold tracking-wider text-amber-300">Tagesempfehlung</span>
                <h3 className="font-serif text-xl font-bold">Himbeer-Pistazien Törtchen & Flat White</h3>
                <p className="text-xs text-stone-300 mt-1">Jeden Morgen frisch aus unserer Backstube.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
