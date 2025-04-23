import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";

const messages = [
  "Hi! My name is Vishwaa Bhavsar",
  "Welcome to my portfolio!",
  "I love building creative projects!",
  "Let's connect!"
];

export default function Body() {
  const [flipped, setFlipped] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= messages[currentMessage].length) {
        setDisplayedText(messages[currentMessage].slice(0, index));
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setCurrentMessage((prev) => (prev + 1) % messages.length);
          setDisplayedText("");
        }, 2000);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [currentMessage]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div
        className="relative w-48 h-48 rounded-full cursor-pointer"
        onClick={() => setFlipped(!flipped)}
      >
        <motion.div
          className="absolute w-full h-full rounded-full"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
        >
          {flipped ? (
            <img
              src="/snap-avatar.png"
              alt="Snapchat Avatar"
              className="w-full h-full rounded-full"
            />
          ) : (
            <img
              src="/profile-photo.png"
              alt="Profile Photo"
              className="w-full h-full rounded-full"
            />
          )}
        </motion.div>
      </div>

      <motion.div
        className="mt-6 bg-gray-800 text-lg px-6 py-3 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {displayedText}
      </motion.div>

      <motion.div
        className="mt-6"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <img
          src="/profile-photo.png"
          alt="Animated Avatar"
          className="w-32 h-32 rounded-full"
        />
      </motion.div>
    </div>
  );
}
