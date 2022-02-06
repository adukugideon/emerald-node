import React from "react";

function Pool() {
  return (
    <div className="flex flex-row">
      <div className="rounded-full bg-red-200 w-8 h-8 ml-10">
        <h1 className="flex justify-center ">M</h1>
      </div>
      <h1 className="text-white ml-3 text-md">ETH 2.0</h1>
      <h1 className="text-white ml-72 text-md">1,549.6703 STRONG</h1>
      <h1 className="text-white ml-24 text-md">21.29% in ETH</h1>
      <h1 className="text-blue-500 ml-16 text-lg">Stake</h1>
    </div>
  );
}

export default Pool;
