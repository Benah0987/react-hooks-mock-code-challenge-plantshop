import React, {useState} from "react";


//passing props to child
//adding plant form
function NewPlantForm({plants, setPlants}) {
  //setting state for evrytime i add a new plant
  const [newPlant, setnewPlant] = useState([])

  function handleSubmit(e) {
    e.preventDefault();
  
    const formData = new FormData(e.target);
  
    const newPlant = {
      name: formData.get("name"),
      image: formData.get("image"),
      price: parseFloat(formData.get("price")),
      soldOut: false,
    };
  
    fetch("http://localhost:8000/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((response) => response.json())
      .then((data) => {
        setPlants([...plants, data]);
        setnewPlant(data);
      })
      .catch((error) => console.error(error));
  }
  
   


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit = {handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
