import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Sparkles } from "lucide-react";

interface NavBarProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

export default function NavBar({ darkMode, setDarkMode }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll effect to make navbar shrink slightly when scrolling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["About", "Experience", "Projects", "Interests"];

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${scrolled ? 'pt-4' : 'pt-6'}`}>
      
      {/* THE FLOATING ISLAND 
        - We use 'w-[95%]' to ensure it doesn't touch edges on mobile
        - 'backdrop-blur-xl' gives it that premium glass feel
      */}
      <nav 
        className={`
          relative w-[95%] max-w-5xl rounded-full border border-stone-200/40 dark:border-stone-700/40
          bg-stone-50/80 dark:bg-stone-900/80 backdrop-blur-xl shadow-xl transition-all duration-500 ease-out
          ${scrolled ? 'py-3 px-6' : 'py-5 px-8'}
        `}
      >
        <div className="flex items-center justify-between">
            
          {/* Logo Section */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="p-2 rounded-full bg-gradient-to-tr from-amber-100 to-amber-200 dark:from-amber-900/50 dark:to-amber-800/30 text-amber-700 dark:text-amber-500 group-hover:rotate-12 transition-transform duration-300 shadow-sm">
              <Sparkles size={22} strokeWidth={2.5} />
            </div>
            <span className="text-xl font-bold text-stone-800 dark:text-stone-100 tracking-tight group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors">
              Portfolio
            </span>
          </div>
            
          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex items-center gap-1 bg-stone-100/50 dark:bg-stone-800/50 rounded-full px-2 py-1.5 border border-stone-200/50 dark:border-stone-700/50">
            {navLinks.map((link) => (
              <a 
                key={link}
                href={`#${link.toLowerCase()}`} 
                className="px-5 py-2 text-sm font-semibold text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-white dark:hover:bg-stone-700 rounded-full transition-all duration-300"
              >
                {link}
              </a>
            ))}
          </div>
            
          {/* Right Section */}
          <div className="flex items-center gap-3">
            
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-full hover:bg-stone-200/50 dark:hover:bg-stone-800/50 transition-colors duration-300 border border-transparent hover:border-stone-200 dark:hover:border-stone-700"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <Sun size={20} className="text-amber-400 fill-amber-400/20" />
              ) : (
                <Moon size={20} className="text-stone-600 fill-stone-600/20" />
              )}
            </button>

            {/* CTA Button */}
            <button className="hidden md:block px-6 py-2.5 bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 text-sm font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
              Let's Talk
            </button>
            
            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-stone-700 dark:text-stone-200 hover:bg-stone-200/50 dark:hover:bg-stone-800 rounded-full transition-colors"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown - Now a "Floating Card" underneath the main bar 
        instead of a full-screen list 
      */}
      <div 
        className={`
          absolute top-full left-0 right-0 mt-4 mx-4 md:hidden
          bg-stone-50 dark:bg-stone-900 rounded-3xl border border-stone-200 dark:border-stone-800 
          shadow-2xl overflow-hidden transition-all duration-300 origin-top
          ${menuOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'}
        `}
      >
        <div className="p-6 flex flex-col gap-2">
          {navLinks.map((link) => (
              <a 
              key={link}
              href={`#${link.toLowerCase()}`} 
              className="p-4 text-center text-lg font-medium text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-2xl transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <div className="h-px bg-stone-200 dark:bg-stone-800 my-2" />
          <button className="w-full py-4 bg-amber-600 text-white font-bold rounded-2xl shadow-lg shadow-amber-600/20 active:scale-95 transition-all">
            Let's Talk
          </button>
        </div>
      </div>
    </div>
  );
}