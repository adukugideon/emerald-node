import React, { useState } from "react";
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
    md:mr-20 
    md:mt-2 
    lg:mr-64 
    lg:mt-2
    sm:mt-2
    sm:mr-24
    xl:mr-80
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
    hover:bg-blue-900
    hover:text-black
    outline-none focus:outline-none ease-linear transition-all duration-150 hover:border-transparent
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
  const [showModal, setShowModal] = useState(false);
  const [account, setAccount] = useState<any>();

  if (isMobile)
    return (
      <div>
        <Menu right styles={menuStyles}>
          <ListContainer>
            <NavItem menu>
              <Link to="/nft">
                <a href="/#">NFTS</a>
              </Link>
            </NavItem>
            <NavItem menu>
              <Link to="home">
                <a href="/#">APP</a>
              </Link>
            </NavItem>
            <NavItem menu>
              <Link to="/liquidity">
                <a href="/#">LIQUIDITY</a>
              </Link>
            </NavItem>
            <NavItem menu>
              <Link to="/support">
                <a href="/#">SUPPORT</a>
              </Link>
            </NavItem>
            <NavItem menu>
              <Link to="/reward">
                <a href="/#">REWARD</a>
              </Link>
            </NavItem>
            <NavItem menu>
              <Link to="contact">
                <a href="/#">CONNECT WALLET</a>
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
          <a href="/nft">NFTS</a>
        </NavItem>
        <NavItem>
          <a href="/">APP</a>
        </NavItem>
        <NavItem>
          <a href="/support">SUPPORT</a>
        </NavItem>
        <NavItem>
          <a href="/liquidity">LIQUIDITY</a>
        </NavItem>
        <NavItem>
          <a href="/reward">REWARD</a>
        </NavItem>
      </NavGroup>
      <Connect onClick={() => setShowModal(true)}>O Connect Wallet</Connect>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 w-98">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-800 outline-none focus:outline-none">
                {/*header*/}
                <h1 className="text-white text-xl font-bold flex justify-center mt-4 ">
                  Connect To Wallet
                </h1>

                <div className="flex flex-col">
                  <div className="flex justify-center">
                    <div
                      onClick={async () => {
                        if ((window as any).ethereum) {
                          setAccount(await (window as any).ethereum.enable());
                          console.log(account);
                        }
                      }}
                      className="cursor-pointer hover:bg-gray-800 w-60 h-10 rounded-md text-yellow-200 font-bold bg-gray-700 mt-5 flex justify-center pt-1.5 border border-blue-300 outline-none focus:outline-none ease-linear transition-all duration-150"
                    >
                      {account ? "Metamask Connected" : "Connect Metamask"}
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="cursor-pointer hover:bg-gray-800 w-60 h-10 rounded-md text-blue-500 font-bold bg-gray-700 mt-3 flex justify-center pt-1.5 border border-blue-300 outline-none focus:outline-none ease-linear transition-all duration-150">
                      WalletConnect
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    className="text-red-500 border-transparent border hover:bg-gray-800 hover:border-current hover:border-red-300 bg-gray-700 h-9 mt-6 mb-4 rounded-md font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </ListContainer>
  );
}
