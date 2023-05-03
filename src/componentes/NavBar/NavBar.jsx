import { NavLink } from "react-router-dom";

import Logo from './logo.png'
import { Fragment, useContext } from "react";
import ListOptionNavBarComponent from "./ListOptionNavBarComponent";
import GeneralContext from "../Conteeext/GeneralContext";




const NavBar = () => {
    const { car } = useContext(GeneralContext);
    const categories = [
        "Electronics",
        "Jewelery",
        "Men's clothing",
        "Women's clothing",
    ];


    return (
        <Fragment>
            <div className="navbar">
                <div>
                    <NavLink to="/">
                        <img className="logo" src={Logo} alt="" />
                    </NavLink>
                </div>
                <ListOptionNavBarComponent categories={categories} />

                <NavLink className= "carro" to="/products/car">
                    <h3 className="bi bi-cart">{car.length}</h3> 
                </NavLink>
            </div>
        </Fragment>
    );
}

export default NavBar;