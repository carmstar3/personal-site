import Image from "next/image";
import { SocialLinks } from "@/components/SocialLinks";
import { SectionLabel } from "@/components/SectionLabel";

export function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden px-6 pt-28 pb-16"
    >
      <p
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-serif text-[clamp(5rem,18vw,14rem)] font-bold leading-none tracking-tight text-[var(--text)]/[0.03]"
        aria-hidden="true"
      >
        RESEARCH
      </p>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <SectionLabel>About</SectionLabel>

          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[var(--muted)]">
            Digital Product &amp; Strategy Leader · PwC
          </p>

          <h1 className="font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-[var(--accent-light)]">Carmin C.L.</span>{" "}
            <span className="text-[var(--text)]">Montante, PhD</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
            PhD in Economic Studies with 20+ years bridging research, teaching,
            and transformation consulting. I help organizations integrate AI
            responsibly, from Guadalajara to global enterprise.
          </p>

          <blockquote className="mt-6 border-l-2 border-[var(--accent)]/50 pl-4 font-serif text-lg italic leading-relaxed text-[var(--text)]/80">
            &ldquo;Making the world a better place, sharing knowledge one person
            at a time.&rdquo;
          </blockquote>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#newsletter"
              className="inline-flex items-center rounded-full bg-[var(--accent)] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[var(--accent)]/25 transition-all hover:bg-[var(--accent-light)] hover:shadow-[var(--accent)]/40"
            >
              Join the newsletter
            </a>
            <a
              href="#research"
              className="inline-flex items-center rounded-full border border-[var(--line)] px-8 py-3.5 text-sm font-semibold text-[var(--text)] transition-colors hover:border-[var(--accent)]/50 hover:text-[var(--accent-light)]"
            >
              View research
            </a>
          </div>

          <SocialLinks className="mt-8" />
        </div>

        <div className="relative order-1 flex justify-center lg:order-2 lg:justify-end">
          <div
            className="absolute -right-4 top-8 h-72 w-72 rounded-full bg-[var(--accent)]/15 blur-3xl lg:h-96 lg:w-96"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-4 left-4 h-4 w-4 rounded-full bg-[var(--accent)]/60"
            aria-hidden="true"
          />
          <div
            className="absolute right-8 top-12 h-3 w-3 rounded-full bg-[var(--accent-light)]/80"
            aria-hidden="true"
          />

          <div className="relative">
            <div
              className="absolute -inset-3 rounded-full border border-[var(--accent)]/20"
              aria-hidden="true"
            />
            <div
              className="absolute -inset-6 rounded-full border border-[var(--line)]"
              aria-hidden="true"
            />
            <Image
              src="/carmin-headshot.png"
              alt="Carmin C.L. Montante, PhD"
              width={400}
              height={400}
              priority
              className="relative h-64 w-64 rounded-full object-cover shadow-2xl shadow-[var(--accent)]/20 sm:h-80 sm:w-80 lg:h-96 lg:w-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
