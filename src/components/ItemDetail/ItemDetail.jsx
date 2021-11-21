import React from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ key, id, nombre, precio, img }) => {

  return (
      <div className="col-sm-3 col-md-8 col-lg-3 col-xl-3 my-5">
        <div className="card bg-light h-100">
          <img src={img} className="card-img-top h-100" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            <p className="card-text">Precio: US${precio}</p>
            <div className="w-100 d-flex">
              <Link to={`/ItemCount/${id}`} className="btn col-xs-6 btn-primary mx-auto">Ver Detalles</Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ItemDetail;