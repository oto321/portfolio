// Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import PhotoWrapper from './Photo.jsx';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

function Home() {
  return (
    <div className="
      relative p-8 w-full max-w-4xl mx-auto
      bg-gradient-to-b from-white/10 to-cyan-500/0 
      backdrop-blur-lg                           
      rounded-xl                                 
      shadow-lg                                  
      border border-white/20                     
      text-center                                
      text-white                                 
      overflow-hidden                            

      hover:scale-[1.02]                         
      hover:shadow-2xl                           
      hover:border-white/50                      
      hover:drop-shadow-xl hover:drop-shadow-cyan-400/50 
      transition-all duration-500 ease-in-out    

      md:p-12 md:text-left
    ">
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-8 md:space-y-0 md:space-x-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="flex-shrink-0" variants={itemVariants}>
          <PhotoWrapper />
        </motion.div>

        <div className="flex-grow">
          <motion.h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight" variants={itemVariants}>
            <span className="block text-white drop-shadow-md">Navraj Mann</span>
            <span className="block text-cyan-300 drop-shadow-md">Software Engineering Student</span>
          </motion.h1>
          <motion.p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto md:mx-0" variants={itemVariants}>
            As a software engineering student, I'm driven to learn and apply clean code principles to craft engaging web experiences.
          </motion.p>
          <motion.a
            href="#projects"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg text-lg"
            variants={itemVariants}
          >
            Explore My Work
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
