import { useState, useEffect } from "react";
import { NAV_LINKS, PROFILE } from "../data/portfolioConfig";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg-primary/90 backdrop-blur-xl border-b border-border shadow-lg shadow-accent-glow/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group"
          id="nav-logo"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center animate-pulse-glow">
            <span className="text-white font-bold text-lg font-[var(--font-heading)]">
              {PROFILE.firstName[0]}
            </span>
          </div>
          <span className="text-text-primary font-[var(--font-heading)] text-sm tracking-widest hidden sm:inline-block group-hover:text-accent transition-colors">
            {PROFILE.firstName} <span className="text-accent">{PROFILE.lastName}</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-text-secondary text-sm font-[var(--font-heading)] tracking-wider uppercase hover:text-accent transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          id="nav-menu-toggle"
          className="md:hidden flex flex-col gap-1.5 cursor-pointer z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-accent transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-bg-primary/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${
            menuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-[var(--font-heading)] tracking-wider uppercase text-text-secondary hover:text-accent transition-colors"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
