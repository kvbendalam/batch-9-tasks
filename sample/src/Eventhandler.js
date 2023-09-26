import React from 'react'

function Eventhandler() {

    const clickHandler = () => {
        console.log("Button is clicked")
    }

    return (
        <div>
            <button onClick={clickHandler}>Click Here</button>
        </div>
    )
}

export default Eventhandler