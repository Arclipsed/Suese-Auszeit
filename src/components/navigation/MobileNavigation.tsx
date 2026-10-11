// Needs useState for mobile drawer open/close toggle
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, CalendarHeart } from "lucide-react";

interface MenuItem {
  title: string;
  href: string;
  badge?: string;
  description?: string;
}

interface MobileNavigationProps {
  homeLabel: string;
  menuLabel: string;
  aboutLabel: string;
  contactLabel: string;
  reserveLabel: string;
  menuItems: MenuItem[];
}

export default function MobileNavigation({
  homeLabel,
  menuLabel,
  aboutLabel,
  contactLabel,
  reserveLabel,
  menuItems,
}: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuSubOpen, setIsMenuSubOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
    setIsMenuSubOpen(false);
  };

  return (
    <div className="flex min-[1000px]:hidden items-center">
      {/* Hamburger Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
        aria-expanded={isOpen}
        className="flex size-10 items-center justify-center rounded-xl border border-pink-500/30 bg-white/5 text-stone-200 hover:text-pink-400 hover:bg-white/10 transition-colors"
      >
        {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 top-20 z-40 bg-black/70 backdrop-blur-sm transition-opacity"
          aria-hidden="true"
        />
      )}

      {/* Slide-out Menu Panel */}
      {isOpen && (
        <div className="fixed inset-x-0 top-20 z-50 max-h-[calc(100vh-5rem)] overflow-y-auto border-b border-pink-500/20 bg-[#0f0e13]/95 px-6 py-6 shadow-2xl backdrop-blur-xl">
          <nav className="flex flex-col space-y-4">
            {/* Startseite */}
            <Link
              href="/"
              onClick={closeMenu}
              className="flex items-center justify-between rounded-xl p-3 text-base font-semibold text-white hover:bg-white/5 hover:text-pink-400"
            >
              <span>{homeLabel}</span>
            </Link>

            {/* Speisekarte Accordion */}
            <div className="flex flex-col rounded-xl bg-white/[0.02] border border-white/5">
              <button
                type="button"
                onClick={() => setIsMenuSubOpen(!isMenuSubOpen)}
                className="flex w-full items-center justify-between p-3 text-base font-semibold text-stone-200 hover:text-pink-300"
              >
                <span>{menuLabel}</span>
                <ChevronDown
                  className={`size-4 transition-transform duration-200 text-stone-400 ${
                    isMenuSubOpen ? "rotate-180 text-pink-400" : ""
                  }`}
                />
              </button>

              {isMenuSubOpen && (
                <div className="flex flex-col space-y-2 border-t border-white/5 px-3 py-3">
                  {menuItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={closeMenu}
                      className="flex items-center justify-between rounded-lg p-2 text-sm text-stone-300 hover:bg-white/5 hover:text-pink-300"
                    >
                      <span>{item.title}</span>
                      {item.badge && (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-pink-500/15 text-pink-300 border border-pink-500/30">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Weitere Nav-Links */}
            <Link
              href="/ueber-uns"
              onClick={closeMenu}
              className="flex items-center justify-between rounded-xl p-3 text-base font-semibold text-stone-200 hover:bg-white/5 hover:text-pink-400"
            >
              <span>{aboutLabel}</span>
            </Link>

            <Link
              href="/kontakt"
              onClick={closeMenu}
              className="flex items-center justify-between rounded-xl p-3 text-base font-semibold text-stone-200 hover:bg-white/5 hover:text-pink-400"
            >
              <span>{contactLabel}</span>
            </Link>

            {/* Mobile Call-To-Action Button */}
            <div className="pt-2">
              <Link
                href="/#reservierung"
                onClick={closeMenu}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-600 to-pink-500 py-3 text-sm font-semibold text-white shadow-[0_0_15px_rgba(255,77,148,0.35)]"
              >
                <CalendarHeart className="size-4" />
                <span>{reserveLabel}</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
