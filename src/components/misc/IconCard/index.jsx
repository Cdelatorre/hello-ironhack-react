import Button from "../Button";
import "./index.css";

function IconCard({ title, img, body, onDelete }) {
  return (
    <div className="IconCard">
      <img src={img} />
      <h2>{title}</h2>
      <p>{body}</p>
      <Button onClickFn={onDelete}>Delete</Button>
    </div>
  );
}

export default IconCard;
