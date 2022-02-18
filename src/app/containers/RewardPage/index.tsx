import React from "react";
import { Link } from "react-router-dom";
import Reward from "../../components/reward";

function RewardPage() {
  return (
    <div className="l-w-auto lg:w-auto md:w-auto md:max-w-2xl lg:max-w-full sm:w-auto w-auto max-w-sm sm:max-w-xl mx-auto h-full mt-12">
      <div className="flex flex-col md:max-w-auto lg:w-auto md:w-auto h-auto bg-gray-900 rounded-b-lg drop-shadow-xl">
        <div className="flex mt-2">
          <h1 className="absolute text-white ml-4 mt-4 text-ellipsis w-40 sm:w-72 lg:w-auto md:w-72 lg:max-w-2xl md:max-w-md">
            Join thousands of nodes supporting the Ethereum, Polygon and
            Sentinel Networks and earn rewards. Get a Metal NFT here!
          </h1>
          <Link to="/create">
            <button className="bg-blue-400 rounded-md h-10 w-40 mt-5 text-gray-800 hover:bg-blue-500 transition duration-500 hover:scale-10 md:ml-98 lg:ml-103 sm:ml-96 ml-52 mx-4">
              Create Your Node
            </button>
          </Link>
        </div>
        <h1 className="text-white text-3xl font-bold sm:mt-20 lg:mt-14 mt-36 flex justify-center">
          Claim Reward
        </h1>
        <div className="flex flex-row mt-3 lg:mt-4 justify-center lg:space-x-80 sm:space-x-36 md:space-x-52 space-x-20">
          <h1 className="text-gray-400">Name</h1>
          <h1 className="text-gray-400">created</h1>
          <h1 className="text-gray-400">Claim</h1>
        </div>

        <div className="flex flex-col space-y-4 mt-3 pb-10">
          <Reward claimed />
          <Reward />
          <Reward claimed />
          <Reward />
          <Reward />
          <Reward claimed />
          <Reward />
          <Reward />
          <Reward />
          <Reward claimed />
          <Reward />
        </div>
      </div>
    </div>
  );
}

export default RewardPage;
