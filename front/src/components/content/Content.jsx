import "./content.css";
import { List } from "../listButtons/List";
import UserTable from "../tables/UserTable";
import { useState } from "react";
import BrandsTable from "../tables/BrandsTable";
import ProductsTable from "../tables/ProductsTable";
import LastProducts from "../tables/LastProducts";
import LastClients from "../tables/LastClients";
import CategoriesTable from "../tables/CategoriesTable";
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
      case 4:
        return <CategoriesTable />;
      case 5:
        return <LastProducts />;
      case 6:
        return <LastClients />;
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
