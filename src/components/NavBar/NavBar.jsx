import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"

const NavBar = ({carrito,toggleMenu}) => {
    return (
        <div>
            <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid opcionesNavBar">
                    <a className="navbar-brand strong" href="#">Mi Tienda</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" href="#">Cocina</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" href="#">Electrodomésticos</a>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Tecnología</a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a className="dropdown-item" href="#">Computación</a></li>
                            <li><a className="dropdown-item" href="#">Celulares y Tablets</a></li>
                            <li><a className="dropdown-item" href="#">Gaming</a></li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                    <CartWidget toggleMenu={toggleMenu} carrito={carrito}/>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
