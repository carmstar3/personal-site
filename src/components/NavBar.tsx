"use client";

import { useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Newsletter", href: "#newsletter" },
] as const;

function BrandName({ className = "" }: { className?: string }) {
  return (
    <span className={className}>
      <span className="text-[var(--accent-light)]">Carmin C.L.</span>{" "}
      <span className="text-[var(--text)]">Montante, PhD</span>
    </span>
  );
}

export function NavBar() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--line)] bg-[var(--bg)]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#about"
          className="text-sm font-medium tracking-tight transition-opacity hover:opacity-80 sm:text-base"
          onClick={closeMenu}
        >
          <BrandName />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
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

        <div className="flex items-center gap-3">
          <a
            href="#newsletter"
            className="hidden rounded-full bg-[var(--accent)] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-light)] sm:inline-flex"
          >
            Subscribe
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--line)] text-[var(--muted)] transition-colors hover:border-[var(--accent)]/40 hover:text-[var(--text)] md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-[var(--line)] bg-[var(--bg)]/95 px-6 py-4 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="block text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent-light)]"
                  onClick={closeMenu}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#newsletter"
                className="inline-flex rounded-full bg-[var(--accent)] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-light)]"
                onClick={closeMenu}
              >
                Subscribe
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
