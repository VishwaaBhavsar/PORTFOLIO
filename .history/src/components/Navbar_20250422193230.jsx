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
    <nav className="fixed w-full z-50 text-slate-50" style={{backgroundColor: "rgba(15, 23, 42, 0.8)", backdropFilter: "blur(8px)"}}>
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        
        {/* Logo */}
        <a id="logo" className="flex items-center gap-3 logo" href="#">
          <div className="overflow-hidden">
            <img src="src\assets\VBLogo-removebg-preview.png" className="h-12" alt="Logo" />
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
        <div className="hidden md:flex space-x-8 text-lg">
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
      </div>
      
      {/* Mobile Menu */}
      <div
        className={`absolute top-0 left-0 w-full h-screen md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{backgroundColor: "rgba(15, 23, 42, 0.8)", backdropFilter: "blur(8px)"}}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
          {navItems.map((item) => (
            <button
              key={item.section}
              onClick={() => {
                scrollToSection(item.section);
                setIsOpen(false);
              }}
              className="hover:text-blue-400 transition duration-300"
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