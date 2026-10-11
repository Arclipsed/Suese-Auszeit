import * as React from "react";
import { cn } from "@/lib/utils";

export interface FooterLink {
  title: string;
  href: string;
}

export interface SocialLink {
  icon: React.ReactNode;
  link: string;
  label?: string;
}

export interface MinimalFooterProps {
  brandNode?: React.ReactNode;
  brandDescription?: string;
  primaryColumnTitle?: string;
  primaryLinks?: FooterLink[];
  secondaryColumnTitle?: string;
  secondaryLinks?: FooterLink[];
  socialLinks?: SocialLink[];
  copyrightText?: string;
  craftedWithLove?: string;
  className?: string;
}

export function MinimalFooter({
  brandNode,
  brandDescription,
  primaryColumnTitle = "Navigation",
  primaryLinks = [],
  secondaryColumnTitle = "Rechtliches",
  secondaryLinks = [],
  socialLinks = [],
  copyrightText,
  craftedWithLove,
  className,
}: MinimalFooterProps) {
  // Default year without calling dynamic new Date() during static prerender
  const currentYear = 2026;

  return (
    <footer className={cn("relative mt-auto border-t border-pink-500/15 bg-[#09080b]", className)}>
      <div className="bg-[radial-gradient(45%_80%_at_50%_0%,rgba(255,77,148,0.08),transparent)] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand & Socials */}
          <div className="col-span-1 md:col-span-6 flex flex-col gap-4">
            {brandNode}
            {brandDescription && (
              <p className="text-sm text-stone-400 max-w-sm leading-relaxed">
                {brandDescription}
              </p>
            )}
            {socialLinks.length > 0 && (
              <div className="flex gap-2.5 pt-2">
                {socialLinks.map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    aria-label={item.label || "Social Link"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-stone-300 hover:text-pink-400 hover:border-pink-500/30 hover:bg-white/[0.08] transition-all"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Links Column 1 */}
          <div className="col-span-1 md:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-pink-400">
              {primaryColumnTitle}
            </span>
            <div className="flex flex-col gap-2">
              {primaryLinks.map(({ href, title }) => (
                <a
                  key={title}
                  href={href}
                  className="text-sm text-stone-400 hover:text-pink-300 transition-colors w-max"
                >
                  {title}
                </a>
              ))}
            </div>
          </div>

          {/* Links Column 2 */}
          <div className="col-span-1 md:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-pink-400">
              {secondaryColumnTitle}
            </span>
            <div className="flex flex-col gap-2">
              {secondaryLinks.map(({ href, title }) => (
                <a
                  key={title}
                  href={href}
                  className="text-sm text-stone-400 hover:text-pink-300 transition-colors w-max"
                >
                  {title}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {currentYear} {copyrightText || "Süße Auszeit. Alle Rechte vorbehalten."}</p>
          <p className="text-stone-600">
            {craftedWithLove || "Handcrafted with love & coffee by the water."}
          </p>
        </div>
      </div>
    </footer>
  );
}
export default MinimalFooter;
