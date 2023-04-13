import CartWidget from "../CartWidget/CartWidget"
import Logo from './logo.png'


const NavBar = () => {
    return (
        <nav className="nav">
            <img className="logo" src={Logo} alt=""></img>

            <div className="botones">
                <button className="div-botones">Autos</button>
                <button className="div-botones">Camionetas</button> 
                <button className="div-botones">Motos</button>
                
            </div>
            <CartWidget />
        </nav>
    );
}

export default NavBar