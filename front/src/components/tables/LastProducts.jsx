import { UseFetch } from "../../hooks/UseFetch";

function LastProducts() {
  const { data, prevPage, nextPage, pageNum, totalPag } =
    UseFetch("productos/lastadd");
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">nombre</th>
            <th scope="col">descripcion</th>
            <th scope="col">color</th>
            <th scope="col">precio</th>
            <th scope="col">talle</th>
            <th scope="col">marca</th>
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
          anterior
        </button>{" "}
        <button onClick={nextPage} disabled={pageNum == totalPag}>
          siguiente
        </button>
      </div>
    </>
  );
}

export default LastProducts;
