import React from 'react'
import './Dropdown.scss'
import {FormControl, InputLabel, Select, MenuItem} from "@mui/material";

export default function Dropdown (props) {
    const items = props.items || [];

    const {id, label, handleChange} = props;

    const defaultValue = props.value || items[0];

    return (
        <div className='dropdown'>
            <FormControl fullWidth>
                <InputLabel id={id + '-label'}>{label}</InputLabel>
                <Select
                    sx={{
                        height: 40
                    }}
                    
                    labelId={id + '-label'}
                    id={id}
                    label={label}
                    value={defaultValue}
                    onChange={(event) => {handleChange(event.target.value, event)}}
                    MenuProps={{
                        anchorOrigin: {
                          vertical: 'bottom',//43,
                          horizontal: "left"
                        },
                        transformOrigin: {
                          vertical: "top",
                          horizontal: "left"
                        },
                        getContentAnchorEl: null
                      }}
                    >
                    {
                        items.map(x => 
                            <MenuItem value={x.key}>{x.name}</MenuItem>
                            )
                        }
                </Select>
            </FormControl>
        </div>
    )
}
