import { UseFetchUsers } from "./UseFetchUsers";
export const ButtonsHook = () => {
  const { setPageNum, updateURL, pageNum, totalPag } = UseFetchUsers();
  //funciones de botones de paginado
  const nextPage = () => {
    setPageNum((pageNum) => {
      const newPageNum = pageNum + 1;
      updateURL(newPageNum);
      return newPageNum;
    });
  };

  const prevPage = () => {
    setPageNum((pageNum) => {
      const newPageNum = pageNum - 1;
      updateURL(newPageNum);
      return newPageNum;
    });
  };

  return { nextPage, prevPage, totalPag, pageNum };
};
