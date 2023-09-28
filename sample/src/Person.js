import React from 'react'
import { Link } from 'react-router-dom'

function Person() {
    return (
        <div>
            <table border="1">
                <tr>
                    <td>Krishna</td>
                    <td>28</td>
                    <td>Software Engineer</td>
                    <td>Hyderabad</td>
                </tr>
                <tr>
                    <td>Krishna</td>
                    <td>28</td>
                    <td>Software Engineer</td>
                    <td>Hyderabad</td>
                </tr>
                <tr>
                    <td>Krishna</td>
                    <td>28</td>
                    <td>Software Engineer</td>
                    <td>Hyderabad</td>
                </tr>
                <tr>
                    <td>Krishna</td>
                    <td>28</td>
                    <td>Software Engineer</td>
                    <td>Hyderabad</td>
                </tr>
                <tr>
                    <td>Krishna</td>
                    <td>28</td>
                    <td>Software Engineer</td>
                    <td>Hyderabad</td>
                </tr>
            </table>
            <Link to="/login">Login</Link><br />
            <Link to="/registration">Registration</Link>

            <br />
            <p>These are anchor tags</p>
            <a href="/login">Login</a>
            <a href="/registration">Registration</a>
        </div>
    )

}

export default Person