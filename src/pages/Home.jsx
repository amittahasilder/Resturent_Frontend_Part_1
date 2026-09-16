import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import PopularMenu from "../components/PopularMenu/PopularMenu";

function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050403] text-white">
      <Navbar />

      <Hero />

      <PopularMenu />
    </main>
  );
}

export default Home;