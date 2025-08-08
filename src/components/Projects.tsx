import { Card } from "@/components/ui/card";
import {  Briefcase, ExternalLink, Folder, FolderOpen } from "lucide-react";

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
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <FolderOpen className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold text-foreground">Projects</h2>
        </div>
        <p className="text-lg text-muted-foreground mb-8 font-semibold">Data Visualization Projects</p>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((projects, index) => (
            <Card key={index} className="p-6 shadow-lg border-0">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="font-semibold text-foreground">{projects.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{projects.description}</p>
              <div className="flex justify-end">
                <a
                  href={projects.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors">
                  <ExternalLink size={18} />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
