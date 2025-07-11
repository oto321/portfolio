import GitHubLogo from "./../../../assets/images/GitHub.png";
import { motion } from "framer-motion";

function SuppSense() {
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
            Supp Sense
          </h1>
          <p className="text-xl text-neutral-400">Myth Busters For Supplements</p>
        </div>
        <div className="w-full bg-gray-200/20 backdrop-blur-2xl h-80 md:h-96 rounded-lg shadow-lg overflow-hidden flex items-center justify-center text-gray-500 text-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/qVIuTEEl7VE"
            title="SuppSense Demo"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          >
          </iframe>
        </div>
      </motion.div>
      <motion.div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left my-8 md:mt-0" variants={itemVariants}>
        <motion.div
          className="border border-cyan-500 bg-neutral-200/20 rounded-full px-6 py-3 transition-all duration-300 hover:bg-cyan-500 hover:text-white group"
          whileHover={buttonHover}
        >
          <a
            href="https://github.com/ds526-student/samSuppSense"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-cyan-600 group-hover:text-white font-semibold"
          >
            <img src={GitHubLogo} alt="Github logo" className="w-7 h-7" />
            <p className="text-lg">View on GitHub</p>
          </a>
        </motion.div>
        <div className="mt-8 p-4 bg-white/10 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-3">Description</h2>
          <div className="text-neutral-200 leading-relaxed max-h-60 overflow-y-auto">
            <p className="">
              <strong>SuppSense</strong> is a web application providing users evidence based information on supplement ingredients.
              <br />
              <br />
              my contributions were:
            </p>
            <ul>
              <li><strong>Data Retrieval - </strong> Developed the system to retrieve ingredient data using OpenAI's API</li>
              <li><strong>Frontend Styling - </strong> Designed and styled the frontend, incorporating light and dark modes</li>
              <li><strong>Barcode Scanning - </strong> Implemented barcode scanning functionality </li>
              <li><strong>Page Development - </strong> Created and styled the login, results, and "Manage Messages" and administrative pages</li>
              <li><strong>Information Verification - </strong> Implemented the "Manage Messages" feature for administrators to verify and modify AI-generated content, ensuring accuracy and addressing outdated data</li>
            </ul>
            <p>The project enhanced my skills in database integration, backend-frontend routing, and iterative development for efficient and clean functionality</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default SuppSense;
