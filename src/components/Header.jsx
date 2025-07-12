import { useState, useEffect } from "react";

export default function Header() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "contact"];
      const scrollY = window.pageYOffset;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollY + 80) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-sm shadow z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-cyan-400">준석의 포트폴리오</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#hero"
                className={`transition ${
                  activeSection === "hero" ? "text-cyan-400" : "text-gray-300"
                }`}
              >
                홈
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`transition ${
                  activeSection === "about" ? "text-cyan-400" : "text-gray-300"
                }`}
              >
                소개
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`transition ${
                  activeSection === "projects" ? "text-cyan-400" : "text-gray-300"
                }`}
              >
                프로젝트
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`transition ${
                  activeSection === "contact" ? "text-cyan-400" : "text-gray-300"
                }`}
              >
                연락하기
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}