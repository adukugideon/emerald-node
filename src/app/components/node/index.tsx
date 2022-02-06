import React from "react";

function Node() {
  return (
    <div className="flex flex-row">
      <div className="rounded-full bg-red-200 w-8 h-8 ml-12">
        <h1 className="flex justify-center ">M</h1>
      </div>
      <h1 className="text-white ml-3 text-lg">Micheal</h1>
      <h1 className="text-white ml-80 text-lg">Singapore</h1>
      <h1 className="text-white ml-64 text-lg">12-Feb-2022</h1>
    </div>
  );
}

export default Node;
