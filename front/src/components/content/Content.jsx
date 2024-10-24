import "./content.css";
import { List } from "../listButtons/List";
import UserTable from "../tables/UserTable";
import { useState } from "react";
import BrandsTable from "../tables/BrandsTable";
import { UseFetchUsers } from "../../hooks/UseFetchUsers";
// import { ButtonsHook } from "../../hooks/ButtonsHook";
const Content = () => {
  const [numButton, setNumButton] = useState(1);
  // const { nextPage, prevPage, pageNum, totalPag } = ButtonsHook();
  const { nextPage, prevPage, totalPag, pageNum } = UseFetchUsers();
  const changeNumButton = (num) => {
    setNumButton(num);
    return num;
  };
  const renderContent = () => {
    switch (numButton) {
      case 1:
        return <UserTable />;
      case 2:
        return <BrandsTable />;
      case 3:
        return;
      default:
        break;
    }
  };

  return (
    <div className="contentContainer">
      <List numButton={numButton} changeNumButton={changeNumButton} />
      {renderContent()}
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
        "nada"
      )}
    </div>
  );
};

export default Content;
