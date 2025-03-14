import React from "react";
import { motion } from "framer-motion";


function BlogApp() {
  const usedTech = [
    "React.js",
    "React Router DOM",
    "Formik",
    "Yup",
    "Axios",
    "React Toastify",
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
       

        {/* Project Content */}
        <motion.div
          className="projcontent-div"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Blog App</h2>
          <p>
            A modern and interactive blog platform built with React, featuring seamless CRUD operations. Leveraging React Router DOM for navigation, Formik & Yup for form validation, Axios for API handling, and Toastify for elegant notifications. Styled with Bootstrap.
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
              href="https://github.com/Padmapriya-Muthu96/React-formik-blog"
              target="_blank"
              whileHover={{ scale: 1.1, color: "#007bff" }}
              transition={{ duration: 0.2 }}
            >
              🔗 Source Code
            </motion.a>
            <motion.a
              href="https://imaginative-gecko-54257e.netlify.app/"
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
          <img src="/blogApp.PNG" alt="Blog App" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default BlogApp;
