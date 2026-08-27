import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Social from "../components/Social";
import NavCards from "../components/NavCards";

function Home() {
  return (
    <div className="h-screen flex flex-col bg-surface overflow-hidden gap-4">
      <Navbar />
      <Social />
      <Hero />
      <NavCards />
    </div>
  );
}

export default Home;
