import React from "react";

interface Props {
  claimed?: boolean;
}
function Reward({ claimed }: Props) {
  return (
    <div className="flex flex-row">
      <h1 className="text-white mt-1 sm:ml-10 md:ml-7 lg:ml-12 ml-5 sm:text-base">
        12.6 STRONG
      </h1>
      <h1 className="text-white mt-1 sm:ml-24 md:ml-36 lg:ml-68 ml-8 sm:text-base">
        17-April-2022
      </h1>
      <h1
        className={`mt-1 sm:ml-28 md:ml-44 lg:ml-72 ml-11 sm:text-base flex justify-center rounded-md h-7 w-16 ${
          claimed ? "text-gray-600" : "text-blue-500 border-blue-500 border-2"
        }`}
      >
        {claimed ? "Done" : "Claim"}
      </h1>
    </div>
  );
}

export default Reward;
