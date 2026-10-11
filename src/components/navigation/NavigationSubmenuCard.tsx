"use client";

import Link from "next/link";
import { NavigationMenuLink } from "@/components/ui/NavigationMenu";

interface NavigationSubmenuCardProps {
  title: string;
  description: string;
  badge?: string;
  href: string;
}

export default function NavigationSubmenuCard({
  title,
  description,
  badge,
  href,
}: NavigationSubmenuCardProps) {
  return (
    <NavigationMenuLink
      render={
        <Link
          href={href}
          className="group block select-none rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-white/5 focus:bg-white/10 border border-transparent hover:border-pink-500/20"
        >
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-sm font-semibold text-stone-200 group-hover:text-pink-300 transition-colors">
              {title}
            </span>
            {badge && (
              <span className="text-[10px] font-medium tracking-wide uppercase px-2 py-0.5 rounded-full bg-pink-500/15 text-pink-300 border border-pink-500/30">
                {badge}
              </span>
            )}
          </div>
          <p className="text-xs text-stone-400 leading-relaxed line-clamp-2">
            {description}
          </p>
        </Link>
      }
    />
  );
}
