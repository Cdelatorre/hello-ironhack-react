import logo from "./../../../assets/img/ironhack-logo.svg";
import hamburger from "./../../../assets/img/menu-top.svg";
import "./index.css";

function Navbar() {
  return (
    <div className="Navbar">
      <img src={logo} />
      <img src={hamburger} />
    </div>
  );
}

export default Navbar;
