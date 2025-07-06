export default function ProjectCard({ project }) {
  return (
    <div className="relative border border-cyan-400 rounded-lg overflow-hidden shadow-lg transition transform hover:-translate-y-1 hover:scale-105 hover:invert hover:brightness-150">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-4 bg-black text-white">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-cyan-400 to-purple-600 text-black px-4 py-2 rounded font-bold"
        >
          사이트 보기
        </a>
      </div>
    </div>
  );
}