import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";

const VolunteerExperience = () => {
  const experiences = [
    {
      title: "Finance Associate",
      organization: "Entrepreneurship Development Cell, Birla Institute of Technology, Mesra",
      description: [
        "Engaged with EDC BIT Mesra to promote entrepreneurial awareness through seminars and workshops.",
        "Fostered an entrepreneurial culture within the college by organizing events and initiatives."
      ]
    },
    {
      title: "Member",
      organization: "Student Alumni Relationship Cell, Birla Institute of Technology, Mesra",
      description: [
        "Collaborated with SARC BITM to strengthen alumni engagement globally.",
        "Assisted in organizing workshops and lecture series in partnership with BITMAANA.",
        "Coordinated events featuring prominent speakers such as Anjan Lahiri (Ex-CEO, Birlasoft) and Rajesh Sharma (Oscar Awardee)."
      ]
    }
  ];

  return (
    <section className="py-12 px-4 bg-section-bg">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Heart className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold text-foreground">Volunteer Experience</h2>
        </div>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 shadow-lg border-0">
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {exp.title}
              </h3>
              <p className="text-primary font-medium mb-4">{exp.organization}</p>
              
              <ul className="space-y-2">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-muted-foreground leading-relaxed">
                    • {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VolunteerExperience;