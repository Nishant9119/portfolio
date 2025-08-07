import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Cpu } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-5 h-5" />,
      title: "Programming Languages",
      skills: ["Python", "R", "SQL"]
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Libraries & Frameworks",
      skills: ["NumPy", "Pandas", "Matplotlib", "TensorFlow", "Keras", "PyTorch", "Scikit-Learn", "LangChain", "SQL Alchemy", "FastAPI", "Pydantic"]
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "Graph Data Science",
      skills: ["Neo4j", "Cypher"]
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Data Visualization Tools",
      skills: ["Power BI", "Amplitude Analytics"]
    },
    {
      icon: <Cloud className="w-5 h-5" />,
      title: "Cloud Technologies",
      skills: ["AWS", "AWS Lambda", "AWS API Gateway", "AWS SAM CLI", "EC2", "S3"]
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Database Technologies",
      skills: ["PostgreSQL", "MySQL"]
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: "Version Control",
      skills: ["Git", "GitHub"]
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: "Other Tools",
      skills: ["LaTeX"]
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "Research Skills",
      skills: ["Critical Thinking", "Problem-Solving", "Academic Writing", "Presentation Skills", "Collaboration", "Time Management", "Organization", "Attention to Detail", "Literature Review", "Continuous Learning"]
    }
  ];

  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Code className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold text-foreground">Skills</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 shadow-lg border-0">
              <div className="flex items-center gap-2 mb-4">
                <div className="text-primary">{category.icon}</div>
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;