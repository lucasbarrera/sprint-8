import { UseFetch } from "../../hooks/UseFetch";

function CategoriesTable() {
  const { data, nextPage, prevPage, totalPag, pageNum } =
    UseFetch("categorias/");

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.categorias.map((cat) => (
              <tr key={cat.id}>
                <th scope="row">{cat.id}</th>
                <td>{cat.categoria}</td>
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
export default CategoriesTable;
