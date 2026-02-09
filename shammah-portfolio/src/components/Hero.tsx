import { motion } from 'framer-motion';
import { ArrowRight, Github, Terminal } from 'lucide-react';
import myImage from '/src/assets/images/shammah.jpg'

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* CONTENT CONTAINER */}
      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Text Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center lg:text-left"
          >
            {/* Status Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-amber-100/50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-sm font-medium text-amber-800 dark:text-amber-500">Available for new projects</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-bold tracking-tight text-stone-900 dark:text-stone-100 mb-6">
              Shammah
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500"> Dzwairo</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg text-stone-600 dark:text-stone-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Full Stack Engineer specialized in building scalable, user-centric applications. Bridging the gap between complex backend systems and intuitive experiences.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* Primary Action */}
              <a href="#projects" className="group px-8 py-3.5 bg-stone-900 dark:bg-stone-100 text-stone-50 dark:text-stone-900 rounded-full font-semibold transition-all hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2">
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              {/* Secondary Action: REPLACED 'Download CV' with 'GitHub' */}
              <a 
                href="https://github.com/zviko163" 
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3.5 border border-stone-200 dark:border-stone-800 text-stone-800 dark:text-stone-300 rounded-full font-medium transition-all hover:bg-stone-100 dark:hover:bg-stone-800 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Github size={18} />
                Visit GitHub
              </a>
            </motion.div>
          </motion.div>

          {/* Image/Illustration Area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative"
          >
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500 to-stone-500 rounded-full blur-[80px] opacity-20 animate-pulse" />
            
            {/* The Image Card */}
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 mx-auto">
              <div className="absolute inset-0 border-2 border-stone-200 dark:border-stone-800 rounded-[2rem] transform rotate-6 translate-x-4 translate-y-4 z-0"></div>
              
              <div className="relative z-10 w-full h-full rounded-[2rem] overflow-hidden shadow-2xl shadow-stone-900/10 dark:shadow-black/50 border border-white/20 bg-stone-200 dark:bg-stone-800">
                 {/* REPLACE THIS SRC with your actual image path. 
                    If you don't have one yet, it will show a gray placeholder.
                 */}
                <img 
                  src={myImage} 
                  alt="Shammah Dzwairo"
                  className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                />
              </div>

              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white dark:bg-stone-800 p-4 rounded-xl shadow-lg border border-stone-100 dark:border-stone-700 z-20 flex items-center gap-3"
              >
                <div className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded-lg text-amber-600">
                  <Terminal size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase">Focus</p>
                  <p className="text-sm font-bold text-stone-900 dark:text-stone-100">Back-end Engineering</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;