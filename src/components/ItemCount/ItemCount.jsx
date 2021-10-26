import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {Link} from "react-router-dom";

const ItemCount = ({ addToCartWidget }) => {

  // La función addToCardWidget viene de ItemListContainer, suma la cantidad para agregar al carrito cuando apreto el botón, está declarada en Main
  const {id} = useParams()
  // defini un state para guardar la info de cada producto
  const [producto, setProducto] = useState(null);

  // esta funcion hace la consulta dinamicamente por cada producto
  const getIndividualProducto = async () => {
    try {
      // en la url estoy haciendo una peticion dinamica
      const respuesta = await axios.get(
        `hhttps://rickandmortyapi.com/api/character/${id}`
      );
      // guardo el resultado en el state producto
      setProducto(respuesta.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // llamo la funcion que me hace la consulta
    getIndividualProducto();
  }, []);

  
  // El state muestra la cantidad de cada Articulo que voy a agregar al carrito 
 const [cantidad , setCantidad] = useState(0)

 const stock = parseInt(producto.id) + 10
 //const newStock = stock


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
          <img src={producto.image} className="card-img-top h-100" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{producto.name}</h5>
            <p className="card-text">Stock : {newStock}</p>
            <p className="card-text">Precio : ${parseInt(producto.id) * 114}</p>
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

export default ItemCount;