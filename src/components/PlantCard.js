import React, { useEffect, useState } from "react";

function PlantCard({plant, deleteHandler, submitHelper}) {

  const [isToggled, setToggle] = useState(true)
  const [priceInput, setPriceInput] = useState(plant.price)

  const handleClick = () => {
    setToggle(!isToggled)
  }

const deleteClickHandler = () => {
  deleteHandler(plant)
}

const handleSubmit = (e) => {
  e.preventDefault()
  submitHelper(plant, priceInput)
}

  
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="price">Price: </label>
        <input onChange={(e) => setPriceInput(e.target.value)} id="price" type="text" name="price" value={priceInput} placeholder={priceInput}></input>
        <input type="submit" name="submit" ></input>
      </form>
      {isToggled ? (
        <button onClick={handleClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
      <button onClick={deleteClickHandler}>Delete Plant</button>
    </li>
  );
}

export default PlantCard;
