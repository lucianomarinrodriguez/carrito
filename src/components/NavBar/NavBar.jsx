import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid opcionesNavBar">
                    <Link to={`/`} className="navbar-brand strong" href="#">Mi Tienda</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/categorias/consolas" className="nav-link active" href="#">Consolas</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/categorias/computacion" className="nav-link active" href="#">Computación</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/categorias/televisores" className="nav-link active" href="#">Televisores</Link>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Apple</a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><Link to="/categorias/telefonos" className="dropdown-item" href="#">Teléfonos</Link></li>
                            <li><Link to="/categorias/tablets" className="dropdown-item" href="#">Tablets</Link></li>
                            <li><Link to="/categorias/relojes" className="dropdown-item" href="#">Relojes</Link></li>
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
