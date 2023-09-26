import React, { Component } from 'react'

export default class Counter extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
        this.handleIncrement = this.handleIncrement.bind(this)
        this.handleDecrement = this.handleDecrement.bind(this)
    }

    handleIncrement() {
        this.setState({ counter: this.state.counter + 1 })
    }

    handleDecrement() {
        this.setState({ counter: this.state.counter - 1 })
    }

    render() {
        return (
            <div>
                <h1>Counter</h1>
                <p>{this.state.counter}</p>
                <button onClick={this.handleIncrement}>Increment Counter</button>
                <button onClick={this.handleDecrement}>Decrement Counter</button>
            </div>
        )
    }
}
