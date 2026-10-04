import { FiExternalLink, FiGithub } from "react-icons/fi";

function FeaturedProjectCard({ project }) {
  return (
    <div className="relative rounded-3xl overflow-hidden bg-primary-dark h-full min-h-[280px]">
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/85 to-primary-dark/20" />

      <div className="relative z-10 h-full flex flex-col justify-center p-6 md:p-8 max-w-md">
        <span className="w-fit bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full mb-3">
          {project.status}
        </span>
        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
        <p className="text-sm text-white/80 mt-2 leading-relaxed">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-white/15 text-white px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-5">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-primary-dark text-sm font-medium px-4 py-2 rounded-full hover:bg-white/90 transition-colors"
            >
              <FiExternalLink size={14} /> View Live
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-white/40 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <FiGithub size={14} /> View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProjectCard;
