import React, { Fragment, useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
import GeneralContext from "../componentes/Conteeext/GeneralContext";
const BASE_URL = "https://fakestoreapi.com/products/";


const InformationViews = (props) => {
    const { id } = useParams();
    const [data] = useFetch(`${BASE_URL}${id}`);
    const { title, description, image, price } = data;
    const { addToCar } = useContext(GeneralContext);

    const botonAgregar = () => {
        addToCar(data);
        alert("Agregado Al Carrito")
    }

    return (

        <Fragment>
            <div className="producto-informacion">
                <div className="producto-titulo">
                    <div>
                        <div className="producto-titulo-desc">
                            <h3>{title}</h3>
                            <p className="producto-descripcion">{description}</p>
                        </div>
                        <div>
                            <img className="producto-img" width={400} height={300} src={image} alt="" />
                        </div>
                        <div className="producto-precio-comprar">
                            <p className="producto-precio">${price}</p>
                            <NavLink>
                                <button onClick={botonAgregar} className="producto-comprar">Agregar</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

    )
}

export default InformationViews;