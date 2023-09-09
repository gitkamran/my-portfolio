import About from "@/components/main/about/About";
import Contact from "@/components/main/contact/Contact";
import Ejucation from "@/components/main/ejucation/Ejucation";
import Portfolio from "@/components/main/portfolio/Portfolio";
import Skills from "@/components/main/skills/Skills";

export default function Home() {
  return (
    <main>
      <About />
      <Skills />
      <Portfolio />
      <Ejucation />
      <Contact />
    </main>
  )
}
