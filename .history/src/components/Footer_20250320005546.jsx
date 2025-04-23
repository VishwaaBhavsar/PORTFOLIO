import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Importing icons

function Footer() {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10 flex flex-col min-h-screen">
        
        {/* Social Media Links */}
        <nav className="flex gap-6">
          {/* GitHub */}
          <a href="https://github.com/VishwaaBhavsar" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl hover:text-gray-500 transition duration-300" />
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/vishwaa-bhavsar-827907251/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl text-blue-600 hover:text-blue-400 transition duration-300" />
          </a>

          {/* Email */}
          <a href="mailto:vishwaa0606@gmail.com">
            <FaEnvelope className="text-3xl text-red-600 hover:text-red-400 transition duration-300" />
          </a>
        </nav>

        {/* Copyright */}
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All rights reserved by Vishwaa Bhavsar</p>
        </aside>
        
      </footer>
    </div>
  );
}

export default Footer;
