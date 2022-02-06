import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";
import { NavItems } from "./navItems";

const NavbarContainer = styled.div`
  min-height: 68px;
  ${tw`
    w-full
    flex
    flex-row
    items-center
    lg:pl-12
    lg:pr-12
    justify-between
    bg-black
  `};
`;

const LogoContainer = styled.div``;

export function Navbar() {
  return (
    <NavbarContainer>
      <Link to="/">
        <LogoContainer>
          <Logo />
        </LogoContainer>
      </Link>
      <NavItems />
    </NavbarContainer>
  );
}
