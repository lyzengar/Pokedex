import React from 'react';
import './SelectPok.css';

const SelectPok = (props) => {
    return(
        <div className="select-pok">
            <select name="pokemon">
                <option value="bulbasaur">001 - Bulbasaur</option>
                <option value="ivysaur">002 - Ivysaur</option>
                <option value="venusaur">003 - Venusaur</option>
                <option value="charmander">004 - Charmander</option>
                <option value="charmeleon">005 - Charmeleon</option>
                <option value="charizard">006 - Charizard</option>
            </select>
        </div>
    )
}

export default SelectPok;