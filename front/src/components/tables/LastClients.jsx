import { UseFetch } from "../../hooks/UseFetch";

function LastClients() {
  const { data } = UseFetch("users/lastclients");
  return (
    <>
      {data &&
        data.users.map((u) => (
          <div className="contenedor-last" key={u.id}>
            <div className="line">
              <label htmlFor="">Id: </label>
              <p>{u.id}</p>
            </div>
            <div className="line">
              <label htmlFor="">Nombre: </label>
              <p>{u.nombre}</p>
            </div>
            <div className="line">
              <label htmlFor="">Apellido: </label>
              <p>{u.apellido}</p>
            </div>
            <div className="line">
              <label htmlFor="">DNI: </label>
              <p>{u.dni}</p>
            </div>
            <div className="line">
              <label htmlFor="">Telefono: </label>
              <p>{u.telefono}</p>
            </div>
            <div className="line">
              <label htmlFor="">Domicilio: </label>
              <p>{u.domicilio}</p>
            </div>
            <div className="line">
              <label htmlFor="">Email: </label>
              <p>{u.email}</p>
            </div>
            <div className="line">
              <label htmlFor="">Tipo de usuario: </label>
              <p>{u.tipo_usuario}</p>
            </div>
            <div className="line">
              <label htmlFor="">Genero: </label>
              <p>{u.genero}</p>
            </div>
          </div>
        ))}
    </>
  );
}

export default LastClients;
