import React, { useState, useEffect } from 'react'

function DataFetchinginFun() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((resp) => setData(resp))
    }, [])

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
        </div>
    )
}

export default DataFetchinginFun