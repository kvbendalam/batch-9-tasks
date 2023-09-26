import React, { Component } from 'react'

export default class StateExample extends Component {

    constructor() {
        super()
        this.state = {
            name: "Vamsi",
            age: 29,
            place: "Hyd"
        }
    }

    clickHandler = () => {
        this.setState({
            name: "Krishna",
            age: 39,
            place: "Bangalore"
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.name}</p>
                <p>{this.state.age}</p>
                <p>{this.state.place}</p>
                <button onClick={this.clickHandler}>Update data</button>
            </div>
        )
    }
}
