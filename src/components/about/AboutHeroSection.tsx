interface AboutHeroSectionProps {
  badge: string;
  headline: string;
  subheadline: string;
}

export default function AboutHeroSection({
  badge,
  headline,
  subheadline,
}: AboutHeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 border-b border-white/5 bg-[#0d0c0e]">
      {/* Ambient background glows */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[360px] rounded-full blur-[130px] opacity-25"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255, 77, 148, 0.45) 0%, rgba(139, 92, 246, 0.2) 60%, transparent 80%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-pink-300 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(255,77,148,0.2)]">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-pink-400 animate-pulse" />
          {badge}
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl max-w-4xl mx-auto leading-tight">
          {headline}
        </h1>

        <p className="mt-6 text-base sm:text-lg text-stone-300 max-w-2xl mx-auto leading-relaxed">
          {subheadline}
        </p>
      </div>
    </section>
  );
}
