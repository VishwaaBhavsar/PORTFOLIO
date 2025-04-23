// // import React, { forwardRef } from "react";

// // const Skillls = forwardRef((props, ref) => (
// //   <section ref={ref} className="h-screen bg-gray-100 flex justify-center items-center">
// //     <h1 className="text-4xl">Skill</h1>
// //   </section>
// // ));

// // export default Skillls;
// import React, { useState, forwardRef } from "react";
// import { motion } from "framer-motion";  // motion should be used here
// import { FaReact, FaNodeJs, FaJava, FaPython, FaDatabase } from "react-icons/fa";

// const Skills = forwardRef((props, ref) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const skills = [
//     { icon: <FaReact size={40} />, color: "text-blue-400" },
//     { icon: <FaNodeJs size={40} />, color: "text-green-500" },
//     { icon: <FaJava size={40} />, color: "text-red-500" },
//     { icon: <FaPython size={40} />, color: "text-yellow-400" },
//     { icon: <FaDatabase size={40} />, color: "text-purple-500" }
//   ];

//   return (
//     <section ref={ref} className="h-screen bg-gray-100 flex flex-col justify-center items-center text-black relative">
//       <h1 className="text-4xl font-bold mb-6">Skills</h1>

//       {/* Box that triggers animation */}
//       <motion.div
//         initial={{ y: -300 }}
//         animate={{ y: 0, rotate: [0, -5, 5, -3, 3, 0] }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         whileTap={{ scale: 0.95 }}
//         className="w-32 h-32 bg-yellow-600 rounded-xl flex items-center justify-center cursor-pointer shadow-lg relative"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <span className="text-xl font-bold text-white">Tap Me</span>
//       </motion.div>

//       {/* Firework-style explosion of skill icons */}
//       {isOpen && (
//         <div className="absolute flex flex-wrap justify-center items-center mt-4">
//           {skills.map((skill, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 0, scale: 0 }}
//               animate={{ opacity: 1, y: [0, -80, 100], scale: [0, 1.2, 1] }}
//               transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
//               className={`text-4xl ${skill.color} m-2`}
//             >
//               {skill.icon}
//             </motion.div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// });

// export default Skills;
import React, { useState, useEffect, useRef } from 'react';

const ExplodingSkillsBox = () => {
  const [boxState, setBoxState] = useState('dropping'); // dropping, landed, exploded
  const [skills, setSkills] = useState([]);
  const containerRef = useRef(null);

  const skillsData = [
    { name: 'React', icon: '⚛', category: 'frontend' },
    { name: 'JavaScript', icon: '𝗝𝗦', category: 'frontend' },
    { name: 'HTML5', icon: '🌐', category: 'frontend' },
    { name: 'CSS', icon: '🎨', category: 'frontend' },
    { name: 'TypeScript', icon: 'TS', category: 'frontend' },
    { name: 'Python', icon: '🐍', category: 'backend' },
    { name: 'Java', icon: '☕', category: 'backend' },
    { name: 'C++', icon: '⚙', category: 'backend' },
    { name: 'Node.js', icon: '📦', category: 'backend' },
    { name: 'Git', icon: '📝', category: 'tools' },
    { name: 'Docker', icon: '🐳', category: 'tools' },
    { name: 'Figma', icon: '🎭', category: 'design' },
    { name: 'UI/UX', icon: '✨', category: 'design' },
    { name: 'Drawing', icon: '🖌', category: 'creative' },
    { name: 'Singing', icon: '🎵', category: 'creative' },
    { name: 'Reading', icon: '📚', category: 'hobby' },
  ];

  useEffect(() => {
    if (boxState === 'dropping') {
      const timer = setTimeout(() => setBoxState('landed'), 1000);
      return () => clearTimeout(timer);
    }
  }, [boxState]);

  const handleBoxClick = () => {
    if (boxState === 'landed') {
      setBoxState('exploded');
      const positionedSkills = skillsData.map((skill, index) => {
        const totalSkills = skillsData.length;
        const angle = (index * (2 * Math.PI)) / totalSkills + (Math.random() * 0.2 - 0.1);
        const categoryDistances = {
          frontend: 1.2,
          backend: 1.1,
          tools: 0.9,
          design: 1.0,
          creative: 0.8,
          hobby: 0.7,
        };
        const distance = 150 * (categoryDistances[skill.category] || 1) + Math.random() * 50;
        return {
          ...skill,
          id: index,
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
          rotation: Math.random() * 20 - 10,
          scale: 0.9 + Math.random() * 0.3,
          delay: 0.05 * index,
        };
      });
      setSkills(positionedSkills);
    }
  };

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-black flex justify-center items-center overflow-hidden">
      <style>{`
        @keyframes bounce-in {
          0% { transform: translateY(-500px) rotate(0deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }

        .animate-bounce-in { animation: bounce-in 1.5s ease-out forwards; }

        .skill-card:hover {
          transform: scale(1.15) !important;
          z-index: 10;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
        }
      `}</style>

      <h2 className="absolute top-8 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">My Skills</h2>

      {boxState !== 'exploded' && (
        <div
          className={`transition-transform ${boxState === 'dropping' ? 'animate-bounce-in' : 'hover:scale-110'}`}
          onClick={handleBoxClick}
          style={{ cursor: 'pointer' }}
        >
          <div className="w-36 h-36 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg shadow-xl flex items-center justify-center">
            <span className="text-4xl">🎁</span>
            {boxState === 'landed' && (
              <div className="absolute -top-12 left-0 w-full text-center text-white text-lg font-medium animate-pulse">
                Click to reveal skills!
              </div>
            )}
          </div>
        </div>
      )}

      {boxState === 'exploded' && skills.map((skill) => (
        <div
          key={skill.id}
          className="absolute top-1/2 left-1/2 flex flex-col items-center skill-card"
          style={{
            transform: `translate(-50%, -50%) translate(${skill.x}px, ${skill.y}px) rotate(${skill.rotation}deg) scale(${skill.scale})`,
            transition: `all 1.5s cubic-bezier(0.17, 0.67, 0.83, 0.67) ${skill.delay}s`,
          }}
        >
          <div
            className={`w-16 h-16 rounded-lg shadow-lg flex items-center justify-center text-2xl ${
              {
                frontend: 'bg-gradient-to-br from-blue-500 to-blue-700',
                backend: 'bg-gradient-to-br from-green-500 to-green-700',
                tools: 'bg-gradient-to-br from-yellow-500 to-yellow-700',
                design: 'bg-gradient-to-br from-purple-500 to-purple-700',
                creative: 'bg-gradient-to-br from-pink-500 to-pink-700',
                hobby: 'bg-gradient-to-br from-red-500 to-red-700',
              }[skill.category]
            }`}
          >
            {skill.icon}
          </div>
          <span className="text-white mt-2 text-sm font-medium">{skill.name}</span>
        </div>
      ))}
    </div>
  );
};

export default ExplodingSkillsBox;
