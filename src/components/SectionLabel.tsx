export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-light)]">
        {children}
      </span>
      <span className="h-px w-12 bg-[var(--accent)]/50" />
    </div>
  );
}
