/* eslint-disable react/prop-types */
import "./list.css";
import { Button } from "../button/Button";

export const List = ({ changeNumButton }) => {
  return (
    <div className="buttonContainer">
      <Button title="clientes" changeNumButton={() => changeNumButton(1)} />
      <Button title="marcas" changeNumButton={() => changeNumButton(2)} />
      <Button title="categorias" changeNumButton={() => changeNumButton(3)} />
      <Button title="mas vendido" changeNumButton={() => changeNumButton(4)} />
      <Button title="mejor precio" changeNumButton={() => changeNumButton(5)} />
    </div>
  );
};
