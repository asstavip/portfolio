import { useMemo } from "react";
import { Particles } from "@tsparticles/react";

export default function ParticleBackground() {
  const options = useMemo(
    () => ({
      fullScreen: false,
      fpsLimit: 60,
      particles: {
        number: { value: 45, density: { enable: true, area: 900 } },
        color: { value: "#a855f7" },
        opacity: {
          value: { min: 0.15, max: 0.25 },
          animation: { enable: true, speed: 0.3, minimumValue: 0.1 },
        },
        size: { value: { min: 1, max: 2.5 } },
        links: {
          enable: true,
          color: "#a855f7",
          opacity: 0.12,
          distance: 140,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.4,
          direction: "none",
          outModes: { default: "out" },
          random: true,
          straight: false,
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
        },
        modes: {
          grab: {
            distance: 160,
            links: { opacity: 0.3, color: "#c084fc" },
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="!fixed inset-0 z-0"
    />
  );
}
