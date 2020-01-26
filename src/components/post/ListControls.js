import React from "react";
import Dropdown from "../Dropdown";
import {DISPLAY_TYPE, ORDER, SORTING_OPTIONS} from "../../utils/enums";
import styled from "styled-components";

const ListControls = ({className, handleChange, sortBy, order, displayType}) => {
    const orderOptions = Object.values(ORDER);
    const sortOptions = Object.values(SORTING_OPTIONS);
    const displayOptions = Object.values(DISPLAY_TYPE);

    return (
        <div className={className}>
            <div>
                <ListDropdown label="Order" currentOption={order} handleChange={handleChange("order")} options={orderOptions}/>
                <ListDropdown label="Sort by" currentOption={sortBy} handleChange={handleChange("sortBy")} options={sortOptions}/>
            </div>
            <ListDropdown label="List display" currentOption={displayType} handleChange={handleChange("displayType")} options={displayOptions}/>
        </div>
    )
}

export default styled(ListControls)`
    display: flex;
    justify-content: space-between;
`;

const ListDropdown = styled(Dropdown)`
    min-width: 100px;
    margin: 10px 10px 10px 0;
`;