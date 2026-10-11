interface NavigationVerticalLineProps {
  className?: string;
}

export default function NavigationVerticalLine({
  className = "h-5 w-px bg-stone-800",
}: NavigationVerticalLineProps) {
  return <div aria-hidden="true" className={className} />;
}
