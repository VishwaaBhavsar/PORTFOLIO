// import React, { forwardRef } from "react";

// const Skillls = forwardRef((props, ref) => (
//   <section ref={ref} className="h-screen bg-gray-100 flex justify-center items-center">
//     <h1 className="text-4xl">Skill</h1>
//   </section>
// ));

// export default Skillls;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJava, FaPython, FaDatabase } from "react-icons/fa";

const Skill = () => {
  const [isOpen, setIsOpen] = useState(false);

  const skills = [
    { icon: <FaReact size={40} />, color: "text-blue-400" },
    { icon: <FaNodeJs size={40} />, color: "text-green-500" },
    { icon: <FaJava size={40} />, color: "text-red-500" },
    { icon: <FaPython size={40} />, color: "text-yellow-400" },
    { icon: <FaDatabase size={40} />, color: "text-purple-500" }
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-black">
      {/* Drop + Jiggle Box (Brown Box) */}
      <motion.div
        initial={{ y: -300 }}
        animate={{ y: 0, rotate: [0, -5, 5, -3, 3, 0] }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileTap={{ scale: 0.95 }}
        className="w-32 h-32 bg-brown-600 rounded-xl flex items-center justify-center cursor-pointer shadow-lg relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-bold text-white">Skills</span>
      </motion.div>
      
      {/* Firework-style explosion of skill icons */}
      {isOpen && (
        <div className="absolute flex flex-wrap justify-center items-center mt-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 0, scale: 0 }}
              animate={{ opacity: 1, y: [0, -80, 100], scale: [0, 1.2, 1] }}
              transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
              className={`text-4xl ${skill.color} m-2`}
            >
              {skill.icon}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillsBox;
