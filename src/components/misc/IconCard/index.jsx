import "./index.css";

function IconCard({ title, img, body }) {
  return (
    <div className="IconCard">
      <img src={img} />
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}

export default IconCard;
