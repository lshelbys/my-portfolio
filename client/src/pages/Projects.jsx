import { ScrollAnimation } from "@/components/ScrollAnimation";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Systems Telemetry Dashboard",
    description:
      "A student project for visualising signals, state, and system health through a focused web interface with clear feedback loops.",
    image: "https://raw.githubusercontent.com/niladri-1/Personal-portfolio/main/client/src/assets/projects_img/project-4.png",
    github: "#contact",
    live: "#contact",
    tags: ["React", "TypeScript", "Data Flow", "Interfaces"],
  },
  {
    id: 2,
    title: "Requirements Mapper",
    description:
      "A lightweight tool for capturing stakeholders, constraints, interfaces, and traceability links before implementation begins.",
    image: "https://raw.githubusercontent.com/niladri-1/Personal-portfolio/main/client/src/assets/projects_img/project-3.png",
    github: "#contact",
    live: "#contact",
    tags: ["Systems Design", "Requirements", "UX", "Documentation"],
  },
  {
    id: 3,
    title: "Network Lab Notes",
    description:
      "A practical learning space for exploring network concepts, repeatable commands, and observations from small controlled experiments.",
    image: "https://raw.githubusercontent.com/niladri-1/Personal-portfolio/main/client/src/assets/projects_img/project-2.png",
    github: "#contact",
    live: "",
    tags: ["Linux", "Networking", "Bash", "Monitoring"],
  },
  {
    id: 4,
    title: "Student Portfolio",
    description:
      "This portfolio, rebuilt from the reference repository's actual frontend structure to present a Systems Engineering learning journey.",
    image: "https://raw.githubusercontent.com/niladri-1/Personal-portfolio/main/client/src/assets/projects_img/project-1.png",
    github: "#contact",
    live: "#contact",
    tags: ["React", "Tailwind", "Responsive", "Motion"],
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-12 gradient-text">Featured Projects</h2>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ScrollAnimation key={project.id}>
            <div className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm h-full flex flex-col">
              <img src={project.image} alt={project.title} loading="lazy" width={600} height={300} className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-sm bg-purple-500/20 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.github && (
                    <a href={project.github} className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Projects;
