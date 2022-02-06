import React, { useRef } from "react";
import styled from "styled-components";
import MidHeader from "../../components/midHeader";
import { Link } from "react-router-dom";

const PageContainer = styled.div``;

export function HomePage() {
  const myRef = useRef<any>(null);
  console.log(myRef);
  return (
    <PageContainer>
      <h1 className="text-white text-md font-sans lg:ml-72 md:ml-10 ml-5 mt-10">
        My Nodes
      </h1>
      <Link to="/create">
        <button className="bg-blue-400 rounded-md h-8 w-28 mt-5 text-gray-800 lg:ml-72 md:ml-11 ml-5 hover:bg-blue-500 transition duration-500 hover:scale-10">
          Create Node
        </button>
      </Link>

      <div>
        <MidHeader />
      </div>

      <div className="flex flex-col lg:ml-72 md:ml-11 lg:w-99 md:w-104 w-96 ml-4 h-98 bg-gray-900 rounded-b-lg drop-shadow-xl">
        <div className="flex">
          <h1 className="absolute text-white ml-4 mt-4 text-ellipsis md:w-98 lg:w-104 w-40">
            Join thousands of nodes supporting the Ethereum, Polygon and
            Sentinel Networks and earn rewards. Get a Metal NFT here!
          </h1>
          <Link to="/create">
            <button className="bg-blue-400 rounded-md h-10 w-40 mt-5 text-gray-800 hover:bg-blue-500 transition duration-500 hover:scale-10 md:ml-102 lg:ml-103 ml-52">
              Create Your Node
            </button>
          </Link>
        </div>
        <div className="">
          <h1 className="text-white absolute mt-36 lg:ml-86 md:ml-68 ml-20">
            You don't have any nodes yet
          </h1>
          <Link to="/create">
            <button className="bg-blue-400 mt-48 lg:ml-100 md:ml-76 ml-28 absolute rounded-md h-10 w-40 text-gray-800 hover:bg-blue-500 transition duration-500 hover:scale-10">
              Create Your Node
            </button>
          </Link>
        </div>
      </div>
    </PageContainer>
  );
}
