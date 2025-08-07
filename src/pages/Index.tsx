import { useState } from "react";
import Navigation from "@/components/Navigation";
import HomePage from "@/components/HomePage";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Publications from "@/components/Publications";
import Skills from "@/components/Skills";
import Awards from "@/components/Awards";
import Coursework from "@/components/Coursework";
import VolunteerExperience from "@/components/VolunteerExperience";
import References from "@/components/References";

const Index = () => {
  const [currentSection, setCurrentSection] = useState("home");

  const renderSection = () => {
    switch (currentSection) {
      case "home":
        return <HomePage onSectionChange={setCurrentSection} />;
      case "education":
        return (
          <div className="pt-16">
            <Education />
            <Coursework />
          </div>
        );
      case "experience":
        return (
          <div className="pt-16">
            <Experience />
          </div>
        );
      case "publications":
        return (
          <div className="pt-16">
            <Publications />
          </div>
        );
      case "skills":
        return (
          <div className="pt-16">
            <Skills />
          </div>
        );
      case "awards":
        return (
          <div className="pt-16">
            <Awards />
          </div>
        );
      case "volunteer":
        return (
          <div className="pt-16">
            <VolunteerExperience />
          </div>
        );
      case "references":
        return (
          <div className="pt-16">
            <References />
          </div>
        );
      default:
        return <HomePage onSectionChange={setCurrentSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentSection={currentSection} onSectionChange={setCurrentSection} />
      {renderSection()}
    </div>
  );
};

export default Index;
