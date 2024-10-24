import { UseFetchUsers } from "./UseFetchUsers";
export const ButtonsHook = () => {
  const {
    // updateURL,
    pageNum,
    totalPag,
    // setNewPageNum,
    // newPageNum,
  } = UseFetchUsers();
  //funciones de botones de paginado

  return { totalPag, pageNum };
};
