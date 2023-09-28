import React from 'react'
import axios from 'axios'

function Dog() {

    const [dog, setDog] = React.useState({})


    React.useEffect(() => {
        axios.get('https://dog.ceo/api/breeds/image/random').then((res) => {
            setDog(res.data)
        })
    }, [])

    return (
        <div>
            <img src={dog.message} />
        </div>
    )
}

export default Dog