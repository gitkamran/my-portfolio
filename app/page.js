import About from "@/components/main/about/About";
import ContactMe from "@/components/main/contact-me/ContactMe";
import Ejucation from "@/components/main/ejucation/Ejucation";
import Portfolio from "@/components/main/portfolio/Portfolio";
import Skills from "@/components/main/skills/Skills";

export default function Home() {
  
  return (
    <main className="snap-y">
      <About />
      <Skills />
      <Portfolio />
      <Ejucation />
      <ContactMe />
    </main>
  )
}
