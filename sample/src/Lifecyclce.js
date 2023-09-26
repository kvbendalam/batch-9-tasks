import React, { Component } from 'react'

export default class Lifecyclce extends Component {

    constructor() {
        super()
        this.state = {
            age: 29,
        }
    }


    componentDidMount() {
        console.log("This is componentDidMount method")
        this.setState({
            age: 35
        })
    }

    componentDidUpdate() {
        document.write = this.state.age
    }




    componentWillUnmount() {
    }

    render() {
        return (
            <div>
                Lifecyclce
                <p>{this.state.age}</p>
            </div>
        )
    }
}
