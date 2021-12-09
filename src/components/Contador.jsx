import React, { useState } from "react"
import './styles/Contador.css'

export default () => {

    const [value, setValue] = useState(0)

    return (
        <div className="Contador">
            <div className="Painel">
                <p>{value}</p>
            </div>
            <div className="Actions">
                <button className="Add" onClick={() => setValue(value + 1)}>+</button>
                <button className="Remove" onClick={() => setValue(value - 1)}>-</button>
            </div>
        </div>
    )
}