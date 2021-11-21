import { useCartContext } from "../../Context/cartContext";
import React from "react";

const CartView = ({ key, id, nombre, precio, img, cantidad, total }) => {

    const {borrarItem} = useCartContext()

    return (

    <div className="card mb-3">
        <div className="row g-3">
            <div className="col-sm-3 col-md-8 col-lg-2 col-xl-2 my-5">
                <img src={img} className="card-img-top h-100" alt="..." />
            </div>
            <div className="col-sm-3 col-md-8 col-lg-2 col-xl-2 my-5">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">Cantidad: {cantidad}</p>
                <p className="card-text">Precio: US${precio}</p>
                <p className="card-text">SubTotal: US${total}</p>
                <div className="w-100 d-flex">
                    <div className="btn col-xs-6 btn-primary mx-auto" onClick={()=>{
                    borrarItem(id);}}>Eliminar del Carrito</div>
                </div>
            </div>
        </div>
    </div>

    )
}

export default CartView
