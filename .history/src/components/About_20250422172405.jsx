
// import React, { forwardRef } from "react";
// import { motion } from "framer-motion";
// import { Typewriter } from "react-simple-typewriter";
// import { FaLaptopCode, FaGamepad, FaPizzaSlice, FaRocket, FaMusic, FaGlobe } from "react-icons/fa";

// const About = forwardRef((props, ref) => {
//   return (
//     <section ref={ref} className="min-h-screen bg-gradient-to-r from-gray-900 to-black text-white flex flex-col items-center py-12 px-6">
//       {/* 🔥 Title with Typewriter Effect */}
//       <h1 className="text-5xl font-bold mb-4 text-purple-500">
//         About <span className="text-white">Me</span>
//       </h1>
//       <h2 className="text-xl text-gray-300">
//         I'm a{" "}
//         <span className="text-purple-400 font-semibold">
//           <Typewriter words={["Full-Stack Developer", "Tech Enthusiast", "Lifelong Learner"]} loop cursor />
//         </span>
//       </h2>

//       {/* 🎭 Profile Section (3D Effect) */}
//       <motion.div 
//         initial={{ opacity: 0, scale: 0.8 }} 
//         animate={{ opacity: 1, scale: 1 }} 
//         transition={{ duration: 0.8 }}
//         className="mt-8 flex flex-col md:flex-row items-center gap-8"
//       >
//         {/* Left Side - Profile Image */}
//         <motion.img
//           src="https://i.postimg.cc/Y0JGgX8V/avatar.gif" // Replace with your image
//           alt="Profile"
//           className="w-48 h-48 rounded-full shadow-xl border-4 border-purple-500"
//           whileHover={{ scale: 1.1, rotate: 5 }}
//         />

//         {/* Right Side - Fun Facts */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
//           {[
//             { icon: <FaLaptopCode />, title: "Tech Stack", desc: "MERN | Next.js | Tailwind" },
//             { icon: <FaGamepad />, title: "Hobby", desc: "Gaming & Watching Anime" },
//             { icon: <FaPizzaSlice />, title: "Fav Food", desc: "Pizza & Coffee" },
//             { icon: <FaRocket />, title: "Goal", desc: "Build my own startup" },
//             { icon: <FaMusic />, title: "Fav Music", desc: "Lofi & EDM" },
//             { icon: <FaGlobe />, title: "Fun Fact", desc: "Love traveling & coding at cafes" },
//           ].map((fact, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.1 }}
//               className="p-4 bg-white text-black shadow-lg rounded-xl flex flex-col items-center text-center transition-transform duration-300"
//             >
//               <div className="text-3xl text-purple-600">{fact.icon}</div>
//               <h3 className="text-lg font-semibold mt-2">{fact.title}</h3>
//               <p className="text-gray-600">{fact.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// });

// export default About;
import React from 'react'

const About = () => {
  return (
    <>
    <section className="flex flex-row items-start gap-8 p-8 max-w-5xl mx-auto">
      {/* Left side - Full Bitmoji */}
      <div className="w-1/3 flex justify-center">
        <img 
          className="w-64 h-auto object-contain" 
          src="/api/placeholder/240/400" 
          alt="Vishwaa Bhavsar Bitmoji" 
        />
      </div>
      
      {/* Right side - Your info */}
      <div className="w-2/3 space-y-6">
        <h2 className="text-4xl font-bold text-gray-800">Vishwaa Bhavsar</h2>
        
        <div className="space-y-4">
          <p className="text-lg text-gray-700">
            I'm a passionate developer with expertise in building modern web applications. I focus on creating clean, efficient, and user-friendly experiences.
          </p>
          
          <p className="text-lg text-gray-700">
            With a background in [your background], I bring a unique perspective to every project I work on. I'm constantly learning and exploring new technologies to enhance my skill set.
          </p>
          
          <div className="pt-2">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">My Skills</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">React</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full">JavaScript</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full">CSS/Tailwind</span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full">UI/UX</span>
              <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full">Node.js</span>
            </div>
          </div>
          
          <div className="flex gap-4 pt-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Contact Me
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default About