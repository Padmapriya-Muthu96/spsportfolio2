import React from "react";
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";


function ContactInfo() {
  return (
    <div className="contact-container">
      <h3 className="contact-title">Contact Me</h3>

      <div className="contact-item">
        <FaEnvelope className="contact-icon email-icon" />
        <a href="mailto:mpadmapriya96@gmail.com">mpadmapriya96@gmail.com</a>
      </div>

      {/* <div className="contact-item">
        <FaPhoneAlt className="contact-icon phone-icon" />
        <span>+91 9952473429</span>
      </div> */}

      <div className="contact-item">
        <FaGithub className="contact-icon github-icon" />
        <a href="https://github.com/Padmapriya-Muthu96" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>

      <div className="contact-item">
        <FaLinkedin className="contact-icon linkedin-icon" />
        <a href="https://www.linkedin.com/in/padmapriya-muthu-73b219144/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
      
      <div className="contact-item">
        <FaFilePdf className="contact-icon resume-icon" />
        <a href="https://drive.google.com/file/d/1kDUky9_b81C7E6LlM3P93vjA-78kkIA0/view" target="_blank" rel="noopener noreferrer">
          View Resume
        </a>
      </div>
    </div>
  );
}

export default ContactInfo;
