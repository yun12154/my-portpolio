export default function ProjectCard({ title, description, imgUrl }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300">
      <img src={imgUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 bg-gray-900 text-white">
        <h3 className="text-xl font-bold mb-2 text-cyan-400">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}