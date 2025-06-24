// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import ParticlesBg from "particles-bg";
// import Typewriter from "typewriter-effect";
// import profileImg from "/assets/profile.jpg";
// import bitmojiImg from '/assets/Bitmoji.png';
// import downArrow from "/assets/down.png";


// const HeroSection = () => {
//   const [isFlipped, setIsFlipped] = useState(false);
//   const [message, setMessage] = useState("Hi there!");

//   const messages = [
//     "Hi there!",
//     "Welcome to my world!",
//     "Coding all day!",
//     "Got an idea? Let's build!",
//   ];

//   const handleHover = () => {
//     setIsFlipped(true);
//     setMessage(messages[Math.floor(Math.random() * messages.length)]);
//     setTimeout(() => setIsFlipped(false), 2000);
//   };

//   return (
//     <div className="relative h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
//       {/* Particle Background */}
//       <div className="absolute inset-0">
//         <ParticlesBg 
//           type="cobweb" 
//           bg={{
//             position: "absolute",
//             zIndex: 0,
//             width: "100%",
//             height: "100%"
//           }}
//           num={100}
//         />
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-6 md:px-20">
//         {/* Left Side Text - Fixed width container */}
//         <div className="w-full md:w-1/2 max-w-lg mb-10 md:mb-0">
//           <h2 className="text-3xl font-semibold text-gray-800">Hi There,</h2>
//           <h1 className="text-5xl font-bold text-black mt-2">
//             I'm <span className="text-orange-500">Vishwaa Bhavsar</span>
//           </h1>
//           <div className="h-20 mt-3"> {/* Fixed height container for typewriter */}
//             <h3 className="text-2xl text-gray-700 text-left">
//               <Typewriter
//                 options={{
//                   strings: [
//                     "Peeking into my world of ideas?",
//                     "A cool mind with even cooler innovations—ordinary isn't my style!",
//                     "AI mock interviews, gamified apps, impactful tech—I build to stand out.",
//                     "MERN, Firebase, Node.js, Java, Python? Throw a stack, I'll craft something unique!",
//                     "Hackathons, problem-solving, and out-of-the-box thinking—my comfort zone.",
//                     "Still here? Guess you like creative chaos too!",
//                     "Alright, looping back before my API rate limit expires!",
//                   ],
//                   autoStart: true,
//                   loop: true,
//                   delay: 40,
//                   deleteSpeed: 20,
//                 }}
//               />
//             </h3>
//           </div>
//           <button
//             onClick={() => {
//               const aboutSection = document.getElementById("about");
//               aboutSection?.scrollIntoView({ behavior: "smooth" });
//             }}
//             className="mt-1 px-6 flex flex-row py-2 bg-[#0F172A]/80 backdrop-blur-2xl text-white rounded-full shadow-lg hover:bg-gray-500 transition"
//           >
//             About Me 
//           <img src={downArrow}
//           className="w-6 ml-2 mt-0.5 brightness-0 invert h-6 animate-bounce"
          
//           />
          

//           </button>
          
//           {/* Social Icons Section */}
//           <section className="socials-section mt-6">
//             <ul className="social-icons flex gap-4">
//               <li>
//                 <a 
                  
//                   href="https://www.linkedin.com/in/vishwaa-bhavsar" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                 >
//                   <img src="/assets/linkedin.png" className="w-9 h-9 hover:opacity-70 transition duration-300" />
//                   <i className="fab fa-linkedin"></i>
//                 </a>
//               </li> 
//               <li>
//                 <a 
                  
//                   href="https://github.com/VishwaaBhavsar" 
                  
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                 >
//                   <img src="/assets/github.png" className="w-10 h-10 hover:opacity-70 transition duration-300" />
//                   <i className="fab fa-github"></i>
//                 </a>
//               </li>
//               <li>
//                 <a 
                  
//                   href="https://x.com/Vishwaa_Bhavsar" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                 >
//                   <img src="/assets/X.png" className="w-11 h-11 hover:opacity-70 transition duration-300" />
//                   <i className="fab fa-twitter"></i>
//                 </a>
//               </li>
//               <li>
//                 <a 
                  
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                 >
//                   <i className="fab fa-telegram-plane"></i>
//                 </a>
//               </li>
//               <li>
//                 <a 
              
//                   href="mailto:vishwaa0606@gmail.com" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                 >
//                   <img src="/assets/mail.png" className="w-10 -ml-2 h-10 hover:opacity-70 transition duration-300" />
//                   <i className="fab fa-instagram"></i>
//                 </a>
//               </li>
//               <li>
//                 {/* <a 
//                   className="dev bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-all flex items-center justify-center w-10 h-10" 
//                   href="https://dev.to/vishwaa" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                 >
//                   <i className="fab fa-dev"></i>
//                 </a> */}
//               </li>
//             </ul>
//           </section>
//         </div>

//         {/* Right Side Avatar with Flip Effect - Fixed position */}
//         <div className="flex justify-center md:justify-end w-full md:w-1/3">
//           <div
//             className="relative w-48 h-48 md:w-60 md:h-60 cursor-pointer"
//             onMouseEnter={handleHover}
//           >
//             {/* Speech Bubble */}
//             {isFlipped && (
//               <motion.div
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 className="absolute top-[-2.5rem] left-1/2 transform -translate-x-1/2 bg-white text-black text-sm px-4 py-2 rounded-lg shadow-lg"
//               >
//                 {message}
//               </motion.div>
//             )}

//             {/* Flipping Avatar */}
//             <motion.div
//               animate={{ rotateY: isFlipped ? 180 : 0 }}
//               transition={{ duration: 0.6, ease: "easeInOut" }}
//               className="w-full h-full rounded-full overflow-hidden shadow-lg border-4 border-transparent hover:border-gradient-to-r from-orange-400 to-purple-500"
//             >
//               <img
//                 src={isFlipped ? profileImg : bitmojiImg}
//                 alt="Avatar"
//                 className="w-full h-full object-cover"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;


import React, { useState } from "react";
import { motion } from "framer-motion";
import ParticlesBg from "particles-bg";
import Typewriter from "typewriter-effect";
import profileImg from "/assets/profile.jpg";
import bitmojiImg from '/assets/Bitmoji.png';
import downArrow from "/assets/down.png";

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

  // Handle touch events for mobile
  const handleTouch = () => {
    if (!isFlipped) {
      handleHover();
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-100 overflow-hidden px-4 py-8">
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
      <div className="relative z-10 flex flex-col items-center w-full max-w-6xl">
        {/* Avatar for mobile (shown at top) */}
        <div className="md:hidden flex justify-center w-full mb-6">
          <div
            className="relative w-40 h-40 cursor-pointer"
            onMouseEnter={handleHover}
            onTouchStart={handleTouch}
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

        {/* Content Container */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          {/* Left Side Text */}
          <div className="w-full md:w-1/2 max-w-lg text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Hi There,</h2>
            <h1 className="text-4xl md:text-5xl font-bold text-black mt-2">
              I'm <span className="text-orange-500">Vishwaa Bhavsar</span>
            </h1>
            <div className="h-24 md:h-20 mt-3"> {/* Increased height for mobile */}
              <h3 className="text-xl md:text-2xl text-gray-700">
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
            </div>
            <div className="flex justify-center md:justify-start">
              <button
                onClick={() => {
                  const aboutSection = document.getElementById("about");
                  aboutSection?.scrollIntoView({ behavior: "smooth" });
                }}
                className="mt-1 px-6 flex flex-row py-2 bg-[#0F172A]/80 backdrop-blur-2xl text-white rounded-full shadow-lg hover:bg-gray-500 transition"
              >
                About Me 
                <img 
                  src={downArrow}
                  className="w-6 ml-2 mt-0.5 brightness-0 invert h-6 animate-bounce"
                />
              </button>
            </div>
            
            {/* Social Icons Section */}
            <section className="socials-section mt-6">
              <ul className="social-icons flex gap-4 justify-center md:justify-start">
                <li>
                  <a 
                    href="https://www.linkedin.com/in/vishwaa-bhavsar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <img src="/assets/linkedin.png" className="w-8 h-8 md:w-9 md:h-9 hover:opacity-70 transition duration-300" />
                  </a>
                </li> 
                <li>
                  <a 
                    href="https://github.com/VishwaaBhavsar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <img src="/assets/github.png" className="w-9 h-9 md:w-10 md:h-10 hover:opacity-70 transition duration-300" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://x.com/Vishwaa_Bhavsar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <img src="/assets/X.png" className="w-10 h-10 md:w-11 md:h-11 hover:opacity-70 transition duration-300" />
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:vishwaa0606@gmail.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <img src="/assets/mail.png" className="w-9 h-9 md:w-10 md:h-10 hover:opacity-70 transition duration-300" />
                  </a>
                </li>
              </ul>
            </section>
          </div>

          {/* Right Side Avatar (hidden on mobile) */}
          <div className="hidden md:flex justify-center md:justify-end w-full md:w-1/3">
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
      </div>
    </div>
  );
};

export default HeroSection;