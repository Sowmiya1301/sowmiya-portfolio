import { useState } from "react";
import ProjectCard from "./ProjectCard";
import leaferImg from "../assets/projects-img/leafer.jpeg";
import medstarImg from "../assets/projects-img/MedStar.jpeg";
import sweetestImg from "../assets/projects-img/the-sweetest.png";
import pizzaImg from "../assets/projects-img/Pizza-website.png";

const tabs = [
  { id: "personal", label: "Personal Projects" },
  { id: "academic", label: "Academic Projects" },
  { id: "work", label: "Work Projects" },
];

const projectsByCategory = {
  personal: [
    {
      title: "The Sweetest",
      desc: "Developed a cake selling website with product listing, cart functionality, add favourites",
      image: sweetestImg,
      tags: ["React", "Tailwind CSS", "JavaScript"],
      liveUrl: "https://sowmiya1301.github.io/the-sweetest/",
      githubUrl: "https://github.com/Sowmiya1301/the-sweetest",
    },
    {
      title: "FlavorFusion Pies Website",
      desc: "Developed reusable components for Home, Menu, About, and Contact page",
      image: pizzaImg,
      tags: ["React", "CSS", "JavaScript"],
      liveUrl: "https://sowmiya1301.github.io/FlavorFusion-Pies-Website/",
      githubUrl: "https://github.com/Sowmiya1301/FlavorFusion-Pies-Website",
    },
  ],
  academic: [
    {
      title: "Leafer App",
      desc: "Developed a mobile application using Flutter and Python for detecting diseases in banana leaves through Deep Learning (CNN) technique and image preprocessing (Siamese Network and MobileNetV2). Group project — I worked on the cure-stage monitoring screen.",
      image: leaferImg,
      tags: [
        "Flutter",
        "Python",
        "SQLite",
        "CNN (Inception V3)",
        "Siamese Network",
        "MobileNetV2",
      ],
      githubUrl: "https://github.com/vanathysam/leafer_app",
    },
    {
      title: "MedStar - Hospital Management System",
      desc: "Developed a desktop application for managing hospitals — a group project.",
      image: medstarImg,
      tags: ["WPF", "C#", "MSSQL"],
      githubUrl: "https://github.com/yalini27/MedStar",
    },
  ],
  work: [
    {
      title: "Restaurant Management System",
      blog: "Developed and enhanced modules for a restaurant management system, including the admin dashboard and kitchen order management functionality.",
      tags: ["ASP.NET Core", "C#", "MS SQL"],
    },
    {
      title: "Zynix POS System",
      blog: "Implemented a dynamic PDF generation module for the POS system, improving billing and reporting workflows.",
      tags: ["WPF Application", "Clean Architecture", "C#", "MSSQL"],
    },
  ],
};

function ProjectsIntro() {
  const [activeTab, setActiveTab] = useState("personal");
  const activeProjects = projectsByCategory[activeTab];

  return (
    <div className="full-font">
      {/* Tabs */}
      <div className="flex flex-wrap gap-3 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? "bg-primary text-white"
                : "bg-white border border-primary/20 text-primary-dark hover:bg-primary/10"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Personal, Academic card grid with images */}
      {activeTab !== "work" && (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          data-aos="fade-up"
        >
          {activeProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      )}

      {/* Work  , no image */}
      {activeTab === "work" && (
        <div className="flex flex-col gap-6" data-aos="fade-up">
          {activeProjects.map((entry) => (
            <div
              key={entry.title}
              className="bg-white border border-primary/10 rounded-2xl p-6"
            >
              <h3 className="font-semibold text-primary-dark text-lg">
                {entry.title}
              </h3>
              <p className="text-sm text-body mt-3 leading-relaxed">
                {entry.blog}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {entry.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm bg-primary/10 text-primary-dark px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectsIntro;
