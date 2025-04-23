
// import { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = (
//     <>
//       <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
//       <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
//       <li><Link to="/skills" className="hover:text-gray-400">Skills</Link></li>
//       <li><Link to="/education" className="hover:text-gray-400">Education</Link></li>
//       <li><Link to="/experience" className="hover:text-gray-400">Experience</Link></li>
//       <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
//     </>
//   );

//   return (
//     <nav className="bg-black text-white">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         {/* Logo */}
//         <a id="logo" className="flex items-center gap-3 logo" href="https://yourwebsite.com">
//   {/* Logo */}
//   <div className="w-14 h-14 rounded-full overflow-hidden">
//     <img src="src/assets/VBLogo.jpg" className="w-14 h-14 object-cover" alt="Logo" /> 
//   </div>

//   {/* Name */}
//   <span className="text-xl font-semibold text-white" style={{ fontFamily: "'Fredoka', sans-serif" }}>Vishwaa Bhavsar</span>
// </a>


//         {/* Menu Button for Mobile */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-white"
//           aria-controls="navbar-default"
//           aria-expanded={isOpen}
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-16 6h16" />
//           </svg>
//         </button>

//         {/* Navbar Links */}
//         <div className={`${isOpen ? "block" : "hidden"} md:flex md:items-center`}>
//           <ul className="flex flex-col md:flex-row md:space-x-8 text-lg">
//             {navItems}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
// import { useState } from "react";

// const Navbar = ({ scrollToSection }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = (
//     <>
//       <li><button onClick={() => scrollToSection("home")} className="hover:text-gray-400">Home</button></li>
//       <li><button onClick={() => scrollToSection("about")} className="hover:text-gray-400">About</button></li>
//       <li><button onClick={() => scrollToSection("skills")} className="hover:text-gray-400">Skills</button></li>
//       <li><button onClick={() => scrollToSection("education")} className="hover:text-gray-400">Education</button></li>
//       <li><button onClick={() => scrollToSection("experience")} className="hover:text-gray-400">Experience</button></li>
//       <li><button onClick={() => scrollToSection("contact")} className="hover:text-gray-400">Contact</button></li>
//     </>
//   );

//   return (
//     <nav className="bg-black text-white">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

//         {/* Logo */}
//         <a id="logo" className="flex items-center gap-3 logo" href="#">
//           <div className="w-14 h-14 rounded-full overflow-hidden">
//             <img src="src/assets/VBLogo.jpg" className="w-14 h-14 object-cover" alt="Logo" />
//           </div>
//           <span className="text-xl font-semibold text-white" style={{ fontFamily: "'Fredoka', sans-serif" }}>
//             Vishwaa Bhavsar
//           </span>
//         </a>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-white"
//           aria-controls="navbar-default"
//           aria-expanded={isOpen}
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-16 6h16" />
//           </svg>
//         </button>

//         {/* Navbar Links */}
//         <div className={`${isOpen ? "block" : "hidden"} md:flex md:items-center`}>
//           <ul className="flex flex-col md:flex-row md:space-x-8 text-lg">
//             {navItems}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import { useState } from "react";

const Navbar = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", section: "home" },
    { name: "About", section: "about" },
    { name: "Skills", section: "skills" },
    { name: "Education", section: "education" },
    { name: "Experience", section: "experience" },
    { name: "Contact", section: "contact" },
  ];

  return (
    <nav className="bg-[#0F172A]/80 backdrop-blur-md text-[#F8FAFC] fixed w-full z-50">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">

        {/* Logo */}
        <a id="logo" className="flex items-center gap-3 logo" href="#">
          <div className=" overflow-hidden">
            <img src="src\assets\VBLogo-removebg-preview.png" className="h-12  " alt="Logo" />
          </div>
          <span
            className="text-xl font-semibold"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            Vishwaa Bhavsar
          </span>
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white z-50"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-16 6h16" />
            </svg>
          )}
        </button>

        {/* Navbar Links */}
        <div className="hidden bg- md:flex space-x-8 text-lg">
          {navItems.map((item) => (
            <button
              key={item.section}
              onClick={() => scrollToSection(item.section)}
              className="hover:text-gray-400 transition duration-300"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu (Animated) */}
        <div
          className={`fixed inset-0 bg-[#0F172A]  z-40 transition-transform duration-500 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
            {navItems.map((item, index) => (
              <button
                key={item.section}
                onClick={() => {
                  scrollToSection(item.section);
                  setIsOpen(false);
                }}
                className={`hover:text-blue-400 transition-opacity duration-500 ${
                  isOpen ? "opacity-100" : "opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
