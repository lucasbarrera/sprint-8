import { useEffect, useState } from "react";

export const UseFetchUsers = () => {
  const [data, setData] = useState();
  const [pageNum, setPageNum] = useState(1);
  const [totalPag, setTotalPag] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:8080/users?page${pageNum}`)
      .then((res) => res.json())
      .then((dataParse) => {
        setData(dataParse);
        setTotalPag(dataParse.totalPages);
      });
  }, [pageNum]);

  //fetch y funciones de paginacion
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const page = queryParams.get("page");
    if (page) {
      setPageNum(Number(page));
    }
  }, []);

  const updateURL = (newPageNum) => {
    const newUrl = `${window.location.pathname}?page=${newPageNum}`;
    window.history.pushState(null, "", newUrl);
    console.log(newPageNum);
  };

  return { data, pageNum, updateURL, totalPag, setPageNum };
};
