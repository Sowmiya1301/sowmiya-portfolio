import AboutIntro from "../components/AboutIntro";
import { IoIosHeartEmpty } from "react-icons/io";

function About() {
  return (
    <main className="min-h-screen bg-surface px-4 full-font sm:px-8 md:pl-32 md:pr-16 py-8 md:py-10">
      <h1 className="text-4xl md:text-5xl flex items-center gap-2 subhead-font font-extrabold text-primary-dark mb-8 md:mb-10">
        <span>
          <span className="text-primary ">About </span> Me
        </span>
        <IoIosHeartEmpty className="text-primary text-xl md:text-2xl" />
      </h1>

      {/* About Intro */}
      <AboutIntro />
    </main>
  );
}

export default About;
