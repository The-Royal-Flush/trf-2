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
