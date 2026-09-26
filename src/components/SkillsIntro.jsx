// import sowmi from "../assets/sowmi-img.png";
import { FaCss3Alt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

import {
  FiZap,
  FiEdit3,
  FiCode,
  FiCheckCircle,
  FiSend,
  FiCpu,
  FiMessageCircle,
  FiUsers,
  FiClock,
  FiRefreshCw,
} from "react-icons/fi";

import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiGithub,
  SiFigma,
  SiPostman,
  SiNetlify,
  SiGooglechrome,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

const skillCategories = [
  {
    title: "Technical Skills",
    type: "icons",
    skills: [
      {
        name: "HTML",
        icon: SiHtml5,
        color: "#E44D26",
      },
      {
        name: "CSS",
        icon: FaCss3Alt,
        color: "#264DE4",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#F0DB4F",
      },
      {
        name: "React.js",
        icon: SiReact,
        color: "#61DAFB",
      },
      {
        name: "Git & GitHub",
        icon: SiGithub,
        color: "#24292E",
      },
    ],
  },

  {
    title: "Tools & Technologies",
    type: "icons",
    skills: [
      {
        name: "VS Code",
        icon: VscVscode,
        color: "#007ACC",
      },
      {
        name: "Figma",
        icon: SiFigma,
        color: "#F24E1E",
      },
      {
        name: "Postman",
        icon: SiPostman,
        color: "#FF6C37",
      },
      {
        name: "Netlify",
        icon: SiNetlify,
        color: "#00C7B7",
      },
      {
        name: "Chrome DevTools",
        icon: SiGooglechrome,
        color: "#4285F4",
      },
    ],
  },

  {
    title: "Soft Skills",
    type: "badges",
    skills: [
      {
        name: "Problem Solving",
        icon: FiCpu,
      },
      {
        name: "Communication",
        icon: FiMessageCircle,
      },
      {
        name: "Teamwork",
        icon: FiUsers,
      },
      {
        name: "Time Management",
        icon: FiClock,
      },
      {
        name: "Adaptability",
        icon: FiRefreshCw,
      },
    ],
  },
];

const steps = [
  {
    num: "01",
    title: "Idea",
    desc: "Understand the problem, explore solutions.",
    icon: FiZap,
    color: "#3B82F6",
  },
  {
    num: "02",
    title: "Design",
    desc: "Plan the UI/UX and create user-friendly designs.",
    icon: FiEdit3,
    color: "#A855F7",
  },
  {
    num: "03",
    title: "Develop",
    desc: "Write clean, efficient and scalable code.",
    icon: FiCode,
    color: "#14B8A6",
  },
  {
    num: "04",
    title: "Test",
    desc: "Find and fix issues for a smooth experience.",
    icon: FiCheckCircle,
    color: "#F59E0B",
  },
  {
    num: "05",
    title: "Deploy",
    desc: "Launch and keep improving for better performance.",
    icon: FiSend,
    color: "#8B5CF6",
  },
];

function SkillsIntro() {
  return (
    <div className="grid grid-cols-1 full-font lg:grid-cols-2 gap-10 items-start">
      {/* LEFT SIDE */}
      <div data-aos="fade-up">
        <p className="mt-4 text-sm md:text-base text-body leading-7 max-w-lg">
          I'm always exploring new technologies, design trends, and tools to
          level up my skills and bring better ideas to life.
        </p>

        {/* Skill Categories */}
        {skillCategories.map((category) => (
          <div key={category.title} className="mt-8">
            {/* Category Title */}
            <h3 className="flex items-center gap-2 text-primary-dark font-semibold mb-4">
              <span className="w-2 h-2 rounded-full bg-primary" />
              {category.title}
            </h3>

            {/* Icon Skills */}
            {category.type === "icons" && (
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="
                        flex
                        flex-col
                        items-center
                        justify-center
                        gap-2
                        bg-white
                        border
                        border-primary/10
                        rounded-xl
                        p-3
                        text-center
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:shadow-md
                      "
                    >
                      <Icon
                        size={26}
                        style={{
                          color: skill.color,
                        }}
                      />

                      <span className="text-xs text-body leading-tight">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Soft Skill Badges */}
            {category.type === "badges" && (
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <span
                      key={skill.name}
                      className="
                        inline-flex
                        items-center
                        gap-2
                        px-4
                        py-2
                        rounded-lg
                        bg-white
                        border
                        border-primary/20
                        text-primary-dark
                        text-sm
                        font-medium
                        transition-all
                        duration-300
                        hover:bg-primary
                        hover:text-white
                        hover:border-primary
                        hover:-translate-y-0.5
                      "
                    >
                      <Icon size={15} />
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-col gap-6" data-aos="fade-up">
        <div className="p-6 md:p-2">
          <h3 className="text-xl font-bold text-primary-dark">How Build</h3>

          <p className="text-sm text-body mt-1 mb-8">
            Turning ideas into real solutions
          </p>

          {/* Timeline */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-primary/20" />

            <div className="flex flex-col gap-6">
              {steps.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.num}
                    className="relative z-10 flex items-start gap-4"
                  >
                    {/* Number + Icon Circle */}
                    <span
                      className="
                        shrink-0
                        w-10
                        h-10
                        rounded-full
                        flex
                        items-center
                        justify-center
                        text-white
                      "
                      style={{
                        backgroundColor: step.color,
                      }}
                    >
                      <Icon size={18} />
                    </span>

                    {/* Card */}
                    <div className="bg-white rounded-xl px-4 py-3 flex-1">
                      <p className="text-xs text-primary font-semibold">
                        {step.num}
                      </p>

                      <h4 className="font-semibold text-primary-dark">
                        {step.title}
                      </h4>

                      <p className="text-xs text-body mt-1">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsIntro;
