import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  const [plants, setPlants] = useState([]);
  //a state to check if data is working
  const [loading, setLoading] = useState(true);

  //fetching data changed the local host
  useEffect(() => {
    fetch("http://localhost:8000/plants")
      .then((response) => response.json())
      .then((data) => { 
        console.log(data);
        setPlants(data);
        setLoading(false);
      });
  }, []);
///if there is no data
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ul className="cards">
      {plants.map(({ id, name, image, price, soldOut }) => (
        <PlantCard
          key={id}
          name={name}
          image={image}
          price={price}
          soldOut={soldOut}
        />
      ))}
    </ul>
  );
}

export default PlantList;
