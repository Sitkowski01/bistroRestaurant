interface TagBadgeProps {
  children: React.ReactNode;
  variant?: "default" | "pickle" | "citrus" | "outline";
}

export function TagBadge({ children, variant = "default" }: TagBadgeProps) {
  const styles = {
    default: "bg-hultaj-warm text-hultaj-stone",
    pickle: "bg-hultaj-pickle text-white",
    citrus: "bg-hultaj-citrus text-hultaj-ink",
    outline: "bg-transparent text-hultaj-stone border border-hultaj-ink/15",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1.5 text-[0.7rem] tracking-[0.15em] uppercase font-['Space_Grotesk',sans-serif] ${styles[variant]}`}
      style={{ fontWeight: 700 }}
    >
      {children}
    </span>
  );
}
