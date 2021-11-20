import React, { useState,useEffect } from 'react'
import ItemListContainer from '../ItemListComtainer/ItemListContainer'
import NavBar from '../NavBar/NavBar'
import Loader from "react-loader-spinner";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount';
import CartListContainer from '../CartListContainer/CartListContainer';
import CartView from '../CartView/CartView';
import CheckOut from '../CheckOut/CheckOut';


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
        <BrowserRouter>
            <div className="container-fluid p-2">
                <NavBar carrito={carrito} toggleMenu={toggleMenu} />
                    <Switch>
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
                            open && <Route exact path="/"><ItemListContainer greeting="Bienvenidos a Mi Tienda" addToCartWidget={addToCartWidget}/></Route>

                        }
                        <Route exact path="/categorias/:categorias">
                            <ItemListContainer greeting="Productos por categoria"/>
                        </Route>
                        <Route exact path="/ItemCount/:id"> 
                                <ItemCount/>
                        </Route>
                        <Route exact path="/CartListContainer/"><CartListContainer/></Route>
                        <Route exact path="/CartView/"><CartView/></Route>
                        <Route exact path="/CheckOut/"><CheckOut/></Route>
                        </a>
                    </Switch>
            </div>
        </BrowserRouter>
    )
}

export default Main
