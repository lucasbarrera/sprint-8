import { UseFetch } from "../../hooks/UseFetch";

function BrandsTable() {
  const { data, nextPage, prevPage, totalPag, pageNum } = UseFetch("marcas/");

  return (
    <div>
      <table className="table brands">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.marcas.map((marca) => (
              <tr key={marca.id}>
                <th scope="row">{marca.id}</th>
                <td>{marca.descripcion}</td>
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

export default BrandsTable;
