import { ScrollAnimation } from "@/components/ScrollAnimation";
import { ArrowRight, Briefcase, MapPin } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Independent product work",
    company: "Personal lab",
    location: "Kuwait",
    period: "Current",
    type: "Self-directed",
    description: [
      "Shipped DocuCraft, a privacy-first PDF and image toolkit used in the browser with no account and no server upload.",
      "Built smaller public tools — maps, chess, and dashboards — to practise interfaces, state, and honest constraints.",
    ],
  },
  {
    id: 2,
    title: "Inventory systems practice",
    company: "Almail Group Inventory",
    location: "Kuwait",
    period: "Recent",
    type: "Applied build",
    description: [
      "Designed a centralized inventory portal for construction projects, products, and teams.",
      "Focused on a clear login flow, readable records, and a UI that a small operations team can actually use.",
    ],
  },
  {
    id: 3,
    title: "Systems coursework",
    company: "American University of Kuwait",
    location: "Kuwait",
    period: "Ongoing",
    type: "Academic",
    description: [
      "Mapped requirements, actors, and interfaces before jumping into prototypes.",
      "Used diagrams and short technical notes to communicate system boundaries and failure cases.",
    ],
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen pt-16 sm:pt-20 px-4 max-w-5xl mx-auto pb-16 sm:pb-20">
      <ScrollAnimation>
        <p className="sys-label mb-3">SYS / 04</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 gradient-text flex items-center gap-3">
          <Briefcase className="w-7 h-7 sm:w-8 sm:h-8" />
          Practical Experience
        </h2>
      </ScrollAnimation>

      <div className="relative ml-2 sm:ml-4 border-l border-white/10 space-y-8 sm:space-y-10">
        {experiences.map((exp) => (
          <ScrollAnimation key={exp.id}>
            <div className="relative pl-8 sm:pl-10">
              <span className="absolute -left-[7px] top-6 w-3.5 h-3.5 rounded-full bg-[var(--signal)] shadow-[0_0_12px_rgba(143,243,228,0.55)]" />
              <article className="bg-gray-800/50 rounded-xl sm:rounded-2xl backdrop-blur-sm border border-white/5 hover:border-white/15 transition-colors p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <p className="sys-label mb-2">{exp.type}</p>
                    <h3 className="text-xl sm:text-2xl font-bold mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-gray-400 text-base sm:text-lg">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    {exp.period}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                  <span>{exp.location}</span>
                </div>

                <ul className="space-y-3 sm:space-y-4">
                  {exp.description.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-gray-300 text-sm sm:text-base"
                    >
                      <ArrowRight className="w-5 h-5 mt-0.5 text-[var(--signal)] flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Experience;
