import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants}) {

  const [renderedPlants, setRenderedPlants] = useState([])

  return (
    <main>
      <NewPlantForm plants={renderedPlants} setPlants={setRenderedPlants}/>
      <Search plants={renderedPlants} setPlants={setRenderedPlants}/>
      <PlantList plants={plants} setPlants={setRenderedPlants}/>
    </main>
  );
}

export default PlantPage;
