import React from "react";
import styled from "styled-components";
import Node from "../../components/node/index";
import MidHeader from "../../components/midHeader";
import { Link } from "react-router-dom";

const PageContainer = styled.div``;

function Nodes() {
  return (
    <PageContainer>
      <div className="flex ">
        <div>
          <h1 className="text-white text-md font-sans lg:ml-72 md:ml-10 ml-5 mt-10">
            Active Nodes
          </h1>
          <h1 className="text-white text-2xl font-sans lg:ml-72 md:ml-10 ml-5 ">
            288801 total
          </h1>
          <Link to="/create">
            <button className="bg-blue-400 rounded-md h-8 w-28 mt-2 text-gray-800 lg:ml-72 md:ml-11 ml-5 hover:bg-blue-500 transition duration-500 hover:scale-10">
              Create Node
            </button>
          </Link>
        </div>
        <div>
          <h1 className="text-white text-md font-sans lg:ml-72 md:ml-10 ml-5 mt-10">
            NFT Stakes
          </h1>
          <h1 className="text-white text-2xl font-sans lg:ml-72 md:ml-10 ml-5 ">
            34214 total
          </h1>
          <button className="bg-blue-400 rounded-md h-8 w-20 mt-2 text-gray-800 lg:ml-72 md:ml-11 ml-5 hover:bg-blue-500 transition duration-500 hover:scale-10">
            Get One
          </button>
        </div>
        <div>
          <button className="bg-blue-400 rounded-md h-10 w-28 mt-20 text-gray-800 lg:ml-72 md:ml-11 ml-5 hover:bg-blue-500 transition duration-500 hover:scale-10">
            Get Strong
          </button>
        </div>
      </div>

      <div>
        <MidHeader />
      </div>

      <div className="flex flex-col lg:ml-72 md:ml-11 lg:w-99 md:w-104 w-96 ml-4 h-auto bg-gray-900 rounded-b-lg drop-shadow-xl pb-6">
        <div className="flex">
          <h1 className="absolute text-white ml-4 mt-4 text-ellipsis md:w-98 lg:w-104 w-40">
            Join thousands of nodes supporting the Ethereum, Polygon and
            Sentinel Networks and earnrewards. Get a Metal NFT here!
          </h1>
          <Link to="/create">
            <button className="bg-blue-400 rounded-md h-10 w-40 mt-5 text-gray-800 hover:bg-blue-500 transition duration-500 hover:scale-10 md:ml-102 lg:ml-103 ml-52">
              Create Your Node
            </button>
          </Link>
        </div>
        <div className="mt-4">
          <div className="flex justify-center ">
            <div className="relative">
              <input
                type="text"
                className="text-white h-14 w-105 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none bg-gray-800"
                placeholder="Search anything..."
              />
              <div className="absolute top-2 right-2">
                <button className="h-10 w-20 text-white rounded-lg bg-gray-900 hover:bg-gray-800">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row mt-3">
          <h1 className="text-gray-400 ml-12">Node</h1>
          <h1 className="text-gray-400 ml-96">Location</h1>
          <h1 className="text-gray-400 ml-80">Created</h1>
        </div>

        <div className="flex flex-col space-y-4 mt-3">
          <Node />
          <Node />
          <Node />
          <Node />
          <Node />
          <Node />
          <Node />
          <Node />
          <Node />
          <Node />
          <Node />
          <Node />
        </div>
      </div>
    </PageContainer>
  );
}

export default Nodes;
