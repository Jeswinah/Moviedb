import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const Loader = () => {
  return (
    <div className="h-screen w-full justify-center flex items-center">
      <div className="loader items-center flex flex-col ">
        <AiOutlineLoading3Quarters  className="animate-spin  w-10 h-10 mx-2"/> <p className="text-md m-2">Loading</p>
      </div>
    </div>
  );
};

export default Loader;
