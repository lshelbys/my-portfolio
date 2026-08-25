import {
  Briefcase,
  MapPin,
  Building2,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { motion } from "framer-motion";

const codeAlphaImg = "https://raw.githubusercontent.com/niladri-1/Personal-portfolio/main/client/src/assets/experience/codeAlpha_page.jpg";
const bharatInternImg = "https://raw.githubusercontent.com/niladri-1/Personal-portfolio/main/client/src/assets/experience/bharatIntern_page.jpg";
const codeClauseImg = "https://raw.githubusercontent.com/niladri-1/Personal-portfolio/main/client/src/assets/experience/codeClause_page.jpg";
const oasisInfobyteImg = "https://raw.githubusercontent.com/niladri-1/Personal-portfolio/main/client/src/assets/experience/oasisInfobyte_page.jpg";
const codeAlphaPdf = "#contact";
const bharatInternPdf = "#contact";
const codeClausePdf = "#contact";
const oasisInfobytePdf = "#contact";

const experiences = [
  {
    id: 1,
    title: "Systems Build Practice",
    company: "Independent Study",
    location: "Kuwait",
    period: "Current",
    type: "Student work",
    image: codeAlphaImg,
    certificateUrl: codeAlphaPdf,
    description: [
      "Translated open-ended problem statements into small, testable software components",
      "Practised documenting assumptions, interfaces, and trade-offs before implementation",
    ],
  },
  {
    id: 2,
    title: "Software & Infrastructure Lab",
    company: "Coursework Projects",
    location: "Kuwait",
    period: "Recent study",
    type: "Student work",
    image: bharatInternImg,
    certificateUrl: bharatInternPdf,
    description: [
      "Built small web tools to explore state, data flow, and user-facing interfaces",
      "Compared implementation choices and recorded what made each build easier to understand and maintain",
    ],
  },
  {
    id: 3,
    title: "Systems Analysis Practice",
    company: "Academic Projects",
    location: "Kuwait",
    period: "Ongoing",
    type: "Student work",
    image: codeClauseImg,
    certificateUrl: codeClausePdf,
    description: [
      "Mapped requirements, actors, and interfaces for small system concepts before building prototypes",
      "Used diagrams and short technical notes to communicate system boundaries and failure cases",
    ],
  },
  {
    id: 4,
    title: "Technical Exploration",
    company: "Personal Lab",
    location: "Kuwait",
    period: "Ongoing",
    type: "Student work",
    image: oasisInfobyteImg,
    certificateUrl: oasisInfobytePdf,
    description: [
      "Experimented with automation, networks, and local development environments to understand how systems behave",
      "Focused on repeatable setup, readable code, and small feedback loops while learning",
    ],
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen pt-16 sm:pt-20 px-4 max-w-5xl mx-auto pb-16 sm:pb-20">
      <ScrollAnimation>
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 gradient-text flex items-center gap-3">
          <Briefcase className="w-7 h-7 sm:w-8 sm:h-8" />
          Practical Experience
        </h2>
      </ScrollAnimation>

      <div className="space-y-8 sm:space-y-12">
        {experiences.map((exp) => (
          <ScrollAnimation key={exp.id}>
            <div className="group relative bg-gray-800/50 rounded-xl sm:rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5">
              <div className="grid grid-cols-1 md:grid-cols-[1fr,300px]">
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div className="p-2 sm:p-3 bg-white/10 rounded-lg sm:rounded-xl group-hover:bg-white/20 transition-colors">
                      <Building2 className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-1">{exp.title}</h3>
                      <p className="text-gray-400 text-base sm:text-lg">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                    <span>•</span>
                    <span>{exp.period}</span>
                  </div>

                  <ul className="space-y-3 sm:space-y-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300 text-sm sm:text-base">
                        <ArrowRight className="w-5 h-5 mt-0.5 text-gray-400 flex-shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.a
                    href={exp.certificateUrl}
                    className="md:hidden mt-6 inline-flex items-center gap-2 px-6 py-2.5 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg transition-all duration-300 text-sm font-medium"
                    whileHover={{ scale: 1.02 }}
                  >
                    View Build Notes
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>

                <div className="relative hidden md:block">
                  <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-500">
                    <img src={exp.image} alt={exp.company} loading="lazy" width={300} height={400} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-800/80 to-transparent" />
                  </div>
                  <div className="relative h-full flex items-center justify-center">
                    <motion.a
                      href={exp.certificateUrl}
                      className="px-8 py-3 text-white font-bold bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl flex items-center gap-2 transition-all duration-300 hover:scale-105 border border-white/10 hover:border-white/20"
                      whileHover={{ y: -5 }}
                    >
                      View Build Notes
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Experience;
