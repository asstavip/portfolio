import { FOOTER, PROFILE, NAV_LINKS } from "../data/portfolioConfig";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary/50">
      <div className="max-w-[1280px] mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center">
              <span className="text-white font-bold text-sm font-[var(--font-heading)]">{PROFILE.firstName[0]}</span>
            </div>
            <span className="text-text-muted text-sm font-[var(--font-mono)]">{FOOTER.text}</span>
          </div>

          {/* Nav Links */}
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-text-muted text-xs font-[var(--font-heading)] tracking-wider uppercase hover:text-accent transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Scroll to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center text-accent hover:bg-accent/10 transition-all cursor-pointer"
            aria-label="Scroll to top"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
