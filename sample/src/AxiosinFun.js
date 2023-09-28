import React, { useEffect, useState } from 'react'
import axios from 'axios'

function AxiosinFun() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
            setData(res.data)
        })
    })

    let payload = {
        title: "Entri class",
        body: "Entri elevate batch 9"
    }

    function hanldePostAPI() {
        axios.post('https://jsonplaceholder.typicode.com/posts', payload).then((res) => {
            setData(res.data)
        })
    }

    function hanldePutAPI() {
        axios.put('https://jsonplaceholder.typicode.com/posts/1', {
            title: "Live class",
            body: "React.js API calls"
        }).then((res) => {
            setData(res.data)
        })
    }

    function handleDeleteAPI() {
        axios.delete('https://jsonplaceholder.typicode.com/posts/1').then((res) => {
            setData(res.data)
        })
    }

    return (
        <div>
            {data.map((row) => {
                return (
                    <>
                        <p>{row.id}</p>
                        <p>{row.title}</p>
                        <p>{row.body}</p>
                    </>
                )
            })}

            <button onClick={hanldePostAPI}>Call POST API</button>
            <button onClick={hanldePutAPI}>Call PUT API</button>
            <button onClick={handleDeleteAPI}>Call DELETE API</button>

            <p>{data.id}</p>
            <p>{data.title}</p>
            <p>{data.body}</p>

        </div>
    )
}

export default AxiosinFun