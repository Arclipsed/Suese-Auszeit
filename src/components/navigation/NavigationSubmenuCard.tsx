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
          className="group block select-none rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-stone-100/80 focus:bg-stone-100"
        >
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-sm font-semibold text-stone-900 group-hover:text-amber-800 transition-colors">
              {title}
            </span>
            {badge && (
              <span className="text-[10px] font-medium tracking-wide uppercase px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                {badge}
              </span>
            )}
          </div>
          <p className="text-xs text-stone-500 leading-relaxed line-clamp-2">
            {description}
          </p>
        </Link>
      }
    />
  );
}
