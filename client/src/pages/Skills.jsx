import {
  Code2,
  Layout,
  Server,
  Database,
  Cloud,
  Terminal,
  Wrench,
  Users,
  Brain,
  MessageSquare,
  GitBranch,
} from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import {
  JavaScriptLogo,
  ReactLogo,
  TypeScriptLogo,
  NodeLogo,
  MongoDBLogo,
  VSCodeLogo,
  GitLogo,
  TailwindLogo,
  PythonLogo,
  ExpressLogo,
  AWSLogo,
  PostmanLogo,
  BashLogo,
  WindowsLogo,
  UbuntuLogo,
  LinuxLogo,
} from "@/components/TechLogos";

const skills = [
  {
    category: "Systems Thinking",
    icon: <Brain className="w-6 h-6" />,
    items: [
      { name: "Requirements", icon: <MessageSquare className="w-4 h-4" /> },
      { name: "Trade-offs", icon: <GitBranch className="w-4 h-4" /> },
      { name: "Interfaces", icon: <Layout className="w-4 h-4" /> },
      { name: "Reliability", icon: <Wrench className="w-4 h-4" /> },
    ],
  },
  {
    category: "Programming",
    icon: <Code2 className="w-6 h-6" />,
    items: [
      { name: "Python", icon: <PythonLogo /> },
      { name: "JavaScript", icon: <JavaScriptLogo /> },
      { name: "TypeScript", icon: <TypeScriptLogo /> },
      { name: "Bash", icon: <BashLogo /> },
    ],
  },
  {
    category: "Software Builds",
    icon: <Layout className="w-6 h-6" />,
    items: [
      { name: "React", icon: <ReactLogo /> },
      { name: "Node.js", icon: <NodeLogo /> },
      { name: "APIs", icon: <ExpressLogo /> },
      { name: "UI Systems", icon: <TailwindLogo /> },
    ],
  },
  {
    category: "Data & Services",
    icon: <Database className="w-6 h-6" />,
    items: [
      { name: "Data Models", icon: <MongoDBLogo /> },
      { name: "SQL Basics", icon: <Database className="w-4 h-4" /> },
      { name: "Cloud Concepts", icon: <Cloud className="w-4 h-4" /> },
      { name: "APIs", icon: <PostmanLogo /> },
    ],
  },
  {
    category: "Tools & Workflow",
    icon: <Wrench className="w-6 h-6" />,
    items: [
      { name: "Git", icon: <GitLogo /> },
      { name: "GitHub", icon: <GitLogo /> },
      { name: "VS Code", icon: <VSCodeLogo /> },
      { name: "Documentation", icon: <MessageSquare className="w-4 h-4" /> },
    ],
  },
  {
    category: "Infrastructure",
    icon: <Server className="w-6 h-6" />,
    items: [
      { name: "Linux", icon: <LinuxLogo /> },
      { name: "Ubuntu", icon: <UbuntuLogo /> },
      { name: "Windows", icon: <WindowsLogo /> },
      { name: "AWS Basics", icon: <AWSLogo /> },
    ],
  },
  {
    category: "Networks & Automation",
    icon: <Terminal className="w-6 h-6" />,
    items: [
      { name: "Networking", icon: <Terminal className="w-4 h-4" /> },
      { name: "Monitoring", icon: <Wrench className="w-4 h-4" /> },
      { name: "Scripting", icon: <BashLogo /> },
      { name: "Debugging", icon: <Wrench className="w-4 h-4" /> },
    ],
  },
  {
    category: "Working Style",
    icon: <Brain className="w-6 h-6" />,
    items: [
      { name: "Curiosity", icon: <Brain className="w-4 h-4" /> },
      { name: "Communication", icon: <MessageSquare className="w-4 h-4" /> },
      { name: "Teamwork", icon: <Users className="w-4 h-4" /> },
      { name: "Iteration", icon: <Wrench className="w-4 h-4" /> },
    ],
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-4 gradient-text">Technical Skills</h2>
      </ScrollAnimation>

      <ScrollAnimation>
        <p className="text-gray-400 mb-12 max-w-2xl">A practical overview of the systems, software, infrastructure, and communication skills I am building through study and projects.</p>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skillGroup) => (
          <ScrollAnimation key={skillGroup.category}>
            <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-white/10 rounded-lg">{skillGroup.icon}</div>
                <h3 className="text-lg font-semibold">{skillGroup.category}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {skillGroup.items.map((skill) => (
                  <div key={skill.name} className="bg-gray-700/50 px-4 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all group">
                    <div className="text-gray-400 group-hover:text-white transition-colors">{skill.icon}</div>
                    <span className="text-gray-400 group-hover:text-white transition-colors text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Skills;
