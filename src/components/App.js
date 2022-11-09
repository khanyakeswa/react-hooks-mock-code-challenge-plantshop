import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  
  let plants = []

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(response => response.json())
    .then(plantsdData => {plants = plantsdData})
  },[])

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants}/>
    </div>
  );
}

export default App;
