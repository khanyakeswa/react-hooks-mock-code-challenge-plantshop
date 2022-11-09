import React, { useState } from 'react'

function Search({ plants, setPlants }) {
  const [searchString, setSearch] = useState('')

  const [filteredPlants, setFilteredPlants] = useState(plants)

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
    setFilteredPlants(plants.filter((plant) => {
      return plant.name.toLowerCase().includes(searchString.toLowerCase())
    }))
    e.target.value.length > 1 ? setPlants(plants) : setPlants(filteredPlants)
  }

  return (
    <div className='searchbar'>
      <label htmlFor='search'>Search Plants:</label>
      <input
        type='text'
        id='search'
        placeholder='Type a name to search...'
        onChange={handleSearchChange}
      />
    </div>
  )
}

export default Search
