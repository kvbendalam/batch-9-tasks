import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <p className="navbar-brand">SlipKart</p>
                    <form className="d-flex" role="search">
                        <Link to="/cart">Cart</Link>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Navbar