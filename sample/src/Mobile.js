import React, { Component } from 'react'

export default class Mobile extends Component {

    constructor() {
        super()
        this.state = {
            name: "iPhone15",
            os: "iOS17",
            price: "1,60,000",
            launchDate: "Sep 15"
        }
        this.handleUpdate = this.handleUpdate.bind(this)
    }

    handleUpdate() {
        this.setState({
            name: "Samsung",
            os: "android",
            price: "90000",
            launchDate: "Jan 20th"
        })
    }

    render() {
        return (
            <div>
                <h1>Mobile</h1>
                <p>Name : {this.state.name}</p>
                <p>OS: {this.state.os}</p>
                <p>Price: {this.state.price}</p>
                <p>Launch Date{this.state.launchDate}</p>
                <button onClick={this.handleUpdate}>Update Mobile</button>
            </div>
        )
    }
}
