import { PROFILE } from "../data/portfolioConfig";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-transparent to-bg-primary z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary via-transparent to-bg-primary/80 z-10" />

        {/* Purple orb */}
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-accent/20 blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] rounded-full bg-accent-dark/15 blur-[80px] animate-float" style={{ animationDelay: "3s" }} />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `particle-float ${8 + Math.random() * 12}s linear infinite`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-[1280px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-24">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Tagline */}
          <p className="text-text-secondary text-sm md:text-base font-[var(--font-mono)] tracking-wide animate-fade-in uppercase">
            {PROFILE.tagline}
          </p>

          {/* Signature area */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-text-muted text-xs font-[var(--font-mono)] tracking-widest uppercase mb-2">
              // portfolio
            </p>
          </div>

          {/* Name */}
          <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <h1 className="font-[var(--font-heading)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none">
              <span className="text-text-primary">{PROFILE.name}</span>
              <br />
              <span className="text-gradient">{PROFILE.nameAccent}</span>
            </h1>
            <p className="text-text-secondary text-lg md:text-xl mt-4 font-[var(--font-heading)] tracking-widest uppercase">
              {PROFILE.title}
            </p>
          </div>

          {/* Large Display Text */}
          <div
            className="animate-slide-up"
            style={{ animationDelay: "0.5s" }}
          >
            <h2 className="font-[var(--font-heading)] text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-black leading-none text-text-primary/[0.04] tracking-tighter select-none pointer-events-none">
              CODE
            </h2>
          </div>

          {/* Quote */}
          <div
            className="max-w-md animate-slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            <blockquote className="relative pl-6 border-l-2 border-accent/40">
              <span className="text-accent text-4xl font-serif absolute -left-1 -top-3">
                &ldquo;
              </span>
              <p className="text-text-secondary text-sm italic font-[var(--font-mono)] leading-relaxed">
                {PROFILE.quote.text}
              </p>
              <footer className="mt-2 text-accent text-xs font-[var(--font-heading)] tracking-wider">
                — {PROFILE.quote.author}
              </footer>
            </blockquote>
          </div>

          {/* Bottom badges */}
          <div
            className="flex flex-wrap items-center gap-6 text-xs font-[var(--font-heading)] tracking-widest uppercase animate-slide-up"
            style={{ animationDelay: "0.8s" }}
          >
            <a
              href="#contact"
              className="flex items-center gap-2 text-accent hover:text-accent-light transition-colors group"
            >
              Available for{" "}
              <span className="text-text-primary font-bold">
                {PROFILE.availableFor}
              </span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <div className="text-text-muted">
              <span className="text-text-secondary">Est.</span>{" "}
              <span className="text-3xl font-black text-text-primary/80">
                {PROFILE.established.slice(0, 2)}
              </span>
              <span className="text-3xl font-black text-text-primary/80">
                {PROFILE.established.slice(2)}
              </span>
            </div>
            <div className="text-text-muted">
              Based in{" "}
              <span className="text-text-secondary">{PROFILE.location}</span>
            </div>
          </div>
        </div>

        {/* Right Column — Hero Image */}
        <div className="relative flex items-center justify-center animate-slide-in-right">
          {/* Glow behind image */}
          <div className="absolute w-[80%] h-[80%] rounded-full bg-accent/10 blur-[80px] animate-pulse-glow" />

          {/* Purple orb accent */}
          <div className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-accent to-accent-dark opacity-30 blur-sm -bottom-10 -left-10 animate-float" />

          {/* Hero image */}
          <img
            src={PROFILE.heroImage}
            alt={`${PROFILE.name} ${PROFILE.nameAccent}`}
            className="relative z-10 w-full max-w-[500px] lg:max-w-[600px] object-contain drop-shadow-[0_0_40px_rgba(139,92,246,0.3)]"
          />

          {/* Pixel decorations */}
          <div className="absolute top-10 right-10 flex gap-1">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-accent/40"
                style={{
                  opacity: Math.random() * 0.5 + 0.2,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
          <div className="absolute bottom-20 left-5 flex flex-col gap-1">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-accent/30"
                style={{ opacity: Math.random() * 0.5 + 0.2 }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "1.2s" }}>
        <span className="text-text-muted text-[10px] font-[var(--font-heading)] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <div className="w-5 h-8 border-2 border-accent/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-accent rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
