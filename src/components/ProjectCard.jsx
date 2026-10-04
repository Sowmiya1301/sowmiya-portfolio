import {
  FiGithub,
  FiExternalLink,
  FiBriefcase,
  FiUser,
  FiBookOpen,
} from "react-icons/fi";

const categoryMeta = {
  personal: { label: "Personal", icon: FiUser, color: "bg-sky-500" },
  academic: { label: "Academic", icon: FiBookOpen, color: "bg-purple-500" },
  work: { label: "Work", icon: FiBriefcase, color: "bg-orange-500" },
};

function ProjectCard({ project }) {
  const meta = categoryMeta[project.category] || {
    label: "Project",
    icon: FiBriefcase,
    color: "bg-gray-400",
  };
  const CategoryIcon = meta.icon;

  return (
    <div className="bg-white border border-primary/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Image with overlay badges */}
      <div className="relative h-44 bg-primary/10 overflow-hidden flex items-center justify-center">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-primary-dark/40">
            <FiBriefcase size={28} />
            <span className="text-xs font-medium">Confidential Project</span>
          </div>
        )}

        {/* category badge, bottom-left over image */}
        <span
          className={`absolute bottom-3 left-3 flex items-center gap-1.5 ${meta.color} text-white text-xs font-medium px-3 py-1.5 rounded-full`}
        >
          <CategoryIcon size={12} />
          {meta.label}
        </span>

        {/* external-link icon, top-right */}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 right-3 flex items-center justify-center w-8 h-8 rounded-full bg-white/90 text-primary-dark hover:bg-white transition-colors"
          >
            <FiExternalLink size={14} />
          </a>
        )}
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-primary-dark text-lg">
          {project.title}
        </h3>
        <p className="text-sm text-body mt-2 leading-relaxed">{project.desc}</p>

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

        {project.contributions && (
          <div className="mt-4">
            <p className="flex items-center gap-1.5 text-xs font-semibold text-primary-dark mb-2">
              <FiUser size={12} /> My Contribution
            </p>
            <ul className="space-y-1">
              {project.contributions.map((point) => (
                <li key={point} className="text-xs text-body flex gap-2">
                  <span className="text-primary">•</span> {point}
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-dark transition-colors mt-5"
          >
            View Project <FiExternalLink size={13} />
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
