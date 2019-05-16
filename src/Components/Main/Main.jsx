import React from 'react';
import './Main.css'
import TopScreen from '../TopScreen/TopScreen'
import BottomScreen from '../BottomScreen/BottomScreen'

const Main = (props) => {
    return (
        <div className="main">
            <img src="pokedex.png"></img>
            <TopScreen />
            <BottomScreen />
        </div>
    )
}

export default Main;