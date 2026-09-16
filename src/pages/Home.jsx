import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";

function Home() {
  return (
    <div className="min-h-screen bg-[#080706] text-white">
      <Navbar />
      <Hero />
    </div>
  );
}

export default Home;