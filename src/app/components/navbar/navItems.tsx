import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import menuStyles from "./menuStyles";
import { Link } from "react-router-dom";

const ListContainer = styled.ul`
  ${tw`
    flex
  `};
`;

const NavGroup = styled.div`
  ${tw`
    flex 
    md:mr-32 
    md:mt-2 
    lg:mr-97 
    lg:mt-2
    sm:mt-2
    sm:mr-24
  `};
`;
const Connect = styled.button`
  ${tw`
    bg-gray-900 
    border-gray-400 
    border-2 
    rounded-lg 
    h-10 
    w-40 
    text-white
    mr-10
  `};
`;

const NavItem = styled.li<{ menu?: any }>`
  ${tw`
   sm:text-base
    md:text-base
    text-white
    font-medium
    mr-1
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-gray-700
    sm:space-x-2
  `};

  ${({ menu }) =>
    menu &&
    css`
      ${tw`
      text-white
      text-xl
      mb-3
      focus:text-white
    `};
    `};
`;

export function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  if (isMobile)
    return (
      <div>
        <button className="bg-gray-900 border-gray-400 border-2 rounded-lg h-10 w-40 text-white mr-20">
          O Connect Wallet
        </button>
        <Menu right styles={menuStyles}>
          <ListContainer>
            <NavItem menu>
              <Link to="/">
                <a href="/#">NFTS</a>
              </Link>
            </NavItem>
            <NavItem menu>
              <Link to="allCars">
                <a href="/#">APP</a>
              </Link>
            </NavItem>
            <NavItem menu>
              <Link to="contact">
                <a href="/#">SUPPORT</a>
              </Link>
            </NavItem>
          </ListContainer>
        </Menu>
      </div>
    );

  return (
    <ListContainer>
      <NavGroup>
        <NavItem>
          <a href="/#">NFTS</a>
        </NavItem>
        <NavItem>
          <a href="/#">APP</a>
        </NavItem>
        <NavItem>
          <a href="/#">SUPPORT</a>
        </NavItem>
      </NavGroup>
      <Connect>O Connect Wallet</Connect>
    </ListContainer>
  );
}
