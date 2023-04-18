import React from "react";
import { NavLink } from "react-router-dom";


const ItemComponents = (props) => {
    const {data} = props
    const {image, title, price, description, id} = data

   

  const showShortValue = (value = "", lengthMax = 45) => {
    return value.length > lengthMax
      ? value.substring(0, lengthMax).concat("...")
      : value;
  };

  

  return (
    <div className="">
      <div className="">
        <h5>{showShortValue(title, 35)}</h5>
        <NavLink to={`/products/` + id}>
          <button className="">Mas Info</button>
        </NavLink>
      </div>
      <div className="">
        <p>{showShortValue(description, 40)}</p>
        <img width={400} height={300} src={image} alt="" />
        <p>{price}$</p>
       <button>agregar</button>
      </div>
    </div>
  );
};


export default ItemComponents