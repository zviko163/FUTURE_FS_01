import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Server, Cpu, Users, Globe, Terminal, Wifi, 
  Mail, Linkedin, Github, Clock, Copy, Check, Download 
} from 'lucide-react';

const About = () => {
  // State for "Copy Email" interaction
  const [copied, setCopied] = useState(false);
  
  // State for Local Time in Ghana
  const [time, setTime] = useState("");

  useEffect(() => {
    // Update time every minute
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit', 
        timeZone: 'GMT' 
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("shammah.dzwairo@ashesi.edu.gh");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto">
      
      {/* 1. THE "COMMAND CENTER" STRIP 
          Now divides info into 3 logical groups: Location, Contact, Socials
      */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-between gap-6 mb-20 p-6 rounded-2xl bg-stone-100 dark:bg-stone-900/50 border border-stone-200 dark:border-stone-800 backdrop-blur-sm"
      >
        
        {/* Group A: Location & Time */}
        <div className="flex items-center gap-6 w-full md:w-auto justify-center md:justify-start">
          <div className="flex items-center gap-2 text-stone-600 dark:text-stone-400 text-sm font-medium">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </div>
            <span>Berekuso, Ghana</span>
          </div>
          <div className="h-4 w-px bg-stone-300 dark:bg-stone-700" />
          <div className="flex items-center gap-2 text-stone-600 dark:text-stone-400 text-sm font-medium">
            <Clock size={16} className="text-stone-400" />
            <span>{time} GMT</span>
          </div>
        </div>

        {/* Group B: Email with Copy Function */}
        <button 
          onClick={handleCopyEmail}
          className="group flex items-center gap-3 px-4 py-2 rounded-full bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 hover:border-amber-500 transition-all w-full md:w-auto justify-center"
        >
          <Mail size={16} className="text-amber-600 dark:text-amber-500" />
          <span className="text-stone-700 dark:text-stone-300 text-sm font-medium">
            shammah.dzwairo@ashesi.edu.gh 
          </span>
          {copied ? (
            <Check size={14} className="text-green-500" />
          ) : (
            <Copy size={14} className="text-stone-400 group-hover:text-amber-500" />
          )}
        </button>

        {/* Group C: Socials & Resume */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-end">
          <a href="https://github.com/zviko163" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:border-amber-500 transition-all">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/in/shammah-dzwairo" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:border-amber-500 transition-all">
            <Linkedin size={18} />
          </a>
          <a href="/resume.pdf" className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 text-sm font-bold hover:opacity-90 transition-opacity">
            <span>Resume</span>
            <Download size={16} />
          </a>
        </div>
      </motion.div>

      {/* 2. SECTION HEADER */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <span className="text-amber-600 dark:text-amber-500 font-medium tracking-wider uppercase text-sm">01. About Me</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-2 text-stone-900 dark:text-stone-100">
          More than just <br />
          <span className="text-stone-400 dark:text-stone-600">code.</span>
        </h2>
      </motion.div>

      {/* 3. BENTO GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Card 1: The Engineer (Spans 7 cols) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 p-8 rounded-3xl bg-white/50 dark:bg-stone-900/50 border border-stone-200 dark:border-stone-800 backdrop-blur-sm relative overflow-hidden group"
        >
          {/* Subtle Background Pattern */}
          <div className="absolute -right-10 -bottom-10 opacity-5 dark:opacity-10 transform rotate-12 group-hover:rotate-0 transition-transform duration-700">
             <Terminal size={200} />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg text-amber-600">
                <Terminal size={24} />
              </div>
              <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100">The Engineer</h3>
            </div>
            
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-lg mb-6">
              I am a Computer Science student at Ashesi University ('26) driven by a passion for engineering systems that solve real-world problems. 
            </p>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-lg">
              My technical focus lies in <span className="text-stone-900 dark:text-stone-200 font-semibold border-b-2 border-amber-500/30">Back-end Engineering</span>, <span className="text-stone-900 dark:text-stone-200 font-semibold border-b-2 border-amber-500/30">Server Administration</span>, and <span className="text-stone-900 dark:text-stone-200 font-semibold border-b-2 border-amber-500/30">IoT</span>. I thrive on the challenge of experimenting with emerging technologies outside the standard subset.
            </p>
          </div>
        </motion.div>

        {/* Card 2: The Leader (Spans 5 cols) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-5 p-8 rounded-3xl bg-stone-100 dark:bg-stone-800/20 border border-stone-200 dark:border-stone-800 backdrop-blur-sm flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
               <div className="p-2 bg-stone-200 dark:bg-stone-800 rounded-lg text-stone-600 dark:text-stone-300">
                <Users size={24} />
              </div>
              <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100">The Leader</h3>
            </div>
            
            <div className="space-y-6">
              {/* Role 1 */}
              <div>
                <h4 className="font-bold text-lg text-stone-800 dark:text-stone-200 mb-1">Head Coach</h4>
                <p className="text-stone-500 dark:text-stone-400 text-sm mb-2">Ashesi Ladies Football Team </p>
                <p className="text-stone-600 dark:text-stone-400 text-sm border-l-2 border-amber-500 pl-3">
                  Led team to win the Varsity League 2024. Focus on strategy & discipline.
                </p>
              </div>
              
              {/* Role 2 */}
              <div>
                <h4 className="font-bold text-lg text-stone-800 dark:text-stone-200 mb-1">President</h4>
                <p className="text-stone-500 dark:text-stone-400 text-sm mb-2">Ashesi Pool Association </p>
                <p className="text-stone-600 dark:text-stone-400 text-sm border-l-2 border-amber-500 pl-3">
                  Organizing tournaments and fostering community. 
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 3: Tech Arsenal (Full Width) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-12 p-8 rounded-3xl bg-white/30 dark:bg-stone-900/30 border border-stone-200 dark:border-stone-800"
        >
          <h4 className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-6">Technologies & Tools </h4>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Java Spring Boot", icon: Server },
              { label: "Python / AI", icon: Cpu },
              { label: "React.js", icon: Globe },
              { label: "Linux / VPS", icon: Terminal },
              { label: "Docker", icon: Server },
              { label: "PostgreSQL", icon: Server },
              { label: "IoT Systems", icon: Wifi },
            ].map((tech, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-300 shadow-sm hover:border-amber-500 transition-colors cursor-default">
                <tech.icon size={16} className="text-amber-500" />
                <span className="font-medium text-sm">{tech.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;