"use client";
import Card from "@/components/Card";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "@/components/Footer";

const Page = () => {
  const [movies, setMovies] = useState([]);

  const apikey = "05054a63901c71f0817eb0028ead81f3";
  const api = `https://api.themoviedb.org/3/tv/popular?api_key=${apikey}`;
  async function apihandler() {
    try {
      const data = await axios.get(api);
      setMovies(data.data.results);
      console.log(data.data.results);
      
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }
  useEffect(() => {
    apihandler();
  }, []);

  return (
    <>
    <div className="grid place-content-center ">
      <div className="cards grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mx-4 sm:gap-8 sm:mx-8">
        {movies.map(({ id, name, backdrop_path, vote_average }) => {
          const imgUrl = backdrop_path
            ? `https://image.tmdb.org/t/p/w500/${backdrop_path}`
            : "https://placehold.co/300x168?text=Loading...";
          return (
            <Card key={id} title={name} img={imgUrl} vote={vote_average} />
          );
        })}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Page;
