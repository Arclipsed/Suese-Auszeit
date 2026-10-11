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
              isActive && "font-semibold text-stone-900 bg-stone-100"
            )}
          >
            {label}
          </Link>
        }
      />
    </NavigationMenuItem>
  );
}
