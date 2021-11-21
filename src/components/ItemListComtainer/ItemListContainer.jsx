import React, { useState,useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router';
import { getFirestore } from '../../Services/getFirebase';

const ItemListContainer = ({greeting}) => {

const [productos, setProductos] = useState([])
let {categorias} = useParams();
const [loading, setloading] = useState(false);
const changeLoad = () => setloading(true);

//Llamo a Firestore y controlo si traigo una categoria o muestro todos los productos
const showItems = async () => {
    if (categorias) {
        try {
            const db = getFirestore()
            db.collection('productos').where('category', '==', categorias).get()
            .then(resp => setProductos( resp.docs.map(prod => ( {id: prod.id, ...prod.data()} )) ))
        } catch (error) {
            console.log(error);
        }  
      } else {
        try {
            const db = getFirestore()
            db.collection('productos').get()
            .then(resp => setProductos( resp.docs.map(prod => ( {id: prod.id, ...prod.data()} )) ))
        } catch (error) {
            console.log(error);
            }
        }
    setTimeout(changeLoad, 2000)
    }

useEffect(()=>{
    setloading(false);
    showItems();
    }, [categorias]);


const items = productos 

return (
    <div className="container p-3 my-5">
        <div className='row'>
            <h2>{greeting}</h2>
        </div>
        {loading}
        <div className="row">
            {items.map((item => 
                (<ItemDetail 
                    key={item.id} 
                    id={item.id}
                    nombre={item.name}
                    precio={item.price}
                    img={item.image}
                /> )
            ))}
        </div>
    </div>
    );
};
  
export default ItemListContainer;
