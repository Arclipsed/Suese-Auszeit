interface ButtonProps {
  /** Text displayed inside the button */
  label: string;
  /** Click handler */
  onClick?: () => void;
  /** Visual variant */
  variant?: "primary" | "secondary" | "ghost";
  /** Disables the button and shows reduced opacity */
  disabled?: boolean;
  /** Accessible type attribute */
  type?: "button" | "submit" | "reset";
}

const VARIANT_CLASSES: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200",
  secondary:
    "border border-zinc-300 text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-800",
  ghost:
    "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800",
};

/**
 * Generic Button primitive.
 *
 * @example
 * <Button label="Sign in" variant="primary" onClick={handleSignIn} />
 */
export default function Button({
  label,
  onClick,
  variant = "primary",
  disabled = false,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={[
        "inline-flex items-center justify-center rounded-lg px-5 py-2.5",
        "text-sm font-medium transition-colors duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500",
        "disabled:pointer-events-none disabled:opacity-50",
        VARIANT_CLASSES[variant],
      ].join(" ")}
    >
      {label}
    </button>
  );
}
