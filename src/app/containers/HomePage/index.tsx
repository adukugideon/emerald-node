import React, { useRef } from "react";
import MidHeader from "../../components/midHeader";
import { Link } from "react-router-dom";

export function HomePage() {
  const myRef = useRef<any>(null);
  console.log(myRef);
  return (
    <div className="xl-w-auto lg:w-auto md:w-auto md:max-w-2xl lg:max-w-full sm:w-auto w-auto max-w-sm sm:max-w-xl mx-auto h-auto">
      <h1 className="mt-8 text-white sm:text-md lg:text-md xl:text-xl px-3">
        My Nodes
      </h1>
      <Link to="/create">
        <div className="mt-5 px-3">
          <a
            href="/#"
            className="inline-block px-3 py-2 rounded-lg bg-blue-400 tracking-wider text-sm text-black sm:text-base"
          >
            Create Node
          </a>
        </div>
      </Link>

      <div className="">
        <MidHeader />
      </div>

      <div className="flex flex-col md:max-w-auto lg:w-auto md:w-auto h-98 bg-gray-900 rounded-b-lg drop-shadow-xl">
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
        <div className="">
          <h1 className="text-white absolute mt-36 lg:ml-86 md:ml-60 ml-20 sm:ml-44">
            You don't have any nodes yet
          </h1>
          <Link to="/create">
            <button className="bg-blue-400 mt-48 lg:ml-96 md:ml-68 sm:ml-52 ml-28 absolute rounded-md h-10 w-40 text-gray-800 hover:bg-blue-500 transition duration-500 hover:scale-10">
              Create Your Node
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
