import React, { Component } from 'react'
import './Student.css'

export default class Student extends Component {

    constructor() {
        super()
        this.state = {
            marks: {
                telugu: 99,
                english: 100,
                hindi: 99,
                computers: 100
            }
        }
    }

    render() {
        return (
            <div>

                <p>Telugu : {this.state.marks.telugu}</p>

                <span className="hindi">{this.state.marks.hindi}</span>

                <h1 id="english">{this.state.marks.english}</h1>

            </div>
        )
    }
}
