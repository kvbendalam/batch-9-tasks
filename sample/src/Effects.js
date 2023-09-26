import React, { useEffect, useState } from 'react'

function Effects() {

    const [counter, setCounter] = useState(0)

    //componentDidMount -> Mount -> Every time component renders, this method is going to execute.
    useEffect(() => {
        console.log("This is useEffect hook")
    })

    //This will execute only once in a component life time
    useEffect(() => {

    }, [])

    //componentDidUpdate
    useEffect(() => {

    }, [counter])

    //componentWillUnmount - unmount
    useEffect(() => {


        return () => {
            //clearTimeout(interal)
        }
    })



    useEffect(() => {
        //API call
    })


    return (
        <div>Effects</div>
    )




}

export default Effects