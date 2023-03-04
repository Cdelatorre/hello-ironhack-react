import "./index.css";

function Button({ type = "dark", children }) {
  return <button className={`Button btn-${type}`}>{children}</button>;
}

export default Button;
