import { Project } from "@/components/project";
import { projects } from "@/config/projects";

export const ProjectsSection = () => (
    <div className="text-center mt-8" id="projetos">
      <span className="text-6xl font-bold">Projetos</span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-28">
        {projects.map((project, index) =>(
            <Project 
            key={index}
            banner={project.banner}
            title={project.title}
            description={project.description}
            linkProject={project.linkProject}
            linkRepo={project.linkRepo}  
            tags={project.tags}          
            />
        ))}
      </div>
    </div>
  );