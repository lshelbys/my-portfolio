import { ScrollAnimation } from "@/components/ScrollAnimation";
import { AVATAR_URL } from "@/config/site";
import { motion } from "framer-motion";
import { Code2, FolderKanban, Globe, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const focusAreas = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Shipped tools",
    description:
      "Browser-first products like DocuCraft, plus inventory, maps, and game prototypes that people can actually use.",
  },
  {
    icon: <FolderKanban className="w-6 h-6" />,
    title: "Build mindset",
    description:
      "Curious, methodical, and comfortable learning by making — from requirements to a working interface.",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Systems Engineering",
    description:
      "Academic focus on reliable systems, interfaces, trade-offs, and structured problem solving at AUK.",
  },
];

const interests = [
  "Systems Design",
  "Software Engineering",
  "Infrastructure",
  "Automation",
  "Data & Networks",
  "Technical Communication",
];

const quickFacts = [
  "Based in Kuwait",
  "Systems Engineering student at AUK",
  "Building privacy-aware tools and practical prototypes",
];

const About = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-4xl mx-auto pb-20">
      <ScrollAnimation>
        <p className="sys-label mb-3">SYS / 02</p>
        <motion.h2 className="text-4xl font-bold mb-8 gradient-text">
          About Me
        </motion.h2>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-8">
        <ScrollAnimation>
          <div className="aspect-square overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
            <img
              src={AVATAR_URL}
              alt="Portrait of shelbys"
              width={600}
              height={600}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </ScrollAnimation>

        <ScrollAnimation className="space-y-6">
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Hi — I&apos;m shelbys, a Systems Engineering student at the
              American University of Kuwait. I like understanding how parts fit
              together, then turning that into software people can actually use.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Recent work includes DocuCraft, a privacy-first PDF toolkit that
              runs entirely in the browser, plus inventory, mapping, and
              chess prototypes. I care about clear interfaces, honest
              constraints, and builds that stay understandable.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I&apos;m currently deepening software engineering, automation,
              infrastructure fundamentals, and technical communication — always
              with an eye toward reliability.
            </p>
          </div>

          <div className="pt-4">
            <h3 className="text-2xl font-semibold mb-4 gradient-text">
              Quick Facts
            </h3>
            <ul className="list-none space-y-3">
              {quickFacts.map((fact) => (
                <motion.li
                  key={fact}
                  className="flex items-center space-x-2 text-gray-300"
                >
                  <span className="w-2 h-2 bg-[var(--signal)] rounded-full" />
                  <span>{fact}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="flex justify-start flex-wrap gap-3">
            <Link
              to="/projects"
              className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </ScrollAnimation>
      </div>

      <ScrollAnimation>
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 gradient-text">
            How I work
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/5 hover:border-white/15 transition-colors"
              >
                <div className="text-white mb-4">{area.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{area.title}</h4>
                <p className="text-gray-400">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 gradient-text">
            Areas of Interest
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {interests.map((interest) => (
              <div
                key={interest}
                className="bg-white/5 p-4 rounded-xl backdrop-blur-sm flex items-center gap-3 border border-white/5"
              >
                <Globe className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">{interest}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default About;
