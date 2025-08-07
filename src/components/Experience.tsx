import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Co-Founder & CTO",
      company: "HireBuddy",
      period: "September 2024 - May 2025",
      location: "India",
      description: [
        "Helped 100+ students from Tier 2/3 cities and colleges secure jobs and internships in India and abroad.",
        "Achieved $800 as the highest internship stipend and made the platform revenue-positive with $2300/month recurring income.",
        "Led end-to-end backend development of the HireBuddy platform; designed DB schemas, APIs, and backend-infrastructure.",
        "Built a custom Job Board Aggregator that scrapes job listings from LinkedIn, Glassdoor, and Indeed based on role, location, and experience level; cleans the listings and stores them in the database.",
        "Developed a Resume Builder with real-time editing and preview functionality to generate ATS-friendly resumes.",
        "Designed a Cover Letter Generator using a fine-tuned AI model trained on 800+ cover letters from professionals at Google, Microsoft, etc.",
        "Created an Email Outbound Automation Tool integrated with the Gmail API, enabling users to send automated, personalized emails through the platform.",
        "Managed all cloud infrastructure, backend development, and DevOps tasks, including deployment, storage, and API scalability."
      ],
      website: "hirebuddy.net",
      techStack: "Python, FastAPI, PostgreSQL, LangChain, OpenAI, Docker, Gmail API, AWS (EventBridge Scheduler, Lambda, S3), GCP, GitHub."
    },
    {
      title: "Researcher",
      company: "Norwegian University of Science and Technology",
      period: "January 2025 - Aug 2025",
      location: "Norway",
      description: [
        "Created a novel image-based dataset (EduSpectra) from tabular MOOC clickstream data, enabling application of computer vision techniques to predict student dropout behavior.",
        "Developed a pipeline to convert behavioral features into RGB images using statistical transformations (max-index, average-index, rank-index), resulting in over 200K labeled images.",
        "Conducted a comparative study of deep learning models (CNNs, ResNet, ViTs) using transfer learning to classify dropout vs. non-dropout students under extreme class imbalance.",
        "Contributed to a research paper accepted at ADCIS 2025, in collaboration with Athabasca University and NTNU, focused on education-AI intersection.",
        "Made the EduSpectra dataset publicly available via Figshare, supporting reproducibility and interdisciplinary research in online education analytics."
      ],
      techStack: ""
    },
    {
      title: "Data Scientist Intern",
      company: "Curebay",
      period: "January 2025 - May 2025",
      location: "India",
      description: [
        "Worked on two key projects: (1) Dental Care (2) Smart Vitals",
        "Dental Care: Collected and analyzed tooth and oral images from rural populations across three Indian states. Developed an AI model that generates a comprehensive report on 17 dental and oral diseases (e.g., gingivitis, periodontitis, ulcers) based on uploaded images.",
        "Smart Vitals: Designed a system that provides vital health reports by analyzing a 30-second face video, offering a non-invasive health assessment for patients.",
        "Both the products are now live and can be freely accessed at these links: (1) Oral Care (2) Smart Vitals"
      ],
      techStack: "Python, TensorFlow, PyTorch, FastAPI.",
      links: [
        { text: "Curebay Certificate", url: "https://drive.google.com/file/d/1ULYDSr_HUtb_VJ0yKS1soMQbphzbcuHJ/view?usp=sharing" }
      ]
    },
    {
      title: "Machine Learning Researcher",
      company: "Athabasca University",
      period: "May 2024 - August 2024",
      location: "Edmonton, Canada",
      description: [
        "Title: Early Dropout Prediction in E-Learning Courses.",
        "Developed an early warning system to accurately predict potential dropout students.",
        "Experimented with information gain/entropy-based feature selection methods, Attention mechanism, Vision Transformers, Transformers, knowledge graphs, CNNs, and temporal CNNs to predict students on the verge of dropping out.",
        "Presented findings at TRESL Research Lab's 3rd Annual Symposium."
      ],
      techStack: "Python, TensorFlow, PyTorch, Neo4j, Cypher, Scikit-Learn.",
      links: [
        { text: "ML Researcher Certificate", url: "https://drive.google.com/file/d/1LBQEVoFogy6fCnjQ1NHGm7LbJZYPAHiy/view?usp=sharing" }
      ]
    },
    {
      title: "Deep Learning Researcher",
      company: "Indian Institute of Technology(IIT),Indore",
      period: "December 2023 - March 2024",
      location: "Remote",
      description: [
        "Title: Identification of Malware Families using Deep Learning Methods.",
        "Implemented deep learning techniques, including Convolutional Neural Networks (CNNs), and state-of-the-art pretrained models (e.g., ResNet, Mobile Net, Dense Net, VGG16, VGG19), Data augmentation for the classification of malware families.",
        "Achieved a remarkable accuracy of 99.5% through rigorous hyperparameter tuning and evaluation on various metrics, demonstrating the effectiveness of the model in accurately identifying and classifying malware families."
      ],
      techStack: "Python, TensorFlow, PyTorch, NumPy, Pandas, Matplotlib, Streamlit.",
      links: [
        { text: "DL Researcher Certificate", url: "https://drive.google.com/file/d/1RM-VUZfEPf2hoXzFwDwipUDr8X2egMvS/view?usp=sharing" }
      ]
    },
    {
      title: "Climate Tech Intern",
      company: "Blackrhino",
      period: "May 2024 - August 2024",
      location: "Remote",
      description: [
        "Developed RESTful API for Carbon Emissions Data Exchange: Designed and implemented a CRUD-based API using Fast API, incorporating Alembic for database migrations and integrating CI/CD pipelines for automated deployment.",
        "Engineered a RAG-Based Sustainability Chatbot: Created a chatbot utilizing Retrieval-Augmented Generation (RAG) to accurately answer queries related to various sustainability reports of companies. Enhanced query accuracy by implementing document-level chunking, RAG-fusion query transformation, and logical routing for optimized results.",
        "Built Webhook Verification Service: Implemented a Flask-based application to verify Meta webhook requests, facilitating WhatsApp integration as an interface for the sustainability chatbot."
      ],
      techStack: "Python, Fast API, SQL Alchemy, PostgreSQL, Pydantic, Lang Chain, AWS Lambda, AWS API Gateway, EC2, S3, SAM CLI, Flask.",
      links: [
        { text: "Blackrhino Certificate", url: "https://drive.google.com/file/d/1VKfyFnPl7u3Zav_ppvkMLsgM-zp3gAZA/view?usp=sharing" }
      ]
    },
    {
      title: "Research Assistant",
      company: "Ashoka University",
      period: "September 2024 - October 2024",
      location: "Remote",
      description: [
        "Worked with Dr. Parush Arora to run simulations on MATLAB for the research paper \"Regularized Opinion Pools for Density Forecasts under Bayesian Inspired Framework.\"",
        "Utilized MATLAB to develop simulations and data visualizations, contributing to the analysis and interpretation of research findings.",
        "Apply coding skills in Python and MATLAB to support research on Bayesian-inspired frameworks."
      ],
      techStack: "Python, MATLAB.",
      links: [
        { text: "RA Certificate", url: "https://drive.google.com/file/d/14BmWx2OAT460K69HAa2tAebmaX0uWmuZ/view?usp=sharing" }
      ]
    },
    {
      title: "Data Science Intern",
      company: "Floxus Education",
      period: "May 2023 - August 2023",
      location: "Ranchi",
      description: [
        "Co-created a comprehensive Data Science course encompassing R, Statistics, Python, SQL, and Machine Learning in association with BIT Mesra.",
        "Demonstrated problem-solving skills by contributing to a client project, effectively applying technical proficiency. Resulted in a substantial increase in sales for the client.",
        "Utilized Python, SQL, Power BI and machine learning techniques to extract actionable insights. These insights informed strategic decisions in course design, marketing, and user engagement, leading to improved outcomes and increased sales for the clients."
      ],
      techStack: "Python, SQL, R, Power BI.",
      links: [
        { text: "Floxus Certificate", url: "https://drive.google.com/file/d/1QUUreawJ8SA_44-8JB1boucr3L3ZjbuC/view?usp=sharing" }
      ]
    }
  ];

  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Briefcase className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold text-foreground">Experience</h2>
        </div>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 shadow-lg border-0">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                  {exp.website && (
                    <p className="text-text-light">View website: {exp.website}</p>
                  )}
                </div>
                <div className="text-right text-text-light">
                  <p className="font-medium">{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>
              
              <ul className="space-y-2 mb-4">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-muted-foreground text-sm leading-relaxed">
                    • {item}
                  </li>
                ))}
              </ul>

              {exp.links && (
                <div className="mb-4">
                  {exp.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors mr-4"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">{link.text}</span>
                    </a>
                  ))}
                </div>
              )}
              
              {exp.techStack && (
                <div>
                  <span className="text-sm font-medium text-foreground">Tech Stack: </span>
                  <span className="text-sm text-text-light">{exp.techStack}</span>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;