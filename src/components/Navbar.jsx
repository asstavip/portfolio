import { useState, useEffect } from "react";
import { NAV_LINKS, PROFILE } from "../data/portfolioConfig";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check initial preference from localStorage or default to dark
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 px-4 pointer-events-none transition-all duration-500">
      <nav
        aria-label="Main navigation"
        className={`pointer-events-auto w-full max-w-6xl mx-auto flex items-center justify-between transition-all duration-500 ${
          scrolled ? "py-3" : "py-4"
        }`}
      >
        {/* Logo / Brand */}
        <a href="#" className="flex items-center text-xl font-[var(--font-heading)] font-bold tracking-tight text-text-primary hover:text-accent transition-colors">
          abderrahmane<span className="text-accent">.</span>
        </a>

        {/* Centered Pill Nav (Desktop) */}
        <div className="hidden md:flex items-center gap-2 bg-bg-card/40 backdrop-blur-md border border-white/5 rounded-full px-4 py-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded-full text-[13px] font-[var(--font-body)] text-text-secondary hover:text-text-primary hover:bg-white/5 transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Actions: Theme Toggle + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full bg-bg-card/40 backdrop-blur-md border border-white/5 flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/40 transition-all duration-300"
            aria-label="Toggle Theme"
          >
            {isDark ? (
              // Sun Icon for Dark Mode
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              // Moon Icon for Light Mode
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
          <a
            href={PROFILE.resumeUrl}
            download="Abderrahmane_CV.pdf"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-bg-card/40 backdrop-blur-md text-[13px] font-[var(--font-body)] text-text-primary hover:border-accent/40 hover:text-accent transition-all duration-300"
          >
            <svg className="w-4 h-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer z-50 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[2px] bg-text-primary transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-[8px]" : ""}`} />
          <span className={`block w-6 h-[2px] bg-accent transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[2px] bg-text-primary transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-[8px]" : ""}`} />
        </button>

        {/* Mobile Menu Dropdown */}
        <div
          className={`absolute top-full left-4 right-4 mt-4 bg-bg-card border border-white/10 rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 origin-top shadow-2xl md:hidden ${
            menuOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-[var(--font-body)] text-text-secondary hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center justify-between py-2 border-t border-b border-white/5 mt-2 mb-2">
            <span className="text-sm font-[var(--font-body)] text-text-secondary">Theme</span>
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full bg-bg-primary border border-white/5 flex items-center justify-center text-text-primary"
            >
              {isDark ? "☀️" : "🌙"}
            </button>
          </div>
          <a
            href={PROFILE.resumeUrl}
            download="Abderrahmane_CV.pdf"
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-accent/10 text-accent font-medium text-sm"
          >
            Download Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
