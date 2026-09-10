import { SITE_URL } from "@/config/site";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PAGE_META = {
  "/": {
    title: "Shelbys — Systems Engineering Portfolio",
    description:
      "Shelbys — Systems Engineering student at AUK building software, privacy-first tools, and reliable systems from Kuwait.",
  },
  "/about": {
    title: "About — Shelbys | Systems Engineering Student",
    description:
      "Learn about shelbys — a Systems Engineering student exploring software, infrastructure, and practical system design.",
  },
  "/projects": {
    title: "Projects — Shelbys | Systems Engineering Portfolio",
    description:
      "Explore DocuCraft, inventory tools, maps, chess, and other projects built by shelbys.",
  },
  "/skills": {
    title: "Skills — Shelbys | Systems Engineering Skills",
    description:
      "Technical skills of shelbys — systems thinking, software engineering, automation, and infrastructure fundamentals.",
  },
  "/experience": {
    title: "Experience — Shelbys | Systems Engineering",
    description:
      "Learning experience and practical build work from shelbys, a Systems Engineering student.",
  },
  "/education": {
    title: "Education — Shelbys | Systems Engineering",
    description:
      "Educational background of shelbys as a Systems Engineering student at the American University of Kuwait.",
  },
  "/certificates": {
    title: "Certificates — Shelbys | Systems Engineering",
    description:
      "Courses, certificates, and learning milestones from shelbys's Systems Engineering journey.",
  },
  "/contact": {
    title: "Contact — Shelbys | Systems Engineering Student",
    description:
      "Get in touch with shelbys at info@shelbys.dev for project conversations and collaborations.",
  },
};

const FALLBACK_META = {
  title: "Shelbys — Systems Engineering Student",
  description:
    "Portfolio of shelbys — Systems Engineering student exploring software and reliable systems.",
};

export const useSEO = () => {
  const location = useLocation();

  useEffect(() => {
    const meta = PAGE_META[location.pathname] ?? FALLBACK_META;
    const url = `${SITE_URL}${location.pathname === "/" ? "/" : location.pathname}`;

    document.title = meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", meta.description);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", meta.title);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", meta.description);
    document
      .querySelector('meta[property="og:url"]')
      ?.setAttribute("content", url);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", url);
  }, [location.pathname]);
};
