import { UseFetch } from "../../hooks/UseFetch";

function LastProducts() {
  const { data, prevPage, nextPage, pageNum, totalPag } =
    UseFetch("productos/lastadd");
  return (
    <>
      <table className="table last-products">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Color</th>
            <th scope="col">Precio</th>
            <th scope="col">Talle</th>
            <th scope="col">Marca</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.productos.map((p) => (
              <tr key={p.id}>
                <th scope="row">{p.id}</th>
                <td>{p.nombre}</td>
                <td>{p.descripcion}</td>
                <td>{p.color}</td>
                <td>{p.precio}</td>
                <td>{p.talle.descripcion}</td>
                <td>{p.marca.descripcion}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="pagesButtons">
        <button onClick={prevPage} disabled={pageNum == 1}>
          Anterior
        </button>{" "}
        <button onClick={nextPage} disabled={pageNum == totalPag}>
          Siguiente
        </button>
      </div>
    </>
  );
}

export default LastProducts;
