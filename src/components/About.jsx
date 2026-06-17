import { useInView } from "../hooks/useInView";
import { ABOUT } from "../data/portfolioConfig";

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="section-container">
        <div className={`glass-card p-8 md:p-12 relative overflow-hidden transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <h2 className="text-sm font-[var(--font-heading)] tracking-[0.3em] uppercase text-accent">{ABOUT.heading}</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-[var(--font-heading)] font-bold text-gradient leading-tight">{ABOUT.highlight}</h3>
              <p className="text-text-secondary leading-relaxed text-base md:text-lg">{ABOUT.description}</p>
            </div>
            <div className="space-y-4">
              {ABOUT.bullets.map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 group-hover:border-accent/60 transition-all duration-300">
                    <svg className="w-3.5 h-3.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <span className="text-text-secondary text-sm font-[var(--font-heading)] tracking-wider uppercase group-hover:text-text-primary transition-colors">{item}</span>
                </div>
              ))}
              <a href="#projects" className="inline-flex items-center gap-2 mt-4 text-sm font-[var(--font-heading)] tracking-wider uppercase text-accent hover:text-accent-light transition-colors group">
                View More
                <div className="w-8 h-8 rounded-full border border-accent/40 flex items-center justify-center group-hover:bg-accent/10 transition-all">
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
