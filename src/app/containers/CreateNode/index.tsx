import React from "react";

function CreateNode() {
  return (
    <div className="flex flex-col lg:ml-72 md:ml-11 lg:w-99 md:w-104 w-96 ml-4 h-auto bg-gray-900 rounded-lg drop-shadow-xl pb-6 mt-6">
      <div className="flex justify-center mt-8">
        <h1 className="text-white text-3xl font-bold">Create Your Node</h1>
      </div>
      <h1 className="text-white font-bold mt-7 ml-8 text-lg">
        Select your node protocol to continue
      </h1>
      <div className="flex space-x-5">
        <button className="bg-gray-800 hover:bg-gray-800 active:bg-gray-800 focus:bg-gray-800 focus:ring focus:ring-blue-400 rounded-lg h-10 w-28 text-white ml-8 mt-5">
          Ethereum
        </button>
        <button className="bg-gray-900 hover:bg-gray-800 active:bg-gray-800 focus:bg-gray-800 focus:ring focus:ring-blue-400 rounded-lg h-10 w-28 text-white mt-5">
          Polygon
        </button>
        <button className="bg-gray-900 hover:bg-gray-800 active:bg-gray-800 focus:bg-gray-800 focus:ring focus:ring-blue-400 rounded-lg h-10 w-28 text-white mt-5">
          Sentinel
        </button>
      </div>
      <h1 className="text-white w-105 mt-5 ml-8">
        Join thousands of others supporting the Ethereum 1.0 Network and earning
        rewards. Nodes receive Node Universal Basic Income (NUBI) on a per
        Ethereum block basis. Rewards calculations are based on many factors,
        including the number of nodes, node health, node revenue, token price,
        and NFT ownership; are variable; and are not guaranteed.
      </h1>
      <div className="mt-5 ml-8">
        <h1 className="text-white text-md">Node Name</h1>
        <input
          className="w-105 bg-transparent border rounded-md mt-3 h-10 pl-3"
          placeholder="My Node"
        />
        <h1 className="text-white text-md mt-4">Node Description</h1>
        <input
          className="w-105 bg-transparent border rounded-md mt-3 h-10 pl-3"
          placeholder="About My Node"
        />
      </div>
      <h1 className="text-white w-105 mt-5 ml-8">
        A non-refundable and non-returnable contribution of 10 STRONG to the
        StrongBlock community is required to create a node and participate in
        rewards. Your 10 STRONG will be distributed as follows:
      </h1>
      <ul className="list-disc text-white ml-12 mt-6">
        <li>10% future use</li>
        <li>0% to STRONG-ETH and LINK-STRONG Pools for rewards</li>
        <li>20% into the Strong Pool</li>
        <li>60% into node rewards pool</li>
      </ul>
      <h1 className="text-white w-105 mt-5 ml-8">
        Distribution subject to change over time.
      </h1>
      <h1 className="text-white w-105 mt-5 ml-12">
        I agree to the following terms:
      </h1>

      <div className="flex ml-12">
        <input type="checkbox" />

        <ul className="list-disc text-white ml-7 mt-6">
          <li>
            Review the Terms each time you access the Site to ensure that you
            understand how the Terms apply.
          </li>
          <li>
            Review the Terms each time you access the Site to ensure that you
            understand how the Terms apply.
          </li>
          <li>
            Review the Terms each time you access the Site to ensure that you
            understand how the Terms apply.
          </li>
          <li>
            Review the Terms each time you access the Site to ensure that you
            understand how the Terms apply.
          </li>
        </ul>
      </div>

      <div className="flex mt-12 space-x-106 ml-10">
        <button className="bg-gray-800 rounded-md h-10 w-25 text-white hover:bg-gray-700 transition duration-500 hover:scale-10">
          Cancel
        </button>
        <button className="bg-green-300 rounded-md h-11 w-40 text-black hover:bg-blue-500 transition duration-500 hover:scale-10">
          Connect Wallet
        </button>
      </div>
    </div>
  );
}

export default CreateNode;
