import ProjectCard from "./ProjectCard";
import projects from "../data/projects.json";

export default function Projects() {
  return (
    <section id="projects" className="container mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-8">프로젝트</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}