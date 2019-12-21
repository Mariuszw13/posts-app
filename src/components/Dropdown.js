import React from "react";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from '@material-ui/core/FormControl';

const Dropdown = ({className, currentOption, options, handleChange, label}) => (
    <FormControl >
    <InputLabel >
        {label}
    </InputLabel>
    <Select
        className={className}
        labelId="demo-simple-select-label"
        value={currentOption}
        onChange={handleChange}
    >
        {options.map(option => <MenuItem key={option} value={option}>{option}</MenuItem>)}
    </Select>
    </FormControl>
)

export default Dropdown;