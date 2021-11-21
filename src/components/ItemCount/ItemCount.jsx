import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {Link} from "react-router-dom";
import { useCartContext } from "../../Context/cartContext";
import { getFirestore } from '../../Services/getFirebase';


const ItemCount = () => {

  const {id} = useParams()
  const {agregarItem} = useCartContext()
  const {actCarrito} = useCartContext()
  
  // defini un state para guardar la info de cada producto
  const [producto, setProducto] = useState({});
  const [newStock , setNewStock] = useState(0)


useEffect(() => {
  const db = getFirestore()
  db.collection('productos').doc(id).get()
  .then(resp => setProducto( {id: resp.id, ...resp.data()}))
}, [id])

useEffect(() => {
  if(producto) setNewStock(producto.stock-1)
},[producto])


 // El state se usa para aumentar o disminuir el stock cuando se aumenta o disminuye la cantidad
 const prod = parseInt(producto.stock) 
 const stock = parseInt(prod)
 

  // El state muestra la cantidad de cada Articulo que voy a agregar al carrito 
 const [cantidad , setCantidad] = useState(1)


  // Esta funcion solo vive en cada ItemCount y aumenta la cantidad de cada producto cuando tenga stock
  function add() {
    if(cantidad <= stock & newStock > 0) {
      setCantidad(cantidad+1)
      setNewStock(newStock-1)
    }
  }

  // Esta funcion solo vive en cada ItemCount y resta la cantidad de cada producto hasta llegar a 1
  function remove() {
    if( cantidad > 1) {
      setCantidad(cantidad - 1)
      setNewStock(newStock+1)
    }
  }

  return (
      <div className="col-sm-3 col-md-8 col-lg-3 col-xl-3 my-5 container-fluid">
        <h2>{producto.name}</h2>
        <div id="tarjeta" className="card bg-light h-100" >
          <img src={producto&&producto.image} className="card-img-top h-100" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{producto&&producto.name}</h5>
            <p className="card-text">{producto&&producto.description}</p>
            <p className="card-text">Stock: {newStock}</p>
            <p className="card-text">Precio: ${producto&&producto.price}</p>
            <div className="w-100 d-flex">
              <button onClick={()=>remove()} className="btn col-xs-6 btn-primary mx-auto">-</button>
              <span>Cantidad: {cantidad} </span>
              <button onClick={()=>add()} className="btn col-xs-6 btn-primary mx-auto">+</button>
            </div>
            <div className="row">
              <button className="btn btn-primary my-3" onClick={()=>{
                if(cantidad > 0){
                actCarrito(cantidad);
                agregarItem(producto, cantidad);
                setCantidad(cantidad-cantidad);}else{alert("La cantidad a comprar no puede ser 0")}}}>Agregar al Pedido</button>
              <Link to={`/`} className="btn btn-primary my-3">Seguir Comprando</Link>
              <Link to={`/CartListContainer/`} className="btn btn-primary my-3">Ver Carrito</Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ItemCount;