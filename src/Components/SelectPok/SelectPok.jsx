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
                <option value="squirtle">007 - Squirtle</option>
                <option value="wartortle">008 - Wartortle</option>
                <option value="blastoise">009 - Blastoise</option>
                <option value="caterpie">010 - Caterpie</option>
                <option value="metapod">011 - Metapod</option>
                <option value="butterfree">012 - Butterfree</option>
                <option value="weedle">013 - Weedle</option>
                <option value="kakuna">014 - Kakuna</option>
                <option value="beedrill">015 - Beedrill</option>
                <option value="pidgey">016 - Pidgey</option>
                <option value="pidgeotto">017 - Pidgeotto</option>
                <option value="pidgeot">018 - Pidgeot</option>
            </select>
        </div>
    )
}

export default SelectPok;