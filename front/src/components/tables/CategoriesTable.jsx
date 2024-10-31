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
            data.categorias.map((cat, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
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
    </div>
  );
}
export default CategoriesTable;
