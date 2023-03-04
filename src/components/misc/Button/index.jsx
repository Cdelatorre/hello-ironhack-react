import "./index.css";

function Button({ type = "dark", children, onClickFn }) {
  return (
    <button onClick={onClickFn} className={`Button btn-${type}`}>
      {children}
    </button>
  );
}

export default Button;
