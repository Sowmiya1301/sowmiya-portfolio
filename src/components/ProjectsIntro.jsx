import { useState } from "react";
import ProjectCard from "./ProjectCard";
import FeaturedProjectCard from "./FeaturedProjectCard";
import { FiGrid, FiUser, FiBookOpen, FiBriefcase } from "react-icons/fi";

import leaferImg from "../assets/projects-img/leafer.jpeg";
import medstarImg from "../assets/projects-img/MedStar.jpeg";
import sweetestImg from "../assets/projects-img/the-sweetest.png";
import pizzaImg from "../assets/projects-img/Pizza-website.png";
// import moniestImg from "../assets/projects-img/moniest.png"; // add once you have a screenshot

const featuredProject = {
  title: "Moniest",
  status: "In Progress",
  desc: "A full-stack expense tracker built with the MERN stack — budgeting, categorized spending, and visual insights.",
  image: undefined, // replace with moniestImg once imported above
  tags: ["MongoDB", "Express", "React", "Node.js"],
  githubUrl: "https://github.com/Sowmiya1301/moniest",
};

const allProjects = [
  {
    category: "personal",
    title: "The Sweetest",
    desc: "Developed a cake selling website with product listing, cart functionality, add favourites.",
    image: sweetestImg,
    tags: ["React", "Tailwind CSS", "JavaScript"],
    contributions: [
      "Developed product listing & cart features",
      "Integrated state management & UI components",
    ],
    liveUrl: "https://sowmiya1301.github.io/the-sweetest/",
    githubUrl: "https://github.com/Sowmiya1301/the-sweetest",
  },
  {
    category: "personal",
    title: "FlavorFusion Pies Website",
    desc: "Developed reusable components for Home, Menu, About, and Contact page.",
    image: pizzaImg,
    tags: ["React", "CSS", "JavaScript"],
    contributions: [
      "Built reusable UI components",
      "Implemented responsive layouts across pages",
    ],
    liveUrl: "https://sowmiya1301.github.io/FlavorFusion-Pies-Website/",
    githubUrl: "https://github.com/Sowmiya1301/FlavorFusion-Pies-Website",
  },
  {
    category: "academic",
    title: "Leafer (Research Project)",
    desc: "Banana leaf disease detection using deep learning and image processing. Flutter + Python backend.",
    image: leaferImg,
    tags: ["Flutter", "Python", "CNN (Inception V3)", "SQLite"],
    contributions: [
      "Built cure-stage monitoring & history screens",
      "Trained models (InceptionV3, MobileNetV2)",
    ],
    githubUrl: "https://github.com/vanathysam/leafer_app",
  },
  {
    category: "academic",
    title: "MedStar - Hospital Management System",
    desc: "Desktop application for managing hospitals — a group project.",
    image: medstarImg,
    tags: ["WPF", "C#", "MSSQL"],
    contributions: ["Built patient records module", "Designed database schema"],
    githubUrl: "https://github.com/yalini27/MedStar",
  },
  {
    category: "work",
    title: "Restaurant Management System",
    desc: "Developed and enhanced modules for a restaurant management system, including the admin dashboard and kitchen order management functionality.",
    tags: ["ASP.NET Core", "C#", "MS SQL"],
    contributions: [
      "Built admin dashboard features",
      "Implemented kitchen order management module",
    ],
  },
  {
    category: "work",
    title: "Zynix POS System",
    desc: "Implemented a dynamic PDF generation module for the POS system, improving billing and reporting workflows.",
    tags: ["WPF", "Clean Architecture", "C#", "MSSQL"],
    contributions: [
      "Built dynamic PDF generation module",
      "Improved billing & reporting workflow",
    ],
  },
];

const tabs = [
  { id: "all", label: "All Projects", icon: FiGrid },
  { id: "personal", label: "Personal", icon: FiUser },
  { id: "academic", label: "Academic", icon: FiBookOpen },
  { id: "work", label: "Work", icon: FiBriefcase },
];

function ProjectsIntro() {
  const [activeTab, setActiveTab] = useState("all");

  const visibleProjects =
    activeTab === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === activeTab);

  return (
    <div className="full-font">
      {/* Header row: text left, tabs right */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">
        <p className="text-sm md:text-base text-body max-w-md">
          A collection of work, academic, and personal projects I've built.
        </p>

        <div className="flex flex-wrap gap-3">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const count =
              tab.id === "all"
                ? allProjects.length
                : allProjects.filter((p) => p.category === tab.id).length;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-primary text-white"
                    : "bg-white border border-primary/20 text-primary-dark hover:bg-primary/10"
                }`}
              >
                <Icon size={15} />
                {tab.label}
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    activeTab === tab.id ? "bg-white/20" : "bg-primary/10"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bento: featured + one card beside it, only on "All Projects" */}
      {activeTab === "all" && (
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6"
          data-aos="fade-up"
        >
          <div className="lg:col-span-2">
            <FeaturedProjectCard project={featuredProject} />
          </div>
          <div>
            {visibleProjects[0] && <ProjectCard project={visibleProjects[0]} />}
          </div>
        </div>
      )}

      {/* Remaining projects in a normal grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        data-aos="fade-up"
      >
        {(activeTab === "all" ? visibleProjects.slice(1) : visibleProjects).map(
          (project) => (
            <ProjectCard key={project.title} project={project} />
          ),
        )}
      </div>
    </div>
  );
}

export default ProjectsIntro;
