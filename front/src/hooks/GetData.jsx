import { useEffect, useState } from "react";

export const GetData = () => {
  const [users, setUsers] = useState(0);
  const [products, setProducts] = useState(0);
  const [categorias, setCategorias] = useState(0);

  useEffect(() => {
    getDataUsers();
    getDataProducts();
    getDataCategorias();
  }, [categorias]);

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
  const getDataCategorias = () => {
    fetch("http://localhost:8080/categorias")
      .then((res) => res.json())
      .then((data) => setCategorias(data.totalCategories));
  };
  return { users, products, categorias };
};
