import { Card } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const Coursework = () => {
  const courses = [
    "Real Analysis",
    "Statistical Methods I & II",
    "Programming Language & Data Base Management System",
    "Linear Algebra and Vectors and Matrices",
    "Statistical Models and Regression Analysis",
    "Optimization Techniques",
    "Multivariate Data Analysis",
    "Basic Econometrics",
    "Environmental Economics-I",
    "Statistical Machine Learning I & II",
    "Time Series Econometrics",
    "Regression Techniques"
  ];

  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold text-foreground">Coursework</h2>
        </div>
        
        <Card className="p-6 shadow-lg border-0">
          <div className="grid md:grid-cols-2 gap-4">
            {courses.map((course, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground">{course}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Coursework;