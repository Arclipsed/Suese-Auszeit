import Link from "next/link";
import { CalendarHeart } from "lucide-react";

interface NavigationReserveButtonProps {
  label?: string;
  href?: string;
}

export default function NavigationReserveButton({
  label = "Tisch reservieren",
  href = "#reservierung",
}: NavigationReserveButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-600 to-pink-500 px-4 py-2 text-xs font-semibold tracking-wide text-white shadow-[0_0_15px_rgba(255,77,148,0.4)] hover:shadow-[0_0_25px_rgba(255,77,148,0.7)] hover:from-pink-500 hover:to-pink-400 transition-all active:scale-95 border border-pink-400/40"
    >
      <CalendarHeart className="size-3.5 text-pink-100" />
      <span>{label}</span>
    </Link>
  );
}
