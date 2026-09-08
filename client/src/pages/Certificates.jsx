import { ScrollAnimation } from "@/components/ScrollAnimation";
import { motion } from "framer-motion";
import { Award, Calendar } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Amazon Web Services (AWS) Certification",
    issuer: "Amazon Web Services",
    date: "In progress",
    description:
      "Preparing for an AWS certification while building practical foundations in cloud services, infrastructure, and reliable system operations.",
    skills: ["AWS", "Cloud Fundamentals", "Infrastructure"],
  },
];

const Certificates = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <motion.div
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Award className="w-8 h-8" />
          <div>
            <p className="sys-label mb-1">SYS / 07</p>
            <h2 className="text-4xl font-bold gradient-text">Certificates</h2>
          </div>
        </motion.div>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-6">
        {certificates.map((cert) => (
          <ScrollAnimation key={cert.id}>
            <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5 h-full flex flex-col">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-xl font-semibold">{cert.title}</h3>
                <span className="shrink-0 text-xs uppercase tracking-wider text-[var(--signal)] bg-[var(--signal)]/10 border border-[var(--signal)]/30 px-2 py-1 rounded-full">
                  In progress
                </span>
              </div>
              <div className="text-gray-400 space-y-2 flex flex-col flex-grow">
                <div className="flex items-center justify-between">
                  <span className="text-lg">{cert.issuer}</span>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                </div>
                <p className="text-gray-300">{cert.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-sm bg-white/10 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
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
