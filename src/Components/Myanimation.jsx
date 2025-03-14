import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/MyAnimation.json"; 
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Myanimation() {

  let navigate=useNavigate();

  const handleOnClick=(e)=>{
    e.preventDefault();
    navigate('/homepage');
  }

  return (
    <div className="lottie-container" style={{backgroundColor:'#9fe5f5'}}>
      <h3 className="overlay-text" style={{marginLeft:'25%', marginRight:'20%',backgroundColor:'#9fe5f5', padding:'25px'}}>Hi, I'm Padmapriya, a MERN Stack Developer...</h3>
      <Button onClick={handleOnClick}
      style={{marginLeft:'40%', marginRight:'35%', marginTop:'40px', marginBottom:'0%',}} >Know Me Better</Button>
      <Lottie style={{height:'300px', width:'600px', textAlign:'center', marginLeft:'25%', marginRight:'30%', backgroundColor:'#9fe5f5', marginTop:'10%'}} animationData={animationData} loop autoPlay />
      
    </div>
  );
}

export default Myanimation;

