import projects from "@/data/content/projects";
import type { Project } from "@/types";
import ProjectCard from "@/components/projects/ProjectCard";

type ProjectsProps = {
  overwriteProjects?: Project[];
};

function Projects({ overwriteProjects }: ProjectsProps) {
  const projectsList = overwriteProjects ?? projects;

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-start">
      {projectsList.map((item) => {
        return <ProjectCard key={item.id} project={item} />;
      })}
    </div>
  );
}

export default Projects;
