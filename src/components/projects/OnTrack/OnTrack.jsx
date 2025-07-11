import { motion } from "framer-motion";
import Slider from './Slider';

function OnTrack() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const buttonHover = {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  };

  return (
    <motion.div
      className="flex flex-col md:flex-row gap-8 md:gap-16 w-full max-w-6xl mx-auto py-8 px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left" variants={itemVariants}>
        <div className="mb-6">
          <h1 className="text-5xl font-extrabold text-cyan-500 mb-2">
            On Track
          </h1>

          <p className="text-xl text-neutral-400">On Track: Your Life, Organized. Your Way.</p>
        </div>
        <Slider />
      </motion.div>
      <motion.div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left my-8 md:mt-0" variants={itemVariants}>

        <div className="mb-8 p-4 bg-white/10 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-3">Description</h2>
          <div className="text-neutral-200 leading-relaxed max-h-60 overflow-y-auto">
            <p className="">
              <strong>On Track</strong> is a productivity application I'm building to help users manage their lives effectively. It currently features:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>
                <strong>Event Management:</strong> A calendar (built with React Big Calendar) allows for the creation of custom events with start and end dates. These events, along with their associated notes, are stored in a PostgreSQL database.
              </li>
              <li>
                <strong>Integrated Note-Taking:</strong> Events can have notes linked to them, utilizing a rich text editor powered by Tiptap for flexible content creation.
              </li>
              <li>
                <strong>Secure User Authentication:</strong> User authentication is handled through Firebase, supporting both traditional sign-up/login and Google Sign-In, including a username selection process.
              </li>
              <li>
                <strong>Robust Backend:</strong> The application's backend is built with Node.js and Express, using Prisma as an ORM for seamless interaction with the PostgreSQL database. Axios is used for API requests, and CORS is configured for smooth communication.
              </li>
            </ul>
            <p className="mt-4">
              This project is currently in its Minimum Viable Product (MVP) stage. My focus is on gathering user feedback to assess its viability and guide future development. Due to future monetization plans, the GitHub repository is currently private.
            </p>
            <p className="mt-2">
              **Current Stack:** React, Tailwind CSS, Vite, React Big Calendar, Tiptap, Firebase, Prisma, PostgreSQL, Node.js, Express, CORS, Axios.
            </p>
          </div>
        </div>
        <motion.div
          className="border border-cyan-500 bg-neutral-200/20 rounded-full px-6 py-3 transition-all duration-300 hover:bg-cyan-500 hover:text-white group"
          whileHover={buttonHover}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-cyan-600 group-hover:text-white font-semibold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <p className="text-lg">Project Currently In Development Contact for Demo</p>
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default OnTrack;
