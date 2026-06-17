import { useInView } from "../hooks/useInView";
import { EXPERIENCE } from "../data/portfolioConfig";

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <div className={`flex items-center gap-3 mb-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <h2 className="text-sm font-[var(--font-heading)] tracking-[0.3em] uppercase text-accent">Experience & Education</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent" />

          {EXPERIENCE.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row items-start mb-12 last:mb-0 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                  <div className={`w-4 h-4 rounded-full border-2 ${item.type === "education" ? "border-accent-light bg-accent-light/20" : "border-accent bg-accent/20"} transition-all duration-300`}>
                    <div className="w-full h-full rounded-full animate-ping opacity-20 bg-accent" />
                  </div>
                </div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-8 md:mr-auto" : "md:pl-8 md:ml-auto"}`}>
                  <div className="glass-card glow-border p-6 group">
                    {/* Type badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-2 py-0.5 text-[10px] font-[var(--font-heading)] tracking-widest uppercase rounded ${item.type === "education" ? "bg-accent-light/10 text-accent-light border border-accent-light/20" : "bg-accent/10 text-accent border border-accent/20"}`}>
                        {item.type === "education" ? "🎓 Education" : "💼 Work"}
                      </span>
                      <span className="text-text-muted text-xs font-[var(--font-mono)]">{item.period}</span>
                    </div>

                    <h3 className="font-[var(--font-heading)] text-base tracking-wider uppercase text-text-primary group-hover:text-accent transition-colors">{item.title}</h3>
                    <p className="text-accent/70 text-sm font-[var(--font-heading)] tracking-wider mt-1">{item.organization}</p>
                    <p className="text-text-secondary text-sm mt-3 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
