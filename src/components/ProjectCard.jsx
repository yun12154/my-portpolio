export default function ProjectCard({ project }) {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition p-4">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4 rounded" />
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        View Project
      </a>
    </div>
  );
}