import React, { useState } from 'react'

function Counterf() {

    const [counter, setCounter] = useState(0)

    const handleIncrement = () => {
        setCounter(counter + 1)
    }

    const handleDecrement = () => {
        setCounter(counter - 1)
    }

    return (
        <div>
            <h1>Counterf</h1>
            <p>{counter}</p>
            <button onClick={handleIncrement}>Increment Counter</button>
            <button onClick={handleDecrement}>Decrement Counter</button>
        </div>
    )
}

export default Counterf