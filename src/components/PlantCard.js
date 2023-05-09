import React,{useState} from "react";
///useState to handle the soldOut


//passing props to ensure each card displays
function PlantCard({name, image, price,soldOut}) {
  
  //statte soldOut, initial value soldOut
  const [issoldOut, setisSoldOut] = useState(soldOut)

  //when the button is clicked change state
  const handleClick = () => {
    setisSoldOut(!soldOut)
  }
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {issoldOut ? (
        <button className="primary" onClick = {handleClick}>In Stock</button>
      ) : (
        <button onClick = {handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
