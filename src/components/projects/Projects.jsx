import React, { useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";

import SuppSense from "./SuppSense";
import OnTrack from "./OnTrack";

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

const projects = [
  { id: "SuppSense", title: "SuppSense", component: SuppSense },
  { id: "OnTrack", title: "OnTrack", component: OnTrack },
];

const tabVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

function Projects() {
  const [activeTab, setActiveTab] = useState(projects[0].id);

  const ActiveComponent = projects.find(
    (project) => project.id === activeTab
  )?.component;

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      id="projects"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        relative p-8 w-full mx-auto mt-20
        bg-gradient-to-b from-white/10 to-cyan-500/0
        backdrop-blur-lg rounded-xl shadow-lg border
        border-white/20 text-white overflow-hidden
        hover:scale-[1.02] hover:shadow-2xl hover:border-white/50
        hover:drop-shadow-xl hover:drop-shadow-cyan-400/50
        transition-all duration-500 ease-in-out md:p-12 md:text-left
      "
    >
      <motion.div variants={tabVariants}>
        <h1 className="text-cyan-300 text-7xl font-extrabold text-center block text-shadow-lg mb-10 underline underline-cyan-600 hover:drop-shadow-cyan-400/40 hover:drop-shadow-xl hover:scale-120 transition-all duration-500 ease-in-out">
          Projects
        </h1>
      </motion.div>

      <motion.div
        className="flex justify-center flex-wrap gap-4 mb-10"
        variants={tabVariants}
      >
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => setActiveTab(project.id)}
            className={`
              px-4 py-2 rounded-lg border transition-all duration-300 font-semibold
              ${activeTab === project.id
                ? "bg-cyan-500 text-white border-cyan-400 shadow-md"
                : "bg-white/10 text-cyan-200 border-cyan-600 hover:bg-white/20"
              }
            `}
          >
            {project.title}
          </button>
        ))}
      </motion.div>

      <div className="min-h-[200px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Suspense
              fallback={
                <p className="text-center text-cyan-200">Loading...</p>
              }
            >
              {ActiveComponent ? (
                <ActiveComponent />
              ) : (
                <p className="text-center text-cyan-200">
                  Project component not found.
                </p>
              )}
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.button
        aria-label="Scroll to About"
        onClick={() => scrollToSection("tools")}
        whileHover={{ scale: 1.5, color: "#22d3ee" }}
        whileTap={{ scale: 0.95 }}
        className="absolute top-12 right-8 text-white hover:text-cyan-400 transition-colors"
        title="Go to About section"
      >
        <UpArrow />
      </motion.button>

      <motion.button
        aria-label="Scroll to Tools"
        onClick={() => scrollToSection("contact")}
        whileHover={{ scale: 1.5, color: "#22d3ee" }}
        whileTap={{ scale: 0.95 }}
        className="absolute bottom-12 right-8 text-white hover:text-cyan-400 transition-colors"
        title="Go to Tools section"
      >
        <DownArrow />
      </motion.button>
    </motion.div>
  );
}

export default Projects;
