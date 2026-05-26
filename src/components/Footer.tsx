const LINKEDIN_URL = "https://www.linkedin.com/in/carmin-montante15/";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--line)] px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-[var(--dim)]">
          &copy; {year} Carmin C.L. Montante, PhD
        </p>

        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent-light)]"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
