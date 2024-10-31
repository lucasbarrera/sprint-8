import Card from "../card/Card";
import "./cardcontainer.css";
import { useEffect, useState } from "react";

export const CardContainer = () => {
  const [users, setUsers] = useState(0);
  const [products, setProducts] = useState(0);

  useEffect(() => {
    getDataUsers();
    getDataProducts();
  }, []);
  const getDataUsers = () => {
    fetch(`http://localhost:8080/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data.totalUsers));
  };
  const getDataProducts = () => {
    fetch("http://localhost:8080/productos")
      .then((res) => res.json())
      .then((data) => setProducts(data.totalProducts));
  };

  return (
    <div className="cardContainer">
      <Card title="Total de Usuarios registrados" content={users} />
      <Card title="Total de Productos en BD" content={products} />
      <Card />
    </div>
  );
};
