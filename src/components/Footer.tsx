import { SocialLinks } from "@/components/SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--line)] px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-[var(--dim)]">
          &copy; {year} Carmin C.L. Montante, PhD
        </p>

        <SocialLinks />
      </div>
    </footer>
  );
}
