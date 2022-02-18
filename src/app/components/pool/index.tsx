import React from "react";

function Pool() {
  return (
    <div className="flex flex-row ml-5 flex-wrap">
      <div className="w-8 h-8 rounded-full bg-red-200 flex justify-center items-center">
        <p className="sm:p-2 p-2">M</p>
      </div>
      <h1 className="text-white mt-1 ml-3 text-md text-sm sm:text-base">
        ETH 2.0
      </h1>
      <h1 className="text-white mt-1 ml-10 w-4 sm:w-auto sm:ml-16  text-sm lg:ml-72 sm:text-base">
        1,549.6703 STRONG
      </h1>
      <h1 className="text-white mt-1 ml-32 w-4 sm:w-auto sm:ml-8 md:ml-24 text-sm sm:text-base">
        21.29% in ETH
      </h1>
      <h1 className="text-blue-500 mt-1 ml-36 p-4 sm:p-0 sm:ml-8 text-base md:ml-14 lg:ml-20 sm:text-base">
        Stake
      </h1>
    </div>
  );
}

export default Pool;
