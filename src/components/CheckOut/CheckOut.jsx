import React from 'react';
import { useCartContext } from "../../Context/cartContext";
import { useHistory } from "react-router-dom";

const CheckOut = () => {
    
    const {vaciarCart} = useCartContext()
    const history = useHistory()


    // Escucha el submit del form y valida los campos
    function handleSubmit(e) {
        e.preventDefault();
        if(e.target.elements.nombre.value.length > 5){
            if(e.target.elements.direccion.value.length > 5){
                if(e.target.elements.email.value === e.target.elements.email2.value){
                    vaciarCart()
                    alert("Gracias por su compra, a la brevedad será contactado por email")
                    history.push('/')
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
