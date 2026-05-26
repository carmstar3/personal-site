const pillars = [
  {
    title: "Empirical Research",
    description:
      "Published research on regional economic growth, causal impact of policy, and community development — grounded in data from academia and public-sector consulting.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
  {
    title: "AI Integration",
    description:
      "Led AI-driven automation at PwC and F5 — from payment processing and ledger control to customer analytics — delivering 15–40% efficiency gains in production workflows.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
  },
  {
    title: "AI Governance & Ethics",
    description:
      "Writing and advising on how governance is embedded in procurement, platforms, and infrastructure — not just compliance — for project leaders and tech strategists.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
] as const;

export function ValueProps() {
  return (
    <section id="research" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="font-serif text-3xl tracking-tight text-[var(--text)] sm:text-4xl">
            Where research meets practice
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--muted)]">
            From university faculty and published economic research to enterprise
            AI transformation at PwC — three pillars define my work.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map(({ title, description, icon }) => (
            <article
              key={title}
              className="group rounded-2xl border border-[var(--line)] bg-[var(--bg-card)] p-8 transition-colors hover:border-[var(--accent)]/40"
            >
              <div className="mb-5 inline-flex rounded-lg bg-[var(--accent)]/15 p-3 text-[var(--accent-light)] transition-colors group-hover:bg-[var(--accent)]/25">
                {icon}
              </div>
              <h3 className="mb-3 text-lg font-semibold text-[var(--text)]">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
