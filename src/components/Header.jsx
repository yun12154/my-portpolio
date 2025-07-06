export default function Header() {
  return (
    <header className="py-4 px-8 flex justify-between items-center shadow">
      <h1 className="text-2xl font-bold">MyPortfolio</h1>
      <nav>
        <ul className="flex gap-4">
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}