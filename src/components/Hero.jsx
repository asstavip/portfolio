import { motion } from "framer-motion";
import { PROFILE } from "../data/portfolioConfig";

/* ── Framer Motion helpers ─────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const floatY = (delay = 0) => ({
  animate: { y: [0, -8, 0] },
  transition: { duration: 4, delay, repeat: Infinity, ease: "easeInOut" },
});

/* ── Code editor lines shown in the right-column visual ────── */
const CODE_LINES = [
  { indent: 0, tokens: [{ text: "class ", color: "#c084fc" }, { text: "Developer", color: "#e2e8f0" }, { text: " {", color: "#6b7280" }] },
  { indent: 1, tokens: [{ text: "final ", color: "#c084fc" }, { text: "name", color: "#a78bfa" }, { text: " = ", color: "#6b7280" }, { text: "'Abderrahmane'", color: "#34d399" }, { text: ";", color: "#6b7280" }] },
  { indent: 1, tokens: [{ text: "final ", color: "#c084fc" }, { text: "stack", color: "#a78bfa" }, { text: " = ", color: "#6b7280" }, { text: "['Flutter', 'Python', 'C']", color: "#34d399" }, { text: ";", color: "#6b7280" }] },
  { indent: 0, tokens: [] },
  { indent: 1, tokens: [{ text: "void ", color: "#c084fc" }, { text: "build", color: "#f0abfc" }, { text: "(", color: "#6b7280" }, { text: "Context ctx", color: "#e2e8f0" }, { text: ") {", color: "#6b7280" }] },
  { indent: 2, tokens: [{ text: "return ", color: "#c084fc" }, { text: "App", color: "#e2e8f0" }, { text: "(", color: "#6b7280" }] },
  { indent: 3, tokens: [{ text: "theme: ", color: "#a78bfa" }, { text: "dark", color: "#34d399" }, { text: ",", color: "#6b7280" }] },
  { indent: 3, tokens: [{ text: "passion: ", color: "#a78bfa" }, { text: "true", color: "#f472b6" }, { text: ",", color: "#6b7280" }] },
  { indent: 2, tokens: [{ text: ");", color: "#6b7280" }] },
  { indent: 1, tokens: [{ text: "}", color: "#6b7280" }] },
  { indent: 0, tokens: [{ text: "}", color: "#6b7280" }] },
];

/* ── Floating tech badges ──────────────────────────────────── */
const BADGES = [
  { label: "Flutter", x: "-10%", y: "15%", delay: 0 },
  { label: "Python",  x: "85%",  y: "25%", delay: 1.2 },
  { label: "C",       x: "5%",   y: "78%", delay: 0.6 },
];

/* ── Component ─────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── BG effects ──────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-transparent to-bg-primary z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary via-transparent to-bg-primary/80 z-10" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full bg-accent/15 blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/3 w-[200px] h-[200px] rounded-full bg-accent-dark/10 blur-[80px] animate-float" style={{ animationDelay: "3s" }} />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ── Content grid ────────────────────────────────────── */}
      <div className="relative z-20 max-w-[1280px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-28 pb-20 lg:pt-32">
        {/* ── LEFT COLUMN ────────────────────────────────────── */}
        <div className="space-y-7">
          {/* Eyebrow */}
          <motion.p
            {...fadeUp(0)}
            className="text-text-muted text-xs font-[var(--font-mono)] tracking-widest uppercase"
          >
            // portfolio
          </motion.p>

          {/* Headline */}
          <div>
            <motion.h1
              {...fadeUp(0.1)}
              className="font-[var(--font-heading)] text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] font-black tracking-tight leading-[1.05]"
            >
              <span className="text-text-primary">{PROFILE.firstName}</span>
            </motion.h1>
            <motion.h1
              {...fadeUp(0.2)}
              className="font-[var(--font-heading)] text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] font-black tracking-tight leading-[1.05] text-gradient"
            >
              {PROFILE.lastName}
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            {...fadeUp(0.3)}
            className="text-text-secondary text-sm md:text-base font-[var(--font-heading)] tracking-[0.25em] uppercase"
          >
            {PROFILE.title}
          </motion.p>

          {/* Value prop */}
          <motion.p
            {...fadeUp(0.4)}
            className="text-text-muted text-sm md:text-base leading-relaxed max-w-lg"
          >
            {PROFILE.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            {...fadeUp(0.5)}
            className="flex flex-wrap gap-4 pt-1"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168,85,247,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-gradient-to-r from-accent-dark to-accent text-white text-sm font-[var(--font-heading)] tracking-wider uppercase transition-shadow shadow-lg shadow-accent/20"
            >
              View Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>

            <motion.a
              href={PROFILE.resumeUrl}
              download
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168,85,247,0.25)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg border border-accent/40 text-accent text-sm font-[var(--font-heading)] tracking-wider uppercase hover:bg-accent/10 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </motion.a>
          </motion.div>

          {/* Footer row */}
          <motion.div
            {...fadeUp(0.6)}
            className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-[var(--font-heading)] tracking-widest uppercase text-text-muted pt-2"
          >
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available for{" "}
              <span className="text-text-secondary font-semibold">{PROFILE.availableFor}</span>
            </span>
            <span className="text-accent/30">|</span>
            <span>
              Based in{" "}
              <span className="text-text-secondary">{PROFILE.location}</span>
            </span>
            <span className="text-accent/30">|</span>
            <span>
              Student at{" "}
              <span className="text-text-secondary">{PROFILE.school}</span>
            </span>
          </motion.div>
        </div>

        {/* ── RIGHT COLUMN — Code editor visual ──────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center justify-center"
        >
          {/* Glow */}
          <div className="absolute w-[80%] h-[70%] rounded-3xl bg-accent/8 blur-[60px]" />

          {/* Code editor card */}
          <div className="relative w-full max-w-[480px] rounded-2xl border border-border overflow-hidden bg-[#0d0d14] shadow-2xl shadow-accent/10">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#111118] border-b border-border">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <span className="ml-3 text-text-muted text-[11px] font-[var(--font-mono)]">
                developer.dart
              </span>
              <div className="ml-auto flex gap-3">
                <span className="text-text-muted/40 text-[10px] font-[var(--font-mono)]">Dart</span>
              </div>
            </div>

            {/* Code content */}
            <div className="p-5 font-[var(--font-mono)] text-[13px] leading-[1.8] overflow-hidden">
              {CODE_LINES.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.06, duration: 0.4 }}
                  className="flex"
                  style={{ paddingLeft: `${line.indent * 1.5}rem` }}
                >
                  {/* Line number */}
                  <span className="w-7 text-right mr-4 text-text-muted/30 select-none text-[11px]">
                    {i + 1}
                  </span>
                  {/* Tokens */}
                  <span>
                    {line.tokens.map((tok, j) => (
                      <span key={j} style={{ color: tok.color }}>
                        {tok.text}
                      </span>
                    ))}
                    {line.tokens.length === 0 && "\u00A0"}
                  </span>
                </motion.div>
              ))}

              {/* Blinking cursor */}
              <motion.div
                className="flex"
                style={{ paddingLeft: "0rem" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
              >
                <span className="w-7 text-right mr-4 text-text-muted/30 select-none text-[11px]">
                  12
                </span>
                <span className="w-2 h-5 bg-accent/70 animate-pulse rounded-sm" />
              </motion.div>
            </div>

            {/* Status bar */}
            <div className="flex items-center justify-between px-4 py-1.5 bg-[#111118] border-t border-border text-[10px] font-[var(--font-mono)] text-text-muted/50">
              <span>UTF-8</span>
              <span>Ln 12, Col 1</span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Ready
              </span>
            </div>
          </div>

          {/* ── Floating tech badges ─────────────────────────── */}
          {BADGES.map((badge) => (
            <motion.div
              key={badge.label}
              {...floatY(badge.delay)}
              className="absolute px-3 py-1.5 rounded-full bg-bg-card/80 border border-border backdrop-blur-sm text-[11px] font-[var(--font-heading)] tracking-wider uppercase text-accent-light shadow-lg shadow-accent/5"
              style={{ left: badge.x, top: badge.y }}
            >
              {badge.label}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll indicator ────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-text-muted text-[10px] font-[var(--font-heading)] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <div className="w-5 h-8 border-2 border-accent/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-accent rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
