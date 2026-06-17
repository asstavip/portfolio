import { motion } from "framer-motion";
import { PROFILE } from "../data/portfolioConfig";

/* ── animation helpers ───────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

/* ── code-editor lines (real Dart, not pseudocode) ───────────── */
const CODE_LINES = [
  { indent: 0, tokens: [
    { t: "import ", c: "#c084fc" }, { t: "'package:flutter/material.dart'", c: "#34d399" }, { t: ";", c: "#4b5563" }
  ]},
  { indent: 0, tokens: [] },
  { indent: 0, tokens: [
    { t: "class ", c: "#c084fc" }, { t: "Portfolio ", c: "#e2e8f0" }, { t: "extends ", c: "#c084fc" },
    { t: "StatelessWidget ", c: "#e2e8f0" }, { t: "{", c: "#4b5563" }
  ]},
  { indent: 1, tokens: [{ t: "@override", c: "#6b7280" }] },
  { indent: 1, tokens: [
    { t: "Widget ", c: "#c084fc" }, { t: "build", c: "#f0abfc" }, { t: "(", c: "#4b5563" },
    { t: "BuildContext context", c: "#e2e8f0" }, { t: ") {", c: "#4b5563" }
  ]},
  { indent: 2, tokens: [
    { t: "return ", c: "#c084fc" }, { t: "MaterialApp", c: "#e2e8f0" }, { t: "(", c: "#4b5563" }
  ]},
  { indent: 3, tokens: [
    { t: "title: ", c: "#93c5fd" }, { t: "'El Bissari'", c: "#34d399" }, { t: ",", c: "#4b5563" }
  ]},
  { indent: 3, tokens: [
    { t: "theme: ", c: "#93c5fd" }, { t: "ThemeData.dark", c: "#e2e8f0" }, { t: "(),", c: "#4b5563" }
  ]},
  { indent: 3, tokens: [
    { t: "home: ", c: "#93c5fd" }, { t: "const ", c: "#c084fc" }, { t: "DashboardScreen", c: "#e2e8f0" }, { t: "(),", c: "#4b5563" }
  ]},
  { indent: 2, tokens: [{ t: ");", c: "#4b5563" }] },
  { indent: 1, tokens: [{ t: "}", c: "#4b5563" }] },
  { indent: 0, tokens: [{ t: "}", c: "#4b5563" }] },
];

/* ── floating tech pills ─────────────────────────────────────── */
const TECH_PILLS = [
  { label: "Flutter", top: "8%",  left: "-6%",  rotate: "-3deg", delay: 0 },
  { label: "Python",  top: "32%", right: "-8%", rotate: "2deg",  delay: 1.4 },
  { label: "C",       bottom: "12%", left: "4%", rotate: "-1deg", delay: 0.7 },
];

/* ── hand-drawn SVG underline ────────────────────────────────── */
function SketchUnderline() {
  return (
    <svg
      viewBox="0 0 320 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[90%] h-3 mt-1"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M2 8 C 40 3, 80 10, 120 6 S 200 2, 240 7 S 290 4, 318 6"
        stroke="url(#underline-grad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.7 }}
        transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
      />
      <defs>
        <linearGradient id="underline-grad" x1="0" y1="0" x2="320" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#a855f7" />
          <stop offset="1" stopColor="#c084fc" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════ */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Content ─────────────────────────────────────────── */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-20 items-center pt-28 pb-24 lg:pt-36 lg:pb-28">

        {/* ════ LEFT COLUMN ════ */}
        <div className="space-y-6 lg:pr-4">
          {/* Eyebrow */}
          <motion.p
            {...fadeUp(0)}
            className="text-accent/70 text-[11px] font-[var(--font-mono)] tracking-[0.2em]"
          >
            // PORTFOLIO
          </motion.p>

          {/* Headline */}
          <div>
            <motion.h1
              {...fadeUp(0.1)}
              className="font-[var(--font-heading)] text-[clamp(2.8rem,7vw,4.5rem)] font-black tracking-tight leading-[1.05] text-text-primary"
            >
              ABDERRAHMANE
            </motion.h1>

            <motion.div {...fadeUp(0.2)}>
              <h1 className="font-[var(--font-heading)] text-[clamp(2.8rem,7vw,4.5rem)] font-black tracking-tight leading-[1.05] text-gradient">
                EL BISSARI
              </h1>
              <SketchUnderline />
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.p
            {...fadeUp(0.3)}
            className="text-text-muted text-[11px] md:text-[12px] font-[var(--font-heading)] tracking-[0.25em] uppercase"
          >
            {PROFILE.title}
          </motion.p>

          {/* Personal one-liner */}
          <motion.p
            {...fadeUp(0.4)}
            className="text-text-secondary/80 text-[15px] leading-relaxed max-w-[480px]"
          >
            Building cross-platform apps with Flutter, sharpening
            fundamentals in C and Python at 1337, and figuring out
            where LLMs actually fit into the way I build things.
          </motion.p>

          {/* CTA buttons — different widths on purpose */}
          <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-4 pt-2">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04, boxShadow: "0 0 24px rgba(168,85,247,0.35)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 px-8 py-3 rounded-lg bg-accent text-white text-[13px] font-[var(--font-heading)] tracking-wider uppercase shadow-md shadow-accent/20 transition-shadow"
            >
              View My Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>

            <motion.a
              href={PROFILE.resumeUrl}
              download
              whileHover={{ scale: 1.04, boxShadow: "0 0 18px rgba(168,85,247,0.2)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-accent/30 text-accent text-[13px] font-[var(--font-heading)] tracking-wider uppercase hover:border-accent/60 hover:bg-accent/5 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1" />
              </svg>
              CV
            </motion.a>
          </motion.div>

          {/* Meta row */}
          <motion.div
            {...fadeUp(0.6)}
            className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[10px] font-[var(--font-heading)] tracking-[0.18em] uppercase text-text-muted/70 pt-3"
          >
            <span className="flex items-center gap-1.5">
              <span className="w-[5px] h-[5px] rounded-full bg-emerald-400/80" />
              Available for internship
            </span>
            <span className="text-white/10">|</span>
            <span>Marrakech, Morocco</span>
            <span className="text-white/10">|</span>
            <span>Student @ 1337</span>
          </motion.div>

          {/* Personal sign-off — NOT a stock quote */}
          <motion.p
            {...fadeUp(0.7)}
            className="text-text-muted/50 text-[12px] italic font-[var(--font-mono)] pt-4"
          >
            — still debugging, still curious
          </motion.p>
        </div>

        {/* ════ RIGHT COLUMN — code editor ════ */}
        <motion.div
          initial={{ opacity: 0, x: 30, rotate: 0 }}
          animate={{ opacity: 1, x: 0, rotate: -1.5 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative flex items-center justify-center lg:mt-4"
        >
          {/* ── Code editor card ── */}
          <div className="relative w-full max-w-[440px] rounded-xl border border-accent/20 overflow-hidden bg-[#0c0c14] shadow-[0_0_40px_rgba(168,85,247,0.08)]">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0f0f18] border-b border-white/[0.04]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]/70" />
              </div>
              <span className="ml-3 text-text-muted/50 text-[10px] font-[var(--font-mono)]">
                portfolio_app.dart
              </span>
              <span className="ml-auto text-text-muted/30 text-[9px] font-[var(--font-mono)]">
                Dart
              </span>
            </div>

            {/* Code body */}
            <div className="px-4 py-4 font-[var(--font-mono)] text-[12px] leading-[1.9] overflow-hidden">
              {CODE_LINES.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.05, duration: 0.35 }}
                  className="flex"
                  style={{ paddingLeft: `${line.indent * 1.25}rem` }}
                >
                  <span className="w-6 text-right mr-3 text-text-muted/20 select-none text-[10px] tabular-nums">
                    {i + 1}
                  </span>
                  <span>
                    {line.tokens.length === 0
                      ? "\u00A0"
                      : line.tokens.map((tok, j) => (
                          <span key={j} style={{ color: tok.c }}>{tok.t}</span>
                        ))}
                  </span>
                </motion.div>
              ))}

              {/* Blinking cursor */}
              <motion.div
                className="flex"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
              >
                <span className="w-6 text-right mr-3 text-text-muted/20 select-none text-[10px] tabular-nums">
                  13
                </span>
                <span className="w-[7px] h-[18px] bg-accent/60 rounded-sm animate-pulse" />
              </motion.div>
            </div>

            {/* Status bar */}
            <div className="flex items-center justify-between px-4 py-1 bg-[#0f0f18] border-t border-white/[0.04] text-[9px] font-[var(--font-mono)] text-text-muted/30">
              <span>UTF-8</span>
              <span>Ln 13, Col 1</span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
                Ready
              </span>
            </div>
          </div>

          {/* ── Floating tech pills ── */}
          {TECH_PILLS.map((pill) => (
            <motion.div
              key={pill.label}
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3.5 + Math.random() * 1.5,
                delay: pill.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute px-3 py-1 rounded-full bg-[#12121a]/90 border border-accent/15 backdrop-blur-sm text-[10px] font-[var(--font-heading)] tracking-wider uppercase text-accent/70"
              style={{
                top: pill.top,
                left: pill.left,
                right: pill.right,
                bottom: pill.bottom,
                rotate: pill.rotate,
              }}
            >
              {pill.label}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll indicator ────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5"
      >
        <span className="text-text-muted/40 text-[9px] font-[var(--font-heading)] tracking-[0.35em] uppercase">
          Scroll
        </span>
        <div className="w-[18px] h-[28px] border border-accent/20 rounded-full flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-[3px] h-[6px] bg-accent/50 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
