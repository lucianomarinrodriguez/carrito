import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"

const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid opcionesNavBar">
                    <a class="navbar-brand strong" href="#">Mi Tienda</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" href="#">Cocina</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" href="#">Electrodomésticos</a>
                        </li>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Tecnología</a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="#">Computación</a></li>
                            <li><a class="dropdown-item" href="#">Celulares y Tablets</a></li>
                            <li><a class="dropdown-item" href="#">Gaming</a></li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                    <CartWidget/>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
