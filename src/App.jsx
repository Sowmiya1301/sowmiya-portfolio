import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NavCards from "./components/NavCards";
import Social from "./components/Social";

function App() {
  return (
    <div className="h-screen flex flex-col bg-surface overflow-hidden gap-4">
      <Navbar />
      <Hero />
      <Social />
      <NavCards />
    </div>
  );
}

export default App;
