import React, { useState } from 'react'

function NewPlantForm({ formSubmit }) {
  const [plantInput, setPlantInput] = useState({
    id: '',
    name: '',
    image: '',
    price: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    formSubmit(plantInput)
  }

  const handleInput = (e) => {
    const key = e.target.name
    const value = e.target.value
    setPlantInput({ ...plantInput, [key]: value })
  }

  return (
    <div className='new-plant-form'>
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInput}
          type='text'
          name='name'
          placeholder='Plant name'
        />
        <input
          onChange={handleInput}
          type='text'
          name='image'
          placeholder='Image URL'
        />
        <input
          onChange={handleInput}
          type='number'
          name='price'
          step='0.01'
          placeholder='Price'
        />
        <button type='submit'>Add Plant</button>
      </form>
    </div>
  )
}

export default NewPlantForm
