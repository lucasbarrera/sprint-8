import { useEffect, useState } from "react";

export const UseFetchUsers = () => {
  const [data, setData] = useState();
  const [pageNum, setPageNum] = useState(1);
  const [totalPag, setTotalPag] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:8080/users?page=${pageNum}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la respuesta de la API");
        }
        return response.json(); // Parseamos la respuesta como JSON
      })
      .then((dataParse) => {
        console.log("Datos recibidos:", dataParse);
        // Verificamos que dataParse y totalPages existen antes de actualizar el estado
        if (dataParse && dataParse.totalPages !== undefined) {
          setData(dataParse); // Actualizamos el estado con los datos
          setTotalPag(dataParse.totalPages); // Actualizamos el total de páginas
        } else {
          console.error("Estructura de datos incorrecta:", dataParse);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [pageNum]);

  const nextPage = () => {
    if (pageNum < totalPag) {
      setPageNum((pageNum) => pageNum + 1);
    }
  };
  const prevPage = () => {
    if (pageNum > 1) {
      setPageNum((pageNum) => pageNum - 1);
    }
  };

  return {
    data,
    pageNum,
    totalPag,
    setPageNum,
    nextPage,
    prevPage,
  };
};
