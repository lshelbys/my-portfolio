import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const ProjectCard = ({ project, featured = false }) => {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article
      className={`group bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-white/5 hover:border-white/15 hover:-translate-y-1 transition-all duration-200 h-full flex flex-col ${
        featured ? "md:flex-row" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden bg-zinc-900 ${
          featured ? "md:w-[48%] md:min-h-[280px]" : "h-48"
        }`}
      >
        {!imageFailed && project.image ? (
          <img
            src={project.image}
            alt=""
            loading="lazy"
            width={featured ? 720 : 600}
            height={featured ? 400 : 300}
            onError={() => setImageFailed(true)}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full min-h-48 flex items-center justify-center bg-[radial-gradient(circle_at_top,rgba(143,243,228,0.12),transparent_55%),#111]">
            <span className="sys-label">{project.title}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
        {featured && (
          <span className="absolute top-4 left-4 sys-label bg-black/60 px-2 py-1 rounded">
            Featured
          </span>
        )}
      </div>

      <div className={`p-6 flex flex-col flex-grow ${featured ? "md:w-[52%]" : ""}`}>
        <h3 className={`font-semibold mb-2 ${featured ? "text-2xl" : "text-xl"}`}>
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4 flex-grow leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs tracking-wide bg-white/10 text-gray-300 rounded border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-gray-300 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
              <span>Code</span>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-[var(--signal)] hover:text-white transition-colors"
            >
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
              <span>Live</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
