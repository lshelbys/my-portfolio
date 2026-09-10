import ProjectCard from "@/components/ProjectCard";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { projects } from "@/config/projects";
import { GITHUB_REPOS_URL } from "@/config/site";
import { useMemo, useState } from "react";

const Projects = () => {
  const [activeTag, setActiveTag] = useState("All");

  const tags = useMemo(() => {
    const unique = new Set();
    projects.forEach((project) => {
      project.tags.forEach((tag) => unique.add(tag));
    });
    return ["All", ...Array.from(unique)];
  }, []);

  const featured = projects.find((project) => project.featured) ?? projects[0];
  const rest = projects.filter((project) => project.id !== featured.id);
  const filteredRest =
    activeTag === "All"
      ? rest
      : rest.filter((project) => project.tags.includes(activeTag));
  const showFeatured =
    activeTag === "All" || featured.tags.includes(activeTag);

  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <p className="sys-label mb-3">SYS / 06</p>
        <h2 className="text-4xl font-bold mb-4 gradient-text">
          Featured Projects
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl">
          Real builds from GitHub — tools, maps, games, and this site.{" "}
          <a
            href={GITHUB_REPOS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--signal)] hover:text-white transition-colors"
          >
            See all repositories
          </a>
          .
        </p>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filter projects">
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              role="tab"
              aria-selected={activeTag === tag}
              onClick={() => setActiveTag(tag)}
              className={`px-3 py-1.5 rounded-full text-sm transition-colors border ${
                activeTag === tag
                  ? "bg-white text-black border-white"
                  : "bg-white/5 text-gray-400 border-white/10 hover:text-white hover:border-white/20"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </ScrollAnimation>

      {showFeatured && (
        <ScrollAnimation>
          <div className="mb-8">
            <ProjectCard project={featured} featured />
          </div>
        </ScrollAnimation>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredRest.map((project) => (
          <ScrollAnimation key={project.id}>
            <ProjectCard project={project} />
          </ScrollAnimation>
        ))}
      </div>

      {!showFeatured && filteredRest.length === 0 && (
        <p className="text-gray-500 text-sm">No projects match that filter.</p>
      )}
    </div>
  );
};

export default Projects;
