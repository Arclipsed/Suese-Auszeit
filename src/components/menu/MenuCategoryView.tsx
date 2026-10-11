// Needs useState for interactive category tab filter
"use client";

import { useState } from "react";
import MenuItemCard from "@/components/ui/MenuItemCard";
import { ALL_MENU_ITEMS, MENU_CATEGORIES } from "@/lib/menuData";
import { cn } from "@/lib/utils";

interface MenuCategoryViewProps {
  categories?: Record<string, string>;
}

export default function MenuCategoryView({ categories }: MenuCategoryViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("alle");

  const filteredItems =
    selectedCategory === "alle"
      ? ALL_MENU_ITEMS
      : ALL_MENU_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="flex flex-col space-y-12">
      {/* Category Pills Filter Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {MENU_CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.id;
          const displayLabel = categories?.[cat.id] ?? cat.label;

          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={cn(
                "rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer",
                isActive
                  ? "bg-gradient-to-r from-pink-600 to-pink-500 text-white shadow-[0_0_15px_rgba(255,77,148,0.4)] border border-pink-400/40"
                  : "border border-white/10 bg-white/[0.03] text-stone-300 hover:bg-white/[0.08] hover:text-white"
              )}
            >
              {displayLabel}
            </button>
          );
        })}
      </div>

      {/* Grid of Food / Beverage Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
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
    </div>
  );
}
