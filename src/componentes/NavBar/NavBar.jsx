import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget"
import Logo from './logo.png'
import { Fragment } from "react";
import ListOptionNavBarComponent from "./ListOptionNavBarComponent";



const NavBar = () => {
    const categories = [
        "Electronics",
        "Jewelery",
        "Men's clothing",
        "Women's clothing",
    ];


    return (
        <Fragment>
            <div className="navbar">
                <div className="logo">
                    <NavLink to="/">
                        <img src={Logo} alt="" />
                    </NavLink>
                </div>
                <ListOptionNavBarComponent categories={categories} />
                <CartWidget data={0} />
            </div>
        </Fragment>
    );
}

export default NavBar;