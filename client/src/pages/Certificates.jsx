import { ScrollAnimation } from "@/components/ScrollAnimation";
import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Systems Thinking Foundations",
    issuer: "Independent study",
    date: "Current learning",
    link: "#contact",
    description: "Working through systems thinking concepts, boundaries, feedback loops, and the language used to describe complex systems.",
    skills: ["Systems Thinking", "Modelling", "Feedback Loops"],
  },
  {
    id: 2,
    title: "Software Engineering Practice",
    issuer: "Coursework",
    date: "Current learning",
    link: "#contact",
    description: "Building practical fluency in structured implementation, version control, testing habits, and maintainable interfaces.",
    skills: ["Software Engineering", "Testing", "Git"],
  },
  {
    id: 3,
    title: "Requirements & Traceability",
    issuer: "Systems Engineering study",
    date: "Current learning",
    link: "#contact",
    description: "Learning to turn stakeholder needs into clear requirements and traceable decisions that can be reviewed and validated.",
    skills: ["Requirements", "Traceability", "Analysis"],
  },
  {
    id: 4,
    title: "Infrastructure Fundamentals",
    issuer: "Independent lab work",
    date: "Current learning",
    link: "#contact",
    description: "Exploring local environments, networks, services, and the operational details that help software behave reliably.",
    skills: ["Linux", "Networks", "Infrastructure"],
  },
  {
    id: 5,
    title: "Automation & Scripting",
    issuer: "Practical projects",
    date: "Current learning",
    link: "#contact",
    description: "Using small scripts and repeatable workflows to reduce manual steps and make experiments easier to reproduce.",
    skills: ["Python", "Bash", "Automation"],
  },
  {
    id: 6,
    title: "Technical Communication",
    issuer: "Ongoing practice",
    date: "Current learning",
    link: "#contact",
    description: "Practising concise technical writing, diagrams, and explanations that make systems easier for other people to understand.",
    skills: ["Documentation", "Diagrams", "Communication"],
  },
];

const Certificates = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <motion.div className="flex items-center gap-3 mb-12" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <Award className="w-8 h-8" />
          <h2 className="text-4xl font-bold gradient-text">Certificates</h2>
        </motion.div>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-6">
        {certificates.map((cert) => (
          <ScrollAnimation key={cert.id}>
            <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all group border border-white/5 h-full flex flex-col">
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <div className="text-gray-400 space-y-2 flex flex-col flex-grow">
                <div className="flex items-center justify-between">
                  <span className="text-lg">{cert.issuer}</span>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                </div>
                <p className="text-gray-300 line-clamp-2">{cert.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="px-2 py-1 text-sm bg-white/10 rounded-full">{skill}</span>
                  ))}
                </div>
                <div className="mt-auto pt-4">
                  <a href={cert.link} className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 group-hover:translate-x-2 transition-transform">
                    View Learning Notes
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
