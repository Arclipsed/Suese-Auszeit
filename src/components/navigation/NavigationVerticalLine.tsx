interface NavigationVerticalLineProps {
  className?: string;
}

export default function NavigationVerticalLine({
  className = "h-5 w-px bg-stone-300",
}: NavigationVerticalLineProps) {
  return <div aria-hidden="true" className={className} />;
}
