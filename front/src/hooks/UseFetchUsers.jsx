import { useEffect, useState } from "react";

export const UseFetchUsers = () => {
  const [data, setData] = useState();
  const [pageNum, setPageNum] = useState(1);
  const [totalPag, setTotalPag] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/users?page=${pageNum}`
        );
        const dataParse = await response.json();
        console.log("Datos recibidos:", dataParse);
        setData(dataParse);
        setTotalPag(dataParse.totalPages);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [pageNum]);

  const nextPage = () => {
    if (pageNum < totalPag) {
      setPageNum(pageNum + 1);
    }
  };
  const prevPage = () => {
    if (pageNum > 1) {
      setPageNum(pageNum - 1);
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
