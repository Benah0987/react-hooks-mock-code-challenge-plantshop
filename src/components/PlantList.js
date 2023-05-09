import React, {useState, useEffect} from "react";
import PlantCard from "./PlantCard";


function PlantList() {
  //creating a useState
  const [plants, setPlants] = useState([])

 //already imported the useEffect
 useEffect (() => {
   fetch("http://localhost:6001/plants")
   .then((response) => response.json())
   .then((data) => setPlants(data));
 })
  return (

    <ul className="cards">
      {/*adding the props needed*/}
      {plants.map((id,name, image, price) => (
        <PlantCard 
         key={id}
         name = {name}
         id ={id}
         image={image}
         price ={price}
      />
      )
      )}
      </ul>
  );
}

export default PlantList;
