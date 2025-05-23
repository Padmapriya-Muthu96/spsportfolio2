
import { motion } from "framer-motion";
import StackOverFlowClone from '../imageFolder/StackOverFlowClone.png';


function StackOverFlowCloneApp() {
  const usedTech = [
    "React.js",
    "Bootstrap",
    "react-toastify",
    "Axios",
    "CSS",
    "React-Router-Dom",
    ".env",
    "Express.js",
    "CORS",
    "Mongoose",
    "Node.js",
    "Font Awesome",
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
          <h2>Stack Overflow Clone</h2>
          <p>
            A dynamic platform where users can ask questions, share answers, comment on responses, and upvote helpful solutions—fostering collaborative problem-solving and knowledge sharing.
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
              href="https://github.com/Padmapriya-Muthu96/StackOverflow-FE"
              target="_blank"
              whileHover={{ scale: 1.1, color: "#007bff" }}
              transition={{ duration: 0.2 }}
            >
              🔗 Frontend Source Code
            </motion.a>
            <motion.a
              href="https://github.com/Padmapriya-Muthu96/StackOverflow-BE"
              target="_blank"
              whileHover={{ scale: 1.1, color: "#007bff" }}
              transition={{ duration: 0.2 }}
            >
              🔗 Backend Source Code
            </motion.a>
            <motion.a
              href="https://luxury-mandazi-4856fe.netlify.app/stack/questions"
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
          <img src={StackOverFlowClone} alt="Stack Overflow Clone" />
        </motion.div>

      </motion.div>
    </div>
  );
}

export default StackOverFlowCloneApp;
