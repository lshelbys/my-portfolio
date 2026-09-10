import { VercelLogo } from "@/components/TechLogos";
import { CONTACT_INFO } from "@/config/contact";
import { GITHUB_REPOS_URL, PUBLIC_REPO_COUNT } from "@/config/site";
import { isTouchDevice } from "@/utils/helpers";
import { motion } from "framer-motion";
import { Check, Copy, FolderKanban, Github, Mail, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // silent fail
    }
  };

  const handleEmailClick = () => {
    if (isTouchDevice()) {
      window.location.href = `mailto:${CONTACT_INFO.email}`;
    } else {
      copyToClipboard();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 mt-7 sm:mt-0 md:mt-3 lg:mt-5">
      <div className="text-center relative z-10 max-w-4xl mx-auto">
        <motion.p
          className="sys-label mb-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span>SYS / 01</span>
          <span className="text-white/30">·</span>
          <span>Kuwait / UTC+3</span>
          <span className="text-white/30">·</span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--signal)] animate-pulse" />
            Available
          </span>
        </motion.p>

        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          shelbys
        </motion.h1>

        <motion.h2
          className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 relative tracking-tighter text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08 }}
        >
          I design &amp; engineer for systems
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-4 sm:mb-5 max-w-2xl mx-auto px-2 sm:px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Systems Engineering student at AUK. I turn messy requirements into
          software, tools, and prototypes that hold together.
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex justify-center flex-wrap gap-3 sm:gap-4">
            <Link
              to="/projects"
              className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-black rounded-full text-sm sm:text-base font-medium hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              <FolderKanban
                className="w-4 h-4 sm:w-5 sm:h-5"
                aria-hidden="true"
              />
              View Projects
            </Link>
            <Link
              to="/about"
              className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white/10 text-white rounded-full text-sm sm:text-base font-medium hover:bg-white/20 transition-colors flex items-center gap-2"
            >
              <User className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              About Me
            </Link>
          </div>

          <button
            type="button"
            onClick={handleEmailClick}
            className="group relative flex items-center gap-2 py-2 pl-8 pr-4 hover:bg-transparent transition-all cursor-copy sm:cursor-pointer"
            aria-label={
              copied
                ? "Email copied to clipboard"
                : `Copy email ${CONTACT_INFO.email}`
            }
          >
            <div className="absolute left-0 flex items-center">
              <div className="w-3 text-gray-500 group-hover:text-white transition-colors">
                <VercelLogo />
              </div>
              <span className="text-lg font-mono text-gray-400 ml-3 group-hover:text-white transition-colors">
                ~
              </span>
            </div>
            <span className="text-gray-400 group-hover:text-white transition-colors ml-4 sm:text-base">
              {CONTACT_INFO.email}
            </span>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity ml-1 hidden sm:block">
              {copied ? (
                <Check className="w-4 h-4 text-[var(--signal)]" aria-hidden="true" />
              ) : (
                <Copy
                  className="w-4 h-4 text-gray-400 hover:text-white transition-colors"
                  aria-hidden="true"
                />
              )}
            </div>
          </button>
        </motion.div>

        <motion.div
          className="grid grid-cols-3 justify-items-center gap-6 mt-8 sm:mt-12 max-w-xs sm:max-w-none mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href={GITHUB_REPOS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group w-full"
            whileHover={{ y: -2 }}
            aria-label="Visit GitHub repositories"
          >
            <div className="p-3 rounded-xl transition-colors mb-2 w-full max-w-[200px]">
              <Github className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-white transition-colors mx-auto" />
            </div>
            <span className="text-base sm:text-lg font-semibold">
              {PUBLIC_REPO_COUNT}
            </span>
            <span className="text-xs sm:text-sm text-gray-400">
              Public Repos
            </span>
          </motion.a>

          <motion.div whileHover={{ y: -2 }} className="w-full">
            <Link
              to="/projects"
              className="flex flex-col items-center group w-full"
              aria-label="View featured projects"
            >
              <div className="p-3 rounded-xl transition-colors mb-2 w-full max-w-[200px]">
                <FolderKanban className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-white transition-colors mx-auto" />
              </div>
              <span className="text-base sm:text-lg font-semibold">06</span>
              <span className="text-xs sm:text-sm text-gray-400">
                Featured Builds
              </span>
            </Link>
          </motion.div>

          <motion.div whileHover={{ y: -2 }} className="w-full">
            <Link
              to="/contact"
              className="flex flex-col items-center group w-full"
              aria-label="Get in touch"
            >
              <div className="p-3 rounded-xl transition-colors mb-2 w-full max-w-[200px]">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-white transition-colors mx-auto" />
              </div>
              <span className="text-base sm:text-lg font-semibold">UTC+3</span>
              <span className="text-xs sm:text-sm text-gray-400">
                Let&apos;s Talk
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
