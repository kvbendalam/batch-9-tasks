import React, { Component } from 'react'
import Employee from './Employee'
import Student from './Student'

export default class ConditionalRendering extends Component {

    constructor() {
        super()
        this.state = {
            age: 24,
        }
    }

    render() {
        return (
            <div>{this.state.age > 20 ? (<Employee />) : (<Student />)}</div>
        )
    }
}