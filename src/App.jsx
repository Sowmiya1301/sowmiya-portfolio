import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import TopNav from "./components/TopNav";


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
    <TopNav />
      {/* <Navbar />
      <SideNav /> */}
      <Home />
    </>
  );
}

export default App;
