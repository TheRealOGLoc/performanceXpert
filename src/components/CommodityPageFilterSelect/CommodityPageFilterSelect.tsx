import React, { useState } from "react";
import "./CommodityPageFilterSelect.css"

interface CommodityPageFilterSelectProps {
    name: string;
    updateFilterBrand?: (string) => void;
    updateFilterPart?: (string) => void;
}

const CommodityPageFilterSelect: React.FC<CommodityPageFilterSelectProps> = ({ name, updateFilterBrand, updateFilterPart }) => {
    const [tick, setTick] = useState<boolean>(false);

    const handleClick = (name: string) => {
        setTick(!tick);
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
            {tick ? <div className="filter-select-tick" >☑</div> : <div className="filter-select-tick" >☐</div>}
        </div>
    );
};

export default CommodityPageFilterSelect;

