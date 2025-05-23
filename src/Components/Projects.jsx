import React from "react";

import Project1 from "./MyProjects/Project1";
import Project2 from "./MyProjects/Project2";
import BlogApp from "./MyProjects/BlogApp";
import StudentTeacherManagement from "./MyProjects/Student-Teacher-Management";
import GoldRateCalculatorApp from "./MyProjects/GoldRateCalculatorApp";
import ShivasKitchenApp from "./MyProjects/ShivasKitchen";
import MyBudgetTrackerApp from "./MyProjects/MyBudgetTracker";
import StackOverFlowCloneApp from "./MyProjects/StackOverFlowClone";



function Projects() {
  return (
    <div>
      <MyBudgetTrackerApp/>
      <GoldRateCalculatorApp/>
      <ShivasKitchenApp/>
      <StackOverFlowCloneApp/>
      <StudentTeacherManagement/>
      <BlogApp/>
      {/* <Project1/>
      <Project2/> */}
   
   
   
   </div>
  );
}

export default Projects;
