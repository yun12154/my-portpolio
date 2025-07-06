export default function ProjectCard({ project }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-4 bg-white">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded hover:opacity-90 transition"
        >
          사이트 보기
        </a>
      </div>
    </div>
  );
}