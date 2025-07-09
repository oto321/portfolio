import React from "react";

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



function Tools() {

  function Logo({ image, name }) {
    return (
      <div className=" group p-3 inline-block text-center">
        <div
          className="
            p-2 h-20 w-20 border-2 rounded-2xl border-cyan-700
            hover:drop-shadow-cyan-400/75 hover:drop-shadow-md hover:scale-110
            transition-all duration-200 ease-in-out 
            ">
          <img className=" w-full h-full object-contain mx-auto" src={image} alt={name} />
        </div>
        <h1 className="
      group-hover:text-teal-300 group-hover:translate-y-2 group-hover:text-shadow-xl
      transition-all duration-200 ease-in-out 

      ">{name}</h1>
      </div>
    );
  }

  return (
    <div
      className=" groupDiv
      relative p-8 w-full max-w-4xl mx-auto
      bg-gradient-to-b from-white/10 to-cyan-500/0 
      backdrop-blur-lg rounded-xl shadow-lg                                  
      border border-white/20 text-center text-white overflow-hidden                            
      hover:scale-[1.02] hover:shadow-2xl hover:border-white/50                      
      hover:drop-shadow-xl hover:drop-shadow-cyan-400/50 
      transition-all duration-500 ease-in-out md:p-12 md:text-left
    ">
      <h1
        className="
          text-cyan-300 text-7xl font-extrabold text-center 
          block text-shadow-lg mb-10 underline underline-cyan-600
          hover:drop-shadow-cyan-400/40 hover:drop-shadow-xl hover:scale-120
          groupDiv-hover:scale-110
          transition-all duration-500 ease-in-out 
    ">Tools</h1>
      <div className="   grid grid-cols-5 items-center gap-6 overflow-x-auto">
        <Logo image={ReactLogo} name={"React"} />
        <Logo image={BlenderLogo} name={"Blender"} />
        <Logo image={HtmlLogo} name={"HTML"} />
        <Logo image={CssLogo} name={"CSS"} />
        <Logo image={JavaScriptLogo} name={"JavaScript"} />
        <Logo image={JavaLogo} name={"Java"} />
        <Logo image={PythonLogo} name={"Python"} />
        <Logo image={MySqlLogo} name={"MySql"} />
        <Logo image={PostgresqlLogo} name={"PostgreSQL"} />
        <Logo image={DBeaverLogo} name={"DBeaver"} />
        <Logo image={TailwindCssLogo} name={"Tailwind"} />
      </div>
    </div>
  );
}

export default Tools;
