export function Hero() {
  return (
    <section
      id="about"
      className="flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center"
    >
      <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[var(--accent-light)]">
        Digital Product &amp; Strategy Leader · PwC
      </p>

      <h1 className="max-w-4xl font-serif text-4xl leading-tight tracking-tight text-[var(--text)] sm:text-5xl md:text-6xl lg:text-7xl">
        Making the world a better place, sharing knowledge one person at a time.
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
        PhD in Economic Studies with 20+ years bridging research, teaching, and
        transformation consulting. I help organizations integrate AI responsibly,
        from Guadalajara to global enterprise.
      </p>

      <a
        href="#newsletter"
        className="mt-10 inline-flex items-center rounded-full bg-[var(--accent)] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[var(--accent)]/25 transition-all hover:bg-[var(--accent-light)] hover:shadow-[var(--accent)]/40"
      >
        Join the newsletter
      </a>
    </section>
  );
}
