import React from "react";
import { Link, useLocation } from "react-router-dom";

function CreateHeader() {
  const location: any = useLocation();
  return (
    <div className="flex space-x-5">
      <Link to="/create">
        <button
          className={`
        rounded-lg h-10 w-28 text-white ml-8 mt-5 hover:bg-gray-800 active:bg-gray-800 focus:bg-gray-800 focus:ring focus:ring-blue-400 ${
          location.pathname === "/create" ? "bg-gray-800" : "bg-gray-900"
        }`}
        >
          Ethereum
        </button>
      </Link>
      <Link to="/create/polygon">
        <button
          className={`
        rounded-lg h-10 w-28 text-white mt-5 hover:bg-gray-800 active:bg-gray-800 focus:bg-gray-800 focus:ring focus:ring-blue-400 ${
          location.pathname === "/create/polygon"
            ? "bg-gray-800  "
            : "bg-gray-900"
        }`}
        >
          Polygon
        </button>
      </Link>
      <Link to="/create/sentinel">
        <button
          className={`
        rounded-lg h-10 w-28 text-white mt-5 hover:bg-gray-800 active:bg-gray-800 focus:bg-gray-800 focus:ring focus:ring-blue-400 ${
          location.pathname === "/create/sentinel"
            ? "bg-gray-800 "
            : "bg-gray-900"
        }`}
        >
          Sentinel
        </button>
      </Link>
    </div>
  );
}

export default CreateHeader;
