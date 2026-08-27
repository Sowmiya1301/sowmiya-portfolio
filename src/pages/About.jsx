import PageBanner from "../components/PageBanner";
import { FiBriefcase } from "react-icons/fi";
import { PiGraduationCap } from "react-icons/pi";

const education = [
  {
    degree: "Bachelor of Software Engineering (Honors)",
    place: "The Open University of Sri Lanka",
    years: "2022 – 2026",
  },
];

const experience = [
  {
    role: "Software developer Intern",
    place: "Oyslans Solutions (Pvt) Ltd.",
    years: "Jan 2024 – Aug 2024",
  },
];

function About() {
  return (
    <div className="min-h-screen bg-surface px-4 sm:px-8 md:px-16 py-6 md:py-10">
      <PageBanner
        tags={["React Developer", "Software Engineer"]}
        buttons={[
          { label: "View Skills", path: "/skills", filled: true },
          { label: "View Projects", path: "/projects", filled: false },
        ]}
      />

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Education */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-primary-dark">
              <PiGraduationCap size={20} />
            </span>
            <h2 className="text-lg font-semibold text-primary-dark">
              Education
            </h2>
          </div>
          {education.map((item, i) => (
            <div
              key={item.degree}
              className={`py-4 ${i !== 0 ? "border-t border-gray-100" : ""}`}
            >
              <h3 className="font-medium text-primary-dark">{item.degree}</h3>
              <p className="text-sm text-body mt-1">{item.place}</p>
              <p className="text-xs text-body mt-1">{item.years}</p>
            </div>
          ))}
        </div>

        {/* Experience */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-primary-dark">
              <FiBriefcase size={20} />
            </span>
            <h2 className="text-lg font-semibold text-primary-dark">
              Work Experience
            </h2>
          </div>
          {experience.map((item, i) => (
            <div
              key={item.role}
              className={`py-4 ${i !== 0 ? "border-t border-gray-100" : ""}`}
            >
              <h3 className="font-medium text-primary-dark">{item.role}</h3>
              <p className="text-sm text-body mt-1">{item.place}</p>
              <p className="text-xs text-body mt-1">{item.years}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
