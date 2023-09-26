import React, { Component } from 'react'

export default class Course extends Component {

    constructor(props) {
        super(props)
        this.props = props;
    }

    render() {
        return (
            <div>
                <p>{this.props.courseName}</p>
                <p>{this.props.price}</p>
            </div>
        )
    }
}
