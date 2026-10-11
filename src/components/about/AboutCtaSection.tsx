import Link from "next/link";

interface AboutCtaSectionProps {
  reserveLabel: string;
  menuLabel: string;
}

export default function AboutCtaSection({
  reserveLabel,
  menuLabel,
}: AboutCtaSectionProps) {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-[#0d0c0e]">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255, 77, 148, 0.3) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <div className="rounded-3xl border border-pink-500/20 bg-gradient-to-b from-[#18151e] to-[#121015] p-8 sm:p-14 shadow-2xl backdrop-blur-xl">
          <span className="text-xs uppercase tracking-widest text-pink-400 font-semibold">
            Herzlich Willkommen
          </span>

          <h2 className="mt-3 text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Bereit für Ihre persönliche süße Auszeit?
          </h2>

          <p className="mt-4 text-stone-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Kommen Sie vorbei, nehmen Sie Platz und lassen Sie sich von unserem Team mit
            duftendem Kaffee und handgefertigter Patisserie verwöhnen.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/kontakt"
              className="rounded-full bg-pink-500 px-7 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(255,77,148,0.4)] transition-all duration-300 hover:bg-pink-400 hover:scale-105 active:scale-95"
            >
              {reserveLabel}
            </Link>

            <Link
              href="/speisekarte"
              className="rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-stone-200 transition-all duration-300 hover:bg-white/10 hover:border-pink-500/40 hover:text-white"
            >
              {menuLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
