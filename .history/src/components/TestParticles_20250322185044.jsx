import React from "react";
import { useCallback } from "react";
import { loadSlim } from "@tsparticles/slim";
import Particles from "@tsparticles/react";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="h-screen w-full bg-gray-900 relative">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "#1a202c" },
          particles: {
            number: { value: 100 },
            color: { value: "#ffffff" },
            size: { value: 3 },
            move: { enable: true, speed: 2 },
            links: { enable: true, distance: 150, color: "#ffffff" },
          },
        }}
      />
      <h1 className="text-white z-10 relative text-5xl">Particles Are Back!</h1>
    </div>
  );
};

export default ParticleBackground;
