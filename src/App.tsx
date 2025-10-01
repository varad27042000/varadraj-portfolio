import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Contact />

      <footer className="bg-slate-900 text-white py-8 text-center">
        <p className="text-slate-400">Designed & Built by Varadraj Kini</p>
      </footer>
    </div>
  );
}

export default App;
