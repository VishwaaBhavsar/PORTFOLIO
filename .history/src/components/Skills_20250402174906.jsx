
import React, { useState, forwardRef } from "react";
import { motion } from "framer-motion";  // motion should be used here
import { FaReact, FaNodeJs, FaJava, FaPython, FaDatabase } from "react-icons/fa";

const Skills = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  const skills = [
    { icon: <FaReact size={40} />, color: "text-blue-400" },
    { icon: <FaNodeJs size={40} />, color: "text-green-500" },
    { icon: <FaJava size={40} />, color: "text-red-500" },
    { icon: <FaPython size={40} />, color: "text-yellow-400" },
    { icon: <FaDatabase size={40} />, color: "text-purple-500" }
  ];

  return (
    <section ref={ref} className="h-screen bg-gray-100 flex flex-col justify-center items-center text-black relative">
      <h1 className="text-4xl font-bold mb-6">Skills</h1>

      {/* Box that triggers animation */}
      <motion.div
        initial={{ y: -300 }}
        animate={{ y: 0, rotate: [0, -5, 5, -3, 3, 0] }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileTap={{ scale: 0.95 }}
        className="w-32 h-32 bg-yellow-600 rounded-xl flex items-center justify-center cursor-pointer shadow-lg relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-bold text-white">Tap Me</span>
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
    </section>
  );
});

export default Skills;
// import React, { useState, useEffect, useRef } from 'react';

// const ExplodingSkillsBox = () => {
//   const [boxState, setBoxState] = useState('dropping'); // dropping, landed, exploded
//   const [skills, setSkills] = useState([]);
//   const containerRef = useRef(null);

//   // Enhanced skills data with more descriptive icons and better categorization
//   const skillsData = [
//     { name: 'React', icon: '⚛', category: 'frontend' },
//     { name: 'JavaScript', icon: '𝗝𝗦', category: 'frontend' },
//     { name: 'HTML5', icon: '🌐', category: 'frontend' },
//     { name: 'CSS', icon: '🎨', category: 'frontend' },
//     { name: 'TypeScript', icon: 'TS', category: 'frontend' },
//     { name: 'Python', icon: '🐍', category: 'backend' },
//     { name: 'Java', icon: '☕', category: 'backend' },
//     { name: 'C++', icon: '⚙', category: 'backend' },
//     { name: 'Node.js', icon: '📦', category: 'backend' },
//     { name: 'Git', icon: '📝', category: 'tools' },
//     { name: 'Docker', icon: '🐳', category: 'tools' },
//     { name: 'Figma', icon: '🎭', category: 'design' },
//     { name: 'UI/UX', icon: '✨', category: 'design' },
//     { name: 'Drawing', icon: '🖌', category: 'creative' },
//     { name: 'Singing', icon: '🎵', category: 'creative' },
//     { name: 'Reading', icon: '📚', category: 'hobby' },
//   ];

//   // Handle the box animation sequence
//   useEffect(() => {
//     if (boxState === 'dropping') {
//       const timer = setTimeout(() => {
//         setBoxState('landed');
//       }, 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [boxState]);

//   // Handle box click to trigger explosion
//   const handleBoxClick = () => {
//     if (boxState === 'landed') {
//       setBoxState('exploded');

//       // Create positioned skills that will animate outward in a more organized pattern
//       const positionedSkills = skillsData.map((skill, index) => {
//         // More controlled distribution pattern using index
//         const totalSkills = skillsData.length;
//         const angleStep = (2 * Math.PI) / totalSkills;
//         const baseAngle = index * angleStep;
//         // Add slight randomness to the angle for a more natural feel
//         const angle = baseAngle + (Math.random() * 0.2 - 0.1);
        
//         // Distance varies by category to create grouped sections
//         let distanceMultiplier = 1;
//         if (skill.category === 'frontend') distanceMultiplier = 1.2;
//         if (skill.category === 'backend') distanceMultiplier = 1.1;
//         if (skill.category === 'tools') distanceMultiplier = 0.9;
//         if (skill.category === 'design') distanceMultiplier = 1.0;
//         if (skill.category === 'creative') distanceMultiplier = 0.8;
//         if (skill.category === 'hobby') distanceMultiplier = 0.7;
        
//         const baseDistance = 150;
//         const distance = baseDistance * distanceMultiplier + Math.random() * 50;
        
//         const x = Math.cos(angle) * distance;
//         const y = Math.sin(angle) * distance;
//         const rotation = Math.random() * 20 - 10; // Less extreme rotation
//         const scale = 0.9 + Math.random() * 0.3; // More consistent scaling
//         const delay = 0.05 * index; // Sequential delays based on index

//         return {
//           ...skill,
//           id: index,
//           x,
//           y,
//           rotation,
//           scale,
//           delay,
//         };
//       });

//       setSkills(positionedSkills);
//     }
//   };

//   // Determine box animation class based on state
//   const getBoxAnimationClass = () => {
//     if (boxState === 'dropping') {
//       return 'animate-bounce-in';
//     } else {
//       return 'animate-jiggle hover:scale-110 transition-transform';
//     }
//   };

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-full h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-black overflow-hidden flex justify-center items-center"
//     >
//       <style dangerouslySetInnerHTML={{ __html: `
//         @keyframes bounce-in {
//           0% { transform: translateY(-500px) rotate(0deg); }
//           60% { transform: translateY(30px) rotate(5deg); }
//           75% { transform: translateY(-10px) rotate(-5deg); }
//           90% { transform: translateY(5px) rotate(2deg); }
//           100% { transform: translateY(0) rotate(0deg); }
//         }

//         @keyframes jiggle {
//           0%, 100% { transform: rotate(0deg) scale(1); box-shadow: 0 0 15px rgba(138, 43, 226, 0.5); }
//           25% { transform: rotate(-5deg) scale(1.05); box-shadow: 0 0 20px rgba(138, 43, 226, 0.7); }
//           50% { transform: rotate(0deg) scale(1.1); box-shadow: 0 0 25px rgba(138, 43, 226, 0.9); }
//           75% { transform: rotate(5deg) scale(1.05); box-shadow: 0 0 20px rgba(138, 43, 226, 0.7); }
//         }

//         @keyframes pulse-glow {
//           0%, 100% { opacity: 0.8; }
//           50% { opacity: 1; }
//         }

//         .animate-bounce-in {
//           animation: bounce-in 1.5s ease-out forwards;
//         }

//         .animate-jiggle {
//           animation: jiggle 1.5s ease-in-out infinite;
//         }
        
//         .skill-card {
//           transition: transform 0.3s ease;
//         }
        
//         .skill-card:hover {
//           transform: scale(1.15) !important;
//           z-index: 10;
//           box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
//         }
//       `}} />

//       {/* Decorative background particles */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={particle-${i}}
//             className="absolute rounded-full bg-white bg-opacity-20"
//             style={{
//               width: ${Math.random() * 10 + 2}px,
//               height: ${Math.random() * 10 + 2}px,
//               top: ${Math.random() * 100}%,
//               left: ${Math.random() * 100}%,
//               animation: pulse-glow ${Math.random() * 3 + 2}s infinite ease-in-out ${Math.random() * 2}s,
//             }}
//           />
//         ))}
//       </div>

//       <h2 className="absolute top-8 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
//         My Skills
//       </h2>

//       {boxState !== 'exploded' && (
//         <div
//           className={${getBoxAnimationClass()} transition-all duration-300}
//           onClick={handleBoxClick}
//           style={{ cursor: 'pointer' }}
//         >
//           <div className="w-36 h-36 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg shadow-xl flex items-center justify-center perspective-500 transform rotate-12 relative">
//             <div className="absolute inset-0 rounded-lg bg-white bg-opacity-10 z-10"></div>
//             <span className="text-4xl z-20">🎁</span>

//             {boxState === 'landed' && (
//               <div className="absolute -top-12 left-0 w-full text-center text-white text-lg font-medium animate-pulse">
//                 Click to reveal skills!
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       {boxState === 'exploded' && skills.map((skill) => (
//         <div
//           key={skill.id}
//           className="absolute top-1/2 left-1/2 flex flex-col items-center skill-card"
//           style={{
//             transform: translate(-50%, -50%) translate(${skill.x}px, ${skill.y}px) rotate(${skill.rotation}deg) scale(${skill.scale}),
//             transition: all 1.5s cubic-bezier(0.17, 0.67, 0.83, 0.67) ${skill.delay}s,
//           }}
//         >
//           <div
//             className={`
//               w-16 h-16 rounded-lg shadow-lg flex items-center justify-center text-2xl
//               ${skill.category === 'frontend' ? 'bg-gradient-to-br from-blue-500 to-blue-700' : ''}
//               ${skill.category === 'backend' ? 'bg-gradient-to-br from-green-500 to-green-700' : ''}
//               ${skill.category === 'tools' ? 'bg-gradient-to-br from-yellow-500 to-yellow-700' : ''}
//               ${skill.category === 'design' ? 'bg-gradient-to-br from-purple-500 to-purple-700' : ''}
//               ${skill.category === 'creative' ? 'bg-gradient-to-br from-pink-500 to-pink-700' : ''}
//               ${skill.category === 'hobby' ? 'bg-gradient-to-br from-red-500 to-red-700' : ''}
//             `}
//           >
//             {skill.icon}
//           </div>

//           <div className="mt-2 text-white font-medium text-sm text-center">
//             {skill.name}
//           </div>
//           <div className="text-xs text-gray-300 opacity-70">
//             {skill.category}
//           </div>
//         </div>
//       ))}

//       {boxState === 'exploded' && (
//         <button
//           className="absolute bottom-8 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full transition-all hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none"
//           onClick={() => {
//             setBoxState('dropping');
//             setSkills([]);
//           }}
//         >
//           Reset Animation
//         </button>
//       )}
      
//       {/* Category legend - only visible when skills are shown */}
//       {boxState === 'exploded' && (
//         <div className="absolute top-8 right-8 bg-black bg-opacity-50 p-3 rounded-lg">
//           <div className="text-white text-sm mb-2 font-bold">Categories:</div>
//           <div className="flex flex-col gap-1">
//             <div className="flex items-center gap-2">
//               <div className="w-3 h-3 rounded-full bg-blue-600"></div>
//               <span className="text-blue-300 text-xs">Frontend</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-3 h-3 rounded-full bg-green-600"></div>
//               <span className="text-green-300 text-xs">Backend</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-3 h-3 rounded-full bg-yellow-600"></div>
//               <span className="text-yellow-300 text-xs">Tools</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-3 h-3 rounded-full bg-purple-600"></div>
//               <span className="text-purple-300 text-xs">Design</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-3 h-3 rounded-full bg-pink-600"></div>
//               <span className="text-pink-300 text-xs">Creative</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-3 h-3 rounded-full bg-red-600"></div>
//               <span className="text-red-300 text-xs">Hobby</span>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ExplodingSkillsBox;