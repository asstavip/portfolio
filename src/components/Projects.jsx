import { useInView } from "../hooks/useInView";
import { PROJECTS } from "../data/portfolioConfig";

function ProjectCard({ project, index, inView }) {
  return (
    <div
      className={`glass-card glow-border overflow-hidden group transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent" />
        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-[10px] font-[var(--font-heading)] tracking-widest uppercase bg-accent/20 border border-accent/30 rounded-full text-accent backdrop-blur-sm">
            {project.category}
          </span>
        </div>
        {/* Hover overlay with links */}
        <div className="absolute inset-0 bg-bg-primary/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.liveUrl && project.liveUrl !== "#" && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all" title="Live Demo">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          )}
          {project.githubUrl && project.githubUrl !== "#" && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all" title="GitHub">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <h3 className="font-[var(--font-heading)] text-lg tracking-wider uppercase text-text-primary group-hover:text-accent transition-colors">{project.title}</h3>
        <p className="text-text-secondary text-sm leading-relaxed line-clamp-2">{project.description}</p>
        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 text-[10px] font-[var(--font-mono)] tracking-wider bg-accent/5 border border-accent/10 rounded text-accent/70">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <div className={`flex items-center justify-between mb-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <h2 className="text-sm font-[var(--font-heading)] tracking-[0.3em] uppercase text-accent">Featured Projects</h2>
          </div>
          <a href="#" className="flex items-center gap-2 text-sm font-[var(--font-heading)] tracking-wider uppercase text-text-secondary hover:text-accent transition-colors group">
            View All
            <div className="w-8 h-8 rounded-full border border-accent/30 flex items-center justify-center group-hover:bg-accent/10 transition-all">
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
