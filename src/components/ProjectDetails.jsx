import { useParams, Link, Navigate } from "react-router-dom";
import { PROJECTS } from "../data/portfolioConfig";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === parseInt(id));

  // If project not found, redirect to home
  if (!project) return <Navigate to="/" />;

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <article className="min-h-screen pt-32 pb-24 px-6 relative z-10">
      <div className="max-w-[900px] mx-auto">
        {/* Back Link */}
        <motion.div {...fadeUp(0)} className="mb-8">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-text-muted hover:text-accent transition-colors text-[11px] font-[var(--font-heading)] tracking-[0.2em] uppercase group"
          >
            <svg
              className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </motion.div>

        {/* Header Section */}
        <motion.div {...fadeUp(0.1)} className="space-y-4 mb-12">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="px-3 py-1 text-[10px] font-[var(--font-heading)] tracking-widest uppercase bg-accent/20 border border-accent/30 rounded-full text-accent backdrop-blur-sm">
              {project.category}
            </span>
          </div>
          <h1 className="font-[var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary uppercase tracking-tight">
            {project.title}
          </h1>
        </motion.div>

        {/* Main Image */}
        <motion.div {...fadeUp(0.2)} className="relative w-full aspect-video rounded-xl overflow-hidden glass-card glow-border mb-12">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 border border-accent/10 rounded-xl pointer-events-none" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-12">
          {/* Main Content */}
          <motion.div {...fadeUp(0.3)} className="space-y-8">
            <section>
              <h2 className="text-xl font-[var(--font-heading)] text-text-primary tracking-wider uppercase mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Overview
              </h2>
              <div className="text-text-secondary leading-relaxed space-y-4 text-sm md:text-base">
                <p>{project.description}</p>
                <p>
                  This project demonstrates a thorough understanding of {project.tags.join(", ")} and focuses on creating a seamless user experience while maintaining robust performance under the hood.
                </p>
              </div>
            </section>
          </motion.div>

          {/* Sidebar / Tech Stack */}
          <motion.div {...fadeUp(0.4)} className="space-y-8">
            {/* Tech Stack */}
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-sm font-[var(--font-heading)] text-text-primary tracking-widest uppercase mb-4">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-[11px] font-[var(--font-mono)] tracking-wider bg-bg-secondary border border-border rounded text-text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="glass-card p-6 rounded-xl space-y-4">
              <h3 className="text-sm font-[var(--font-heading)] text-text-primary tracking-widest uppercase mb-4">
                Project Links
              </h3>
              
              {project.liveUrl && project.liveUrl !== "#" ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full p-3 rounded bg-accent/10 text-accent text-xs font-[var(--font-heading)] tracking-wider uppercase border border-accent/20 hover:bg-accent/20 hover:border-accent/40 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              ) : (
                <div className="flex items-center gap-2 p-3 rounded bg-bg-secondary border border-border/50 text-text-muted text-xs font-[var(--font-heading)] tracking-wider uppercase opacity-50 cursor-not-allowed">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                  Live Demo Unavailable
                </div>
              )}

              {project.githubUrl && project.githubUrl !== "#" ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full p-3 rounded bg-bg-secondary text-text-primary text-xs font-[var(--font-heading)] tracking-wider uppercase border border-border hover:border-text-primary/30 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Source Code
                  </span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              ) : (
                <div className="flex items-center gap-2 p-3 rounded bg-bg-secondary border border-border/50 text-text-muted text-xs font-[var(--font-heading)] tracking-wider uppercase opacity-50 cursor-not-allowed">
                  <span className="w-1.5 h-1.5 rounded-full bg-text-muted/50" />
                  Private Repository
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </article>
  );
}
