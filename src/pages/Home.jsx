import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import PopularMenu from "../components/PopularMenu/PopularMenu";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";

function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050403] text-white">
      <Navbar />
      <Hero />
      <PopularMenu />
      <WhyChooseUs />
    </main>
  );
}

export default Home;