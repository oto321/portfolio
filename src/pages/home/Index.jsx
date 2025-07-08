import React, { useEffect, useState } from "react";
import Navbar from "./../../components/navbar/Navbar.jsx";
import About from "./../../components/about/About.jsx";


function home() {
  const [orientation, setOrientation] = useState(null);

  function flipOrientation() {
    console.log("orientation before: ", orientation);
    setOrientation(!orientation);
    console.log("orientation after: ", orientation);
  }

  useEffect(() => {

    function handleScroll() {
      const aboutPoint = window.innerHeight * 0.8;
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
      <div className="flex">
        <div className={` text-white flex fixed 
          transition-all duration-200 linear
        ${orientation ?
            "flex-row p-8 left-0 top-1/2 translate-y-[-50%]"
            :
            "flex-col p-8 top-0 left-1/2 translate-x-[-50%]"
          }
        `}>
          <Navbar orientation={orientation} />
        </div>

        {/* About section */}
        <div className="pt-[100%] px-[16.66%] max-w-screen-lg mx-auto space-y-48">
          <section id="about" className="min-h-screen flex items-center justify-center">
            <About />
          </section>
        </div>
      </div>
      <button onClick={flipOrientation}>boo</button>
    </div>
  );
}

export default home;
