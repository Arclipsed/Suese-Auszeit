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
      ...props
    },
    ref
  ) => {
    const cardVariants = {
      initial: { opacity: 0, y: 15 },
      animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
      hover: { scale: 1.02, transition: { duration: 0.2 } },
    };

    return (
      <motion.div
        ref={ref}
        className={cn(
          "relative flex flex-col w-full overflow-hidden rounded-2xl border border-white/10 bg-[#141217] text-stone-100 shadow-xl group hover:border-pink-500/40 hover:shadow-[0_0_25px_rgba(255,77,148,0.18)] transition-all",
          className
        )}
        variants={cardVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        layout
        {...props}
      >
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-[4/3] w-full">
          <img
            src={imageUrl}
            alt={name}
            className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-108"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141217] via-transparent to-black/20" />

          {/* Badges top bar */}
          <div className="absolute top-3 inset-x-3 flex items-center justify-between">
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

        {/* Content Section */}
        <div className="flex flex-col flex-grow p-5 text-left">
          {/* Pricing & Quantity */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold font-serif text-white">
                {typeof price === "number" ? `${price.toFixed(2)} €` : price}
              </span>
              {originalPrice && (
                <span className="text-xs line-through text-stone-500">
                  {typeof originalPrice === "number" ? `${originalPrice.toFixed(2)} €` : originalPrice}
                </span>
              )}
            </div>

            {quantity && (
              <span className="text-xs font-medium text-pink-400/90">{quantity}</span>
            )}
          </div>

          {/* Item Name */}
          <h3 className="mt-2 text-base font-semibold leading-snug text-stone-100 group-hover:text-pink-300 transition-colors">
            {name}
          </h3>

          {/* Footer Info */}
          {prepTimeInMinutes && (
            <div className="flex items-center gap-1.5 mt-4 pt-3 border-t border-white/5 text-xs text-stone-400">
              <Clock className="size-3.5 text-stone-500" />
              <span>Frisch serviert in ca. {prepTimeInMinutes} Min.</span>
            </div>
          )}
        </div>
      </motion.div>
    );
  }
);

MenuItemCard.displayName = "MenuItemCard";

export default MenuItemCard;
