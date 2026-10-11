import Link from "next/link";
import Image from "next/image";

interface NavigationLogoProps {
  cafeName?: string;
  tagline?: string;
}

export default function NavigationLogo({
  cafeName = "Süße Auszeit",
  tagline = "Café & Lounge",
}: NavigationLogoProps) {
  return (
    <Link href="/" className="flex items-center gap-3.5 group select-none">
      <div className="relative size-12 rounded-full overflow-hidden border border-pink-500/40 p-0.5 bg-black shadow-[0_0_15px_rgba(255,77,148,0.35)] group-hover:shadow-[0_0_25px_rgba(255,77,148,0.6)] group-hover:scale-105 transition-all duration-300">
        <Image
          src="/logo.jpg"
          alt="Süße Auszeit Logo"
          fill
          sizes="48px"
          className="object-cover rounded-full"
          priority
        />
      </div>
      <div className="flex flex-col">
        <span className="font-serif text-lg font-bold tracking-tight text-white group-hover:text-pink-300 transition-colors">
          {cafeName}
        </span>
        <span className="text-[10px] font-medium uppercase tracking-widest text-pink-400/90">
          {tagline}
        </span>
      </div>
    </Link>
  );
}
