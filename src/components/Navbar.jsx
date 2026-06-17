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
    <header>
      <nav
        id="navbar"
        aria-label="Main navigation"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-bg-primary/85 backdrop-blur-xl border-b border-white/[0.04]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto flex items-center justify-between px-6 lg:px-8 py-4">
          {/* ── Identity block: initial badge + stacked name ── */}
          <a href="#" className="flex items-center gap-3 group" id="nav-logo">
            <div className="w-9 h-9 rounded-full bg-accent/90 flex items-center justify-center shrink-0">
              <span className="text-white font-semibold text-sm font-[var(--font-heading)]">
                A
              </span>
            </div>
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-text-primary text-[13px] font-medium tracking-wide">
                Abderrahmane
              </span>
              <span className="text-text-muted text-[11px] tracking-wider">
                El Bissari
              </span>
            </div>
          </a>

          {/* ── Desktop nav links ── */}
          <ul className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-text-secondary text-[12px] font-[var(--font-heading)] tracking-[0.15em] uppercase hover:text-accent transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* ── Hamburger ── */}
          <button
            id="nav-menu-toggle"
            className="md:hidden flex flex-col gap-1.5 cursor-pointer z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-accent transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>

          {/* ── Mobile menu ── */}
          <div
            className={`fixed inset-0 bg-bg-primary/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${
              menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-[var(--font-heading)] tracking-wider uppercase text-text-secondary hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
