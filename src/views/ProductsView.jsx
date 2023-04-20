import React, { Fragment,} from "react";
import useFetch from "../utils/useFetch";
import ItemComponents from "../componentes/ItemListContainer/ItemComponents";
const BASE_URL = "https://fakestoreapi.com/products";




const ProductsView = (props) => {
  const [data, load] = useFetch(BASE_URL)

  return (
    <Fragment>

      <div className="container">
        {load ? (
          <h1>Cargando Productos...</h1>
        ) : (
          data.map((product, index) => {
            return (
              <div key={index}>
                <ItemComponents data={product} />
              </div>
            );
          })
        )}
      </div>
    </Fragment>
  );
};

export default ProductsView;