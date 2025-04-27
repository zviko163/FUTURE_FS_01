import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import "../styles/NavBar.css";

interface NavBarProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

export default function NavBar({ darkMode, setDarkMode }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar fixed top-0 left-0 right-0 z-50">
      <nav className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg px-6 py-4 w-full transition-all duration-300">
        <div className="navbar-contents">
          {/* Logo */}
          <div className="text-2xl font-bold text-[#d97706] dark:text-[#d97706] hover:text-[#10b981] dark:hover:text-[#10b981] transition-colors duration-600">
            My Portfolio
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 dark:text-gray-200 transition-colors duration-300 font-medium hover:!text-[#d97706]">Home</a>
            <a href="#" className="text-gray-700 dark:text-gray-200 transition-colors duration-300 font-medium hover:!text-[#d97706]">Community</a>
            <a href="#" className="text-gray-700 dark:text-gray-200 transition-colors duration-300 font-medium hover:!text-[#d97706]">Resources</a>
            <a href="#" className="text-gray-700 dark:text-gray-200 transition-colors duration-300 font-medium hover:!text-[#d97706]">About</a>
          </div>
          
          {/* Right Section: Contact & Mobile Menu */}
          <div className="flex items-center" id="navright-buttons">
            {/* Contact Button */}
            <button
              className="hidden md:block bg-blue-600 dark:bg-blue-500 text-white font-semibold px-6 py-2.5 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              Contact
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <Sun size={20} className="text-gray-200 hover:text-yellow-400 transition-colors duration-300" />
              ) : (
                <Moon size={20} className="text-gray-700 hover:text-blue-600 transition-colors duration-300" />
              )}
            </button>
            
            {/* Mobile Hamburger Button */}
            <div className="block md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 focus:outline-none transition-colors duration-300"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="block md:hidden mt-4 space-y-4 px-4 py-5 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-b-2xl">
            <a href="#" className="block text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 font-medium py-2">Home</a>
            <a href="#" className="block text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 font-medium py-2">Community</a>
            <a href="#" className="block text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 font-medium py-2">Resources</a>
            <a href="#" className="block text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 font-medium py-2">About</a>
            <hr className="border-gray-200 dark:border-gray-700 my-2" />
            <a href="#" className="block text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 font-medium py-2">Login</a>
            <button
              className="w-full bg-blue-600 dark:bg-blue-500 text-white font-semibold px-6 py-2.5 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              Register
            </button>
            
            {/* Add Theme Toggle in Mobile Menu */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-full text-left py-2 flex items-center justify-between text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 font-medium"
            >
              <span>Theme</span>
              {darkMode ? (
                <Sun size={20} className="text-gray-200 hover:text-yellow-400 transition-colors duration-300" />
              ) : (
                <Moon size={20} className="text-gray-700 hover:text-blue-600 transition-colors duration-300" />
              )}
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}