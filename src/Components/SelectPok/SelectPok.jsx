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
                <option value="rattata">019 - Rattata</option>
                <option value="raticate">020 - Raticate</option>
                <option value="spearow">021 - Spearow</option>
                <option value="fearow">022 - Fearow</option>
                <option value="ekans">023 - Ekans</option>
                <option value="arbok">024 - Arbok</option>
                <option value="pikachu">025 - Pikachu</option>
                <option value="raichu">026 - Raichu</option>
                <option value="sandshrew">027 - Sandshrew</option>
                <option value="sandslash">028 - Sandslash</option>
                <option value="nidoran-f">029 - Nidoran ♀️</option>
                <option value="nidorina">030 - Nidorina</option>
                <option value="nidoqueen">031 - Nidoqueen</option>
                <option value="nidoran-m">032 - Nidoran ♂️</option>
                <option value="nidorino">033 - Nidorino</option>
                <option value="nidoking">034 - Nidoking</option>
                <option value="clefairy">035 - Clefairy</option>
                <option value="clefable">036 - Clefable</option>
                <option value="vulpix">037 - Vulpix</option>
                <option value="ninetales">038 - Ninetales</option>
                <option value="jigglypuff">039 - Jigglypuff</option>
                <option value="wigglytuff">040 - Wigglytuff</option>
                <option value="zubat">041 - Zubat</option>
                <option value="golbat">042 - Golbat</option>
                <option value="oddish">043 - Oddish</option>
                <option value="gloom">044 - Gloom</option>
                <option value="vileplume">045 - Vileplume</option>
                <option value="paras">046 - Paras</option>
                <option value="parasect">047 - Parasect</option>
                <option value="venonat">048 - Venonat</option>
                <option value="venomoth">049 - Venomoth</option>
                <option value="diglett">050 - Diglett</option>
                <option value="dugtrio">051 - Dugtrio</option>
                <option value="meowth">052 - Meowth</option>
                <option value="persian">053 - Persian</option>
                <option value="psyduck">054 - Psyduck</option>
                <option value="golduck">055 - Golduck</option>
            </select>
        </div>
    )
}

export default SelectPok;