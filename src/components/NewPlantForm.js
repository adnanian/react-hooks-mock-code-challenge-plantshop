import React, { useState } from "react";

function NewPlantForm( {onAddPlant} ) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: 0.0
  });

  function handleInputChange(event) {
    const value =
      event.target.name === "price" ?
      Number.parseFloat(event.target.value) :
      event.target.value;

    setFormData({
      ...formData,
      [event.target.name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch ('http://localhost:6001/plants', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((data) => onAddPlant(data));
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Plant name"
          onChange={handleInputChange} 
        />
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL" 
          onChange={handleInputChange}
        />
        <input 
          type="number" 
          name="price" 
          step="0.01" 
          placeholder="Price"
          onChange={handleInputChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
