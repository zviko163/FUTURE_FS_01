// App.tsx
import { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'     
import Projects from './components/Projects' 
import Experience from './components/Experience'
import Research from './components/Research'
import Footer from './components/Footer'
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
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-800 dark:text-stone-300 transition-colors duration-200 font-sans selection:bg-amber-500/30">
      
      {/* GLOBAL BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
         <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
         <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-stone-500/10 dark:bg-stone-700/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10">
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        {/* Main Content Flow */}
        <main className="flex flex-col gap-0"> {/* Gap-0 because sections have their own padding */}
          <Hero />
          <About />
          <Projects />
          <Research />
          <Experience />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App