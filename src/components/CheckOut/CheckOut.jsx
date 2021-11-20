import React from 'react';
import {Link} from "react-router-dom";
import { useCartContext } from "../../Context/cartContext";

const CheckOut = () => {
    
    const {vaciarCart} = useCartContext()

    return (
        <div className="col-sm-3 col-md-8 col-lg-5 col-xl-5 my-5 container-fluid">
            <h2>Finalizar la Compra</h2>
            <div className="card bg-light h-100">
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre y Apellido</label>
                            <input type="text" className="form-control" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Dirección</label>
                            <input type="text" className="form-control" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email</label>
                            <input type="email" className="form-control" aria-describedby="emailHelp"/>
                        </div>
                        <Link to={`/`} type="submit" className="btn btn-primary"onClick={()=>{
                        vaciarCart();}}>Confirmar</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CheckOut
