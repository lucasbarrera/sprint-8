/* eslint-disable react/prop-types */
import "./button.css";
export const Button = ({ title, changeNumButton }) => {
  return (
    <>
      <button className="button" onClick={changeNumButton}>
        {title}
      </button>
    </>
  );
};
