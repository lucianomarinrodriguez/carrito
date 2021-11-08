import React, { useState,useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { api } from '../../utils/api';
import { getFirestore } from '../../Services/getFirebase';

const ItemListContainer = ({greeting,addToCartWidget}) => {

// Declaro la función de Firestore

//const db = getFirestore()
//console.log("Soy DB:",db)

// Declaro la conexión a la API

const endpoint = '/character/';
const [productos, setProductos] = useState([])
const [producto, setProducto] = useState({})

//Llamo a la API o a Firestore según lo que decida
useEffect(() => {
    const db = getFirestore()
    db.collection('productos').get()
    .then(resp => setProductos( resp.docs.map(prod => ( {id: prod.id, ...prod.data()} )) ))

    db.collection('producto').doc('1nJ4gHHvVYoZqu1Vdia3').get()
    .then(resp2 => setProducto( {id: resp2.id, ...resp2.data()} ))
    //api.get(endpoint)
    //    .then(response => {
    //        const { data } = response
    //        setProductos(data.results)
    //        console.log(productos)
    //    })
}, [endpoint])

console.log("Esto es producto: ",producto)
const items = productos //[
      
    //{ id : 0 , nombre :"Iphone 13", stock:10, img :"https://cnnespanol.cnn.com/wp-content/uploads/2021/09/Apple_iphone13_colors_09142021.jpg"},
    //{ id : 1 , nombre :"Samsung Galaxy S21", stock:10, img :"https://images.samsung.com/is/image/samsung/p6pim/latin/galaxy-s21/gallery/latin-galaxy-s21-5g-g991-sm-g991bzvjtpa-368316791?$720_576_PNG"},
    //{ id : 2 , nombre :"Ipad Pro",      stock:10, img :"https://d500.epimg.net/cincodias/imagenes/2021/01/18/tablets/1610994945_624825_1610995358_noticia_normal.jpg"},
    //{ id : 3 , nombre :"PlayStation 5", stock:10, img :"https://www.muycomputer.com/wp-content/uploads/2020/10/Sony-PS5-pre-venta-aumento-demanda-e1603881786569.jpg"},
    //{ id : 4 , nombre :"Xbox Series X", stock:10, img :"https://i.blogs.es/1756e3/xbox-series-x/1366_2000.jpeg"},
    //{ id : 5 , nombre :"Xbox Series S", stock:10, img :"https://generacionxbox.com/wp-content/uploads/2020/09/xbox-series-s-2-1.jpg"}
      
//]

return (
    <div className="container p-3 my-5">
        <div className='row'>
            <h2>{greeting}</h2>
        </div>
  
        {/* recorro el array de productos y voy armando las cards */}
        <div className="row">
            {items.map((item => 
                (<ItemDetail 
                    key={item.id} 
                    id={item.id}
                    nombre={item.name}
                    stock={item.stock}
                    precio={item.price}
                    img={item.image}
                    addToCartWidget={addToCartWidget}
                /> ) 
                
                ))}
        </div>
    </div>
    );
};
  
export default ItemListContainer;
