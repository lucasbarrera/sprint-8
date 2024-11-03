import { UseFetch } from "../../hooks/UseFetch";

function CategoriesTable() {
  const { data, nextPage, prevPage, totalPag, pageNum } =
    UseFetch("categorias/");

  return (
    <div>
      <table className="table categories">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Nivel</th>
            <th scope="col">Parent id</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.categorias.map((cat) => (
              <tr key={cat.id}>
                <th scope="row">{cat.id}</th>
                <td>{cat.categoria}</td>
                <td>{cat.nivel}</td>
                <td>{cat.parent_id}</td>
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
    </div>
  );
}
export default CategoriesTable;
