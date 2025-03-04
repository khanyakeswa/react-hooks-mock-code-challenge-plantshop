import { React, useState } from "react";

function PlantCard( { plant } ) {

  const [inStock, setStock] = useState(true)

  const stockButtonHandler = () => {setStock(!inStock)}

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStock ? (
        <button onClick={stockButtonHandler} className="primary">In Stock</button>
      ) : (
        <button onClick={stockButtonHandler} >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
