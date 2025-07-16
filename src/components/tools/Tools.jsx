import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import ReactLogo from "./../../assets/images/React.png";
import BlenderLogo from "./../../assets/images/Blender.png";
import HtmlLogo from "./../../assets/images/HTML5.png";
import CssLogo from "./../../assets/images/CSS3.png";
import JavaScriptLogo from "./../../assets/images/JavaScript.png";
import JavaLogo from "./../../assets/images/Java.png";
import PythonLogo from "./../../assets/images/Python.png";
import MySqlLogo from "./../../assets/images/MySQL.png";
import PostgresqlLogo from "./../../assets/images/PostgresSQL.png";
import DBeaverLogo from "./../../assets/images/DBeaver.png";
import TailwindCssLogo from "./../../assets/images/Tailwind CSS.png";
import ArchLogo from "./../../assets/images/Arch Linux.png"
import NeovimLogo from "./../../assets/images/neovim.png"
import UnityLogo from "./../../assets/images/Unity.png";
import CPlusPlus from "./../../assets/images/C++.png"
import GitHubLogo from "./../../assets/images/GitHub.png";


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
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  hidden: { y: -40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      ease: "easeOut",
    },
  },
};

function Logo({ image, name, link }) {
  return (
    <motion.button
      role="link"
      onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
      variants={itemVariants}
      className="group p-3 flex flex-col items-center justify-center text-center"
    >
      <div
        className="
          p-2 h-20 w-20 border-2 rounded-2xl
          border-cyan-700 group-hover:drop-shadow-cyan-400/75
          group-hover:drop-shadow-md group-hover:scale-130
          transition-all duration-200 ease-in-out
        ">
        <img className="w-full h-full object-contain mx-auto" src={image} alt={name} />
      </div>
      <h1
        className="
          text-center group-hover:text-teal-300 group-hover:scale-120
          group-hover:translate-y-4 group-hover:text-shadow-xl
          transition-all duration-200 ease-in-out
      ">
        {name}
      </h1>
    </motion.button>
  );
}

function Tools() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px", amount: 0.5, once: true });

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const tools = [
    { image: ReactLogo, name: "React", link: "https://react.dev/" },
    { image: BlenderLogo, name: "Blender", link: "https://www.blender.org/" },
    { image: HtmlLogo, name: "HTML", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { image: CssLogo, name: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { image: JavaScriptLogo, name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { image: JavaLogo, name: "Java", link: "https://docs.oracle.com/javase/8/docs/" },
    { image: PythonLogo, name: "Python", link: "https://www.python.org/" },
    { image: MySqlLogo, name: "MySql", link: "https://www.mysql.com/" },
    { image: PostgresqlLogo, name: "PostgreSQL", link: "https://www.postgresql.org/" },
    { image: DBeaverLogo, name: "DBeaver", link: "https://dbeaver.io/" },
    { image: TailwindCssLogo, name: "Tailwind", link: "https://tailwindcss.com/" },
    { image: ArchLogo, name: "Arch", link: "https://archlinux.org/" },
    { image: NeovimLogo, name: "NeoVim", link: "https://neovim.io/" },
    { image: UnityLogo, name: "Unity", link: "https://unity.com/" },
    { image: CPlusPlus, name: "C++", link: "https://isocpp.org/" },
    { image: GitHubLogo, name: "GitHub", link: "https://github.com/oto321" },
  ].reverse();

  return (
    <motion.div
      id="tools"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="
        groupDiv relative p-2 w-full max-w-4xl mx-auto
        bg-gradient-to-b from-white/10 to-cyan-500/0
        backdrop-blur-lg rounded-xl shadow-lg border
        border-white/20 text-center text-white overflow-hidden
        hover:scale-[1.02] hover:shadow-2xl hover:border-white/50
        hover:drop-shadow-xl hover:drop-shadow-cyan-400/50
        transition-all duration-500 ease-in-out md:p-12 md:text-left
      "
    >
      <motion.div variants={itemVariants}>
        <h1
          className="
            text-cyan-300 text-7xl font-extrabold text-center 
            block text-shadow-lg mb-10 underline underline-cyan-600 
            hover:drop-shadow-cyan-400/40 hover:drop-shadow-xl 
            hover:scale-120 transition-all duration-500 ease-in-out
          ">
          Tools
        </h1>
      </motion.div>

      <motion.div className="grid grid-cols-5 p-5 items-center gap-6 overflow-x-auto">
        {tools.map((tool, index) => (
          <Logo key={index} {...tool} />
        ))}
      </motion.div>

      <motion.button
        aria-label="Scroll to About"
        onClick={() => scrollToSection("about")}
        whileHover={{ scale: 1.5, color: "#22d3ee" }}
        whileTap={{ scale: 0.95 }}
        className="absolute top-12 right-8 text-white hover:text-cyan-400 transition-colors"
        title="Go to About section"
      >
        <UpArrow />
      </motion.button>

      <motion.button
        aria-label="Scroll to Projects"
        onClick={() => scrollToSection("projects")}
        whileHover={{ scale: 1.5, color: "#22d3ee" }}
        whileTap={{ scale: 0.95 }}
        className="absolute bottom-12 right-8 text-white hover:text-cyan-400 transition-colors"
        title="Go to Projects section"
      >
        <DownArrow />
      </motion.button>
    </motion.div>
  );
}

export default Tools;
