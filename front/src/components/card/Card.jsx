/* eslint-disable react/prop-types */
import "./card.css";
function Card({ title, content }) {
  return (
    <div className="card">
      <h3 className="titleCard">{title}</h3>
      <p className="contentCard">{content}</p>
    </div>
  );
}

export default Card;
