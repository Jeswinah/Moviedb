import Loader from "@/components/Loader";
import React from "react";

const loading = () => {
  return (
    <div className="text-2xl h-[80vh] flex justify-center items-center">
     
      <Loader/>
    </div>
  );
};

export default loading;
