import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import whiteHknLogo from '../media/logos/hkn-logo-white.png';

function NavBar() {
  const location = useLocation();
  const isCareerFairPage = location.pathname === '/career-fair';
  const logoSrc = isCareerFairPage ? whiteHknLogo : whiteHknLogo;
  const textColorClass = isCareerFairPage ? 'text-white' : 'text-white';
  const hoverColorClass = isCareerFairPage ? 'hover:text-[#A3D7E5]' : 'hover:text-[#5F69A6]';
  
  return (
    <nav className="fixed top-0 inset-x-0 z-[1000] backdrop-blur-xl bg-[rgba(17,25,40,0.25)] saturate-150">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src={logoSrc} alt="HKN Logo" className="h-16 w-auto" />
            </Link>
          </div>

          {/* Navigation Links */}
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
        </div>
      </div>
    </nav>
  );
}

export default NavBar;