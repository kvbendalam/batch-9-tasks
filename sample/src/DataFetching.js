import React, { Component } from 'react'

export default class DataFetching extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((resp) => this.setState({ data: resp }))
    }

    render() {
        return (
            <div>
                {this.state.data.map((row) => {
                    return (
                        <>
                            <p>{row.id}</p>
                            <p>{row.title}</p>
                            <p>{row.body}</p>
                        </>
                    )
                })}
            </div>
        )
    }
}
