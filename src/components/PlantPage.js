import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then((response) => response.json())
      .then((data) => setPlants(data));
  }, []);

  const [plants, setPlants] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");

  const plantsToDisplay = () => {
    if (searchFilter === "") {
      return plants;
    }
    return plants.filter((plant) => plant.name.toLowerCase().includes(searchFilter));
  };

  function addPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  function updateSearchFilter(newSearchFilter) {
    setSearchFilter(newSearchFilter);
  }

  return (
    <main>
      <NewPlantForm onAddPlant={addPlant} />
      <Search onSearch={updateSearchFilter} />
      <PlantList plants={plantsToDisplay()} />
    </main>
  );
}

export default PlantPage;
