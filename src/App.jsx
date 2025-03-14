
import React from "react";
import MainPage from "./Components/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<MainPage/>}/>
    <Route path='/homepage' element={<HomePage/>}/>
   </Routes>
   </BrowserRouter>
    
  );
}

export default App;
