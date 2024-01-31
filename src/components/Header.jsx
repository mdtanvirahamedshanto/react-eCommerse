import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
import logo from "/images/logo.png";
const Header = () => {
  return (
    <MainHeader>
      <NavLink to={"/"}>
        <img className="size-40" src={logo} alt="our-logo" />
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
`;
export default Header;
