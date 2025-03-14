import React from "react";
import { motion } from "framer-motion";


function GoldRateCalculatorApp() {
  const usedTech = [
    "React.js",
    "Bootstrap",
    "Framer Motion",
    "Axios",
    "CSS",
    "Date Picker",
    ".env",
    "Express.js",
    "CORS",
    "Mongoose",
    "Node.js",
  ];

  return (
    <div className="background-container">
      <motion.div
        className="project-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
       
        {/* Project Content */}
        <motion.div
          className="projcontent-div"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Gold Rate Calculator</h2>
          <p>
            A full-stack application that helps users calculate gold rates based on weight, quantity, and karat. It provides real-time gold value in the selected currency and displays the current gold rate along with a 5-day gold rate history.
          </p>

          <p><strong>Technologies Used:</strong></p>
          <div className="tech-buttons">
            {usedTech.map((tech, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {tech}
              </motion.button>
            ))}
          </div>

          <div className="links">
            <motion.a
              href="https://github.com/Padmapriya-Muthu96/GoldRateCalculator-frontend"
              target="_blank"
              whileHover={{ scale: 1.1, color: "#007bff" }}
              transition={{ duration: 0.2 }}
            >
              🔗 Frontend Source Code
            </motion.a>
            <motion.a
              href="https://github.com/Padmapriya-Muthu96/GoldRateCalculator--backend"
              target="_blank"
              whileHover={{ scale: 1.1, color: "#007bff" }}
              transition={{ duration: 0.2 }}
            >
              🔗 Backend Source Code
            </motion.a>
            <motion.a
              href="https://verdant-fudge-22fc95.netlify.app/"
              target="_blank"
              whileHover={{ scale: 1.1, color: "#28a745" }}
              transition={{ duration: 0.2 }}
            >
              🚀 Live Demo
            </motion.a>
          </div>
        </motion.div>
         {/* Project Image */}
         <motion.div
          className="projimage-div"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src="/goldratecalculator.PNG" alt="Gold Rate Calculator" />
        </motion.div>

      </motion.div>
    </div>
  );
}

export default GoldRateCalculatorApp;
