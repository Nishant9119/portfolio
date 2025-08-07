import { Card } from "@/components/ui/card";
import { Users, Mail } from "lucide-react";

const References = () => {
  const references = [
    {
      name: "Dr. Ali Dewan",
      title: "Associate Professor, Faculty of Science and Technology",
      organization: "Athabasca University, Edmonton, Canada",
      email: "adewan@athabascau.ca",
      relationship: "[Project Supervisor]"
    },
    {
      name: "Dr. Vijeta Sharma",
      title: "Scientist, NTNU, Norway",
      organization: "Norwegian University of Science and Technology, Norway",
      email: "vijeta.sharma@ntnu.no",
      relationship: "[Research Guide, Project Supervisor]"
    },
    {
      name: "Dr. Manish Kumar Pandey",
      title: "Assistant Professor, CQEDS",
      organization: "Birla Institute of Technology Mesra, Jharkhand, India",
      email: "manishkpandey@bitmesra.ac.in",
      relationship: "[Research Guide, University Professor]"
    }
  ];

  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Users className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold text-foreground">References</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {references.map((ref, index) => (
            <Card key={index} className="p-6 shadow-lg border-0">
              <h3 className="font-semibold text-foreground mb-1">{ref.name}</h3>
              <p className="text-primary text-sm font-medium mb-1">{ref.title}</p>
              <p className="text-text-light text-sm mb-3">{ref.organization}</p>
              
              <div className="flex items-center gap-2 mb-2">
                <Mail className="w-4 h-4 text-primary" />
                <a 
                  href={`mailto:${ref.email}`}
                  className="text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  {ref.email}
                </a>
              </div>
              
              <p className="text-xs text-muted-foreground italic">
                Relationship: {ref.relationship}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;