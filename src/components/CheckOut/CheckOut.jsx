import React from 'react';
import { useCartContext } from "../../Context/cartContext";
import { useHistory } from "react-router-dom";
import firebase from 'firebase';
import { getFirestore } from '../../Services/getFirebase';


const CheckOut = () => {
    
    const {vaciarCart,cartList,pxq} = useCartContext()
    const history = useHistory()

    //Preparo el pedido, inserto en Firebase y actualizo stock de los productos
    const comprar = (nombre, email) => {
        let pedido = {};
        pedido.date = firebase.firestore.Timestamp.fromDate(new Date());
        pedido.name = nombre;
        pedido.email = email;
        pedido.total = pxq();
        pedido.items = cartList.map(cartItem => {
          const id = cartItem.item.id;
          const item = cartItem.item.name;
          const price = (cartItem.item.price * cartItem.cantidad);
          const quantity = cartItem.cantidad;
    
          return {id, item, price, quantity}
        })
        
        const dbPedido = getFirestore();
        
        const pedidoReady = dbPedido.collection('pedidos')
        pedidoReady.add(pedido)
        .then((IdDocumento)=>{
            alert(`Su pedido ${IdDocumento.id} se procesó correctamente, a la brevedad será contactado por email. Gracias por su compra`)
        })
        .catch(error => {
          console.log(error)
        })
        .finally(()=>{
          vaciarCart();
          history.push('/')
        })
        
    
        const updateProductos = dbPedido.collection('productos').where(firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i => i.item.id));
    
        const batch = dbPedido.batch();
    
        updateProductos.get()
        .then(collection => {
          collection.docs.forEach(docSnapshot => {
            batch.update(docSnapshot.ref, {
              stock: docSnapshot.data().stock - cartList.find(it => it.item.id === docSnapshot.id).cantidad
            })
          })
          batch.commit().then(resp => {
            console.log('modificado');
          })
          .catch(er => {
            console.log(er);
          })
        })
      }


    // Escucha el submit del form y valida los campos
    function handleSubmit(e) {
        e.preventDefault();
        if(e.target.elements.nombre.value.length > 5){
            if(e.target.elements.direccion.value.length > 5){
                if(e.target.elements.email.value === e.target.elements.email2.value){
                    comprar(e.target.elements.nombre.value, e.target.elements.email.value)
                } else{
                    alert("Las direcciones de email deben ser iguales")
                }
            } else{
                alert("La dirección debe contener por lo menos 5 caracteres")
            }
        } else{
            alert("El nombre debe contener por lo menos 5 caracteres")
        }
    }



    return (
        <div className="col-sm-3 col-md-8 col-lg-5 col-xl-5 my-5 container-fluid">
            <h2>Finalizar la Compra</h2>
            <div className="card bg-light h-100">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Nombre y Apellido</label>
                            <input type="text" name ="nombre" className="form-control" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Dirección</label>
                            <input type="text" name ="direccion" className="form-control" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email</label>
                            <input type="email" name ="email" className="form-control" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail2" className="form-label">Re Ingrese Email</label>
                            <input type="email" name ="email2" className="form-control" aria-describedby="emailHelp"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Confirmar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CheckOut
