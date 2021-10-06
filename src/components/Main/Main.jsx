import React, { useState,useEffect } from 'react'
import ItemListContainer from '../ItemListComtainer/ItemListContainer'
import NavBar from '../NavBar/NavBar'
import Loader from "react-loader-spinner"; 

const Main = () => {
    
    const [carrito,setCarrito] = useState(0); 
    const [open,setOpen] = useState(true)
    const [loading, setLoading] = useState(true)


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
        setTimeout(() => {
            setLoading(false)
        }, 3000)
     }, [carrito])

    return (
        <div className="container-fluid p-2">
            <NavBar carrito={carrito} toggleMenu={toggleMenu} />
            <a>
            {
                loading
                ?
                <Loader
                    className="p-5"
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs
                />
                :
                open && <ItemListContainer greeting="Bienvenidos a Mi Tienda" addToCartWidget={addToCartWidget}/>
            }
            </a>
        </div>
    )
}

export default Main
