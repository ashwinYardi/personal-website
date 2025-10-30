import { Hero } from "@/components/hero/hero";
import { About } from "@/components/about/about";
import { Achievements } from "@/components/achievements/achievements";
import { Projects } from "@/components/projects/projects";
import { Contact } from "@/components/contact/contact";
import { CompaniesMarquee, TechMarquee } from "@/components/tech/tech-marquee";
import { Blog } from "@/components/blog/blog";

export default function Home() {
  return (
    <>
      <Hero />
      <CompaniesMarquee />
      <TechMarquee />
      <About />
      <Achievements />
      <Projects />
      <Blog />
      <Contact />
    </>
  );
}
