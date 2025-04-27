import { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode

  useEffect(() => {
    // Apply dark mode class to document root
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
      <div className="screen"></div>
      <div className="min-h-screen text-stone-800 dark:text-stone-300 transition-colors duration-200">
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
      </div>
    </>
  );
}

export default App