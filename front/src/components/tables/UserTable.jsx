import { UseFetchUsers } from "../../hooks/UseFetchUsers";

function UserTable() {
  const { data, nextPage, prevPage, totalPag, pageNum } = UseFetchUsers();

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">nombre</th>
            <th scope="col">apellido</th>
            <th scope="col">email</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.users.map((user) => (
              <tr key={user.id}>
                <th scope="row">{user.id - 19}</th>
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

export default UserTable;
