import { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    // Base background colors
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-800 dark:text-stone-300 transition-colors duration-200 font-sans selection:bg-amber-500/30">
      
      {/* GLOBAL BACKGROUND LAYER - This makes the whole body match the Hero */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         {/* Subtle Grid Pattern */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
         {/* Ambient Glows */}
         <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
         <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-stone-500/10 dark:bg-stone-700/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        {/* Add more sections here later */}
      </div>
    </div>
  );
}

export default App