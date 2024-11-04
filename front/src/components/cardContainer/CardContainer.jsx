import { GetData } from "../../hooks/GetData";
import Card from "../card/Card";
import "./cardcontainer.css";

export const CardContainer = () => {
  const { products, users, categorias } = GetData();
  return (
    <div className="cardContainer">
      <Card title="Usuarios Registrados" content={users} />
      <Card title="Total Productos" content={products} />
      <Card title="Total Categorias" content={categorias} />
    </div>
  );
};
