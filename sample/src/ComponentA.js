import React, { createContext } from 'react'
import ComponentB from './ComponentB'

export const context = createContext()

function ComponentA() {

    return (
        <context.Provider value={"Entri"}>
            ComponentA
            <ComponentB />
        </context.Provider>
    )
}

export default ComponentA