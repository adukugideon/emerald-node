import React from "react";
import CreateHeader from "../../components/createHeader";
import { Link } from "react-router-dom";

function Ethereum() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="flex flex-col lg:ml-72 md:ml-11 lg:w-99 md:w-104 w-96 ml-4 h-auto bg-gray-900 rounded-lg drop-shadow-xl pb-6 mt-6">
      <div className="flex justify-center mt-8">
        <h1 className="text-white text-3xl font-bold">Create Your Node</h1>
      </div>
      <h1 className="text-white font-bold mt-7 ml-8 text-lg">
        Select your node protocol to continue
      </h1>
      <div>
        <CreateHeader />
      </div>
      <h1 className="text-white w-105 mt-5 ml-8">Node on Polygon Network</h1>
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
        <input className="mt-16" type="checkbox" />

        <ul className="list-disc text-white ml-9 mt-6">
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
        <Link to="/">
          <button className="bg-gray-800 rounded-md h-10 w-25 text-white hover:bg-gray-700 transition duration-500 hover:scale-10">
            Cancel
          </button>
        </Link>
        <button
          onClick={() => setShowModal(true)}
          className="bg-green-300 rounded-md h-11 w-40 text-black hover:bg-blue-500 transition duration-500 hover:scale-10"
        >
          Connect Wallet
        </button>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 w-98">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-800 outline-none focus:outline-none">
                {/*header*/}
                <h1 className="text-white text-xl font-bold flex justify-center mt-4 ">
                  Connect To Wallet
                </h1>

                <div className="flex flex-col">
                  <div className="flex justify-center">
                    <div className="cursor-pointer hover:bg-gray-800 w-60 h-10 rounded-md text-yellow-200 font-bold bg-gray-700 mt-5 flex justify-center pt-1.5 border border-blue-300 outline-none focus:outline-none ease-linear transition-all duration-150">
                      Install Metamask
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="cursor-pointer hover:bg-gray-800 w-60 h-10 rounded-md text-blue-500 font-bold bg-gray-700 mt-3 flex justify-center pt-1.5 border border-blue-300 outline-none focus:outline-none ease-linear transition-all duration-150">
                      WalletConnect
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    className="text-red-500 border-transparent border hover:bg-gray-800 hover:border-current hover:border-red-300 bg-gray-700 h-9 mt-6 mb-4 rounded-md font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}

export default Ethereum;
