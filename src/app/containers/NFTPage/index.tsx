import React from "react";
import { Link } from "react-router-dom";

function Nft() {
  return (
    <div className="flex flex-col xl:w-auto xl:max-w-5xl lg:w-auto lg:max-w-4xl md:w-auto md:max-w-2xl sm:w-auto sm:max-w-xl w-auto max-w-sm mx-auto h-auto bg-gray-900 rounded-lg drop-shadow-xl pb-6 mt-6">
      <div className="flex justify-center mt-8">
        <h1 className="text-white text-3xl font-bold">Buy NFTs</h1>
      </div>
      <h1 className="text-white font-bold mt-7 ml-8 text-lg">
        Buy NFTs From Us.
      </h1>
      <h1 className="text-white w-auto sm:mt-5 mt-2 sm:px-8 px-9">
        Join thousands of others supporting the Ethereum 1.0 Network and earning
        rewards. Nodes receive Node Universal Basic Income (NUBI) on a per
        Ethereum block basis. Rewards calculations are based on many factors,
        including the number of nodes, node health, node revenue, token price,
        and NFT ownership; are variable; and are not guaranteed.
      </h1>
      <h1 className="text-white w-auto sm:mt-4 sm:px-8 px-9 mt-4">
        A non-refundable and non-returnable contribution of 10 EMERALD to the
        EmeraldNodes community is required to create a node and participate in
        rewards. Your 10 EMERALD will be distributed as follows:
      </h1>
      <ul className="list-disc text-white ml-12 mt-6 px-2">
        <li>10% future use</li>
        <li>0% to EMERALD-AVAZ and LINK-STRONG Pools for rewards</li>
        <li>20% into the emerald Pool</li>
        <li>60% into node rewards pool</li>
      </ul>
      <h1 className="text-white w-105 mt-5 ml-8">
        Distribution subject to change over time.
      </h1>

      <div className="flex mt-12 sm:space-x-56 md:space-x-72 lg:space-x-102 xl:space-x-106 mx-auto space-x-12 ">
        <Link to="/">
          <button className="bg-gray-800 rounded-md h-10 w-25 text-white hover:bg-gray-700 transition duration-500 hover:scale-10">
            Cancel
          </button>
        </Link>
        <button className="bg-green-300 rounded-md h-11 w-40 text-black hover:bg-blue-500 transition duration-500 hover:scale-10">
          Buy NFTs
        </button>
      </div>
    </div>
  );
}

export default Nft;
