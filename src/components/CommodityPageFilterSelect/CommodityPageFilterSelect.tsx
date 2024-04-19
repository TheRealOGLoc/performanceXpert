import React, { useState } from "react";
import "./CommodityPageFilterSelect.css"

interface CommodityPageFilterSelectProps {
    name: string;
    condition: boolean;
    updateFilterBrand?: (string) => void;
    updateFilterPart?: (string) => void;
}

const CommodityPageFilterSelect: React.FC<CommodityPageFilterSelectProps> = ({ name,condition, updateFilterBrand, updateFilterPart }) => {


    const handleClick = (name: string) => {

        if (updateFilterBrand) {
            updateFilterBrand(name);
        }
        if (updateFilterPart) {
            updateFilterPart(name);
        }
    };

    return (
        <div className="filter-select" data-name={name} onClick={() => handleClick(name)}>
            <div className="filter-select-name" >{name}</div>
            {condition ? <div className="filter-select-tick" >☑</div> : <div className="filter-select-tick" >☐</div>}
        </div>
    );
};

export default CommodityPageFilterSelect;

