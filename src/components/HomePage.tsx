import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Github, Mail, Phone, ExternalLink, GraduationCap, Briefcase, BookOpen, Code, Award, Heart, Users } from "lucide-react";

interface HomePageProps {
  onSectionChange: (section: string) => void;
}

const HomePage = ({ onSectionChange }: HomePageProps) => {
  const quickLinks = [
    { id: "education", label: "Education", icon: <GraduationCap className="w-5 h-5" />, description: "Academic Background" },
    { id: "experience", label: "Experience", icon: <Briefcase className="w-5 h-5" />, description: "Professional Journey" },
    { id: "publications", label: "Publications", icon: <BookOpen className="w-5 h-5" />, description: "Research Papers" },
    { id: "skills", label: "Skills", icon: <Code className="w-5 h-5" />, description: "Technical Expertise" },
    { id: "awards", label: "Awards", icon: <Award className="w-5 h-5" />, description: "Achievements" },
    { id: "volunteer", label: "Volunteer", icon: <Heart className="w-5 h-5" />, description: "Community Work" },
  ];

  const highlights = [
    "Co-Founder & CTO at HireBuddy",
    "MITACS Global Fellowship Recipient",
    "Published Researcher (ADCIS 2025)",
    "Government of India Award Winner",
    "Machine Learning & AI Specialist"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-section-bg to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            NISHANT SHARMA
          </h1>
          <h2 className="text-2xl md:text-3xl text-primary mb-8">
            Data Scientist & Machine Learning Researcher
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Specializing in AI applications, deep learning, and innovative solutions for real-world problems. 
            Co-founder of HireBuddy with 100+ successful placements, published researcher, and MITACS fellowship recipient.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a 
              href="https://www.linkedin.com/in/nishant9119/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Button>
            </a>
            <a 
              href="https://github.com/Nishant9119" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                GitHub
              </Button>
            </a>
            <a 
              href="https://orcid.org/0009-0000-5745-2540" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                ORCID
              </Button>
            </a>
            <a 
              href="https://drive.google.com/file/d/1hES_B_XBY3YVztHCXp3oy4SgibYw4Xhs/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Resume
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-text-light">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91-7814695677</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:sharmanishant9119@gmail.com" className="hover:text-primary transition-colors">
                sharmanishant9119@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Quick Navigation */}
      <section className="py-16 px-4 bg-section-bg">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Explore My Portfolio</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link) => (
              <Card key={link.id} className="p-6 shadow-lg border-0 hover:shadow-xl transition-shadow cursor-pointer">
                <button
                  onClick={() => onSectionChange(link.id)}
                  className="w-full text-left"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-primary">{link.icon}</div>
                    <h4 className="text-lg font-semibold text-foreground">{link.label}</h4>
                  </div>
                  <p className="text-muted-foreground">{link.description}</p>
                </button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-foreground mb-8">Current Focus</h3>
          <Card className="p-8 shadow-lg border-0">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm">Currently Available</Badge>
              <p className="text-lg text-muted-foreground">
                Pursuing Integrated MS in Quantitative Economics and Data Science at BIT Mesra (2021-2026)
              </p>
              <p className="text-muted-foreground mb-4">
                Currently working at Institute of Cancer Research London as researcher, exploring Cancer genomics and bioinformatics, interested in AI in healthcare and how we can utilize AI/ML/Data Science to solve the most pressing healthcare problems.
              </p>
              <p className="text-muted-foreground">
                Actively working on machine learning research, startup development, and seeking opportunities 
                in data science and AI research roles.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default HomePage;