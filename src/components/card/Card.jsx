/* eslint-disable react/prop-types */
import "./card.css";
function Card({ title, content }) {
  return (
    <div>
      <div className="containerCard">
        <h3 className="titleCard">{title}</h3>
        <p className="contentCard">{content}</p>
      </div>
    </div>
  );
}

export default Card;
