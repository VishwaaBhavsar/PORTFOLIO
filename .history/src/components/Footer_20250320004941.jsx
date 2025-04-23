import React from 'react';

function Footer() {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10 flex flex-col min-h-screen">
        
        {/* GitHub Logo */}
        <nav>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              className="fill-current">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.207 11.385.6.111.793-.261.793-.577 0-.285-.011-1.04-.016-2.04-3.338.726-4.042-1.612-4.042-1.612-.546-1.386-1.333-1.755-1.333-1.755-1.089-.744.082-.729.082-.729 1.205.084 1.838 1.24 1.838 1.24 1.07 1.835 2.807 1.305 3.492.998.108-.775.419-1.305.762-1.605-2.665-.303-5.467-1.333-5.467-5.931 0-1.31.469-2.382 1.238-3.222-.124-.303-.536-1.523.116-3.176 0 0 1.01-.323 3.3 1.231a11.52 11.52 0 0 1 3-.404c1.02.005 2.047.138 3 .404 2.29-1.554 3.3-1.231 3.3-1.231.653 1.653.241 2.873.118 3.176.77.84 1.237 1.912 1.237 3.222 0 4.609-2.807 5.625-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .319.192.694.799.577 4.765-1.585 8.203-6.082 8.203-11.385 0-6.627-5.373-12-12-12z"/>
            </svg>
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
