import React, { Fragment } from "react";
import { NavLink, useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
const BASE_URL = "https://fakestoreapi.com/products/";


const InformationViews = (props) => {
    const { id } = useParams();
    const [data] = useFetch(`${BASE_URL}${id}`);
    const { title, description, image, price } = data;


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
                                <button className="producto-comprar">Comprar</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

    )
}

export default InformationViews;