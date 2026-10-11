import { Coffee, Cake, Clock, Sparkles } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Coffee,
    title: "Specialty Coffee",
    desc: "Single-Origin Bohnen, aromaschonend geröstet und von Baristas perfekt zubereitet.",
  },
  {
    icon: Cake,
    title: "Frische Backkunst",
    desc: "Torten, Croissants und Törtchen aus Meisterhand – ganz ohne künstliche Zusätze.",
  },
  {
    icon: Clock,
    title: "Frühstück & Brunch",
    desc: "Vom herzhaften Sauerteigbrot bis zur süßen Granola Bowl für den perfekten Start.",
  },
  {
    icon: Sparkles,
    title: "Auszeit-Atmosphäre",
    desc: "Ein ruhiger Ort zum Entspannen, Lesen oder Verweilen mit Freunden.",
  },
] as const;

export default function HighlightsSection() {
  return (
    <section className="py-16 bg-white border-y border-stone-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-800">
            Das Erlebnis
          </span>
          <h2 className="font-serif text-3xl font-bold text-stone-900 mt-2">
            Warum die „Süße Auszeit“ besonders ist
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {HIGHLIGHTS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col items-start p-6 rounded-2xl bg-stone-50/70 border border-stone-100 hover:border-amber-200 hover:shadow-md transition-all"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-amber-100 text-amber-900 mb-4">
                  <Icon className="size-6" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-stone-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
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
