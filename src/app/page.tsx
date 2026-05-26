import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { ValueProps } from "@/components/ValueProps";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <ValueProps />
        <NewsletterSignup />
      </main>
      <Footer />
    </>
  );
}
