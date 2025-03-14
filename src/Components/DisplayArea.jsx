import React from 'react';


function DisplayArea() {
  return (
    <div className="display-container">
      {/* Profile Image Section */}
      <div className="pic-div">
        <img src="my-pic.jfif" alt="Padmapriya" className="profile-pic" />
      </div>

      {/* Introduction Text Section */}
      <div className="intro-div">
        <p>
          <b>
            "Hi, I'm <span className="highlight">Padmapriya</span>, a passionate 
            <span className="highlight"> MERN Stack Developer</span> eager to build impactful web applications. 
            I’ve successfully completed my MERN Stack development course and am now seeking exciting 
            opportunities to apply my knowledge, grow my skills, and contribute to innovative projects. 
            With a strong foundation in <span className="highlight">MongoDB, Express.js, React, and Node.js</span>, 
            I love turning ideas into reality through clean, efficient code. 
            I’m always open to learning and exploring new technologies to stay ahead in the ever-evolving 
            world of web development. Let's connect and create something amazing together!"
          </b>
        </p>
      </div>
    </div>
  );
}

export default DisplayArea;
