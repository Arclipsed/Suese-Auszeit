import { Coffee, Cake, Clock, Heart } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Coffee,
    title: "Specialty Coffee",
    desc: "Single-Origin Bohnen, aromaschonend geröstet und von Baristas zubereitet.",
  },
  {
    icon: Cake,
    title: "Frische Backkunst",
    desc: "Hausgemachte Törtchen, Kuchen und Desserts mit Liebe zubereitet.",
  },
  {
    icon: Clock,
    title: "Lounge & Chill",
    desc: "Gemütliche Sitzbereiche für entspannte Treffen, Dates oder Arbeit.",
  },
  {
    icon: Heart,
    title: "Herzliche Gastfreundschaft",
    desc: "Eine Wohlfühloase mit moderner Musik und entspannter Atmosphäre.",
  },
] as const;

export default function HighlightsSection() {
  return (
    <section className="py-20 bg-[#121015]/80 border-y border-pink-500/15 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase font-bold tracking-widest text-pink-400">
            Das Konzept
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-2">
            Warum die „Süße Auszeit“ begeistert
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HIGHLIGHTS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col items-start p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-pink-500/40 hover:bg-white/[0.05] hover:shadow-[0_0_25px_rgba(255,77,148,0.15)] transition-all group"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-pink-500/10 text-pink-400 border border-pink-500/20 mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="size-6" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-white mb-2 group-hover:text-pink-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-stone-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
