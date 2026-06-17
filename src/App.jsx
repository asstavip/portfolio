import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import ParticleBackground from "./components/ParticleBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetails from "./components/ProjectDetails";

const particlesInit = async (engine) => {
  await loadSlim(engine);
};

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Layout containing global background + navbar/footer
function Layout({ children }) {
  return (
    <div className="relative min-h-screen flex flex-col">
      <ParticleBackground />
      <div className="noise-overlay" />
      <div className="relative z-10 flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

// Home page component
function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <ParticlesProvider init={particlesInit}>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/project/:id" element={<Layout><ProjectDetails /></Layout>} />
        </Routes>
      </ParticlesProvider>
    </Router>
  );
}
