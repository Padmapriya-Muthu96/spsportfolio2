import React from "react";
import { motion } from "framer-motion";


function StudentTeacherManagement() {
  const usedTech = [
    "React.js",
    "React Router DOM",
    "Bootstrap",
    "CSS",
  ];

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
          <img src="/StudentTeacherManagement.PNG" alt="Student-Teacher Management" />
        </motion.div>

        {/* Project Content */}
        <motion.div
          className="projcontent-div"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Teacher-Student Management System</h2>
          <p>
            A simple and efficient management app built with React, enabling seamless CRUD operations. Easily add, edit, view, and delete teacher and student information with a clean and user-friendly interface.
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
              href="https://github.com/Padmapriya-Muthu96/React-student-teacher-management"
              target="_blank"
              whileHover={{ scale: 1.1, color: "#007bff" }}
              transition={{ duration: 0.2 }}
            >
              🔗 Source Code
            </motion.a>
            <motion.a
              href="https://subtle-rabanadas-9657e6.netlify.app/"
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

export default StudentTeacherManagement;
