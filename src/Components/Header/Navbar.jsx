import React from 'react'
import {Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-dark">
            <div class="container-fluid">
                <Link className="navbar-brand text-primary" to="/">
                    moviex
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item bg-body-tertiary">
                            <Link className="nav-link active" aria-current="page" to="/home">
                                Home
                            </Link>
                        </li>
                        <li class="nav-item bg-body-tertiary">
                            <Link className="nav-link" to="/login">
                                Login
                            </Link>
                        </li>
                        <li class="nav-item bg-body-tertiary">
                            <Link className="nav-link" to="/signup">
                                SignUp
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
