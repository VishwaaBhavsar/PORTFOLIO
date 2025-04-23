import React from "react";
import ParticlesBg from "particles-bg";

const TestParticles = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-800 text-white">
      <ParticlesBg type="circle" bg={true} color="#ffffff" />
      <h1 className="text-4xl font-bold z-10">Particles Test</h1>
    </div>
  );
};

export default TestParticles;
