import { Link } from "react-router-dom";
import Logo from "../images/trfLogoBlack.svg";
import Menu from "../images/Menu.png";

function Header() {
  return (
    <div>
      <div className="header">
        <img src={Logo} className="logoImg" />
        <div className="navBar">
          <h4>menu</h4>
          <img src={Menu} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
