import ProjectsIntro from "../components/ProjectsIntro";

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-surface px-4 sm:px-8 md:pl-32 md:pr-16 py-10 scroll-mt-20"
    >
      <h1 className="text-4xl md:text-5xl subhead-font font-extrabold text-primary-dark mb-4">
        <span>
          My <span className="text-primary "> Projects </span>
        </span>{" "}
      </h1>
      <p className="text-sm md:text-base text-body max-w-lg mb-8 full-font">
        A collection of work, academic, and personal projects I've built.
      </p>
      <ProjectsIntro />
    </section>
  );
}

export default Projects;
