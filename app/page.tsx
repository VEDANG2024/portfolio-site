import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Positions from "@/components/Positions";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Positions />
        <Achievements />
        <Contact />
      </main>
      <footer className="max-w-4xl mx-auto px-4 sm:px-6 py-10 text-xs text-text-muted border-t border-border-soft">
        Built with Next.js, deployed on Vercel.
      </footer>
    </>
  );
}
