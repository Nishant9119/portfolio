import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section className="py-12 px-4 bg-section-bg">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <GraduationCap className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold text-foreground">Education</h2>
        </div>
        
        <Card className="p-6 shadow-lg border-0">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Birla Institute of Technology Mesra
              </h3>
              <p className="text-primary font-medium">
                Integrated MS in Quantitative Economics and Data Science
              </p>
              <p className="text-muted-foreground">GPA: 8.39/10</p>
            </div>
            <div className="text-right text-text-light">
              <p className="font-medium">2021 - 2026</p>
              <p>Ranchi, India</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Education;