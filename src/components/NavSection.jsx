import React, { useState } from "react";
import { HiMenu, HiX, HiMoon, HiSun } from "react-icons/hi";
import { useDarkMode } from './DarkModeContext';

function NavSection(){
    const navLinks = [
        {href: "#home", label: "Home"},
        {href: "#about", label: "About Me"},
        {href: "#skills", label: "Skills"},
        {href: "#experience", label: "Experience"},
        {href: "#projects", label: "Portfolio"},
        {href: "#certifications", label: "Certifications"},
        {href: "#contact", label: "Contact"}
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('#home');
    const { isDark, toggleDarkMode } = useDarkMode();
    console.log("isDark:", isDark);

    return(
        <nav className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800 shadow-sm z-50 transition-colors duration-300">
          <div className="w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16">
              <div className="text-xl font-bold text-blue-600 dark:text-blue-400 animate-fade-in">
                 Zackypee
              </div>

              {/* Mobile menu button */}
              <div className="flex items-center gap-4 md:hidden">
                <button 
                  onClick={toggleDarkMode}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                  aria-label="Toggle dark mode"
                >
                  {isDark ? (
                    <HiSun size={20} className="text-yellow-400" />
                  ) : (
                    <HiMoon size={20} className="text-gray-600" />
                  )}
                </button>
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}  
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                >
                  {isMenuOpen ? (
                    <HiX size={24} className="text-gray-700 dark:text-gray-300" />
                  ) : (
                    <HiMenu size={24} className="text-gray-700 dark:text-gray-300" />
                  )}
                </button>
              </div>

              <div className="hidden md:flex gap-10 items-center">
                   {navLinks.map((link,index) => (
                        <a key={index} href={link.href} 
                        onClick={() => setActiveLink(link.href)}
                        className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0
                           hover:after:w-full after:bg-blue-600 dark:after:bg-blue-400 after:transition-all duration-300 
                           ${activeLink === link.href 
                             ? "text-blue-600 dark:text-blue-400 after:w-full" 
                             : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"}`}>
                            {link.label}
                        </a>
                    ))}
              </div>

              <div className="hidden md:flex items-center gap-4">
                <button 
                  onClick={toggleDarkMode}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110"
                  aria-label="Toggle dark mode"
                >
                  {isDark ? (
                    <HiSun size={20} className="text-yellow-400" />
                  ) : (
                    <HiMoon size={20} className="text-gray-600" />
                  )}
                </button>
                <button className="px-6 py-2.5 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 rounded-lg cursor-pointer text-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
                  Download Resume
                </button>
              </div>
          </div>

          {isMenuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-4 animate-slide-down">
                    <div className="container mx-auto px-4 space-y-4">
                        {navLinks.map((link, index) => (
                            <a 
                              key={index}
                              className={`block text-sm font-medium py-2 transition-colors duration-300 ${activeLink === link.href 
                                ? "text-blue-600 dark:text-blue-400" 
                                : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"}`} 
                              href={link.href}
                              onClick={() => setActiveLink(link.href)}
                            >
                              {link.label}
                            </a>
                        ))}
                        <button className="w-full px-6 py-2.5 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 rounded-lg cursor-pointer text-sm transition-all duration-300 hover:shadow-lg">
                          Download Resume
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default NavSection;