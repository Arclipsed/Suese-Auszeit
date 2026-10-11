import Link from "next/link";
import { Coffee } from "lucide-react";

interface NavigationLogoProps {
  cafeName?: string;
  tagline?: string;
}

export default function NavigationLogo({
  cafeName = "Süße Auszeit",
  tagline = "Café & Patisserie",
}: NavigationLogoProps) {
  return (
    <Link href="/" className="flex items-center gap-3 group select-none">
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-700 via-amber-800 to-stone-900 text-white shadow-md shadow-amber-950/20 group-hover:scale-105 transition-transform duration-300">
        <Coffee className="size-5 text-amber-100" />
      </div>
      <div className="flex flex-col">
        <span className="font-serif text-lg font-bold tracking-tight text-stone-900 group-hover:text-amber-900 transition-colors">
          {cafeName}
        </span>
        <span className="text-[11px] font-medium uppercase tracking-widest text-stone-500">
          {tagline}
        </span>
      </div>
    </Link>
  );
}
