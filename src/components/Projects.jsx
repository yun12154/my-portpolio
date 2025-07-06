import ProjectCard from "./ProjectCard";
import projects from "../data/projects.json";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-b from-white to-blue-50"
    >
      <h2 className="text-4xl font-bold text-center mb-8 text-blue-700" data-aos="fade-up">
        프로젝트
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={project.id} data-aos="fade-up" data-aos-delay={index * 100}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}