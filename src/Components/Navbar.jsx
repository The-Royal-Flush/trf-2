import React from "react";

import {
  Container,
  SidebarContainer,
  MenuContainer,
  MenuMailLink,
  MenuMail,
  MenuMailTitle,
  MenuFooter,
  MenuNavItemLink,
  MenuNavItem,
  MenuNav,
  MenuTitle,
  MenuMainContainer,
  MenuGrid,
  MenuLeft,
  MenuSocial,
  SocialItem,
  MenuRight,
} from "../styles/Navbar.style";

function Navbar({ setOpen }) {
  const socialData = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/company/the-royal-flush/",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/theroyalflushtrf/",
    },
    {
      name: "YouTube",
      link: "https://www.youtube.com/channel/UCUU8w2kAMXWFrI62LRYGn2w",
    },
  ];
  const routeLink = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "About",
      link: "/about",
    },
  ];
  return (
    <div>
      <Container onClick={() => setOpen(false)} />
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
                      <MenuNavItemLink
                        to={route.link}
                        onClick={() => setOpen(false)}
                      >
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
