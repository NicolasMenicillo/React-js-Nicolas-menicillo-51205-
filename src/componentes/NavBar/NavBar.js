import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className="nav">
            <img className= "logo" src= "./logo.png" alt=""></img>
            
            <div className="botones">
                <button className="div-botones">Autos</button>
                <button className="div-botones">Motos</button>
                <button className="div-botones">Camionetas</button>
            </div>
            <CartWidget />
        </nav>
    );
}

export default NavBar