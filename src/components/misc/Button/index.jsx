import "./index.css";

function Button({ type = "dark", text }) {
  return <button className={`Button btn-${type}`}>{text}</button>;
}

export default Button;
