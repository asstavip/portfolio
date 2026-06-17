import { motion } from "framer-motion";
import { PROFILE, SKILLS } from "../data/portfolioConfig";

export default function Hero() {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden"
    >
      <div className="section-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center h-full">
        
        {/* ==================== LEFT COLUMN ==================== */}
        <div className="flex flex-col items-start justify-center pt-10">
          <motion.p
            {...fadeUp(0.1)}
            className="text-text-secondary text-lg font-[var(--font-body)] mb-2"
          >
            Hey, I am <span className="text-accent font-semibold">{PROFILE.firstName}</span>
          </motion.p>
          
          <motion.h1
            {...fadeUp(0.2)}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-bold font-[var(--font-heading)] leading-[1.1] text-text-primary tracking-tight mb-6"
          >
            Flutter <br className="hidden sm:block" />
            Developer
          </motion.h1>

          <motion.p
            {...fadeUp(0.3)}
            className="text-text-secondary text-base md:text-lg max-w-[85%] font-[var(--font-body)] leading-relaxed mb-10"
          >
            {PROFILE.tagline}
          </motion.p>

          <motion.div
            {...fadeUp(0.4)}
            className="flex items-center gap-4 mb-16"
          >
            <a
              href="#contact"
              className="px-8 py-3.5 bg-accent hover:bg-accent-light text-white rounded-full font-[var(--font-heading)] font-semibold tracking-wide transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:-translate-y-0.5"
            >
              Hire me
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-white/10 bg-bg-card/40 backdrop-blur-md flex items-center justify-center text-text-primary hover:text-accent hover:border-accent/40 transition-all hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </motion.div>

          <motion.div
            {...fadeUp(0.5)}
            className="w-full max-w-[400px] p-5 rounded-2xl border border-white/5 bg-bg-card/30 backdrop-blur-xl relative"
          >
            {/* Top left quote icon decoration */}
            <div className="absolute -top-3 -left-3 text-4xl text-accent opacity-50 font-serif">"</div>
            <p className="text-sm text-text-secondary leading-relaxed italic mb-4">
              Building cross-platform apps with Flutter, sharpening fundamentals in C and Python at 1337, and figuring out where LLMs actually fit into the way I build things.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0 border border-accent/30">
                <span className="text-accent font-bold font-[var(--font-heading)]">1337</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-text-primary">Software Engineering Student</span>
                <span className="text-xs text-text-muted">{PROFILE.school}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ==================== RIGHT COLUMN (Visual) ==================== */}
        <div className="relative h-[500px] lg:h-[650px] w-full flex items-center justify-center">
          
          {/* Orbital Rings Background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] rounded-full border border-white/5"
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
              className="absolute w-[450px] h-[450px] sm:w-[650px] sm:h-[650px] rounded-full border border-white/5"
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
              className="absolute w-[600px] h-[600px] sm:w-[850px] sm:h-[850px] rounded-full border border-white/[0.02]"
            />
          </div>

          {/* 3D Character */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative z-10 w-[120%] h-[120%] flex items-center justify-center -ml-[10%]"
          >
            {/* Dark Mode Avatar */}
            <img
              src="/avatar_v2.png"
              alt="Developer 3D Avatar (Dark Mode)"
              className="hidden dark:block w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] object-cover rounded-full border border-white/10 shadow-2xl shadow-accent/20"
            />
            {/* Light Mode Avatar */}
            <img
              src="/avatar_light.png"
              alt="Developer 3D Avatar (Light Mode)"
              className="block dark:hidden w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] object-cover rounded-full border border-black/10 shadow-2xl shadow-black/10"
            />
          </motion.div>

          {/* Floating Tech Badges (positioned around the orbits) */}
          {SKILLS.slice(0, 4).map((skill, index) => {
            // Positioning array to simulate orbital placement
            const positions = [
              { top: "15%", left: "10%" },
              { top: "25%", right: "15%" },
              { bottom: "20%", left: "20%" },
              { bottom: "10%", right: "25%" },
            ];
            
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
                className="absolute z-20 w-12 h-12 sm:w-14 sm:h-14 bg-bg-card/80 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer"
                style={{
                  ...positions[index],
                  animation: `float ${3 + index * 0.5}s ease-in-out infinite alternate`,
                }}
              >
                <img src={skill.icon} alt={skill.name} className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
              </motion.div>
            );
          })}

        </div>
      </div>
      
      {/* Inline styles for the float animation */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-15px) rotate(5deg); }
        }
      `}</style>
    </section>
  );
}
