import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import LandingSection from "./components/LandingPage";
import ProjectsSection from "./components/ProjectsSection";
import TechnologiesSection from "./components/TechnologiesSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen bg-main-bg">
      <LandingSection />
      <AboutSection />
      <TechnologiesSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}