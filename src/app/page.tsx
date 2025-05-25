import { About } from "~/components/layout/about";
import { Contact } from "~/components/layout/contact";
import { Experience } from "~/components/layout/experience";
import { Hero } from "~/components/layout/hero";
import { Projects } from "~/components/layout/project";

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </>
  )
}