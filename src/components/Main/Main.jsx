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
    
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
     }, [])

    return (
        <BrowserRouter>
            <div className="container-fluid p-2">
                <NavBar/>
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
                                <Route exact path="/"><ItemListContainer greeting="Bienvenidos a Mi Tienda"/></Route>
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
