import React, { useState } from "react";

const ItemDetail = ({ nombre, stock, precio, img, addToCartWidget }) => {

  // El nombre, stock e img los voy levantando y recibiendo cuando recorro el array de productos (esto se debe reemplazar por un JSON o API)
  // La función addToCardWidget viene de ItemListContainer, suma la cantidad para agregar al carrito cuando apreto el botón, está declarada en Main

  // El state muestra la cantidad de cada Articulo que voy a agregar al carrito 
  const [cantidad , setCantidad] = useState(0)


    // El state se usa para aumentar o disminuir el stock cuando se aumenta la cantidad o disminuye la cantidad
    const [newStock , setNewStock] = useState(stock)


  // Esta funcion solo vive en cada ItemCount y aumenta la cantidad de cada producto cuando tenga stock
  function add() {
    if(cantidad < stock & newStock > 0) {
      setCantidad(cantidad+1)
      setNewStock(newStock-1)
    }
  }

  // Esta funcion solo vive en cada ItemCount y resta la cantidad de cada producto hasta llegar a 1
  function remove() {
    if( cantidad > 0) {
      setCantidad(cantidad - 1)
      setNewStock(newStock+1)
    }
  }

  return (
      <div className="col-sm-3 col-md-8 col-lg-3 col-xl-3 my-5">
        <div className="card bg-light h-100">
          <img src={img} className="card-img-top h-100" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            <p className="card-text">Stock : {newStock}</p>
            <p className="card-text">Precio : ${precio}</p>
            <div className="w-100 d-flex">
              <button onClick={()=>remove()} className="btn col-xs-6 btn-primary mx-auto">-</button>
              <span>Cantidad : {cantidad} </span>
              <button onClick={()=>add()} className="btn col-xs-6 btn-primary mx-auto">+</button>
            </div>
            <div className="row">
              <button className="btn btn-primary my-3" onClick={()=>{
                addToCartWidget(cantidad);
                setCantidad(cantidad-cantidad);}}>Agregar al Pedido</button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ItemDetail;