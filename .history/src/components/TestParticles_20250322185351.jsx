import React from "react";
import { useCallback } from "react";
import { loadSlim } from "@tsparticles/slim";
import Particles from "@tsparticles/react";

const TestParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // Properly loads the slim package
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#1a202c",
        },
        particles: {
          number: { value: 100 },
          color: { value: "#ffffff" },
          size: { value: 3 },
          move: { enable: true, speed: 2 },
          links: { enable: true, distance: 150, color: "#ffffff" },
        },
      }}
    />
  );
};

export default TestParticles;
