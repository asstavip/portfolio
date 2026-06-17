import { useInView } from "../hooks/useInView";
import { SKILLS } from "../data/portfolioConfig";

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <div className={`flex items-center gap-3 mb-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <h2 className="text-sm font-[var(--font-heading)] tracking-[0.3em] uppercase text-accent">Skills & Technologies</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((skill, i) => (
            <div
              key={skill.name}
              className={`glass-card glow-border p-6 relative group cursor-default transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Icon + Name */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-2xl group-hover:bg-accent/20 group-hover:border-accent/40 group-hover:scale-110 transition-all duration-300">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="font-[var(--font-heading)] text-sm tracking-wider uppercase text-text-primary">{skill.name}</h3>
                  <span className="text-accent text-xs font-[var(--font-mono)]">{skill.level}%</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="h-1.5 bg-bg-primary rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-accent-dark via-accent to-accent-light skill-bar-fill"
                  style={{ width: inView ? `${skill.level}%` : "0%" }}
                />
              </div>

              {/* Pixel corner decoration */}
              <div className="absolute top-2 right-2 flex gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                {[...Array(3)].map((_, j) => (
                  <div key={j} className="w-1.5 h-1.5 bg-accent/40" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
