"use client";
import React, { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Searchitems from "@/components/Searchitems";

const ClientLayout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <Searchitems />
      {children}
    </>
  );
};

export default ClientLayout;
