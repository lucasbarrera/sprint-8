import { UseFetch } from "../../hooks/UseFetch";

function LastClients() {
  const { data, totalPag, prevPage, nextPage, pageNum } =
    UseFetch("users/lastclients");
  return (
    <>
      <table className="table last-users">
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

export default LastClients;
