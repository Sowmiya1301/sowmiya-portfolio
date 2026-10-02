import { FiGithub, FiExternalLink, FiBriefcase } from "react-icons/fi";

function ProjectCard({ project }) {
  return (
    <div className="bg-white border full-font border-primary/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="h-40 bg-white m-2 overflow-hidden flex items-center justify-center">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-primary-dark/40">
            <FiBriefcase size={28} />
            <span className="text-xs font-medium">Confidential Project</span>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-5">
        <h3 className="font-semibold text-primary-dark">{project.title}</h3>

        <p className="text-sm text-body mt-2 leading-relaxed">{project.desc}</p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-primary/10 text-primary-dark px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="flex gap-4 mt-5">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
            >
              <FiExternalLink size={14} />
              Live Demo
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-primary-dark hover:text-primary transition-colors"
            >
              <FiGithub size={14} />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
