import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Github, Mail, Phone, ExternalLink } from "lucide-react";

const Header = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 bg-gradient-to-br from-section-bg to-background shadow-lg border-0">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              NISHANT SHARMA
            </h1>
            
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

            <div className="flex justify-center gap-6">
              <a 
                href="https://www.linkedin.com/in/nishant9119/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://github.com/Nishant9119" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a 
                href="https://orcid.org/0009-0000-5745-2540" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                <span>ORCID</span>
              </a>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Data Scientist & Machine Learning Researcher specializing in AI applications, 
              deep learning, and innovative solutions for real-world problems.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Header;