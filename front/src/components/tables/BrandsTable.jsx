function BrandsTable() {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
          </tr>
        </thead>
        <tbody>
          {/* {data.marcas &&
              data.marcas.map((marca) => (
                <tr key={marca.id}>
                  <th scope="row">{marca.id}</th>
                  <td>{marca.descripcion}</td>
                </tr>
              ))} */}
        </tbody>
      </table>
    </div>
  );
}

export default BrandsTable;
