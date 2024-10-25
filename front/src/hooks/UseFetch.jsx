import { useEffect, useState } from "react";

export const UseFetch = (endpoint) => {
  const [data, setData] = useState();
  const [pageNum, setPageNum] = useState(1);
  const [totalPag, setTotalPag] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:8080/${endpoint}?page=${pageNum}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la respuesta de la API");
        }
        return response.json();
      })
      .then((dataParse) => {
        // console.log("Datos recibidos:", dataParse);
        if (dataParse && dataParse.totalPages !== undefined) {
          setData(dataParse);
          setTotalPag(dataParse.totalPages);
        } else {
          console.error("Estructura de datos incorrecta:", dataParse);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [pageNum, endpoint]);

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
