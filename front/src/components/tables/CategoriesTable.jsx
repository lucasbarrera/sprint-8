import { UseFetch } from "../../hooks/UseFetchUsers";

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
            data.cat.map((cat) => (
              <tr key={cat.id}>
                <th scope="row">{cat.id}</th>
                <td>{cat.descripcion}</td>
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
export default CategoriesTable;
