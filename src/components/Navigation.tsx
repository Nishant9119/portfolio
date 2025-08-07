import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, GraduationCap, Briefcase, BookOpen, Code, Award, Heart, Users } from "lucide-react";

interface NavigationProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation = ({ currentSection, onSectionChange }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: "home", label: "Home", icon: <Home className="w-4 h-4" /> },
    { id: "education", label: "Education", icon: <GraduationCap className="w-4 h-4" /> },
    { id: "experience", label: "Experience", icon: <Briefcase className="w-4 h-4" /> },
    { id: "publications", label: "Publications", icon: <BookOpen className="w-4 h-4" /> },
    { id: "skills", label: "Skills", icon: <Code className="w-4 h-4" /> },
    { id: "awards", label: "Awards", icon: <Award className="w-4 h-4" /> },
    { id: "volunteer", label: "Volunteer", icon: <Heart className="w-4 h-4" /> },
    { id: "references", label: "References", icon: <Users className="w-4 h-4" /> },
  ];

  const handleSectionClick = (sectionId: string) => {
    onSectionChange(sectionId);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => handleSectionClick("home")}
            className="text-xl font-bold text-foreground hover:text-primary transition-colors"
          >
            Nishant Sharma
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant={currentSection === section.id ? "default" : "ghost"}
                size="sm"
                onClick={() => handleSectionClick(section.id)}
                className="flex items-center gap-2"
              >
                {section.icon}
                {section.label}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="grid grid-cols-2 gap-2">
              {sections.map((section) => (
                <Button
                  key={section.id}
                  variant={currentSection === section.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => handleSectionClick(section.id)}
                  className="flex items-center gap-2 justify-start"
                >
                  {section.icon}
                  {section.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;