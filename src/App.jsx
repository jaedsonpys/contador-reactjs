import React from "react";
import './App.css'

import Header from "./components/Header";
import Contador from "./components/Contador";

export default () => {
    return (
        <div className="App">
            <Header/>
            <Contador/>
        </div>
    )
}