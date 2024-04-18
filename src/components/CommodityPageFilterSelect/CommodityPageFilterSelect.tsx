import React, { useState } from "react";

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
        <div data-name={name} onClick={() => handleClick(name)}>
            <div>{name}</div>
            {tick ? <div>☑</div> : <div>☐</div>}
        </div>
    );
};

export default CommodityPageFilterSelect;

