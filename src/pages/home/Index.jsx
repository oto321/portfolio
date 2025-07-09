import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

import Navbar from "./../../components/navbar/Navbar.jsx";

import About from "./../../components/about/About.jsx";
import Home from "./../../components/home/Home.jsx";
import Contact from "./../../components/contact/Contact.jsx";
import Projects from "./../../components/projects/Projects.jsx";
import Tools from "./../../components/tools/Tools.jsx";

function PortfolioApp() {
  const [orientation, setOrientation] = useState(null);
  const [activeSection, setActiveSection] = useState('home');

  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    tools: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    function handleScrollOrientation() {
      const aboutPoint = window.innerHeight * 0.4;
      const scrollY = window.scrollY;

      if (scrollY < aboutPoint) {
        setOrientation(false);
      } else {
        setOrientation(true);
      }
    }

    window.addEventListener("scroll", handleScrollOrientation);
    return () => window.removeEventListener("scroll", handleScrollOrientation);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          history.replaceState(null, '', `#${entry.target.id}`);
        }
      });
    }, observerOptions);

    for (const key in sectionRefs) {
      if (sectionRefs[key].current) {
        observer.observe(sectionRefs[key].current);
      }
    }

    return () => {
      for (const key in sectionRefs) {
        if (sectionRefs[key].current) {
          observer.unobserve(sectionRefs[key].current);
        }
      }
      observer.disconnect();
    };
  }, []);

  const renderSection = (Component, id, ref, initialX) => {
    const inView = useInView(ref, { threshold: 0.2 });

    return (
      <motion.section
        ref={ref}
        id={id}
        className="min-h-screen flex items-center justify-center py-16"
        initial={{ opacity: 0, x: initialX }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: initialX }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Component />
      </motion.section>
    );
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background elements */}
      <div className="-z-10">
        <div className="-z-10 fixed inset-0 background-div"></div>
        <div className="-z-10 fixed inset-0 bg-neutral-700/10 backdrop-blur-lg"></div>
      </div>
      {/* Navbar */}
      <div>
        <div className={`
          text-white flex fixed
          transition-all duration-200 linear z-50
          ${orientation ?
            "flex-row p-8 left-0 top-1/2 translate-y-[-50%]"
            :
            "flex-col p-8 top-0 left-1/2 translate-x-[-50%]"
          }
        `}>
          <Navbar orientation={orientation} activeSection={activeSection} />
        </div>

        <div className="flex flex-col mt-15">
          {/* Home section */}
          <div className="px-[16.66%] mx-auto space-y-48">
            {renderSection(Home, "home", sectionRefs.home, -100)}
          </div>

          {/* About section */}
          <div className="px-[16.66%] mx-auto mt-10 space-y-48">
            {renderSection(About, "about", sectionRefs.about, 100)}
          </div>

          {/* Tools section */}
          <div className="px-[16.66%] mx-auto ">
            {renderSection(Tools, "tools", sectionRefs.tools, -100)}
          </div>

          {/* Projects section */}
          <div className="px-[16.66%] max-w-screen-lg mx-auto space-y-48">
            {renderSection(Projects, "projects", sectionRefs.projects, 100)}
          </div>

          {/* Contact section */}
          <div className="px-[16.66%] max-w-screen-lg mx-auto space-y-48">
            {renderSection(Contact, "contact", sectionRefs.contact, -100)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioApp;
