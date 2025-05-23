
import React, { useState } from "react";
import { Button, Container, Navbar, Nav } from "react-bootstrap";
import DisplayArea from "./DisplayArea";
 import Skill from "./Skill";
 import Footer from "./Footer";
 import ContactInfo from "./ContactInfo";
 import Experiance from "./Experiance";
 import Projects from "./Projects";

function HomePage() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div>
     
      <Navbar expand="lg" className="py-3" style={{ backgroundColor: "#5532c7" }}>
        <Container>
         
          <Navbar.Brand href="#" className="text-white fs-2 fw-bold">
            Padmapriya
          </Navbar.Brand>
          
         
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 bg-white" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex gap-3">
              <Button variant="light" onClick={() => setActiveSection("home")}>Home</Button>
              <Button variant="light" onClick={() => setActiveSection("skill")}>Skills</Button>
              <Button variant="light" onClick={() => setActiveSection("project")}>Projects</Button>
              <Button variant="light" onClick={() => setActiveSection("experiance")}>Experience</Button>
              <Button variant="light" onClick={() => setActiveSection("resume")}>Resume</Button>
              <Button variant="light" onClick={() => setActiveSection("contact")}>Contact</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    
      <Container fluid className="p-3">
        {activeSection === "home" && <DisplayArea />}
        {activeSection === "skill" && <Skill />}
        {activeSection === "experiance" && <Experiance />}
        {activeSection === "contact" && <ContactInfo />}
        {activeSection === "resume" && (<iframe src="https://drive.google.com/file/d/1JJk--Lyc609-YO1g6XJfDPtKKVs7SWHp/preview" style={{width:'100%',height:'500px'}} />)}
        {activeSection === "project" && <Projects />}
        
        
      </Container>

     
      <Footer />
    </div>
  );
}

export default HomePage;
