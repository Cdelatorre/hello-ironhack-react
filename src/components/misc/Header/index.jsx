import Button from "../Button";
import "./index.css";

function Header() {
  return (
    <div className="Header">
      <div className="header-content">
        <h1>Say hello to Reactjs</h1>
        <p>
          You will learn how to use the most popular frontend library, and
          become a super Ninja developer.
        </p>
        <Button type="light" text="Awesome!" />
      </div>
    </div>
  );
}

export default Header;
