import { Link } from "react-router-dom";
import Logo from "../images/trfLogoBlack.svg";
import Menu from "../images/Menu.png";

import { Rotate as Hamburger } from "hamburger-react";
import Navbar from "./Navbar";
import styled from "styled-components";
import { useState } from "react";

const ImageLink = styled(Link)`
  z-index: 4;
`;
const CloseBtn = styled.div`
  z-index: 1000;
`;
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="header">
        <ImageLink to={"/"}>
          <img src={Logo} className="logoImg" alt="trf logo" />
        </ImageLink>
        <div className="navBar">
          <h4 className="bw_select">menu</h4>
          {/* <img src={Menu} alt="" /> */}
          <CloseBtn onClick={() => setOpen(!open)}>
            <Hamburger easing="ease-in" size={20} />
          </CloseBtn>
        </div>
      </div>
      {open ? <Navbar setOpen={setOpen} /> : <></>}
    </div>
  );
}

export default Header;
