import React, { useContext } from 'react'
import { context } from './ComponentA'

export default function ComponentC() {

    const val = useContext(context)

    return (
        <div>ComponentC -{val}</div>
    )
}
