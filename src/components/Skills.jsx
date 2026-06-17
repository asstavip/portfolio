import { useInView } from "../hooks/useInView";
import { SKILLS } from "../data/portfolioConfig";

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section id="skills" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <div
          className={`flex items-center gap-3 mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <h2 className="text-sm font-[var(--font-heading)] tracking-[0.3em] uppercase text-accent">
            Skills & Technologies
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent" />
        </div>

        {/* Marquee Container */}
        <div
          className={`relative flex overflow-hidden pause-on-hover transition-all duration-1000 ${
            inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* Fading gradients at edges for smooth blend */}
          <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-bg-primary to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-bg-primary to-transparent z-10 pointer-events-none" />

          {/* First Marquee Track */}
          <div className="flex items-center gap-12 md:gap-20 whitespace-nowrap animate-marquee px-6">
            {SKILLS.map((skill, index) => (
              <div
                key={`marquee-1-${index}`}
                className="flex items-center gap-4 group/skill cursor-pointer"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl glass-card glow-border transition-all duration-300 group-hover/skill:scale-110 group-hover/skill:border-accent p-4">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain filter grayscale opacity-70 group-hover/skill:grayscale-0 group-hover/skill:opacity-100 transition-all duration-300 drop-shadow-md"
                  />
                </div>
                <span className="font-[var(--font-heading)] text-lg tracking-wider text-text-muted group-hover/skill:text-text-primary transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>

          {/* Second Marquee Track (Duplicate for seamless loop) */}
          <div className="flex items-center gap-12 md:gap-20 whitespace-nowrap animate-marquee px-6">
            {SKILLS.map((skill, index) => (
              <div
                key={`marquee-2-${index}`}
                className="flex items-center gap-4 group/skill cursor-pointer"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl glass-card glow-border transition-all duration-300 group-hover/skill:scale-110 group-hover/skill:border-accent p-4">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain filter grayscale group-hover/skill:grayscale-0 transition-all duration-300 drop-shadow-md"
                  />
                </div>
                <span className="font-[var(--font-heading)] text-lg tracking-wider text-text-muted group-hover/skill:text-text-primary transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
