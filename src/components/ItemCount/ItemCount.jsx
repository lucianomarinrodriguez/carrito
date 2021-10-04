import React, { useState } from "react";

const ItemCount = ({ nombre, stock, img, addToCartWidget }) => {

  // El nombre, stock e img los voy levantando y recibiendo cuando recorro el array de productos (esto se debe reemplazar por un JSON o API)
  // La función addToCardWidget viene de ItemListContainer, suma la cantidad para agregar al carrito cuando apreto el botón, está declarada en Main

  // El state muestra la cantidad de cada Articulo que voy a agregar al carrito 
  const [cantidad , setCantidad] = useState(1)


  // Esta funcion solo vive en cada ItemCount y aumenta la cantidad de cada producto cuando tenga stock
  function add() {
    if(cantidad < stock) setCantidad(cantidad+1)

  }

  // Esta funcion solo vive en cada ItemCount y resta la cantidad de cada producto hasta llegar a 1
  function remove() {
    if( cantidad > 1) setCantidad(cantidad - 1)
  }

  return (
      <div className="col-sm-3 col-md-8 col-lg-3 col-xl-3 my-5">
        <div className="card bg-light h-100">
          <img src={img} className="card-img-top h-100" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            <p className="card-text">Stock : {stock}</p>
            <div className="w-100 d-flex">
              <button onClick={()=>remove()} className="btn col-xs-6 btn-primary mx-auto">-</button>
              <span>Cantidad : {cantidad} </span>
              <button onClick={()=>add()} className="btn col-xs-6 btn-primary mx-auto">+</button>
            </div>
            <div className="row">
              <button onClick={()=>addToCartWidget(cantidad)} className="btn btn-primary my-3">Agregar al Pedido</button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ItemCount;