import React from 'react'
import './DropdownCustom.scss'
import {ButtonGroup, Dropdown, DropdownButton, SplitButton} from "react-bootstrap";
import {FormControl, InputLabel, NativeSelect} from "@mui/material";

export const DropdownCustom = () => {
    return (
        <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Алгоритм
            </InputLabel>
            <NativeSelect
                defaultValue={30}
                inputProps={{
                    name: 'age',
                    id: 'uncontrolled-native',
                }}
            >
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
            </NativeSelect>
        </FormControl>
    )
}
