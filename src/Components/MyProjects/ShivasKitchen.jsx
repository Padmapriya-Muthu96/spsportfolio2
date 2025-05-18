
import { motion } from "framer-motion";
import shivasKitchen from "../imageFolder/shivasKitchen.png"


function ShivasKitchenApp() {
  const usedTech = [
    "React.js",
    "Bootstrap",
    "Stripe",
    "Axios",
    "CSS",
    "React-Router-Dom",
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
          <h2>Shiva's Kitchen</h2>
          <p>
            Shiva’s Kitchen is a full-stack food ordering web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The app allows users to browse a dynamic menu of available food items, view a delivery availability map, and place orders effortlessly. Users can add items to a cart, adjust quantities, and proceed to checkout by entering their delivery address. The application supports both Cash on Delivery and secure online payment options via Stripe. The frontend is built with React and styled using Bootstrap for a responsive user experience, while the backend handles order management and API communication using Express and MongoDB. Shiva’s Kitchen provides a real-world simulation of an online food delivery system with an intuitive and user-friendly interface.
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
              href="https://github.com/Padmapriya-Muthu96/shivasBiryani-frontend"
              target="_blank"
              whileHover={{ scale: 1.1, color: "#007bff" }}
              transition={{ duration: 0.2 }}
            >
              🔗 Frontend Source Code
            </motion.a>
            <motion.a
              href="https://github.com/Padmapriya-Muthu96/ShivasBiryaniBackend"
              target="_blank"
              whileHover={{ scale: 1.1, color: "#007bff" }}
              transition={{ duration: 0.2 }}
            >
              🔗 Backend Source Code
            </motion.a>
            <motion.a
              href="https://shivaskitchen.netlify.app/"
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
          <img src={shivasKitchen} alt="Shiva's Kitchen" />
        </motion.div>

      </motion.div>
    </div>
  );
}

export default ShivasKitchenApp;
