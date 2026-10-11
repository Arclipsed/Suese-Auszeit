"use client";

import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/NavigationMenu";
import NavigationSubmenuCard from "@/components/navigation/NavigationSubmenuCard";

interface DropdownItem {
  title: string;
  description: string;
  badge?: string;
  href: string;
}

interface NavigationDropdownItemProps {
  label: string;
  items: DropdownItem[];
  highlight?: {
    tag: string;
    title: string;
    description: string;
    href: string;
  };
}

export default function NavigationDropdownItem({
  label,
  items,
  highlight,
}: NavigationDropdownItemProps) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>{label}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid w-[420px] md:w-[540px] grid-cols-1 md:grid-cols-2 gap-2 p-3">
          {highlight && (
            <div className="col-span-1 md:col-span-2 mb-2 p-3.5 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/70">
              <span className="text-[10px] uppercase font-bold tracking-wider text-amber-800">
                {highlight.tag}
              </span>
              <h4 className="text-sm font-semibold text-stone-900 mt-0.5">
                {highlight.title}
              </h4>
              <p className="text-xs text-stone-600 mt-1">
                {highlight.description}
              </p>
            </div>
          )}

          {items.map((item) => (
            <NavigationSubmenuCard
              key={item.title}
              title={item.title}
              description={item.description}
              badge={item.badge}
              href={item.href}
            />
          ))}
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}
