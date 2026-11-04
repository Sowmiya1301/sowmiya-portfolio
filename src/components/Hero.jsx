import { FiArrowRight, FiDownload } from "react-icons/fi";
import Social from "./Social";
import InkBlobCursor from "./InkBlobCursor";

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

            <p className="mt-6 max-w-xl text-sm leading-8 sm:text-base">
              I'm a Software Engineer passionate about building modern,
              responsive and user-friendly websites that help brands grow and
              make an impact.
            </p>
          </div>
        </InkBlobCursor>
      </div>

      {/* LAYER 2: social links and buttons. They sit OUTSIDE the blend so they
          keep their real colors. */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center gap-7 px-6 pb-16">
        <div className="inline-flex items-center justify-center rounded-full border border-white/50 bg-white/70 px-7 py-4 shadow-sm backdrop-blur-xl">
          <Social />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="group flex items-center gap-3 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
          >
            See My Work
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#7DD3FC] text-surface transition-colors group-hover:bg-[#0C4A6E] group-hover:text-white">
              <FiArrowRight size={16} />
            </span>
          </a>

          <a
            href={`${import.meta.env.BASE_URL}Sowmiya_Uthayakumar.pdf`}
            download="Sowmiya-Uthayakumar-Resume.pdf"
            className="group flex items-center gap-3 rounded-full border border-primary-dark bg-white/70 px-6 py-3 text-sm font-medium text-primary-dark backdrop-blur transition-colors hover:bg-primary-dark hover:text-white"
          >
            View Resume
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F3F6FA] text-primary-dark transition-colors group-hover:bg-[#0C4A6E] group-hover:text-white">
              <FiDownload size={16} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
