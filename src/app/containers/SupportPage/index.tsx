import React from "react";
import { Link } from "react-router-dom";

function Support() {
  return (
    <div className="flex flex-col lg:ml-72 md:ml-11 lg:w-99 md:w-104 w-96 ml-4 h-auto bg-gray-900 rounded-lg drop-shadow-xl pb-6 mt-6">
      <div className="flex justify-center mt-8">
        <h1 className="text-white text-3xl font-bold">Support Us</h1>
      </div>
      <h1 className="text-white font-bold mt-7 ml-8 text-lg">
        Support out Organization?
      </h1>
      <h1 className="text-white w-105 mt-5 ml-8">
        Join thousands of others supporting the Ethereum 1.0 Network and earning
        rewards. Nodes receive Node Universal Basic Income (NUBI) on a per
        Ethereum block basis. Rewards calculations are based on many factors,
        including the number of nodes, node health, node revenue, token price,
        and NFT ownership; are variable; and are not guaranteed.
      </h1>
      <h1 className="text-white w-105 mt-5 ml-8">
        A non-refundable and non-returnable contribution of 10 EMERALD to the
        EmeraldNodes community is required to create a node and participate in
        rewards. Your 10 EMERALD will be distributed as follows:
      </h1>
      <ul className="list-disc text-white ml-12 mt-6">
        <li>10% future use</li>
        <li>0% to EMERALD-AVAZ and LINK-EMERALD Pools for rewards</li>
        <li>20% into the Emerald Pool</li>
        <li>60% into node rewards pool</li>
      </ul>
      <h1 className="text-white w-105 mt-5 ml-8">
        Distribution subject to change over time.
      </h1>

      <div className="flex mt-12 space-x-106 ml-10">
        <Link to="/">
          <button className="bg-gray-800 rounded-md h-10 w-25 text-white hover:bg-gray-700 transition duration-500 hover:scale-10">
            Cancel
          </button>
        </Link>
        <button className="bg-green-300 rounded-md h-11 w-40 text-black hover:bg-blue-500 transition duration-500 hover:scale-10">
          Support
        </button>
      </div>
    </div>
  );
}

export default Support;
