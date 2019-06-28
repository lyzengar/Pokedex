import React from 'react';
import './Main.css'
import TopScreen from '../TopScreen/TopScreen'
import BottomScreen from '../BottomScreen/BottomScreen'
import SelectPok from '../SelectPok/SelectPok'

const Main = (props) => {
    return (
        <div className="main">
            <img src="pokedex.png"></img>
            <TopScreen />
            <SelectPok />
            <BottomScreen />
        </div>
    )
}

export default Main;