import { FiArrowRight, FiDownload } from "react-icons/fi";
import InkBlobCursor from "./InkBlobCursor";
import OriginButton from "./OriginButton";

function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#EAF7FC]">
      {/* LAYER 1: the ink blob, filling the whole hero.
          The text inside it is blended: dark on the light page, light on the ink. */}
      <div className="absolute inset-0">
        <InkBlobCursor background="#EAF7FC" ink="#0b2a4a">
          <div className="flex h-full flex-col items-center justify-center px-6 pb-56 pt-24 text-center sm:px-10">
            <p className="mb-4 text-base text-[#dfcdb2] font-medium uppercase tracking-widest">
              Hi, I'm
            </p>

            {/* no text-color class here: the blend needs the text to stay white */}
            <h1 className="hero-font text-5xl font-light leading-tight text-[#dfcdb2] tracking-wide sm:text-7xl lg:text-8xl">
              Sowmiya
              <br />
              Uthayakumar
            </h1>

            <p className="mt-6 max-w-xl text-sm text-[#dfcdb2] leading-8 sm:text-base">
              I'm a Software Engineer passionate about building modern,
              responsive and user-friendly websites that help brands grow and
              make an impact.
            </p>
          </div>
        </InkBlobCursor>
      </div>

      {/* LAYER 2: social links and buttons. They sit OUTSIDE the blend so they
          keep their real colors. */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center gap-7 px-6 pb-30">
        {/* <div className="inline-flex items-center justify-center rounded-full border border-white/50 bg-white/70 px-7 py-4 shadow-sm backdrop-blur-xl">
          <Social />
        </div> */}

        <div className="flex flex-wrap items-center justify-center gap-4">
          <OriginButton
            href="#projects"
            className="bg-primary"
            textClassName="text-white"
            hoverTextClassName="text-primary-dark"
            fillClassName="bg-white/70"
          >
            See My Work
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/25 text-white transition-colors group-hover:bg-white group-hover:text-primary-dark">
              <FiArrowRight size={16} />
            </span>
          </OriginButton>

          <OriginButton
            href={`${import.meta.env.BASE_URL}Sowmiya_Uthayakumar.pdf`}
            download="Sowmiya-Uthayakumar-Resume.pdf"
            className="border text-primary-dark "
            textClassName="text-white"
            hoverTextClassName="text-white"
            fillClassName="bg-[#dfcdb2]"
          >
            View Resume
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/75 text-primary-dark ">
              <FiDownload size={16} />
            </span>
          </OriginButton>
        </div>
      </div>
    </section>
  );
}

export default Hero;
