import { React, useState } from 'react'

function NewPlantForm({ plants, setPlants }) {
  const [nameInput, setName] = useState('')
  const [imageInput, setImage] = useState('')
  const [priceInput, setPrice] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    const newPlant = {
      id: (plants.length + 1),
      name: nameInput,
      image: imageInput,
      price: priceInput
      }
    setPlants([...plants, newPlant])
  }

  const inputHandler = (e) => {
    if (e.target.name === 'name') {
      setName(e.target.value)
      console.log(nameInput)
    } else if (e.target.name === 'image') {
      setImage(e.target.value)
      console.log(imageInput)
    } else if (e.target.name === 'price') {
      setPrice(e.target.value)
      console.log(priceInput)
    }
  }

  return (
    <div className='new-plant-form'>
      <h2>New Plant</h2>
      <form onSubmit={submitHandler}>
        <input
          onChange={inputHandler}
          type='text'
          name='name'
          placeholder='Plant name'
          value={nameInput}
        />
        <input
          onChange={inputHandler}
          type='text'
          name='image'
          placeholder='Image URL'
          value={imageInput}
        />
        <input
          onChange={inputHandler}
          type='number'
          name='price'
          step='0.01'
          placeholder='Price'
          value={priceInput}
        />
        <button type='submit'>Add Plant</button>
      </form>
    </div>
  )
}

export default NewPlantForm
