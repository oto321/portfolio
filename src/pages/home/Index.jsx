import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

import Navbar from "./../../components/navbar/Navbar.jsx";

import About from "./../../components/about/About.jsx";
import Home from "./../../components/home/Home.jsx";
import Contact from "./../../components/contact/Contact.jsx";
import Projects from "./../../components/projects/Projects.jsx";
import Tools from "./../../components/tools/Tools.jsx";


function home() {
  const [orientation, setOrientation] = useState(null);

  function flipOrientation() {
    console.log("orientation before: ", orientation);
    setOrientation(!orientation);
    console.log("orientation after: ", orientation);
  }

  useEffect(() => {

    function handleScroll() {
      const aboutPoint = window.innerHeight * 0.4;
      const scrollY = window.scrollY;

      if (scrollY < aboutPoint) {
        setOrientation(false);
      } else {
        setOrientation(true);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background*/}
      <div className="-z-10">
        <div className="-z-10 fixed inset-0 background-div"></div>
        <div className="-z-10 fixed inset-0 bg-neutral-700/50 backdrop-blur-2xl"></div>
      </div>

      {/* navbar */}
      <div>
        <div className={` text-white flex fixed 
          transition-all duration-100 ease-linear
        ${orientation ?
            "flex-row p-8 left-0 top-1/2 translate-y-[-50%]"
            :
            "flex-col p-8 top-0 left-1/2 translate-x-[-50%]"
          }
        `}>
          <Navbar orientation={orientation} />
        </div>
        <div className="flex flex-col mt-15">
          {/* Home section */}
          <div className="px-[16.66%] max-w-screen-lg mx-auto space-y-48">
            {(() => {
              const ref = useRef(null);
              const inView = useInView(ref, { threshold: 0.2 });

              return (
                <motion.section
                  ref={ref}
                  id="home"
                  className="min-h-screen flex items-center justify-center"
                  initial={{ opacity: 0, x: -100 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Home />
                </motion.section>
              );
            })()}
          </div>

          {/* About section */}
          <div className="px-[16.66%] max-w-screen-lg mx-auto space-y-48">
            {(() => {
              const ref = useRef(null);
              const inView = useInView(ref, { threshold: 0.2 });

              return (
                <motion.section
                  ref={ref}
                  id="about"
                  className="min-h-screen flex items-center justify-center"
                  initial={{ opacity: 0, x: 100 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <About />
                </motion.section>
              );
            })()}
          </div>

          {/* Tools section */}
          <div className="px-[16.66%] max-w-screen-lg mx-auto space-y-48">
            {(() => {
              const ref = useRef(null);
              const inView = useInView(ref, { threshold: 0.2 });

              return (
                <motion.section
                  ref={ref}
                  id="tools"
                  className="min-h-screen flex items-center justify-center"
                  initial={{ opacity: 0, x: -100 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Tools />
                </motion.section>
              );
            })()}
          </div>

          {/* Projects section */}
          <div className="px-[16.66%] max-w-screen-lg mx-auto space-y-48">
            {(() => {
              const ref = useRef(null);
              const inView = useInView(ref, { threshold: 0.2 });

              return (
                <motion.section
                  ref={ref}
                  id="projects"
                  className="min-h-screen flex items-center justify-center"
                  initial={{ opacity: 0, x: 100 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Projects />
                </motion.section>
              );
            })()}
          </div>

          {/* Contact section */}
          <div className="px-[16.66%] max-w-screen-lg mx-auto space-y-48">
            {(() => {
              const ref = useRef(null);
              const inView = useInView(ref, { threshold: 0.2 });

              return (
                <motion.section
                  ref={ref}
                  id="contact"
                  className="min-h-screen flex items-center justify-center"
                  initial={{ opacity: 0, x: -100 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Contact />
                </motion.section>
              );
            })()}
          </div>
        </div>

      </div>
      <button onClick={flipOrientation}>boo</button>
    </div>
  );
}

export default home;
