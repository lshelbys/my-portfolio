import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://systems-engineering-portfolio.manus.space";

const PAGE_META = {
  "/": {
    title: "Shelbys — Systems Engineering Portfolio",
    description:
      "Shelbys — Systems Engineering student building thoughtful software and reliable systems from Kuwait.",
  },
  "/about": {
    title: "About - Shel­bys | Systems Engineering Student",
    description:
      "Learn about shelbys — a Systems Engineering student exploring software, infrastructure, and practical system design.",
  },
  "/projects": {
    title: "Projects - Shel­bys | Systems Engineering Portfolio",
    description:
      "Explore systems projects and prototypes built by shelbys across software, automation, and connected systems.",
  },
  "/skills": {
    title: "Skills - Shel­bys | Systems Engineering Skills",
    description:
      "Technical skills of shelbys — systems thinking, requirements mapping, software engineering, automation, and infrastructure fundamentals.",
  },
  "/experience": {
    title: "Experience - Shel­bys | Systems Engineering",
    description:
      "Learning experience and practical build work from shelbys, a Systems Engineering student.",
  },
  "/education": {
    title: "Education - Shel­bys | Systems Engineering",
    description:
      "Educational background of shelbys as a Systems Engineering student.",
  },
  "/certificates": {
    title: "Certificates - Shel­bys | Systems Engineering",
    description:
      "Courses, certificates, and learning milestones from shelbys's Systems Engineering journey.",
  },
  "/contact": {
    title: "Contact - Shel­bys | Systems Engineering Student",
    description:
      "Get in touch with shelbys for project conversations, collaborations, or systems-focused build work.",
  },
};

const FALLBACK_META = {
  title: "Shelbys - Systems Engineering Student",
  description:
    "Portfolio of shelbys — Systems Engineering student exploring software and reliable systems.",
};

export const useSEO = () => {
  const location = useLocation();

  useEffect(() => {
    const meta = PAGE_META[location.pathname] ?? FALLBACK_META;
    const url = `${BASE_URL}${location.pathname}`;

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
