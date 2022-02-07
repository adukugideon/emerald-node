import React from "react";
import CreateHeader from "../../components/createHeader";

function Ethereum() {
  return (
    <div className="flex flex-col lg:ml-72 md:ml-11 lg:w-99 md:w-104 w-96 ml-4 bg-gray-900 rounded-lg drop-shadow-xl pb-6 mt-6 h-106">
      <div className="flex justify-center mt-8">
        <h1 className="text-white text-3xl font-bold">Create Your Node</h1>
      </div>
      <h1 className="text-white font-bold mt-7 ml-8 text-lg">
        Select your node protocol to continue
      </h1>
      <div>
        <CreateHeader />
      </div>
      <div className="flex justify-center">
        <div className="bg-gray-800 rounded-md h-20 w-105 mt-8 ">
          <h1 className="text-white text-lg font-bold px-10 pt-3">
            Not So Fast
          </h1>
          <h1 className="text-white text-md px-10 ">
            You need to be white-listed to create a Sentinel node.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Ethereum;
