import React, { useState,useEffect } from 'react'
import ItemListContainer from '../ItemListComtainer/ItemListContainer'
import NavBar from '../NavBar/NavBar'

const Main = () => {
    
    const [carrito,setCarrito] = useState(0); 
    const [open,setOpen] = useState(true)

    // Para mostrar y ocultar artículos, va a servir cuando quiera cargar el detalle del carrito
    
    const toggleMenu = () => {
        setOpen(!open)
    }

    // Contador de productos para actualizar el carrito
    const addToCartWidget = (cantidad) => {
        setCarrito(carrito + cantidad)
    }

    // Effect que hace un console.log cuando agrego algo al carrito (se tiene que ir)
    useEffect(() => {
        console.log("se agrego un item")
     }, [carrito])

    return (
        <div className="container-fluid p-2">
            <NavBar carrito={carrito} toggleMenu={toggleMenu} />
            {open && <ItemListContainer greeting="Bienvenidos a Mi Tienda" addToCartWidget={addToCartWidget}/>}
        </div>
    )
}

export default Main
