/* eslint-disable react/prop-types */
import "./list.css";
import { Button } from "../button/Button";

export const List = ({ changeNumButton }) => {
  return (
    <div className="buttonContainer">
      <Button title="Clientes" changeNumButton={() => changeNumButton(1)} />
      <Button title="Marcas" changeNumButton={() => changeNumButton(2)} />
      <Button title="Productos" changeNumButton={() => changeNumButton(3)} />
      <Button title="Categorias" changeNumButton={() => changeNumButton(4)} />
      <Button
        title="Ultimo Prudcto"
        changeNumButton={() => changeNumButton(5)}
      />
      <Button
        title="Ultimo Cliente"
        changeNumButton={() => changeNumButton(6)}
      />
    </div>
  );
};

const buttons = document.querySelectorAll(".buttonContainer button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});
