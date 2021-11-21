import React from 'react'
import {Link} from "react-router-dom";
import { useCartContext } from "../../Context/cartContext";
import CartView from '../CartView/CartView';

const CartListContainer = () => {

    const {cartList} = useCartContext()
    const {vaciarCart} = useCartContext()
    const {pxq} = useCartContext()



    return (
        <div>
            <div className="container p-3 my-5">
                <div className='row'>
                    <h2>Mi Carrito</h2>
                </div>
    
                {/* recorro cartList y voy armando las cards */}
                <div className="row">
                    {cartList.map((prod => 
                        (<CartView 
                            key={prod.item.id} 
                            id={prod.item.id}
                            nombre={prod.item.name}
                            precio={prod.item.price}
                            img={prod.item.image}
                            cantidad={prod.cantidad}
                            total={prod.cantidad * prod.item.price}
                        /> ) 
                    ))}
                </div>
            </div>
            <div className="col-sm-4 col-md-8 col-lg-4 col-xl-4 my-5">
                <h5 className="card-text">Total: US${pxq()}</h5>
                <Link to={`/CheckOut/`} className="btn btn-primary my-3">Comprar</Link>
                <Link to={`/`} className="btn btn-primary my-3 m-2" onClick={()=>{
                vaciarCart();}}>Vaciar Carrito</Link>
                <Link to={`/`} className="btn btn-primary my-3">Seguir Comprando</Link>
            </div>
        </div>
    )
}

export default CartListContainer
