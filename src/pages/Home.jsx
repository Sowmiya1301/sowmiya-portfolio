import React from "react";
import Hero from "../components/Hero";
import About from "./About";

function Home() {
  return (
    <div className="flex flex-col bg-surface gap-4">
      {" "}
      <section
        id="home"
        className="h-screen flex flex-col bg-surface overflow-hidden gap-4 scroll-mt-20"
      >
        <Hero />
      </section>
      <About />
    </div>
  );
}

export default Home;
