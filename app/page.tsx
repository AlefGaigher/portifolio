import { WelcomeSection } from "@/components/welcome-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { ExperienceSection } from "@/components/experience-section";



export default function Home() {
  return (
    <section className=" items-center justify-center gap-4 py-8 md:py-10 ">
        <div className="bouncing-balls">
          <div className="ball"></div>
          <div className="ball"></div>
          <div className="ball"></div>
          <div className="ball"></div>
        </div>
        <WelcomeSection />       
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
    </section>
  );
}
