// import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, Server, Code } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-stone-900 text-stone-300 py-20 overflow-hidden border-t border-stone-800">
      
      {/* Background Decor (Subtle Grid) */}
      <div className="absolute inset-0 pointer-events-none opacity-10" 
           style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #78716c 1px, transparent 0)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Mission */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-stone-100 mb-6 tracking-tight">
              Shammah<span className="text-amber-500">.</span>
            </h2>
            <p className="text-stone-400 leading-relaxed max-w-sm mb-8">
              Engineering scalable systems and intuitive interfaces. Bridging the gap between complex backend logic and human-centric design.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/zviko163" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-stone-800 hover:bg-amber-500 hover:text-stone-900 transition-all duration-300">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/shammah-dzwairo" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-stone-800 hover:bg-amber-500 hover:text-stone-900 transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href="mailto:shammah.dzwairo@ashesi.edu.gh" className="p-3 rounded-full bg-stone-800 hover:bg-amber-500 hover:text-stone-900 transition-all duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-stone-100 font-bold mb-6">Explore</h3>
            <ul className="space-y-4">
              {['About', 'Experience', 'Projects', 'Research'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-stone-400 hover:text-amber-500 transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact/CTA */}
          <div>
            <h3 className="text-stone-100 font-bold mb-6">Get in Touch</h3>
            <p className="text-stone-400 text-sm mb-4">
              Currently open for internships and freelance backend projects.
            </p>
            <a 
              href="mailto:shammah.dzwairo@ashesi.edu.gh"
              className="inline-flex items-center gap-2 text-amber-500 font-bold hover:text-amber-400 transition-colors"
            >
              Start a conversation
              <ArrowUp className="rotate-45" size={16} />
            </a>
          </div>
        </div>

        {/* Separator */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-stone-800 to-transparent mb-8" />

        {/* Bottom Bar: System Status */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          
          <div className="flex flex-col md:flex-row items-center gap-4 text-stone-500">
            <p>© {new Date().getFullYear()} Shammah Dzwairo.</p>
            <span className="hidden md:inline text-stone-700">|</span>
            <div className="flex items-center gap-2">
               <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
               <span className="font-mono text-emerald-500/80">All Systems Operational</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-stone-500" title="Tech Stack">
              <Code size={14} />
              <span>React & Tailwind</span>
            </div>
            <div className="flex items-center gap-2 text-stone-500" title="Hosting">
              <Server size={14} />
              <span>Deployed on Linux VPS</span>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="p-3 bg-stone-800 hover:bg-stone-700 rounded-lg text-amber-500 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;