const navLinks = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Newsletter", href: "#newsletter" },
] as const;

export function NavBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--line)] bg-[var(--bg)]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#about"
          className="text-sm font-medium tracking-tight text-[var(--text)] transition-colors hover:text-[var(--accent-light)] sm:text-base"
        >
          Carmin C.L. Montante, PhD
        </a>

        <ul className="flex items-center gap-6">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent-light)]"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
