import { useInView } from "../hooks/useInView";
import { PROJECTS_42 } from "../data/portfolioConfig";

export default function Student42Projects() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="1337-projects" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <div
          className={`flex items-center gap-3 mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <h2 className="text-sm font-[var(--font-heading)] tracking-[0.3em] uppercase text-accent">
            1337 / 42 Network Projects
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent" />
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {inView &&
            PROJECTS_42.map((project, index) => (
              <div
                key={index}
                className="glass-card p-6 flex flex-col h-full group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-bg-primary border border-white/10 flex items-center justify-center text-accent font-mono font-bold text-lg group-hover:border-accent/40 transition-colors">
                    {">_"}
                  </div>
                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-text-primary transition-colors z-10 relative"
                        aria-label="GitHub Repository"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    )}
                    {project.score && (
                      <span className="text-xs font-mono font-semibold px-2 py-1 bg-green-500/10 text-green-400 border border-green-500/20 rounded-md">
                        {project.score}
                      </span>
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold font-[var(--font-heading)] text-text-primary mb-3">
                  {project.name}
                </h3>
                
                <p className="text-sm text-text-secondary font-[var(--font-body)] leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono tracking-wider px-2.5 py-1 bg-bg-primary text-text-muted border border-white/5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
