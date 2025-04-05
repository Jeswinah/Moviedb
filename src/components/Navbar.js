import React from "react";
import Link from "next/link";
import { MdMovie } from "react-icons/md";
import { FiTv } from "react-icons/fi";
import { SiThemoviedatabase } from "react-icons/si";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 px-7 lg:px-20 bg-gray-900 text-white">
      <div className="logo">
        <h2 className="text-2xl font-bold flex items-center gap-2"><SiThemoviedatabase className="w-8 h-8"/>Movies</h2>
      </div>

      <div className="nav_links space-x-12 mr-5 font-semibold hidden sm:inline ">
        <Link href={"/"} className="hover:text-blue-600">
          Home
        </Link>
        <Link href={"/movies"} className="hover:text-blue-600">
          Movies
        </Link>
        <Link href={"/series"} className="hover:text-blue-600">
          Series
        </Link>
      </div>
      <div className="nav_icons sm:hidden flex gap-5 items-center">
        <a href="/movies">
          <MdMovie className=" w-5 h-5 " />
        </a>
        <a href="/series">
          <FiTv className=" w-5 h-5 " />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
