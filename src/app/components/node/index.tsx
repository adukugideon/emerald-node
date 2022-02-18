import React from "react";

function Node() {
  return (
    <div
      className="flex flex-row ml-5 md:ml-11
    "
    >
      <div className="w-8 h-8 rounded-full bg-red-200 flex justify-center items-center">
        <p className="sm:p-2 p-2">M</p>
      </div>
      <h1 className="text-white ml-1 md:ml-3 text-base mt-1 ">Micheal</h1>
      <h1 className="text-white ml-16 sm:ml-52 md:ml-60 lg:ml-100 text-base mt-1 ">
        Singapore
      </h1>
      <h1 className="text-white ml-5 sm:ml-14 md:ml-20 lg:ml-52 text-base mt-1">
        12-Feb-2022
      </h1>
    </div>
  );
}

export default Node;
