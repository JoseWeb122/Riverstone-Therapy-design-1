import Header from "./components/Header";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Services from "./components/Services";
import Approach from "./components/Approach";
import Steps from "./components/Steps";
import About from "./components/About";
import Qualities from "./components/Qualities";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-ivory font-sans text-ink">
      {/* Accessibility: skip straight to content */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[110] focus:rounded-full focus:bg-pine focus:px-5 focus:py-2.5 focus:text-sm focus:font-bold focus:text-ivory"
      >
        Skip to content
      </a>

      <Header />

      <main>
        <Hero />
        <Intro />
        <Services />
        <Approach />
        <Steps />
        <About />
        <Qualities />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
