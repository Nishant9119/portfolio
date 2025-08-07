import { Card } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      id: "[1]",
      title: "EduSpectra: An Image Dataset for Understanding Student's Dropout Behaviour",
      authors: "Sharma, Nishant; Pandey, M. K.; Dewan, A.; Sharma, V. (2025).",
      venue: "[ADCIS-2025]"
    },
    {
      id: "[2]",
      title: "Integrative Approaches for Skin Cancer Detection and Classification : A Dual modal Analysis",
      authors: "Sharma, Nishant; Pandey, M. K. (2025).",
      venue: "[AICVMD-2025]"
    },
    {
      id: "[3]",
      title: "Classification and Identification of malware families using Deep Learning Techniques",
      authors: "Sharma, Nishant; Pandey, M. K. (2025).",
      venue: "[Accepted at AACM-2025]"
    },
    {
      id: "[4]",
      title: "Big Data Driven Smart Farming: A Visualization Perspective of Tracking the Agricultural Productivity in Big Data Analytics in Agriculture: Algorithms and Applications",
      authors: "Sharma, Nishant; Pandey, M. K. (2025).",
      venue: "Elsevier Academic Press, ISBN:9780323999328"
    }
  ];

  return (
    <section className="py-12 px-4 bg-section-bg">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold text-foreground">Publications</h2>
        </div>
        
        <Card className="p-6 shadow-lg border-0">
          <div className="space-y-4">
            {publications.map((pub) => (
              <div key={pub.id} className="border-b border-border last:border-b-0 pb-4 last:pb-0">
                <div className="flex gap-4">
                  <span className="text-primary font-semibold text-sm mt-1">{pub.id}</span>
                  <div className="flex-1">
                    <p className="text-foreground font-medium mb-1">{pub.authors}</p>
                    <p className="text-primary font-semibold">{pub.title}</p>
                    <p className="text-text-light text-sm">{pub.venue}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Publications;