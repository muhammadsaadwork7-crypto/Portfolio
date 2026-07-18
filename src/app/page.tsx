import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <div className="bg-[#0A0A0A] text-[#F4F4F5] min-h-screen flex flex-col font-sans antialiased select-none">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Services />
        <Projects />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
