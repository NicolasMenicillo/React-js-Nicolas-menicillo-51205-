import React from "react";
import OptionNavBarComponent from "./OptionNavBarComponent";

const ListOptionNavBarComponent = (props) =>{
    const {categories} = props;

    return(
        <div>
            {categories.map((category, index)=>{
                return <OptionNavBarComponent key={index} category={category} />
            })}
        </div>
    );
};

export default ListOptionNavBarComponent;