import React from "react";
import { Link } from "react-router-dom";

function Liquidity() {
  return (
    <div className="xl-w-auto lg:w-auto md:w-auto md:max-w-2xl lg:max-w-full sm:w-auto w-auto max-w-sm sm:max-w-xl mx-auto h-auto">
      <div className="flex flex-col md:max-w-auto lg:w-auto md:w-auto h-106 bg-gray-900 rounded-lg drop-shadow-xl mt-10">
        <div className="flex">
          <h1 className="absolute text-white ml-4 mt-4 text-ellipsis w-40 lg:w-auto sm:w-72 md:w-72 lg:max-w-2xl md:max-w-md">
            Join thousands of nodes supporting the Ethereum, Polygon and
            Sentinel Networks and earn rewards. Get a Metal NFT here!
          </h1>
          <Link to="/create">
            <button className="bg-blue-400 rounded-md h-10 w-40 mt-5 text-gray-800 hover:bg-blue-500 transition duration-500 hover:scale-10 md:ml-98 lg:ml-103 sm:ml-96 ml-52 mx-4">
              Create Your Node
            </button>
          </Link>
        </div>
        <h1 className="md:mt-16 mt-36 sm:mt-16 lg:mt-11 text-white ml-4 lg:ml-6 text-xl">
          Liquidity
        </h1>
        <div className="mt-5 h-0.5 bg-white w-86 ml-2 sm:ml-3 md:w-auto sm:w-auto sm:mr-4 md:mr-3 lg:ml-4 lg:mr-4"></div>
        <div className="flex justify-center items-center h-full flex-col">
          <h1 className="text-white text-xl font-bold">Total Liquidity : 0</h1>
          <button className="mt-4 bg-blue-400 rounded-md h-10 w-36 text-gray-800 hover:bg-blue-500 transition duration-500 hover:scale-10">
            Get More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Liquidity;
