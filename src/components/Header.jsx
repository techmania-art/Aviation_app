import React from 'react'

function Header() {
    return (
        <div>
            <div className="header">
                <nav class="navbar">
                    <div class="container-fluid">
                        <a class="navbar-brand">TVM Airport </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/features">Features</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/faq">FAQ</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header
