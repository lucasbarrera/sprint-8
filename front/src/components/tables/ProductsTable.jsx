import { UseFetch } from "../../hooks/UseFetch";

function ProductsTable() {
  const { data, nextPage, prevPage, totalPag, pageNum } = UseFetch("products/");

  return (
    <div>
      <table className="table products">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Color</th>
            <th scope="col">Precio</th>
            <th scope="col">Id_marca</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.productos.map((producto) => (
              <tr key={producto.id}>
                <th scope="row">{producto.id}</th>
                <td>{producto.nombre}</td>
                <td>{producto.descripcion}</td>
                <td>{producto.color}</td>
                <td>{producto.precio}</td>
                <td>{producto.id_marca}</td>
              </tr>
            ))}
        </tbody>
      </table>
      {totalPag >= 1 ? (
        <div className="pagesButtons">
          <button onClick={prevPage} disabled={pageNum == 1}>
            Anterior
          </button>{" "}
          <button onClick={nextPage} disabled={pageNum == totalPag}>
            Siguiente
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default ProductsTable;
