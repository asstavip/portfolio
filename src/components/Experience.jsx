import { useInView } from "../hooks/useInView";
import { EXPERIENCE } from "../data/portfolioConfig";

// Sort experience by assuming "Present" is currently active, and year parsing
const sortedExperience = [...EXPERIENCE].sort((a, b) => {
  const getYear = (str) => {
    if (str.toLowerCase().includes("present")) return 9999;
    const match = str.match(/\b(20\d{2})\b/g);
    return match ? Math.max(...match.map(Number)) : 0;
  };
  return getYear(b.period) - getYear(a.period);
});

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      <div className="section-container max-w-[1000px]">
        {/* Section Header */}
        <div className={`flex items-center gap-3 mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <h2 className="text-sm font-[var(--font-heading)] tracking-[0.3em] uppercase text-accent">Experience & Education</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent/50 via-accent/20 to-transparent -translate-x-1/2" />

          {sortedExperience.map((item, i) => {
            const isLeft = i % 2 === 0;
            const stepNumber = String(i + 1).padStart(2, "0");

            return (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row items-start mb-16 last:mb-0 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Timeline Dot & Number */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10 flex flex-col items-center bg-bg-primary py-2">
                  <span className="text-[10px] font-[var(--font-mono)] text-accent mb-2 tracking-widest">{stepNumber}</span>
                  <div className={`w-4 h-4 rounded-full border-2 ${item.type === "education" ? "border-accent-light bg-accent-light/20" : "border-accent bg-accent/20"} transition-all duration-300 relative`}>
                    <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-accent" />
                  </div>
                </div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${isLeft ? "md:pr-8 md:mr-auto" : "md:pl-8 md:ml-auto md:mt-12"}`}>
                  <div className="glass-card glow-border p-7 group relative overflow-hidden">
                    {/* Subtle bg highlight on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      {/* Meta header */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`px-2.5 py-1 text-[9px] font-[var(--font-heading)] tracking-[0.2em] uppercase rounded-sm ${item.type === "education" ? "bg-accent-light/10 text-accent-light border border-accent-light/20" : "bg-accent/10 text-accent border border-accent/20"}`}>
                          {item.type === "education" ? "🎓 Education" : "💼 Work"}
                        </span>
                        <span className="text-text-muted/70 text-[11px] font-[var(--font-mono)] uppercase tracking-wider">{item.period}</span>
                      </div>

                      {/* Content */}
                      <h3 className="font-[var(--font-heading)] text-lg tracking-wider uppercase text-text-primary group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-text-primary/90 text-[13px] font-[var(--font-heading)] tracking-wider mt-1.5 mb-4 border-b border-border/50 pb-4 inline-block">
                        {item.organization}
                      </p>
                      <p className="text-text-secondary text-[13px] leading-[1.8]">
                        {item.description}
                      </p>
                    </div>
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
