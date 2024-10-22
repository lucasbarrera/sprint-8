import "./content.css";
import { List } from "../listButtons/List";
import UserTable from "../tables/UserTable";
import { useState } from "react";
import BrandsTable from "../tables/BrandsTable";
import { ButtonsHook } from "../../hooks/ButtonsHook";
const Content = () => {
  const [numButton, setNumButton] = useState(1);
  const { nextPage, prevPage, pageNum, totalPag } = ButtonsHook();
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
      default:
        break;
    }
  };

  return (
    <div className="contentContainer">
      <List numButton={numButton} changeNumButton={changeNumButton} />
      {renderContent()}
      <div className="pagesButtons">
        <button onClick={() => prevPage()} disabled={pageNum == 1}>
          anterior
        </button>{" "}
        <button
          onClick={() => {
            nextPage();
          }}
          disabled={pageNum == totalPag}
        >
          siguiente
        </button>
      </div>
    </div>
  );
};

export default Content;
