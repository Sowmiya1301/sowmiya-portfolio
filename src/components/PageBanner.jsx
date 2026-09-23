import { useNavigate } from "react-router-dom";
import aboutImg from "../assets/about-img.png";

function PageBanner({ tags = [], buttons = [] }) {
  const navigate = useNavigate();

  return (
    <div className="flex items-end full-font bg-primary/20 rounded-3xl overflow-hidden min-h-[200px] md:min-h-[240px] ml-0 md:ml-24 mr-6 md:mr-12">
      {" "}
      {/* image */}
      <div className="hidden sm:block w-[35%] md:w-[30%] self-stretch">
        <img
          src={aboutImg}
          alt="Sowmiya Uthayakumar"
          className="w-80 h-80 object-contain object-bottom"
        />
      </div>
      {/* right text */}
      <div className="flex-1 p-6 md:p-10">
        <h1 className="text-2xl hero-font md:text-4xl font-extrabold text-primary-dark">
          Sowmiya
        </h1>

        <p className="mt-2 text-sm md:text-base text-body max-w-lg">
          I build beautiful, responsive and user-friendly web applications with
          modern technologies.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-white/70 text-primary-dark text-sm font-medium px-4 py-2 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          {buttons.map((btn) => (
            <button
              key={btn.label}
              onClick={() => navigate(btn.path)}
              className={
                btn.filled
                  ? "flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full font-medium hover:bg-primary-dark transition-colors"
                  : "flex items-center gap-2 border border-primary text-primary-dark px-5 py-2.5 rounded-full font-medium hover:bg-primary hover:text-white transition-colors"
              }
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PageBanner;
