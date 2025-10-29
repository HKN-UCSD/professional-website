import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import whiteHknLogo from '../media/logos/hkn-logo-white.png';

function NavBar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isCareerFairPage = location.pathname === '/career-fair';
  const logoSrc = isCareerFairPage ? whiteHknLogo : whiteHknLogo;
  const textColorClass = isCareerFairPage ? 'text-white' : 'text-white';
  const hoverColorClass = isCareerFairPage ? 'hover:text-[#A3D7E5]' : 'hover:text-[#5F69A6]';
  
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <nav className="fixed top-0 inset-x-0 z-[1000] backdrop-blur-xl bg-[rgba(17,25,40,0.25)] saturate-150 pt-1 pb-2">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src={logoSrc} alt="HKN Logo" className="h-16 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`${
                location.pathname === '/' ? '[color:#5F69A6]' : textColorClass
              } ${hoverColorClass}`}
            >
              About
            </Link>
            <Link
              to="/career-fair"
              className={`${
                location.pathname === '/career-fair' ? '[color:#A3D7E5]' : textColorClass
              } ${hoverColorClass}`}
            >
              Honors Career Fair
            </Link>
            <a
              href="https://portal.hknucsd.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${textColorClass} ${hoverColorClass}`}
            >
              Portal
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
              className="p-2 rounded-md text-white"
            >
              {isMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (animated slide) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-60 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'
        }`}
      >
        <div className="flex flex-col space-y-2 px-4 pb-4 pt-2">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className={`block px-3 py-2 rounded ${
              location.pathname === '/' ? '[color:#5F69A6]' : textColorClass
            } ${hoverColorClass}`}
          >
            About
          </Link>
          <Link
            to="/career-fair"
            onClick={() => setIsMenuOpen(false)}
            className={`block px-3 py-2 rounded ${
              location.pathname === '/career-fair' ? '[color:#A3D7E5]' : textColorClass
            } ${hoverColorClass}`}
          >
            Honors Career Fair
          </Link>
          <a
            href="https://portal.hknucsd.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className={`block px-3 py-2 rounded ${textColorClass} ${hoverColorClass}`}
          >
            Portal
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;