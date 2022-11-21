import React from "react";

const NavBar = () => {
    return (
        <div> 
            <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
        <a className="navbar-brand" href="#"><img src="images/logo.jpg" alt="logo" width="108"/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
            <a className="nav-link " aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Productos</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Conocenos</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Contacto</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>    
        </div>
    )
}

export default NavBar;