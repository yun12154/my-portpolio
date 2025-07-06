export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold">준석의 포트폴리오</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-blue-600">소개</a></li>
            <li><a href="#projects" className="hover:text-blue-600">프로젝트</a></li>
            <li><a href="#contact" className="hover:text-blue-600">연락하기</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}