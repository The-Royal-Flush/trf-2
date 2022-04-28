import { Link } from "react-router-dom";
import Logo from "../images/trfLogoBlack.svg";
import Menu from "../images/Menu.png";

import { Rotate as Hamburger } from "hamburger-react";
import { useState } from "react/cjs/react.production.min";

function Header() {


  return (
    <div>
      <div className="header">
        <img src={Logo} className="logoImg" />
        <div className="navBar">
          <h4>menu</h4>
          {/* <img src={Menu} alt="" /> */}
          <Hamburger easing="ease-in" size={20} />
        </div>
      </div>
    </div>
  );
}

export default Header;
