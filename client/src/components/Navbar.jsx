import { ChevronDown, Code2, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchDialog from "./SearchDialog";

const primaryLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

const moreLinks = [
  { path: "/education", label: "Education" },
  { path: "/experience", label: "Experience" },
  { path: "/skills", label: "Skills" },
  { path: "/certificates", label: "Certificates" },
];

const allLinks = [...primaryLinks, ...moreLinks];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);
  const moreActive = moreLinks.some((link) => link.path === location.pathname);

  useEffect(() => {
    if (!isMenuOpen && !isMoreOpen) return;
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
        setIsMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen, isMoreOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsMoreOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isMenuOpen]);

  return (
    <motion.nav
      ref={menuRef}
      className="fixed top-0 w-full z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      aria-label="Primary"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-3">
                <Code2 className="w-8 h-8 text-white" aria-hidden="true" />
                <span className="text-xl font-bold text-white">shelbys</span>
              </Link>
            </div>

            <div className="hidden md:flex flex-1 justify-center">
              <SearchDialog />
            </div>

            <div className="hidden md:flex flex-shrink-0 items-center space-x-1 ml-auto">
              {primaryLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link flex items-center gap-1.5 ${
                    location.pathname === link.path
                      ? "bg-white/15 backdrop-blur-sm text-white"
                      : ""
                  }`}
                  aria-current={
                    location.pathname === link.path ? "page" : undefined
                  }
                >
                  {link.label}
                </Link>
              ))}
              <div className="relative">
                <button
                  type="button"
                  className={`nav-link flex items-center gap-1 ${
                    moreActive || isMoreOpen
                      ? "bg-white/15 backdrop-blur-sm text-white"
                      : ""
                  }`}
                  aria-expanded={isMoreOpen}
                  aria-haspopup="true"
                  onClick={() => setIsMoreOpen((prev) => !prev)}
                >
                  More
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${isMoreOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                {isMoreOpen && (
                  <div className="absolute right-0 mt-2 w-44 rounded-xl border border-white/10 bg-black/90 backdrop-blur-xl p-1 shadow-2xl">
                    {moreLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                          location.pathname === link.path
                            ? "bg-white/10 text-white"
                            : "text-gray-400 hover:text-white hover:bg-white/5"
                        }`}
                        aria-current={
                          location.pathname === link.path ? "page" : undefined
                        }
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex md:hidden items-center ml-auto">
              <SearchDialog iconOnly />
              <button
                type="button"
                className="p-2 text-gray-400 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-black/80 backdrop-blur-xl border-b border-white/10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-4 pt-2 pb-3 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
              {allLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-2 px-3 py-2 text-gray-400 hover:text-white transition-colors rounded-lg ${
                    location.pathname === link.path
                      ? "bg-white/10 backdrop-blur-sm text-white"
                      : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={
                    location.pathname === link.path ? "page" : undefined
                  }
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
