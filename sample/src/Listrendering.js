import React, { Component } from 'react'
import './Listrendering'


export default class Listrendering extends Component {

    constructor() {
        super()
        this.state = {
            employees: [
                { id: 1, name: "Indra", age: 27, profession: "Software Engineer" },
                { id: 2, name: "Rekha", age: 25, profession: "Senior Software Engineer" },
                { id: 3, name: "Lakshmi", age: 26, profession: "Lead Manager" },
                { id: 4, name: "Rachana", age: 24, profession: "Team Lead" },
                { id: 5, name: "Prathap", age: 29, profession: "Engineering Manager" }
            ]
        }
    }


    render() {
        return (
            <table border="1">
                {
                    this.state.employees.map((emp) => {
                        return (
                            <tr>
                                <td>{emp.name}</td>
                                <td>{emp.age}</td>
                                <td>{emp.profession}</td>
                            </tr>
                        )
                    })
                }
            </table>
        )
    }
}
