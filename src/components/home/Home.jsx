import React from 'react';
import { motion } from 'framer-motion';
import PhotoWrapper from './Photo.jsx';

function DownArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-10 h-10"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
    </svg>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const cardHover = {
  scale: 1.02,
  boxShadow: '0 20px 40px rgba(6, 182, 212, 0.5)',
  borderColor: 'rgba(6, 182, 212, 0.6)',
};

function Home() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.section
      id="home"
      className="
        relative p-8 w-full max-w-4xl mx-auto
        bg-gradient-to-b from-white/10 to-cyan-500/0
        backdrop-blur-lg
        rounded-xl
        shadow-lg
        border border-white/20
        text-center
        text-white
        overflow-hidden
        md:p-12 md:text-left
      "
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover={cardHover}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      <motion.div
        className="flex flex-col gap-10 md:flex-row items-center p-5 justify-center md:justify-start space-y-8 md:space-y-0 md:space-x-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="flex-shrink-0 hover:scale-110 transition-all duration-500 ease-in-out" variants={itemVariants}>
          <PhotoWrapper />
        </motion.div>

        <div className="flex-grow">
          <motion.h1 className="text-4xl hover:scale-110 transition-all duration-500 ease-in-out md:text-6xl font-extrabold mb-4 leading-tight" variants={itemVariants}>
            <span className="block text-white drop-shadow-md">Navraj Mann</span>
            <span className="block text-cyan-300 drop-shadow-md">Software Engineering Student</span>
          </motion.h1>
          <motion.p
            className="text-lg hover:scale-110 transition-all duration-500 ease-in-out md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto md:mx-0"
            variants={itemVariants}
          >
            As a software engineering student, I'm driven to learn and apply clean code principles to craft engaging web experiences.
          </motion.p>
          <motion.a
            href="#projects"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full hover:scale-110 transition-all duration-500 ease-in-out shadow-lg text-lg"
            variants={itemVariants}
          >
            Explore My Work
          </motion.a>
        </div>
      </motion.div>

      <motion.button
        aria-label="Scroll to About"
        onClick={() => scrollToSection('about')}
        whileHover={{ scale: 1.5, color: '#22d3ee' }}
        whileTap={{ scale: 0.95 }}
        className="absolute bottom-12 right-8 text-white hover:text-cyan-400 transition-colors"
        title="Go to About section"
      >
        <DownArrow />
      </motion.button>
    </motion.section>
  );
}

export default Home;
