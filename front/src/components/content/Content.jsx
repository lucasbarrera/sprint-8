import "./content.css";
import { List } from "../listButtons/List";
import UserTable from "../tables/UserTable";
import { useState } from "react";
import BrandsTable from "../tables/BrandsTable";
import ProductsTable from "../tables/ProductsTable";
const Content = () => {
  const [numButton, setNumButton] = useState(1);
  // const { nextPage, prevPage, pageNum, totalPag } = ButtonsHook();
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
        return <ProductsTable />;
      default:
        break;
    }
  };

  return (
    <div className="contentContainer">
      <List numButton={numButton} changeNumButton={changeNumButton} />
      {renderContent()}
    </div>
  );
};

export default Content;
