import React, { useState } from 'react'

function Search({ setSearch, searchString }) {

  return (
    <div className='searchbar'>
      <label htmlFor='search'>Search Plants:</label>
      <input
        type='text'
        id='search'
        placeholder='Type a name to search...'
        onChange={(e) => {
          setSearch(e.target.value)
        }}
        value={searchString}
      />
    </div>
  )
}

export default Search
