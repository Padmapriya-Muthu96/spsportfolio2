import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/MyAnimation.json";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Myanimation() {
  const navigate = useNavigate();

  const handleOnClick = (e) => {
    e.preventDefault();
    navigate("/homepage");
  };

  return (
    <div className="lottie-wrapper">
      <h3 className="intro-text">Hi, I'm Padmapriya, a MERN Stack Developer...</h3>
      <Button className="know-me-button" onClick={handleOnClick}>
        Know Me Better
      </Button>
      <Lottie className="lottie-animation" animationData={animationData} loop autoPlay />
    </div>
  );
}

export default Myanimation;

