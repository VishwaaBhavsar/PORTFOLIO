import React from 'react';

function Footer() {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10 flex flex-col min-h-screen">
        
        {/* Social Media Links */}
        <nav className="flex gap-6">
          {/* GitHub */}
          <a href="https://github.com/VishwaaBhavsar" target="_blank" rel="noopener noreferrer">
            <img src="/github.svg" alt="GitHub" className="w-8 h-8 hover:opacity-70 transition duration-300" />
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.svg" alt="LinkedIn" className="w-8 h-8 hover:opacity-70 transition duration-300" />
          </a>

          {/* Email */}
          <a href="mailto:your-email@example.com">
            <img src="D:\PORTFOLIO\src\assets\mail.png" alt="Email" className="w-8 h-8 hover:opacity-70 transition duration-300" />
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
