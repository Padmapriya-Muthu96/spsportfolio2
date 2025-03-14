import React from "react";
import { Card, Container } from "react-bootstrap";


function Skill() {
  const skillarea = [
    { name: "HTML5", image: "https://img.icons8.com/?size=48&id=20909&format=png" },
    { name: "CSS3", image: "https://img.icons8.com/?size=48&id=21278&format=png" },
    { name: "JavaScript", image: "https://img.icons8.com/?size=48&id=108784&format=png" },
    { name: "React.js", image: "https://img.icons8.com/color/96/react-native.png" },
    { name: "Node.js", image: "https://img.icons8.com/color/96/nodejs.png" },
    { name: "Express.js", image: "https://img.icons8.com/ios/96/express-js.png" },
    { name: "MongoDB", image: "https://img.icons8.com/color/96/mongodb.png" },
    { name: "MySQL", image: "https://img.icons8.com/color/96/mysql-logo.png" },
    { name: "GitHub", image: "https://img.icons8.com/glyph-neue/96/github.png" },
  ];

  return (
    <div className="skill-container">
      <h3 className="skill-title">My Technical Toolkit</h3>
      <Container className="skill-grid">
        {skillarea.map((skill, index) => (
          <Card key={index} className="skill-card">
            <Card.Img variant="top" src={skill.image} alt={skill.name} className="skill-image" />
            <Card.Body>
              <Card.Title className="skill-name">{skill.name}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </div>
  );
}

export default Skill;
