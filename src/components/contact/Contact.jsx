import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function DownArrow() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
    </svg>
  );
}

function UpArrow() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
    </svg>
  );
}

const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.4,
      ease: "easeOut",
    },
  },
};

const headingVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

const paragraphVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

const cardHover = {
  scale: 1.02,
  boxShadow: "0 20px 40px rgba(6, 182, 212, 0.5)",
  borderColor: "rgba(6, 182, 212, 0.6)",
};

function Contact() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4, once: true });

  return (
    <motion.section
      id="about"
      ref={ref}
      className="
        relative p-8 w-full mx-auto
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
      animate={isInView ? "visible" : "hidden"}
      whileHover={cardHover}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <motion.div className="flex flex-col group md:flex-row items-center md:justify-start space-y-8 md:space-y-0 md:space-x-8">
        <div className="flex-grow ">
          <h1
            className="
    text-cyan-300 text-7xl font-extrabold
    text-center block text-shadow-lg mb-10
    underline underline-cyan-600 
    hover:drop-shadow-cyan-400/40 hover:drop-shadow-xl 
    hover:scale-110 transition-all duration-500 ease-in-out">
            Contact
          </h1>
        </div>

      </motion.div>

      <motion.button
        aria-label="Scroll to Home"
        onClick={() => scrollToSection("home")}
        whileHover={{ scale: 1.5, color: "#22d3ee" }}
        whileTap={{ scale: 0.95 }}
        className="absolute top-12 right-8 text-white hover:text-cyan-400 transition-colors"
        title="Go to Home section"
      >
        <UpArrow />
      </motion.button>

      <motion.button
        aria-label="Scroll to Tools"
        onClick={() => scrollToSection("tools")}
        whileHover={{ scale: 1.5, color: "#22d3ee" }}
        whileTap={{ scale: 0.95 }}
        className="absolute bottom-12 right-8 text-white hover:text-cyan-400 transition-colors"
        title="Go to Tools section"
      >
        <DownArrow />
      </motion.button>
    </motion.section>
  );
}

export default Contact;
