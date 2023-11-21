import React, {useState} from "react";

function PlantCard( {plant} ) {
  const [isInStock, setIsInStock] = useState(true);

  function handleButtonClick() {
    setIsInStock(!isInStock);
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isInStock ? (
        <button className="primary" onClick={handleButtonClick}>In Stock</button>
      ) : (
        <button onClick={handleButtonClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
