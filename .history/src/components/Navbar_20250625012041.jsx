// import { useState } from "react";
// import Logo from "/dark.svg"; // ✅ Proper import

// const Navbar = ({ scrollToSection }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = [
//     { name: "Home", section: "home" },
//     { name: "About", section: "about" },
//     { name: "Skills", section: "skills" },
//     { name: "Education", section: "education" },
//     { name: "Experience", section: "experience" },
//     { name: "Contact", section: "contact" },
//   ];

//   return (
//     <nav
//       className="fixed w-full z-50 text-slate-50"
//       style={{
//         backgroundColor: "rgba(15, 23, 42, 0.8)",
//         backdropFilter: "blur(16px)",
//       }}
//     >
//       <div className="max-w-screen-xl flex items-center justify-between mx-auto p-2">
//         {/* Logo */}
//         <div className="flex items-center gap-3 logo cursor-pointer" onClick={() => scrollToSection("home")}>
//           <img src={Logo} className="h-16" alt="Logo" />
//           <span
//             className="text-xl font-semibold"
//             style={{ fontFamily: "'Fredoka', sans-serif" }}
//           >
//             Vishwaa Bhavsar
//           </span>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-white z-50"
//           aria-label="Toggle Menu"
//           aria-controls="navbar-default"
//           aria-expanded={isOpen}
//         >
//           {isOpen ? (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               strokeWidth="2"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           ) : (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               strokeWidth="2"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-16 6h16" />
//             </svg>
//           )}
//         </button>

//         {/* Desktop Nav Links */}
//         <div className="hidden md:flex space-x-8 text-lg">
//           {navItems.map((item) => (
//             <button
//               key={item.section}
//               onClick={() => scrollToSection(item.section)}
//               className="hover:text-gray-400 transition duration-300"
//             >
//               {item.name}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`absolute top-0 left-0 w-full h-screen md:hidden transition-opacity duration-300 ${
//           isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
//         }`}
//         style={{
//           backgroundColor: "rgba(15, 23, 42, 0.8)",
//           backdropFilter: "blur(8px)",
//         }}
//       >
//         <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
//           {navItems.map((item) => (
//             <button
//               key={item.section}
//               onClick={() => {
//                 scrollToSection(item.section);
//                 setIsOpen(false);
//               }}
//               className="hover:text-blue-400 cursor-pointer transition duration-300"
//             >
//               {item.name}
//             </button>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import { useState, useEffect } from "react";
import Logo from "/dark.svg";

const Navbar = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navItems = [
    { name: "Home", section: "home" },
    { name: "About", section: "about" },
    { name: "Skills", section: "skills" },
    { name: "Projects", section: "education" },
    { name: "Experience", section: "experience" },
    { name: "Contact", section: "contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 text-slate-50 transition-all duration-300 ${
        scrolled ? "py-1 shadow-lg" : "py-2"
      }`}
      style={{
        backgroundColor: scrolled 
          ? "rgba(15, 23, 42, 0.95)" 
          : "rgba(15, 23, 42, 0.8)",
        backdropFilter: "blur(16px)",
      }}
    >
      <div className="max-w-screen-xl flex items-center justify-between mx-auto px-4">
        {/* Logo */}
        <div 
          className="flex items-center gap-3 logo cursor-pointer" 
          onClick={() => {
            scrollToSection("home");
            setIsOpen(false);
          }}
        >
          <img src={Logo} className="h-12 md:h-16" alt="Logo" />
          <span
            className="text-lg md:text-xl font-semibold"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            Vishwaa Bhavsar
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white z-50 p-2 rounded-lg hover:bg-slate-700 transition-colors"
          aria-label="Toggle Menu"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-16 6h16" />
            </svg>
          )}
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-8 text-lg">
          {navItems.map((item) => (
            <button
              key={item.section}
              onClick={() => scrollToSection(item.section)}
              className="hover:text-blue-400 transition duration-300 relative group py-2"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 md:hidden transition-all duration-500 flex flex-col justify-center ${
          isOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          backgroundColor: "rgba(15, 23, 42, 0.95)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div className="flex flex-col items-center justify-center space-y-8 py-20">
          {navItems.map((item) => (
            <button
              key={item.section}
              onClick={() => {
                scrollToSection(item.section);
                setIsOpen(false);
              }}
              className="text-2xl font-medium hover:text-blue-400 transform hover:scale-105 transition duration-300 w-full text-center py-4"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;