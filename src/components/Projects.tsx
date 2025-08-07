import { Card } from "@/components/ui/card";
import {  Briefcase, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AgriViz Dashboard",
      description:
        "An interactive Power BI dashboard providing visual insights on agricultural data trends and performance.",
      link: "https://app.powerbi.com/view?r=eyJrIjoiNTA0MGZkYTQtODQ5Yi00ZTE2LWEwNTktOWMzNzJhNTQ4YjhkIiwidCI6IjU3NWVhYzQ3LWRhYWEtNDVhZi1iZTBjLTZiNjZkYTRlYTQ1MyJ9"
    },
    {
      title: "School Students Dropout Prediction",
      description:
        "A Power BI dashboard visualizing dropout risk predictions based on student engagement, attendance, and performance data.",
      link: "https://app.powerbi.com/view?r=eyJrIjoiMzE1ODhkOWEtZjdhOC00YmUyLWIwZmEtM2M3NWFmMmU1NzNkIiwidCI6IjU3NWVhYzQ3LWRhYWEtNDVhZi1iZTBjLTZiNjZkYTRlYTQ1MyJ9"
    },
    {
      title: "CRCS Dashboard",
      description:
        "An analytics dashboard created in Power BI for CRCS data tracking key metrics and insights.",
      link: "https://app.powerbi.com/view?r=eyJrIjoiMjk5YTVlOWYtYmJlZS00NTI5LThiZmEtMjdhNGFiMjk1ZTI2IiwidCI6IjU3NWVhYzQ3LWRhYWEtNDVhZi1iZTBjLTZiNjZkYTRlYTQ1MyJ9"
    }
  ];

  return (
    <div className="my-10">
      <h2 className="text-2xl font-semibold mb-4">Data Visualization Projects</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((project, idx) => (
          <Card key={idx} className="p-4 space-y-2">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-medium">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                <ExternalLink size={18} />
              </a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
