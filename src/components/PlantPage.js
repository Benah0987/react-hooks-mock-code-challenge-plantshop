import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  
  //define the props
  const [plants, setPlants] = useState([])

  return (
    <main>
      
      <NewPlantForm setPlants={setPlants} plants={plants} />
      <Search />
      <PlantList plants={plants}/>
    </main>
  );
}

export default PlantPage;
