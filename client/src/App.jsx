import {
  Background3D,
  ErrorBoundary,
  Footer,
  Loading,
  Navbar,
} from "@/components/index";
import { useSEO } from "@/hooks/useSEO";
import { Suspense, lazy } from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Education = lazy(() => import("./pages/Education"));
const Experience = lazy(() => import("./pages/Experience"));
const Skills = lazy(() => import("./pages/Skills"));
const Projects = lazy(() => import("./pages/Projects"));
const Certificates = lazy(() => import("./pages/Certificates"));
const Contact = lazy(() => import("./pages/Contact"));
const Analytics = lazy(() => import("./pages/Analytics"));
const NotFound = lazy(() => import("./pages/NotFound"));

function AppLayout() {
  useSEO();

  return (
    <div className="min-h-screen flex flex-col">
      <ErrorBoundary fallback={null}>
        <Background3D />
      </ErrorBoundary>
      <Navbar />
      <main className="flex-grow">
        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/education" element={<Education />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
}

const Router = import.meta.env.BASE_URL === "./" ? HashRouter : BrowserRouter;

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL === "./" ? undefined : import.meta.env.BASE_URL}>
      <AppLayout />
    </Router>
  );
}

export default App;
