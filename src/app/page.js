import Home from "@/pages/Home";
import Movies from "./movies/page";
import React from "react";

const page = () => {
  return (
    <div>
      <Home />
      <div className="heading  my-10">
        <h1 className="text-4xl text-center font-bold ">Popular Movies</h1>
      </div>
      <Movies />
    </div>
  );
};

export default page;
