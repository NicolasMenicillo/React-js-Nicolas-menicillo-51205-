import { useEffect, useState } from "react";
import data from "../data/productos.json";



const ItemListContainer = ({ greeting }) => {

 
    const [productos, setProductos] = useState([]);


    const pedirProductos = () => {
        return new Promise((resolve, reject) => {
            resolve(data)
        })
    }

    useEffect(() => {
        pedirProductos()
            .then((res) => {
                setProductos(res);
            })
    }, [])




    return (
        <div>
            <h4 className="saludo">{greeting}</h4>

            {
                productos.length > 0 &&

                productos.map((producto) => {
                   
                    return (
                        <section>
                            <img src={producto.imagen} alt="" />
                            <h3>{producto.titulo}</h3>
                            <h4>{producto.precio}</h4>
                        </section>
                    )
                })

            }
        </div>
    )
};

export default ItemListContainer