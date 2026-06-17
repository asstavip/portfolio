export default function SectionDivider({ id, type = 1, className = "text-bg-secondary", flip = false }) {
  // Different solid, clean wave shapes
  const svgClass = `w-full h-auto block ${flip ? "rotate-180" : ""}`;
  
  const waves = {
    1: (
      <svg viewBox="0 0 1440 120" className={svgClass} preserveAspectRatio="none">
        <path
          fill="currentColor"
          d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
        ></path>
      </svg>
    ),
    2: (
      <svg viewBox="0 0 1440 120" className={svgClass} preserveAspectRatio="none">
        <path
          fill="currentColor"
          d="M0,32L120,48C240,64,480,96,720,90.7C960,85,1200,43,1320,21.3L1440,0L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z"
        ></path>
      </svg>
    ),
    3: (
      <svg viewBox="0 0 1440 120" className={svgClass} preserveAspectRatio="none">
        <path
          fill="currentColor"
          d="M0,96L80,85.3C160,75,320,53,480,53.3C640,53,800,75,960,85.3C1120,96,1280,96,1360,96L1440,96L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
        ></path>
      </svg>
    ),
    4: (
      <svg viewBox="0 0 1440 120" className={svgClass} preserveAspectRatio="none">
        <path
          fill="currentColor"
          d="M0,0L120,16C240,32,480,64,720,74.7C960,85,1200,75,1320,69.3L1440,64L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z"
        ></path>
      </svg>
    ),
  };

  return (
    <div id={id} className={`w-full relative -mt-1 -mb-1 overflow-hidden drop-shadow-sm pointer-events-none ${className}`}>
      {waves[type] || waves[1]}
    </div>
  );
}
