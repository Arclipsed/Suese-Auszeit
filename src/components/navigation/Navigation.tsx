// Needs useState and usePathname to cleanly control menu value and close on navigation
"use client";

import { ReactNode, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuPositioner,
  NavigationMenuPopup,
} from "@/components/ui/NavigationMenu";

interface NavigationProps {
  logo?: ReactNode;
  actions?: ReactNode;
  children: ReactNode;
}

export default function Navigation({ logo, actions, children }: NavigationProps) {
  const [activeMenuValue, setActiveMenuValue] = useState<string | null>(null);
  const pathname = usePathname();

  // Reset menu open state whenever the route/page changes
  useEffect(() => {
    setActiveMenuValue(null);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-pink-500/15 bg-[#0d0c0e]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">{logo}</div>

        <div className="hidden md:flex items-center justify-center">
          <NavigationMenu
            value={activeMenuValue}
            onValueChange={(val) => setActiveMenuValue(val as string | null)}
          >
            <NavigationMenuList>{children}</NavigationMenuList>
            <NavigationMenuPositioner>
              <NavigationMenuPopup />
            </NavigationMenuPositioner>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-3">{actions}</div>
      </div>
    </header>
  );
}
