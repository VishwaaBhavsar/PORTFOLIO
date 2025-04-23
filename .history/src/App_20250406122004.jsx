// import { Router,Routes,Route } from 'react-router-dom'
// import React from 'react'

// import Home from './home/Home.jsx'
// import Contact from './components/Contact.jsx'
// import Skillls from './components/Skillls.jsx'
// import Experience from './components/Experience.jsx'
// import Navbar from './components/Navbar.jsx'
// import Education from './components/Education.jsx'
// import About from './components/About.jsx'
// function App() {
 

//   return (
//     <>
  
//       <Navbar /> {/* Navbar stays fixed on all pages */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/skills" element={<Skillls />} />
//         <Route path="/experience" element={<Experience />} />
//         <Route path='/education' element={<Education/>}/>
//         <Route path='/about' element={<About/>}/>
//       </Routes>
    
//     </>
//   )
// }

// export default App

// import React, { useRef, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import Navbar from "./components/Navbar.jsx";
// import About from "./components/About.jsx";
// import Skills from "./components/Skillls.jsx";
// import Education from "./components/Education.jsx";
// import Experience from "./components/Experience.jsx";
// import Contact from "./components/Contact.jsx";
// import Home from "./home/Home.jsx";

// const App = () => {
//   const location = useLocation();

//   // Section Refs
//   const refs = {
//     home: useRef(null),
//     about: useRef(null),
//     skills: useRef(null),
//     education: useRef(null),
//     experience: useRef(null),
//     contact: useRef(null),
//   };

//   // Smooth Scroll Function
//   const scrollToSection = (section) => {
//     refs[section]?.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   // Scroll on URL Change
//   useEffect(() => {
//     const section = location.pathname.replace("/", "");
//     if (section && refs[section]) {
//       scrollToSection(section);
//     }
//   }, [location.pathname]);

//   return (
//     <div>
//       <Navbar scrollToSection={scrollToSection} />

//       {/* Main Page with Sections (Rendered Only Once) */}
//       <div ref={refs.home}>
//         <Home />
//       </div>
//       <div ref={refs.about}>
//         <About />
//       </div>
//       <div ref={refs.skills}>
//         <Skills />
//       </div>
//       <div ref={refs.education}>
//         <Education />
//       </div>
//       <div ref={refs.experience}>
//         <Experience />
//       </div>
//       <div ref={refs.contact}>
//         <Contact />
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import Home from "./home/Home.jsx";
import Footer from "./components/Footer.jsx";
import TestParticles from "./components/TestParticles.jsx";
import Projects from "./components/Projects.jsx";
const App = () => {
  const location = useLocation();

  // Section Refs (Single Instance for Each Section)
  const refs = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    education: useRef(null),
    experience: useRef(null),
    contact: useRef(null),
  };

  // Smooth Scroll Function
  const scrollToSection = (section) => {
    refs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Automatically Scroll on URL Change
  useEffect(() => {
    const section = location.pathname.replace("/", "") || "home";
    if (refs[section]) {
      scrollToSection(section);
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Pass the scroll function to the Navbar */}
      <Navbar scrollToSection={scrollToSection} />

      {/* Main Page with Single Rendering of Each Section */}
      <div ref={refs.home}>
        <Home />
      </div>
      <div ref={refs.about}>
        <About />
      </div>
      <div ref={refs.skills}>
        <Skills />
      </div>
      <div ref={refs.education}>
        <Projects />
      </div>
      <div ref={refs.experience}>
        <Experience />
      </div>
      <div ref={refs.contact}>
        <Contact />
      </div>
      <Footer/>
      <TestParticles/>
    </div>
  );
};

export default App;
