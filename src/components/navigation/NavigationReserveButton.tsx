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
      className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-4 py-2 text-xs font-semibold tracking-wide text-white shadow-sm hover:bg-amber-900 transition-all active:scale-95"
    >
      <CalendarHeart className="size-3.5 text-amber-200" />
      <span>{label}</span>
    </Link>
  );
}
