import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import SideNav from "./components/SideNav";
import Navbar from "./components/Navbar";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
      easing: "ease-out",
    });
  }, []);

  return (
    <>
      <Navbar />
      <SideNav />
      <Home />
    </>
  );
}

export default App;
