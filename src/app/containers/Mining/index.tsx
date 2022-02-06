import React from "react";
import styled from "styled-components";
import MidHeader from "../../components/midHeader";
import Pool from "../../components/pool";
import { Link } from "react-router-dom";

const PageContainer = styled.div``;

function Mining() {
  return (
    <PageContainer>
      <div className="flex ">
        <div>
          <h1 className="text-white text-md font-sans lg:ml-72 md:ml-10 ml-5 mt-10">
            My Mining Reward
          </h1>
          <h1 className="text-white text-2xl font-sans lg:ml-72 md:ml-10 ml-5 ">
            0 Strong
          </h1>
        </div>
        <div>
          <button className="bg-blue-400 rounded-md h-10 w-28 mt-12 text-gray-800 lg:ml-104 md:ml-11 ml-5 hover:bg-blue-500 transition duration-500 hover:scale-10">
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
        <h1 className="text-white mt-6 ml-4 text-xl">Pools</h1>
        <div className="mt-5 h-0.5 bg-white w-105 ml-5"></div>

        <div className="flex flex-row mt-3">
          <h1 className="text-gray-400 ml-10 text-sm">POOL</h1>
          <h1 className="text-gray-400 ml-96 text-sm">TOTAL WORKING</h1>
          <h1 className="text-gray-400 ml-25 text-sm">EST REWARDS</h1>
        </div>
        <div className="flex flex-col space-y-4 mt-4">
          <Pool />
          <Pool />
          <Pool />
          <Pool />
          <Pool />
          <Pool />
          <Pool />
          <Pool />
          <Pool />
          <Pool />
          <Pool />
        </div>
      </div>
    </PageContainer>
  );
}

export default Mining;
