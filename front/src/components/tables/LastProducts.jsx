import { UseFetch } from "../../hooks/UseFetch";
import "./lastproduct.css";

function LastProducts() {
  const { data } = UseFetch("productos/lastadd");
  return (
    <>
      {data &&
        data.productos.map((p) => (
          <div className="contenedor-last" key={p.id}>
            <div className="line">
              <label htmlFor="">Id: </label>
              <p>{p.id}</p>
            </div>
            <div className="line">
              <label htmlFor="">Nombre: </label>
              <p>{p.nombre}</p>
            </div>
            <div className="line">
              <label htmlFor="">Descripcion: </label>
              <p>{p.descripcion}</p>
            </div>
            <div className="line">
              <label htmlFor="">Color: </label>
              <p>{p.color}</p>
            </div>
            <div className="line">
              <label htmlFor="">Precio: </label>
              <p>{p.precio}</p>
            </div>
            <div className="line">
              <label htmlFor="">Talle: </label>
              <p>{p.talle.descripcion}</p>
            </div>
            <div className="line">
              <label htmlFor="">Marca: </label>
              <p>{p.marca.descripcion}</p>
            </div>
          </div>
        ))}
    </>
  );
}

export default LastProducts;
