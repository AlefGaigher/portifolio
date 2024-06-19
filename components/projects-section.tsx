import { Project } from "@/components/project";
import { projects } from "@/config/projects";

export const ProjectsSection = () => (
    <div className="text-center mt-8">
      <span className="text-3xl">Projetos</span>
      <div className="grid grid-cols-2 gap-10 mt-10">
        {projects.map((project, index) =>(
            <Project 
            key={index}
            banner={project.banner}
            title={project.title}
            description={project.description}
            linkProject={project.linkProject}
            linkRepo={project.linkRepo}            
            />
        ))}
      </div>
    </div>
  );