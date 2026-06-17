import { useInView } from "../hooks/useInView";
import { PROJECTS } from "../data/portfolioConfig";
import { Link } from "react-router-dom";

function ProjectCard({ project, index, inView }) {
  return (
    <div
      className={`glass-card glow-border overflow-hidden group transition-all duration-700 flex flex-col ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Image with Link */}
      <Link to={`/project/${project.id}`} className="relative h-56 overflow-hidden block">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent" />
        
        {/* Category badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 text-[10px] font-[var(--font-heading)] tracking-widest uppercase bg-accent/20 border border-accent/30 rounded-full text-accent backdrop-blur-sm">
            {project.category}
          </span>
        </div>
        
        {/* Hover overlay with quick links */}
        <div className="absolute inset-0 bg-bg-primary/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="w-12 h-12 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all shadow-[0_0_15px_rgba(168,85,247,0.3)]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <Link to={`/project/${project.id}`}>
          <h3 className="font-[var(--font-heading)] text-lg tracking-wider uppercase text-text-primary group-hover:text-accent transition-colors">
            {project.title}
          </h3>
        </Link>
        <p className="text-text-secondary text-sm leading-relaxed line-clamp-2 mt-3 flex-1">
          {project.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-[10px] font-[var(--font-mono)] tracking-wider bg-accent/5 border border-accent/10 rounded text-accent/70"
            >
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
        <div
          className={`flex items-center justify-between mb-12 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <h2 className="text-sm font-[var(--font-heading)] tracking-[0.3em] uppercase text-accent">
              Featured Projects
            </h2>
          </div>
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
