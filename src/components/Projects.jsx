import ProjectCard from "./ProjectCard";
import img1 from "../assets/project1.jpg";
import img2 from "../assets/project2.jpg";
import img3 from "../assets/project3.jpg";

export default function Projects() {
  const projects = [
    {
      title: "Mountain Lake",
      description: "자연 풍경 테마",
      imgUrl: img1,
    },
    {
      title: "City Building",
      description: "도시 야경 테마",
      imgUrl: img2,
    },
    {
      title: "Tech Blue",
      description: "테크 블루톤 테마",
      imgUrl: img3,
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-black text-white">
      <h2 className="text-4xl font-bold mb-8 text-center text-cyan-400">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}