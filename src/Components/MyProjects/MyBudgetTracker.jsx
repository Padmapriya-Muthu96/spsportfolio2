
import { motion } from "framer-motion";
import MyBudgetApp from '../imageFolder/MyBudgetApp.png';


function MyBudgetTrackerApp() {
  const usedTech = [
    "React.js",
    "Bootstrap",
    "Chart.js",
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
       {/* Project Image */}
         <motion.div
          className="projimage-div"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src={MyBudgetApp} alt="My Budget Tracker" />
        </motion.div>
        {/* Project Content */}
        <motion.div
          className="projcontent-div"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2>My Budget Tracker</h2>
          <p>
            My Budget Tracker App is a simple and efficient tool designed to help users track and manage their income and expenses effortlessly. Users can add income and monitor their total earnings, categorize expenses to track spending by category and amount, and instantly see if their expenses exceed the set budget. The app also provides a monthly expense report, offering a clear and organized overview of financial activity.
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
              href="https://github.com/Padmapriya-Muthu96/myBudgetApp-frontend"
              target="_blank"
              whileHover={{ scale: 1.1, color: "#007bff" }}
              transition={{ duration: 0.2 }}
            >
              🔗 Frontend Source Code
            </motion.a>
            <motion.a
              href="https://github.com/Padmapriya-Muthu96/myBudgetApp-backend"
              target="_blank"
              whileHover={{ scale: 1.1, color: "#007bff" }}
              transition={{ duration: 0.2 }}
            >
              🔗 Backend Source Code
            </motion.a>
            <motion.a
              href="https://mybudgettrack.netlify.app/"
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

export default MyBudgetTrackerApp;
