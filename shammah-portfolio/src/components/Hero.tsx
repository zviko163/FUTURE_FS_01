import { motion } from 'framer-motion';
import { ArrowRight, Download, Terminal } from 'lucide-react';

const Hero = () => {
  // Animation variants for staggered text
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

      {/* 2. CONTENT CONTAINER - Floats above background */}
      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Text Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center lg:text-left"
          >
            {/* "Badge" */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-amber-100/50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-sm font-medium text-amber-800 dark:text-amber-500">Available for work</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-bold tracking-tight text-stone-900 dark:text-stone-100 mb-6">
              Shammah
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500"> Dzwairo</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg text-stone-600 dark:text-stone-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Crafting digital experiences with passion and precision. Specialized in building modern web applications that make a difference.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group px-8 py-3.5 bg-stone-900 dark:bg-stone-100 text-stone-50 dark:text-stone-900 rounded-full font-semibold transition-all hover:shadow-[0_0_20px_-5px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] hover:scale-105 flex items-center justify-center gap-2">
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="px-8 py-3.5 border border-stone-200 dark:border-stone-800 text-stone-800 dark:text-stone-300 rounded-full font-medium transition-all hover:bg-stone-100 dark:hover:bg-stone-800 hover:scale-105 flex items-center justify-center gap-2">
                <Download size={18} />
                Download CV
              </button>
            </motion.div>
          </motion.div>

          {/* Image/Illustration Area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative"
          >
            {/* Abstract Background Shapes behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500 to-stone-500 rounded-full blur-[60px] opacity-20 animate-pulse" />
            
            {/* The Image Card - Uses a glass effect instead of just a circle */}
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 mx-auto">
              <div className="absolute inset-0 border-2 border-stone-200 dark:border-stone-800 rounded-[2rem] transform rotate-6 translate-x-4 translate-y-4 z-0"></div>
              
              <div className="relative z-10 w-full h-full rounded-[2rem] overflow-hidden shadow-2xl shadow-stone-900/10 dark:shadow-black/50 border border-white/20">
                <img 
                  src="/src/assets/images/shammah.jpg" 
                  alt="Shammah Dzwairo"
                  className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                />
                
                {/* Overlay gradient to ensure text readability if you add overlay text later */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Decorative Floater (Code icon) */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white dark:bg-stone-800 p-4 rounded-xl shadow-lg border border-stone-100 dark:border-stone-700 z-20"
              >
                <Terminal className="text-amber-500 w-6 h-6" />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;