import React, { Fragment } from "react";
import { NavLink, useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
const BASE_URL= "https://fakestoreapi.com/products/";


const InformationViews = (props) => {
    const { id } = useParams();
    const [data] = useFetch(`${BASE_URL}${id}`);
    const { title, description, image, price } = data;


    return (

        <Fragment>
            <div className="">
                <div className="tarjetas">
                    <div className="">
                        <div className="">
                            <h5>{title}</h5>
                        </div>
                        <div className="card-body">
                            <p>{description}</p>
                            <img width={400} height={300} src={image} alt="" />
                            <p>{price}$</p>
                            <NavLink>
                            <button className="">Comprar</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

    )
}

export default InformationViews;