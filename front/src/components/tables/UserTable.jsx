import { UseFetch } from "../../hooks/UseFetch";

function UserTable() {
  const { data, nextPage, prevPage, totalPag, pageNum } = UseFetch("users/");

  return (
    <div className="table-content">
      <table className="table user">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">E-mail</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.users.map((user) => (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.nombre}</td>
                <td>{user.apellido}</td>
                <td>{user.email}</td>
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

export default UserTable;
