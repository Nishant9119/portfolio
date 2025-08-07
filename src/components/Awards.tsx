import { Card } from "@/components/ui/card";
import { Award, ExternalLink } from "lucide-react";
import awardImage from "/lovable-uploads/b708c6e1-35d4-4c12-8282-2e1bf43fd122.png";

const Awards = () => {
  const awards = [
    {
      title: "MITACS GLOBALINK FELLOWSHIP",
      organization: "Mitacs",
      date: "August 2024",
      description: "Selected for a twelve week fully funded MITACS GLOBALINK FELLOWSHIP to do research on Machine Learning at Athabasca University, Edmonton(Canada) amongst candidates from 12 countries across the world.",
      amount: "Fellowship Amount: CAD 9000",
      link: "https://drive.google.com/file/d/1LBQEVoFogy6fCnjQ1NHGm7LbJZYPAHiy/view?usp=sharing"
    },
    {
      title: "First Prize-Ministry of Cooperation Hackathon",
      organization: "Ministry of Cooperation, Government of India",
      date: "August 2023",
      description: "Secured First Rank in India in a Hackathon to design and develop a Dashboard for the CRCS Portal of Ministry of Cooperation, Government of India. Received Cash Prize of INR 1 Lakh from Hon. Home Minister Mr. Amit Shah.",
      link: "https://drive.google.com/file/d/1ZjkOExVNI6xjPUTcdBs71XBAjOXMr9sv/view?usp=drive_link"
    },
    {
      title: "Runner Up – Kartavya Case Study competition",
      organization: "Department of Management, Birla Institute of Technology",
      date: "October 2023",
      description: "Secured second position in a national level Sustainability case study competition organized by Department of Management, BIT Mesra.",
      link: "https://drive.google.com/file/d/18JI4m2ST8A579RpGxcuuG870MTMHmfeX/view?usp=drive_link"
    }
  ];

  const certifications = [
    {
      title: "Advanced SQL Certification",
      date: "July 2023",
      link: "https://www.hackerrank.com/certificates/bf0279c1447e"
    }
  ];

  return (
    <section className="py-12 px-4 bg-section-bg">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Award className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold text-foreground">Honors, Awards & Certifications</h2>
        </div>
        
        {/* Award Ceremony Image */}
        <Card className="p-6 shadow-lg border-0 mb-8">
          <div className="text-center">
            <img 
              src={awardImage} 
              alt="Award ceremony where Nishant received recognition from Government of India" 
              className="w-full max-w-2xl mx-auto rounded-lg shadow-md mb-4"
            />
            <p className="text-sm text-text-light">
              Award ceremony - First Prize winner at Ministry of Cooperation Hackathon, Government of India
            </p>
          </div>
        </Card>

        <div className="space-y-6">
          {awards.map((award, index) => (
            <Card key={index} className="p-6 shadow-lg border-0">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {award.title}
                  </h3>
                  <p className="text-primary font-medium">{award.organization}</p>
                </div>
                <p className="text-text-light font-medium">{award.date}</p>
              </div>
              
              <p className="text-muted-foreground mb-2">{award.description}</p>
              
              {award.amount && (
                <p className="text-sm font-medium text-foreground mb-2">{award.amount}</p>
              )}

              {award.link && (
                <a
                  href={award.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm">View Certificate</span>
                </a>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-foreground mb-4">Certifications</h3>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-4 shadow-lg border-0">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-foreground">{cert.title}</h4>
                    <p className="text-text-light text-sm">{cert.date}</p>
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">View Certificate</span>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;