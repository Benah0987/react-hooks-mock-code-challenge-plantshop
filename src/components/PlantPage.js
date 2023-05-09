import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  return (
    <main>
      {/*definimg props*/}
      <NewPlantForm setPlants={setPlants} plants={plants} />
      <Search />
      <PlantList />
    </main>
  );
}

export default PlantPage;
