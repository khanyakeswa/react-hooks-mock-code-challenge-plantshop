import React, { useEffect, useState } from 'react'
import NewPlantForm from './NewPlantForm'
import PlantList from './PlantList'
import Search from './Search'

function PlantPage() {
  const [plantsArray, setPlantsArray] = useState([])
  const [searchString, setSearch] = useState('')

  const filteredPlants = plantsArray.filter((plant) => {
    return plant.name.toLowerCase().includes(searchString.toLowerCase())
  })

  const formSubmit = (plantInput) => {
    setPlantsArray([...plantsArray, plantInput])
    fetch(`http://localhost:6001/plants`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(plantInput),
    })
  }

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then((response) => response.json())
      .then((plantsData) => setPlantsArray(plantsData))
  }, [])

  return (
    <main>
      <NewPlantForm formSubmit={formSubmit} />
      <Search setSearch={setSearch} searchString={searchString} />
      <PlantList plants={filteredPlants} setPlantsArray={setPlantsArray} />
    </main>
  )
}

export default PlantPage
