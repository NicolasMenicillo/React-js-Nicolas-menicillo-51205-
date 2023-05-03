import React, { Fragment, useContext } from "react";
import GeneralContext from "../componentes/Conteeext/GeneralContext";
import ItemComponents from "../componentes/ItemListContainer/ItemComponents";

const DetailCar = () => {
    const { car } = useContext(GeneralContext);
    return (
        <Fragment>
            <div className="container">
            {car.map((item, index) => (
                <ItemComponents key={index} data={item} />
            ))}
            </div>
        </Fragment>
    );

};

export default DetailCar;
