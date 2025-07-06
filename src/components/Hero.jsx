export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center h-[60vh] bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h2 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm JUNSEOK</h2>
      <p className="text-lg md:text-2xl mb-6">Frontend Developer & Problem Solver</p>
      <a href="#projects" className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition">
        See My Work
      </a>
    </section>
  );
}