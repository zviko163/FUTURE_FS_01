import { motion } from 'framer-motion';
import "../styles/Hero.css"

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-300/20 to-stone-800/50 dark:from-stone-800/50 dark:to-stone-900/80" />
      
      {/* Content Container */}
      <div className="relative z-10 container rounded-lg mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left mb-12 md:mb-0"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-stone-800 dark:text-stone-100 mb-6">
            Shammah
            {/* <span className="text-stone-600 dark:text-amber-500"> Z.</span> */}
            <span className="text-amber-600 dark:text-amber-500"> Dzwairo</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-600 dark:text-stone-300 mb-8 max-w-2xl">
            Crafting digital experiences with passion and precision. Specialized in building modern web applications that make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-600/25">
              View Projects
            </button>
            <button className="px-8 py-3 border-2 border-stone-300 dark:border-stone-600 hover:border-amber-600 dark:hover:border-amber-500 text-stone-800 dark:text-stone-500 rounded-full font-medium transition-all duration-300 hover:scale-105">
              Contact Me
            </button>
          </div>
        </motion.div>

        {/* Image/Illustration */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center items-center"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* You can add your profile image or illustration here */}
            <img 
              src="/src/assets/images/shammah.jpg" // Replace with your actual image path
              alt="Profile"
              className="absolute inset-0 w-full h-full object-cover rounded-full"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/20 to-emerald-500/20 rounded-full animate-pulse" />
            <div className="absolute inset-4 bg-gradient-to-bl from-stone-300/30 to-stone-800/30 rounded-full animate-pulse delay-75" />
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-stone-300/10 dark:from-stone-800/10 to-transparent" />
    </div>
  );
};

export default Hero;