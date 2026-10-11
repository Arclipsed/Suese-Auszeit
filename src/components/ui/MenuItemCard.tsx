// Client component because framer-motion utilizes motion animation hooks
"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { Clock } from "lucide-react";

export interface MenuItemCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  imageUrl: string;
  isVegetarian?: boolean;
  name: string;
  price: string | number;
  originalPrice?: string | number;
  quantity?: string;
  prepTimeInMinutes?: number;
  onAdd?: () => void;
  badge?: string;
  prepText?: string;
}

export const MenuItemCard = React.forwardRef<HTMLDivElement, MenuItemCardProps>(
  (
    {
      className,
      imageUrl,
      isVegetarian = true,
      name,
      price,
      originalPrice,
      quantity,
      prepTimeInMinutes,
      onAdd,
      badge,
      prepText,
      ...props
    },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "relative flex flex-col w-full overflow-hidden rounded-2xl border border-white/10 bg-[#141217] text-stone-100 shadow-xl group hover:border-pink-500/40 hover:shadow-[0_0_25px_rgba(255,77,148,0.18)] transition-all",
          className
        )}
        {...props}
      >
        {/* Image Container with seamless bottom background matching card */}
        <div className="relative overflow-hidden aspect-[4/3] w-full bg-[#141217]">
          <img
            src={imageUrl}
            alt={name}
            className="block w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          {/* Smooth black gradient overlay fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#141217] via-[#141217]/30 to-transparent pointer-events-none" />

          {/* Badges top bar */}
          <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
            {badge ? (
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-pink-500/85 backdrop-blur-md text-white shadow-[0_0_10px_rgba(255,77,148,0.4)]">
                {badge}
              </span>
            ) : <span />}

            {isVegetarian && (
              <div
                className="size-6 border border-emerald-500/60 bg-black/60 backdrop-blur-md flex items-center justify-center rounded-lg"
                title="Vegetarisch / Vegan"
              >
                <div className="size-2.5 rounded-full bg-emerald-400" />
              </div>
            )}
          </div>
        </div>

        {/* Content Section - pulled up by 12px over the bottom gradient to eliminate any possible line gap */}
        <div className="relative z-10 -mt-3 flex flex-col flex-grow p-5 pt-3 bg-[#141217] text-left">
          {/* Pricing & Quantity */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-baseline gap-2 shrink-0 whitespace-nowrap">
              <span className="text-xl font-bold font-serif text-white whitespace-nowrap">
                {typeof price === "number" ? `${price.toFixed(2)}\u00A0€` : price}
              </span>
              {originalPrice && (
                <span className="text-xs line-through text-stone-500 whitespace-nowrap">
                  {typeof originalPrice === "number" ? `${originalPrice.toFixed(2)}\u00A0€` : originalPrice}
                </span>
              )}
            </div>

            {quantity && (
              <span className="text-xs font-medium text-pink-400/90 text-right leading-tight break-words">
                {quantity}
              </span>
            )}
          </div>

          {/* Item Name with generous bottom margin to the divider line */}
          <h3 className="mt-2 mb-5 text-base font-semibold leading-snug text-stone-100 group-hover:text-pink-300 transition-colors">
            {name}
          </h3>

          {/* Footer Info - Always anchored at the bottom */}
          {prepTimeInMinutes && (
            <div className="flex items-center gap-1.5 mt-auto pt-3 border-t border-white/5 text-xs text-stone-400">
              <Clock className="size-3.5 text-stone-500 shrink-0" />
              <span className="truncate">
                {prepText
                  ? prepText.replace("{prepTime}", String(prepTimeInMinutes))
                  : `Frisch serviert in ca. ${prepTimeInMinutes} Min.`}
              </span>
            </div>
          )}
        </div>
      </motion.div>
    );
  }
);

MenuItemCard.displayName = "MenuItemCard";

export default MenuItemCard;
