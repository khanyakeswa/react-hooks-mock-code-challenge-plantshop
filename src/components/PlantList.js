import React, { useState } from 'react'
import PlantCard from './PlantCard'

function PlantList({ plants, setPlants }) {
  const plantCards = plants.map((plant) => {
    return <PlantCard key={plant.id} plant={plant} />
  })

  setPlants(plantCards)

  return <ul className='cards'>{plantCards}</ul>
}

export default PlantList
