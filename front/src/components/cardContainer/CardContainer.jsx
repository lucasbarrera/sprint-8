import { GetData } from "../../hooks/GetData";
import Card from "../card/Card";
import "./cardcontainer.css";

export const CardContainer = () => {
  const { products, users, categorias } = GetData();
  return (
    <div className="cardContainer">
      <Card title="Total de Usuarios registrados" content={users} />
      <Card title="Total de Productos en BD" content={products} />
      <Card title="Total de categorias" content={categorias} />
    </div>
  );
};
