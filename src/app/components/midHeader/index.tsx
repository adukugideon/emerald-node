import React from "react";
import { Link, useLocation } from "react-router-dom";

function MidHeader() {
  const location = useLocation();
  return (
    <div className="flex ">
      <div
        className={`rounded-t-lg text-white border border-black h-14 lg:w-80 md:w-60 w-32 sm:w-48 mt-10 ${
          location.pathname === "/" ? "bg-gray-900" : "bg-gray-800"
        }`}
      >
        <Link to="/">
          <h1 className="absolute mt-4 font-bold lg:ml-32 md:ml-20 ml-6 sm:ml-16">
            My Nodes
          </h1>
        </Link>
      </div>
      <div
        className={`rounded-t-lg text-white border border-black h-14 lg:w-80 md:w-60 w-32 sm:w-48 mt-10 ${
          location.pathname === "/nodes" ? "bg-gray-900" : "bg-gray-800"
        }`}
      >
        <Link to="/nodes">
          <h1 className="absolute mt-4 font-bold lg:ml-32 md:ml-20 ml-6 sm:ml-16">
            All Nodes
          </h1>
        </Link>
      </div>
      <div
        className={`rounded-t-lg text-white border border-black h-14 lg:w-80 md:w-60 w-32 sm:w-48 mt-10 ${
          location.pathname === "/mining" ? "bg-gray-900" : "bg-gray-800"
        }`}
      >
        <Link to="mining">
          <h1 className="absolute mt-4 font-bold lg:ml-32 md:ml-24 ml-10 sm:ml-16">
            Mining
          </h1>
        </Link>
      </div>
    </div>
  );
}

export default MidHeader;
