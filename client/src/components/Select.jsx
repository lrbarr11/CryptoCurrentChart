import React from "react"
import {Dropdown} from "react-bootstrap"

const Select = props => {
        return (
            <select onChange={props.change} value={props.show}>
                <option value="Bitcoin" selected>Bitcoin</option>
                <option value="Ethereum">Ethereum</option>
                <option value="Ripple">Ripple</option>
            </select>
        )
}

export default Select