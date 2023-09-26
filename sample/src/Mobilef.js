import React, { useState } from 'react'

function Mobilef() {

    const [mobile, setMobile] = useState({
        name: "iPhone15",
        os: "iOS17",
        price: "1,60,000",
        launchDate: "Sep 15"
    })

    const updateMobile = () => {
        setMobile({
            name: "Samsung",
            os: "android",
            price: "90000",
            launchDate: "Jan 20th"
        })
    }

    return (
        <div>
            <h1>Mobile</h1>
            <p>Name : {mobile.name}</p>
            <p>OS: {mobile.os}</p>
            <p>Price: {mobile.price}</p>
            <p>Launch Date: {mobile.launchDate}</p>
            <button onClick={updateMobile}>Update Mobile</button>
        </div>
    )
}

export default Mobilef