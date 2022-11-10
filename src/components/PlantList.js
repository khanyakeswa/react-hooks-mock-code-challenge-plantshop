import React from 'react'
import PlantCard from './PlantCard'

function PlantList({ plants, setPlantsArray }) {
  const deleteHandler = (plantObj) => {
    fetch(`http://localhost:6001/plants/${plantObj.id}`, {
      method: 'DELETE',
    })
    const remainingPlants = plants.filter((obj) => {
      return obj.id !== plantObj.id
    })
    setPlantsArray(remainingPlants)
    console.log(remainingPlants)
  }

  const submitHelper = (plantObj, priceInput) => {
    fetch(`http://localhost:6001/plants/${plantObj.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ price: priceInput}),
    })
  }

  const plantCards = plants.map((plant) => {
    return (
      <PlantCard deleteHandler={deleteHandler} submitHelper={submitHelper} key={plant.id} plant={plant} />
    )
  })
  return <ul className='cards'>{plantCards}</ul>
}

export default PlantList
