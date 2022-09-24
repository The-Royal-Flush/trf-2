import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background: rgba(238, 238, 238, 0.7);
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 2;
  /* background-color: blue; */
`;
const SidebarContainer = styled.div`
  z-index: 3;
  background-color: rgb(255, 255, 255);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 200;
  height: 100vh;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  padding: 100px 0 90px 0;
  background: #fff;
  width: 689px;
  left: auto;

`;
const MenuContainer = styled.div`
  padding: 0 98px;
  width: 100%;
  justify-content: space-between;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const MenuGrid = styled.div`
  display: flex;
  width: 100%;
`;
const MenuLeft = styled.div`
  flex: 0.8;
`;
const MenuTitle = styled.p`
  padding: 0 0 30px 0;
  color: rgba(0, 0, 0, 0.3);
  font-size: 16px;
  line-height: 100%;
`;
const MenuSocial = styled.div`
  margin: -6px 0;
`;
const SocialItem = styled.a`
  position: relative;
  display: block;
  padding: 12px 0;
  font-size: 16px;
  line-height: 120%;
  letter-spacing: 0.00464286em;
  text-transform: capitalize;
  text-decoration: none;
`;
const MenuRight = styled.div`
  flex: 1.2;
`;
const MenuNav = styled.div`
  margin: -4px 0;
`;
const MenuNavItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const MenuNavItemLink = styled(Link)`
  font-size: 56px;
  display: inline-block;
  position: relative;
  /* font-size: 38px; */
  font-weight: 400;
  letter-spacing: -0.05em;
  line-height: 100%;
  text-decoration: none;
  color: black !important;
  padding: 4px 0;
`;
const MenuFooter = styled.div`
  padding: 0 0 12px 0;
`;
const MenuMail = styled.div``;
const MenuMailLink = styled.a`
  position: relative;
  display: inline-block;
  padding: 0 0 5px 0;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.00464286em;
  text-decoration: none;
`;
const MenuMailTitle = styled.p`
  padding: 0 0 12px 0;
  color: rgba(0, 0, 0, 0.3);
  font-size: 16px;
  line-height: 100%;
`;
const MenuMainContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
function Navbar({ setOpen }) {
  const socialData = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/prantosh-verma-654873175/",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/prantosh-verma-654873175/",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/prantosh-verma-654873175/",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/prantosh-verma-654873175/",
    },
  ];
  const routeLink = [
    {
      name: "Work",
      link: "/about",
    },
    {
      name: "Work",
      link: "/about",
    },
    {
      name: "Work",
      link: "/about",
    },
  ];
  return (
    <div>
      <Container onClick={()=>setOpen(false)} />
      <SidebarContainer>
        <MenuContainer>
          <MenuMainContainer>
            <MenuGrid>
              <MenuLeft>
                <MenuTitle>Social</MenuTitle>
                <MenuSocial>
                  {socialData.map((item) => (
                    <SocialItem href={item.link} target="_blank">
                      {item.name}
                    </SocialItem>
                  ))}
                </MenuSocial>
              </MenuLeft>
              <MenuRight>
                <MenuTitle>Menu</MenuTitle>
                <MenuNav>
                  <MenuNavItem>
                    {routeLink.map((route) => (
                      <MenuNavItemLink to={route.link}>
                        {route.name}
                      </MenuNavItemLink>
                    ))}
                  </MenuNavItem>
                </MenuNav>
              </MenuRight>
            </MenuGrid>
          </MenuMainContainer>
          <MenuFooter>
            <MenuMailTitle>Get in touch</MenuMailTitle>
            <MenuMail>
              <MenuMailLink>workfortrf@gmail.com</MenuMailLink>
            </MenuMail>
          </MenuFooter>
        </MenuContainer>
      </SidebarContainer>
    </div>
  );
}

export default Navbar;
