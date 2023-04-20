import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
import ItemComponents from "../componentes/ItemListContainer/ItemComponents";
const BASE_URL = "https://fakestoreapi.com/products/category/"

const CategoryView = (props) => {
    const { category } = useParams();
    const [data, load] = useFetch(`${BASE_URL}${category}`)

    return (
        <Fragment>
            <div className="categortias">
                {load ? (
                    <h1>Cargando Productos...</h1>
                ) : (
                    data.map((product, index) => {
                        return (
                            <div className="categorias-info" key={index}>
                                <ItemComponents data={product} />
                            </div>
                        );
                    })
                )}
            </div>
        </Fragment>
    );
}

export default CategoryView;