"use client";

import React, { useState, useEffect } from "react";
import Card from "@/components/Card";
import axios from "axios";
import { useParams } from "next/navigation";

const Page = () => {
  const [movies, setMovies] = useState([]);
  const { search } = useParams();
    const [loading, setLoading] = useState(true);

  async function apihandler() {
    try {
      const response = await axios.get(`/api/search?query=${search}`);
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
    finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    if (search) {
      apihandler();
    }
  }, [search]);


 const placeholderData = Array.from({ length: 20 }, (_, i) => ({
    id: `placeholder-${i}`,
    title: "Loading...",
    backdrop_path: null,
    vote_average: "-",
  }));

  const displayData = loading ? placeholderData : movies;

  return (
    <div className="grid place-content-center">
      <div className="cards grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mx-4 sm:gap-8 sm:mx-8">
        {displayData.map(({ id, title, backdrop_path, vote_average }) => {
          const imgUrl = backdrop_path
            ? `https://image.tmdb.org/t/p/w500/${backdrop_path}`
            : "https://placehold.co/300x168?text=Loading...";
          return (
            <Card key={id} title={title} img={imgUrl} vote={vote_average} />
          );
        })}
      </div>
    </div>
  );
};
export default Page;
