import Header from "@/components/Header";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Publications from "@/components/Publications";
import Skills from "@/components/Skills";
import Awards from "@/components/Awards";
import Coursework from "@/components/Coursework";
import VolunteerExperience from "@/components/VolunteerExperience";
import References from "@/components/References";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Education />
      <Experience />
      <Publications />
      <Skills />
      <Awards />
      <Coursework />
      <VolunteerExperience />
      <References />
    </div>
  );
};

export default Index;
