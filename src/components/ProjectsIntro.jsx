import ProjectCard from "./ProjectCard";

const projectCategories = [
  {
    title: "Work Projects",
    projects: [
      {
        title: "Restraturant Management System",
        desc: "Developed and enhanced modules for a restratrant managment system include admin dashboard and kitchen order managment functionality",
        // image: "/src/assets/project-placeholder.png",
        tags: ["ASP.NET core", "C#", "MS SQL"],
        // liveUrl: "https://example.com",
        // githubUrl: "https://github.com/Sowmiya1301/project",
      },
      {
        title: "Zynix POS system",
        desc: "Implemented a dynamic PDF generation module for the POS system, improving billing and reporting workflows",
        // image: "/src/assets/project-placeholder.png",
        tags: ["WPF Application", "Clean Architecture", "C#", "MSSQL"],
        // liveUrl: "https://example.com",
        // githubUrl: "https://github.com/Sowmiya1301/project",
      },
    ],
  },
  {
    title: "Academic Projects",
    projects: [
      {
        title: "Leafer App",
        desc: "Developed a mobile application using Flutter and Python for detecting diseases in banana leaves through Deep Learning (CNN) technique and Image preprocessing (Siamese Network and MovileNetV12). This is a group project, i worked within cure stange monitiring screen",
        image: "./src/assets/projects-img/leafer.jpeg",
        tags: [
          "Flutter",
          "Python",
          "SQLite",
          "CNN model Inception V3",
          "Siamese Network, MobileNetV12",
        ],
        githubUrl: "https://github.com/vanathysam/leafer_app",
      },
      {
        title: "MedStar - Hospital management system",
        desc: "Developed a desktop application for managing hospitals and it is a group project",
        image: "./src/assets/projects-img/MedStar.jpeg",
        tags: ["WPF", "C#", "MSSQL"],
        githubUrl: "https://github.com/yalini27/MedStar",
      },
    ],
  },
  {
    title: "Personal Projects",
    projects: [
      {
        title: "The Sweetest",
        desc: "Developed a cake selling website with product listing, cart functionality, add favourtites",
        image: "./src/assets/projects-img/the-sweetest.png",
        tags: ["React", "Tailwind CSS", "JavaScript"],
        liveUrl: "https://sowmiya1301.github.io/the-sweetest/",
        githubUrl: "https://github.com/Sowmiya1301/the-sweetest",
      },
      {
        title: "FlavorFusion Pies Website",
        desc: "Developed a reusable components for Home, Menu, About, and Contact page",
        image: "./src/assets/projects-img/Pizza-website.png",
        tags: ["React", "CSS", "JavaScript"],
        liveUrl: "https://sowmiya1301.github.io/FlavorFusion-Pies-Website/",
        githubUrl: "https://github.com/Sowmiya1301/FlavorFusion-Pies-Website",
      },
    ],
  },
];

function ProjectsIntro() {
  return (
    <div>
      {projectCategories.map((category) => (
        <div
          key={category.title}
          className="mt-10 first:mt-0 full-font"
          data-aos="fade-up"
        >
          <h3 className="flex items-center gap-2 text-xl font-semibold text-primary-dark mb-5">
            {category.title}
            <div className="mt-2 h-0.5 w-16 bg-primary-dark"></div>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectsIntro;
