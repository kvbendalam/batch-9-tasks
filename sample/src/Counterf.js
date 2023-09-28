import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Counterf() {

    const [counter, setCounter] = useState(0)

    const navigate = useNavigate()

    const handleIncrement = () => {
        setCounter(counter + 1)
    }

    const handleDecrement = () => {
        setCounter(counter - 1)
    }

    const handleRegistration = () => {
        navigate("/registration")
    }

    return (
        <div>
            <h1>Counterf</h1>
            <p>{counter}</p>
            <button onClick={handleIncrement}>Increment Counter</button>
            <button onClick={handleDecrement}>Decrement Counter</button>
            <button onClick={handleRegistration}>Registration</button>
        </div>
    )
}

export default Counterf