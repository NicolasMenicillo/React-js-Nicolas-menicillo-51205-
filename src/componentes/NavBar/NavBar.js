import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className="nav">
            <h1>OlxCars</h1>
            <div className="botones">
                <button className="div-botones">Autos</button>
                <button className="div-botones">Motos</button>
                <button className="div-botones">Camionetas</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar