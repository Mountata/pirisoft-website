import Navbar   from "./components/Navbar";
import Hero     from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Mission  from "./components/Mission";
import Team     from "./components/Team";
import Contact  from "./components/Contact";
import Footer   from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Mission />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}