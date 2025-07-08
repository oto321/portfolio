import React, { useEffect, useState } from "react";
import Navbar from "./../../components/navbar/Navbar.jsx";
import About from "./../../components/about/About.jsx";


function home() {
  const [orientation, setOrientation] = useState(true);

  function flipOrientation() {
    console.log("orientation before: ", orientation);
    setOrientation(!orientation);
    console.log("orientation after: ", orientation);
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="-z-10">
        <div className="-z-10 absolute inset-0 background-div"></div>
        <div className="-z-10 absolute inset-0 bg-neutral-700/50 backdrop-blur-2xl"></div>

      </div>
      <div className="flex">
        <div className={` text-white flex fixed 
          transition-all duration-500 ease-in-out
        ${orientation ?
            "flex-row p-8 left-0 top-1/2 translate-y-[-50%]"
            :
            "flex-col p-8 top-0 left-1/2 translate-x-[-50%]"
          }
        `}>
          <Navbar orientation={orientation} />
        </div>
        <div className="absolute left-0 transform-x-[-50%] justify-center">
          <About />
        </div>
      </div>
      <button onClick={flipOrientation}>boo</button>
    </div>
  );
}

export default home;
