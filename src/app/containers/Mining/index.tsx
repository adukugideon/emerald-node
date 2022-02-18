import React from "react";
import MidHeader from "../../components/midHeader";
import Pool from "../../components/pool";
import { Link } from "react-router-dom";

function Mining() {
  return (
    <div className="xl-w-auto lg:w-auto md:w-auto md:max-w-2xl lg:max-w-full sm:w-auto w-auto max-w-sm sm:max-w-xl mx-auto h-auto">
      <div className="flex justify-center sm:space-x-64 md:space-x-80 lg:space-x-106 space-x-20 ">
        <div>
          <h1 className="text-white text-md font-sans mt-10">
            My Mining Reward
          </h1>
          <h1 className="text-white text-2xl font-sans ">0 Emerald</h1>
        </div>
        <div>
          <button className="bg-blue-400 rounded-md h-10 w-28 mt-12 text-gray-800  hover:bg-blue-500 transition duration-500 hover:scale-10">
            Get Emerald
          </button>
        </div>
      </div>

      <div>
        <MidHeader />
      </div>

      <div className="flex flex-col md:max-w-auto lg:w-auto md:w-auto h-auto bg-gray-900 rounded-b-lg drop-shadow-xl">
        <div className="flex">
          <h1 className="absolute text-white ml-4 mt-4 text-ellipsis w-40 lg:w-auto sm:w-72 md:w-72 lg:max-w-2xl md:max-w-md">
            Join thousands of nodes supporting the Ethereum, Polygon and
            Sentinel Networks and earn rewards. Get a Metal NFT here!
          </h1>
          <Link to="/create">
            <button className="bg-blue-400 rounded-md h-10 w-40 mt-5 text-gray-800 hover:bg-blue-500 transition duration-500 hover:scale-10 md:ml-98 lg:ml-103 sm:ml-96 ml-52">
              Create Your Node
            </button>
          </Link>
        </div>
        <h1 className="md:mt-20 mt-36 lg:mt-11 text-white ml-4 lg:ml-6 text-xl">
          Pools
        </h1>
        <div className="mt-5 h-0.5 bg-white w-86 ml-2 sm:ml-3 md:w-auto sm:w-auto sm:mr-4 md:mr-3 lg:ml-4 lg:mr-4"></div>

        <div className="flex flex-row mt-3 lg:mt-4">
          <h1 className="text-gray-400 sm:ml-6 ml-6 lg:ml-7 md:ml-6 text-sm">
            POOL
          </h1>
          <h1 className="text-gray-400 sm:ml-40 ml-25 md:ml-46 lg:ml-86 text-sm">
            TOTAL WORKING
          </h1>
          <h1 className="text-gray-400 sm:ml-10 ml-7 md:ml-25 lg:ml-28 text-sm">
            EST REWARDS
          </h1>
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
    </div>
  );
}

export default Mining;
