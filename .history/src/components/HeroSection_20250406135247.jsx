import React, { useState } from "react";
import { motion } from "framer-motion";
import ParticlesBg from "particles-bg";
import Typewriter from "typewriter-effect";
import profileImg from "../assets/profile.jpg";
import bitmojiImg from "../assets/Bitmoji.png";

const HeroSection = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [message, setMessage] = useState("Hi there!");

  const messages = [
    "Hi there!",
    "Welcome to my world!",
    "Coding all day!",
    "Got an idea? Let's build!",
  ];

  const handleHover = () => {
    setIsFlipped(true);
    setMessage(messages[Math.floor(Math.random() * messages.length)]);
    setTimeout(() => setIsFlipped(false), 2000);
  };

  return (
    <div className="relative h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0">
        <ParticlesBg 
          type="cobweb" 
          bg={{
            position: "absolute",
            zIndex: 0,
            width: "100%",
            height: "100%"
          }}
          num={100}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap- text-center md:text-left px-20">
        {/* Left Side Text */}
        <div className="max-w-lg ">
          <h2 className="text-3xl font-semibold text-gray-800">Hi There,</h2>
          <h1 className="text-5xl font-bold text-black mt-2">
            I'm <span className="text-orange-500">Vishwaa Bhavsar</span>
          </h1>
          <h3 className="text-2xl mt-3 text-gray-700">
            <Typewriter
              options={{
                strings: [
                  "Peeking into my world of ideas?",
                  "A cool mind with even cooler innovations—ordinary isn't my style!",
                  "AI mock interviews, gamified apps, impactful tech—I build to stand out.",
                  "MERN, Firebase, Node.js, Java, Python? Throw a stack, I'll craft something unique!",
                  "Hackathons, problem-solving, and out-of-the-box thinking—my comfort zone.",
                  "Still here? Guess you like creative chaos too!",
                  "Alright, looping back before my API rate limit expires!",
                ],
                autoStart: true,
                loop: true,
                delay: 40,
                deleteSpeed: 20,
              }}
            />
          </h3>
          <button
            onClick={() => {
              const aboutSection = document.getElementById("about");
              aboutSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            About Me ⬇
          </button>
        </div>

        {/* Right Side Avatar with Flip Effect */}
        <div
          className="relative w-48 h-48 md:w-60 md:h-60 cursor-pointer"
          onMouseEnter={handleHover}
        >
          {/* Speech Bubble */}
          {isFlipped && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-[-2.5rem] left-1/2 transform -translate-x-1/2 bg-white text-black text-sm px-4 py-2 rounded-lg shadow-lg"
            >
              {message}
            </motion.div>
          )}

          {/* Flipping Avatar */}
          <motion.div
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-full h-full rounded-full overflow-hidden shadow-lg border-4 border-transparent hover:border-gradient-to-r from-orange-400 to-purple-500"
          >
            <img
              src={isFlipped ? profileImg : bitmojiImg}
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;