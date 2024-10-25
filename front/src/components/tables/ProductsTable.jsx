import { UseFetch } from "../../hooks/UseFetch";

function ProductsTable() {
  const { data, nextPage, prevPage, totalPag, pageNum } = UseFetch("products/");

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">nombre</th>
            <th scope="col">descripcion</th>
            <th scope="col">color</th>
            <th scope="col">precio</th>
            <th scope="col">id marca</th>
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
            anterior
          </button>{" "}
          <button onClick={nextPage} disabled={pageNum == totalPag}>
            siguiente
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default ProductsTable;
