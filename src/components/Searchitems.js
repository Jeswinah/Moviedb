"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Searchitems = () => {
  const [searchval, setSearchval] = useState("");
  const router = useRouter();

  const Handlesearch = () => {
    if (searchval.trim() !== "") {
      router.push(`/search/${encodeURIComponent(searchval)}`);
      setSearchval('');
    }
  };

  return (
    <div>
      <div className="search w-full flex justify-center">
        <div className="w-full sm:w-4/6 lg:w-2/6 my-5 sm:my-8 flex items-center space-x-2 mx-3">
          <input
            type="text"
            placeholder="Search a movie"
            className="bg-gray-100 border-gray-400 rounded-2xl px-3 py-2 border outline-0 w-full"
            onChange={(e) => setSearchval(e.target.value)}
            value={searchval}
          />
          <button
            className="bg-gray-700 rounded-2xl px-3 py-2 font-semibold text-white"
            onClick={Handlesearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Searchitems;
