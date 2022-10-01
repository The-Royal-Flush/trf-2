import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background: rgba(238, 238, 238, 0.7);
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 2;
  /* background-color: blue; */
`;
export const SidebarContainer = styled.div`
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
export const MenuContainer = styled.div`
  padding: 0 98px;
  width: 100%;
  justify-content: space-between;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const MenuGrid = styled.div`
  display: flex;
  width: 100%;
`;
export const MenuLeft = styled.div`
  flex: 0.8;
`;
export const MenuTitle = styled.p`
  padding: 0 0 30px 0;
  color: rgba(0, 0, 0, 0.3);
  font-size: 16px;
  line-height: 100%;
`;
export const MenuSocial = styled.div`
  margin: -6px 0;
`;
export const SocialItem = styled.a`
  position: relative;
  display: block;
  padding: 12px 0;
  font-size: 16px;
  line-height: 120%;
  letter-spacing: 0.00464286em;
  text-transform: capitalize;
  text-decoration: none;
`;
export const MenuRight = styled.div`
  flex: 1.2;
`;
export const MenuNav = styled.div`
  margin: -4px 0;
`;
export const MenuNavItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const MenuNavItemLink = styled(Link)`
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
export const MenuFooter = styled.div`
  padding: 0 0 12px 0;
`;
export const MenuMail = styled.div``;
export const MenuMailLink = styled.a`
  position: relative;
  display: inline-block;
  padding: 0 0 5px 0;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.00464286em;
  text-decoration: none;
`;
export const MenuMailTitle = styled.p`
  padding: 0 0 12px 0;
  color: rgba(0, 0, 0, 0.3);
  font-size: 16px;
  line-height: 100%;
`;
export const MenuMainContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
