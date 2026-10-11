import Link from "next/link";
import MenuItemCard from "@/components/ui/MenuItemCard";
import { Sparkles, ArrowRight } from "lucide-react";
import { ALL_MENU_ITEMS } from "@/lib/menuData";

const PREVIEW_ITEMS = ALL_MENU_ITEMS.slice(0, 4);

interface MenuPreviewSectionProps {
  badge: string;
  title: string;
  subtitle: string;
  ctaText: string;
}

export default function MenuPreviewSection({
  badge,
  title,
  subtitle,
  ctaText,
}: MenuPreviewSectionProps) {
  return (
    <section id="karte" className="py-20 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-3.5 py-1 text-xs font-semibold text-pink-300 mb-3">
            <Sparkles className="size-3.5 text-pink-400" />
            <span>{badge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {title}
          </h2>
          <p className="mt-2 text-stone-400 text-sm sm:text-base">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PREVIEW_ITEMS.map((item) => (
            <MenuItemCard
              key={item.name}
              imageUrl={item.imageUrl}
              name={item.name}
              price={item.price}
              originalPrice={item.originalPrice}
              quantity={item.quantity}
              prepTimeInMinutes={item.prepTimeInMinutes}
              badge={item.badge}
              isVegetarian={item.isVegetarian}
            />
          ))}
        </div>

        {/* Button zur vollständigen Speisekarte */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/speisekarte"
            className="inline-flex items-center gap-2.5 rounded-full border border-pink-500/40 bg-pink-500/10 px-7 py-3.5 text-sm font-semibold text-pink-300 shadow-[0_0_20px_rgba(255,77,148,0.2)] hover:bg-gradient-to-r hover:from-pink-600 hover:to-pink-500 hover:text-white hover:shadow-[0_0_25px_rgba(255,77,148,0.5)] transition-all active:scale-95 group"
          >
            <span>{ctaText}</span>
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
