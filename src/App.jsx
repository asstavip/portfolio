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
import SectionDivider from "./components/SectionDivider";
import Student42Projects from "./components/Student42Projects";

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
      
      {/* SOLID SECTION: About */}
      <SectionDivider type={1} className="text-bg-secondary relative z-10" flip={false} />
      <div className="bg-bg-secondary relative z-10">
        <About />
      </div>
      <SectionDivider type={2} className="text-bg-secondary relative z-10" flip={true} />
      
      {/* TRANSPARENT SECTION: Skills */}
      <Skills />
      
      {/* SOLID SECTION: Projects */}
      <SectionDivider type={3} className="text-bg-secondary relative z-10" flip={false} />
      <div className="bg-bg-secondary relative z-10">
        <Projects />
      </div>
      <SectionDivider type={4} className="text-bg-secondary relative z-10" flip={true} />
      
      {/* TRANSPARENT SECTION: 42 Student Projects */}
      <Student42Projects />
      
      {/* SOLID SECTION: Experience */}
      <SectionDivider type={1} className="text-bg-secondary relative z-10" flip={false} />
      <div className="bg-bg-secondary relative z-10">
        <Experience />
      </div>
      <SectionDivider type={2} className="text-bg-secondary relative z-10" flip={true} />
      
      {/* TRANSPARENT SECTION: Contact */}
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
