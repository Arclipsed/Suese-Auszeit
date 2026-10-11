"use client";

import Link from "next/link";
import { NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/NavigationMenu";
import { cn } from "@/lib/utils";

interface NavigationItemProps {
  href: string;
  label: string;
  isActive?: boolean;
}

export default function NavigationItem({
  href,
  label,
  isActive = false,
}: NavigationItemProps) {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink
        render={
          <Link
            href={href}
            className={cn(
              navigationMenuTriggerStyle(),
              isActive && "font-semibold text-pink-400 bg-pink-500/10 shadow-[0_0_12px_rgba(255,77,148,0.2)]"
            )}
          >
            {label}
          </Link>
        }
      />
    </NavigationMenuItem>
  );
}
