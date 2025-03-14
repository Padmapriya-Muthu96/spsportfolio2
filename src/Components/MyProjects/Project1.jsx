import React from "react";
import { motion } from "framer-motion";


function Project1() {
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
          <h2>To-Do App</h2>
          <p>
            A simple yet powerful To-Do app built with JavaScript, HTML, and CSS. It allows users to add, delete, and mark tasks as completed efficiently.
          </p>

          <p><strong>Technologies Used:</strong></p>
          <div className="tech-buttons">
            {["Framer Motion", "JavaScript", "HTML", "CSS"].map((tech, index) => (
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
              href="https://github.com/Padmapriya-Muthu96/Todo-list"
              target="_blank"
              whileHover={{ scale: 1.1, color: "#007bff" }}
              transition={{ duration: 0.2 }}
            >
              🔗 Source Code
            </motion.a>
            <motion.a
              href="https://heartfelt-sherbet-00832f.netlify.app/"
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
          <img src="/todoapp.PNG" alt="To-Do App" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Project1;
