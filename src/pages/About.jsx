import AboutIntro from "../components/AboutIntro";
import { RiUserHeartLine } from "react-icons/ri";

function About() {
  return (
    <main
      className=" bg-surface px-4 full-font sm:px-8 md:pl-32 md:pr-16 py-8 md:py-2"
      id="about"
    >
      <h1 className="text-4xl md:text-5xl flex items-center gap-2 subhead-font font-extrabold text-primary-dark mb-8 md:mb-10">
        <span>
          <span className="text-primary ">About </span> Me
        </span>
        <RiUserHeartLine className="text-primary-dark text-2xl md:text-3xl" />
      </h1>

      {/* About Intro */}
      <AboutIntro />
    </main>
  );
}

export default About;
