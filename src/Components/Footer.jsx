import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="text-center">
         
          <Col xs={12}>
            <p className="footer-text">Connect with me</p>
          </Col>

         
          <Col xs={12}>
            <div className="social-icons">
              <a href="mailto:mpadmapriya96@gmail.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope />
              </a>
              <a href="https://github.com/Padmapriya-Muthu96" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/padmapriya-muthu-73b219144/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </Col>

          <Col xs={12}>
            <p className="footer-copy">© 2024 Padmapriya. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
