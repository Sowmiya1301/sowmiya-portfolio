import aboutimg from "../assets/about-img.png";
import { FiMapPin, FiHeart, FiBriefcase } from "react-icons/fi";
import { PiGraduationCap } from "react-icons/pi";
import { HiOutlineCake } from "react-icons/hi";

const stats = [
  {
    icon: HiOutlineCake,
    label: "Age",
    value: "26",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Sri Lanka",
  },
  {
    icon: PiGraduationCap,
    label: "Education",
    value: "BSc Software Eng.",
  },
  {
    icon: FiHeart,
    label: "Availability",
    value: "Open to work",
  },
];

const education = {
  degree: "Bachelor of Software Engineering (Honors)",
  place: "The Open University of Sri Lanka",
  years: "2022 – 2026",
};

const experience = {
  role: "Software Developer Intern",
  place: "Oyslans Solutions (Pvt) Ltd.",
  years: "Jan 2024 – Aug 2024",
};

function AboutIntro() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      {/* LEFT */}
      <div className="lg:col-span-6 flex flex-col gap-4">
        {/* Image */}
        <div className="w-full h-[360px] md:h-[440px] rounded-3xl overflow-hidden bg-primary/15 flex items-end justify-center">
          <img
            src={aboutimg}
            alt="Sowmiya Uthayakumar"
            className="w-full h-full object-contain object-bottom"
          />
        </div>

        {/* note */}
        <div className="bg-primary/10 border border-primary/20 rounded-2xl px-6 py-5">
          <p className="text-primary-dark  text-sm md:text-base italic leading-relaxed">
            "I love turning ideas into clean, functional and user-friendly
            digital experiences."
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="lg:col-span-6">
        {/* Intro */}
        <h1 className="text-3xl md:text-4xl font-bold text-primary-dark">
          Hi, I'm Sowmiya
        </h1>

        <p className="mt-4 text-sm md:text-base text-body leading-7">
          I'm a passionate developer who loves building modern, responsive and
          user-friendly websites. I enjoy turning ideas into clean, functional
          interfaces.
        </p>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="min-h-[76px] flex items-center gap-3 bg-surface border border-primary/20 rounded-xl px-4 py-3"
              >
                <span className="w-10 h-10 shrink-0 rounded-full bg-primary/15 flex items-center justify-center text-primary-dark">
                  <Icon size={17} />
                </span>

                <div className="min-w-0">
                  <p className="text-xs text-body">{stat.label}</p>

                  <p className="text-sm font-semibold text-primary-dark truncate">
                    {stat.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* EDUCATION and EXPERIENCE */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Education */}
          <div className="bg-white border border-primary/10 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center text-primary-dark">
                <PiGraduationCap size={17} />
              </span>

              <h2 className="text-base font-semibold text-primary-dark">
                Education
              </h2>
            </div>

            <h3 className="text-sm font-semibold text-primary-dark leading-5">
              {education.degree}
            </h3>

            <p className="text-xs text-body mt-2">{education.place}</p>

            <p className="text-xs text-body mt-1">{education.years}</p>
          </div>

          {/* Experience */}
          <div className="bg-white border border-primary/10 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center text-primary-dark">
                <FiBriefcase size={17} />
              </span>

              <h2 className="text-base font-semibold text-primary-dark">
                Experience
              </h2>
            </div>

            <h3 className="text-sm font-semibold text-primary-dark leading-5">
              {experience.role}
            </h3>

            <p className="text-xs text-body mt-2">{experience.place}</p>

            <p className="text-xs text-body mt-1">{experience.years}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutIntro;
