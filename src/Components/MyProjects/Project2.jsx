import React from "react";
import { motion } from "framer-motion";


function Project2() {
  return (
    <div className="background-container">
      <motion.div
        className="project-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Project Image */}
        <motion.div
          className="projimage-div"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src="/calculatorapp.PNG" alt="Calculator App" />
        </motion.div>

        {/* Project Content */}
        <motion.div
          className="projcontent-div"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Calculator App</h2>
          <p>
            This project is a basic calculator built using HTML, CSS, and JavaScript. It performs fundamental arithmetic operations such as addition, subtraction, multiplication, and division. The calculator features a clean and responsive UI, making it easy to use on both desktop and mobile devices.
          </p>

          <p><strong>Technologies Used:</strong></p>
          <div className="tech-buttons">
            {["JavaScript (DOM Manipulation)", "HTML", "CSS"].map((tech, index) => (
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
              href="https://github.com/Padmapriya-Muthu96/calculatorApp"
              target="_blank"
              whileHover={{ scale: 1.1, color: "#007bff" }}
              transition={{ duration: 0.2 }}
            >
              🔗 Source Code
            </motion.a>
            <motion.a
              href="https://resonant-fenglisu-a0405e.netlify.app/"
              target="_blank"
              whileHover={{ scale: 1.1, color: "#28a745" }}
              transition={{ duration: 0.2 }}
            >
              🚀 Live Demo
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Project2;
