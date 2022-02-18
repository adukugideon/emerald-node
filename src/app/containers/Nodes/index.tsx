import React from "react";
import Node from "../../components/node/index";
import MidHeader from "../../components/midHeader";
import { Link } from "react-router-dom";

function Nodes() {
  return (
    <div className="xl-w-auto lg:w-auto md:w-auto md:max-w-2xl lg:max-w-full sm:w-auto w-auto max-w-xl sm:max-w-xl mx-auto h-auto">
      <div>
        <MidHeader />
      </div>

      <div className="flex flex-col md:max-w-auto lg:w-auto md:w-auto h-auto bg-gray-900 rounded-b-lg drop-shadow-xl">
        <div className="flex">
          <h1 className="absolute text-white ml-4 mt-4 text-ellipsis w-40 sm:w-72 lg:w-auto md:w-72 lg:max-w-2xl md:max-w-md">
            Join thousands of nodes supporting the Ethereum, Polygon and
            Sentinel Networks and earn rewards. Get a Metal NFT here!
          </h1>
          <Link to="/create">
            <button className="bg-blue-400 rounded-md h-10 w-40 mt-5 text-gray-800 hover:bg-blue-500 transition duration-500 hover:scale-10 md:ml-98 lg:ml-103 sm:ml-96 ml-52">
              Create Your Node
            </button>
          </Link>
        </div>
        <div className=" md:mt-20 mt-36 lg:mt-11">
          <div className="flex justify-center ">
            <div className="relative">
              <input
                type="text"
                className="text-white w-auto md:w-106 sm:w-102 lg:w-105 h-14 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none bg-gray-800"
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
        <div className="flex flex-row mt-3 lg:mt-4 ">
          <h1 className="text-gray-400 sm:ml-6 ml-6 md:ml-11">Node</h1>
          <h1 className="text-gray-400 sm:ml-68 ml-32 md:ml-76 lg:ml-98">
            Location
          </h1>
          <h1 className="text-gray-400 sm:ml-20 ml-10 md:ml-28 lg:ml-60">
            Created
          </h1>
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
        </div>
      </div>
    </div>
  );
}

export default Nodes;
