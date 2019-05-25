import React from 'react';
import './SelectPok.css';

const SelectPok = (props) => {
    return(
        <div className="select-pok">
            <select name="pokemon">
                <option value="bulbasaur">001 - Bulbasaur</option>
                <option value="ivysaur">002 - Ivysaur</option>
                <option value="venusaur">003 - Venusaur</option>
            </select>
        </div>
    )
}

export default SelectPok;