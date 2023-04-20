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
    <div className="tarjetas">
      <div className="tarjetas-info-titulo">
        <h5 className="tarjetas-info">{showShortValue(title, 30)}</h5>
        <NavLink to={`/products/` + id}>
          <button className="tarjetas-mas-info">Mas Info</button>
        </NavLink>
      </div>
      <div className="">
        <p>{showShortValue(description, 30)}</p>
        <img className="tarjetas-imagen"  src={image} alt="" />
        <div className="tarjeta-precio-agregar">
        <p className="tarjeta-precio">{price}$</p>
       <button className="tarjetas-agregar">agregar</button>
       </div>
      </div>
    </div>
  );
};


export default ItemComponents