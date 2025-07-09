import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// import images
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
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const titleVariant = {
  hidden: { x: -10, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1
  },
  transition: {
    duration: 0.5,
    ease: "easeOut",
  },
}


// Reusable logo component
function Logo({ image, name, link }) {
  return (
    <motion.button
      role="link"
      onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
      variants={itemVariants}
      className="group p-3 inline-block text-center"
    >
      <div className="p-2 h-20 w-20 border-2 rounded-2xl border-cyan-700 hover:drop-shadow-cyan-400/75 hover:drop-shadow-md hover:scale-110 transition-all duration-200 ease-in-out">
        <img className="w-full h-full object-contain mx-auto" src={image} alt={name} />
      </div>
      <h1 className="
    group-hover:text-teal-300 group-hover:translate-y-2 
    group-hover:text-shadow-xl transition-all duration-200 
    ease-in-out
    ">
        {name}
      </h1>
    </motion.button>
  );
}

function Tools() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px", amount: 0.5, once: true });

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
  ].reverse();

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="
    groupDiv relative p-8 w-full max-w-4xl mx-auto bg-gradient-to-b from-white/10 to-cyan-500/0 backdrop-blur-lg rounded-xl shadow-lg border border-white/20 text-center text-white overflow-hidden hover:scale-[1.02] hover:shadow-2xl hover:border-white/50 hover:drop-shadow-xl hover:drop-shadow-cyan-400/50 transition-all duration-500 ease-in-out md:p-12 md:text-left"
    >
      <motion.div
        variants={itemVariants}
      >
        <h1 className="text-cyan-300 text-7xl font-extrabold 
          text-center block text-shadow-lg mb-10 underline 
          underline-cyan-600 hover:drop-shadow-cyan-400/40 
          hover:drop-shadow-xl hover:scale-120 transition-all 
          duration-500 ease-in-out
        ">
          Tools
        </h1>
      </motion.div>

      <motion.div className="grid grid-cols-5 items-center gap-6 overflow-x-auto">
        {tools.map((tool, index) => (
          <Logo key={index} {...tool} />
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Tools;
