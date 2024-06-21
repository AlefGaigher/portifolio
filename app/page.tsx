import { WelcomeSection } from "@/components/welcome-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { ExperienceSection } from "@/components/experience-section";
import { BallsBg } from "@/components/balls-bg";



export default function Home() {
  return (
    <section className=" items-center justify-center gap-4 ">        
        <WelcomeSection />              
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <BallsBg/>
    </section>
  );
}
