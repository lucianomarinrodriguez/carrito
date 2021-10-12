import React, { useState,useEffect } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { api } from '../../utils/api';

const ItemListContainer = ({greeting,addToCartWidget}) => {

    // addToCartWidget lo voy pasando para agregar el contador

const endpoint = '/character/';
const [productos, setProductos] = useState([])

useEffect(() => {
    api.get(endpoint)
        .then(response => {
            const { data } = response
            setProductos(data.results)
            console.log(productos)
        })
}, [endpoint])
  
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
                (<ItemCount 
                    key={item.id} 
                    nombre={item.name}
                    stock={parseInt(item.id) + 10}
                    precio={parseInt(item.id) * 114}
                    img={item.image}
                    addToCartWidget={addToCartWidget}
                /> ) 
                
                ))}
        </div>
    </div>
    );
};
  
export default ItemListContainer;
